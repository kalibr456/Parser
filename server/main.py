from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
import dbModels, dbSchemas, services
from database import SessionLocal, engine

dbModels.Base.metadata.create_all(bind=engine)

app = FastAPI(description="Example app", version="0.1.0")

origins = [
    "http://localhost:4000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/fetch-vacancies/")
def fetch_vacancies():
    return {"vacancies": "data"}

def getDB():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/fetch-vacancies/")
def fetchVacancies(query: dbSchemas.VacancyQuery, db: Session = Depends(getDB)):
    return services.createVacancy(db, query)

@app.post("/vacancies/", response_model=dbSchemas.Vacancy)
def createVacancyDB(vacancy: dbSchemas.VacancyCreate, db: Session = Depends(getDB)):
    return services.createVacancyDB(db=db, vacancy=vacancy)
