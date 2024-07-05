import requests
from sqlalchemy import asc
from sqlalchemy.orm import Session
import dbModels, dbSchemas
from dbModels import Vacancy
import logging

def fetchVacansies(query: dbSchemas.VacancyQuery):
    logging.info(f"Fetching vacancies with params: {query.text, query.area}")
    url = "https://api.hh.ru/vacancies"
    params = {
        "text": query.text,
        "area": query.area,
        "salary": query.salary,
        "per_page": query.per_page,
        "experience": query.experience
    }
    response = requests.get(url, params=params)
    return response.json()

def clear_table(db: Session):
    db.query(Vacancy).delete()
    db.commit()

def createVacancyDB(db: Session, vacancy: dbSchemas.VacancyCreate):
    db_vacancy = dbModels.Vacancy(
        name=vacancy.name,
        area_name=vacancy.area_name,
        requirement=vacancy.requirement,
        responsibility=vacancy.responsibility,
        salary=vacancy.salary,
        currency=vacancy.currency,
        employer_name=vacancy.employer_name,
        alternate_url=vacancy.alternate_url
        
    )
    db.add(db_vacancy)
    db.commit()
    db.refresh(db_vacancy)
    return db_vacancy

def createVacancy(db: Session, query: dbSchemas.VacancyQuery):
    clear_table(db)
    data = fetchVacansies(query)
    
    if data is None or "items" not in data:
        raise ValueError("Invalid data fetched from fetchVacansies")
    
    for item in data.get("items", []):
        if item is None:
            print("Warning: item is None")
            continue
        
        salary_info = item.get("salary")
        if salary_info is not None:
            if salary_info.get("from") and salary_info.get("to"):
                salary = f"{salary_info['from']} - {salary_info['to']} {salary_info['currency']}"
            elif salary_info.get("from"):
                salary = f"от {salary_info['from']} {salary_info['currency']}"
            elif salary_info.get("to"):
                salary = f"до {salary_info['to']} {salary_info['currency']}"
            else:
                salary = "Отсутствует"
        else:
            salary = "Отсутствует"
        
        vacancy = dbSchemas.VacancyCreate(
            name=item.get("name", "Не указано"),
            area_name=item.get("area", {}).get("name", "Не указано"),
            requirements=item.get("snippet", {}).get("requirement", "Не указано"),
            responsibility=item.get("snippet", {}).get("responsibility", "Не указано"),
            salary=salary,
            currency=salary_info.get("currency") if salary_info else "Не указано",
            employer_name=item.get("employer", {}).get("name", "Не указано"),
            alternate_url=item.get("alternate_url", "Не указано")
        )
        createVacancyDB(db, vacancy)
    return getVacancies(db, query.per_page)

def getAnalytics(db: Session):
    vacancy_count = db.query(dbModels.Vacancy).count()
    return {"vacancies": vacancy_count}

def getVacancies(db: Session, limit: int):
    return db.query(dbModels.Vacancy).order_by(asc(dbModels.Vacancy.id)).limit(limit).all()