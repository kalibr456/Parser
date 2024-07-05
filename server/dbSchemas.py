from pydantic import BaseModel, Field
from typing import Optional

class VacancyBase(BaseModel):
    name: str = Field(..., example="Software Engineer")
    area_name: Optional[str] = Field(None, example="San Francisco")
    salary: Optional[str] = Field(None, example="100000")
    currency: Optional[str] = Field(None, example="USD")
    employer_name: Optional[str] = Field(None, example="Tech Corp")
    requirement: Optional[str] = Field(None, example="Python, Django")
    responsibility: Optional[str] = Field(None, example="Develop web applications")
    alternate_url: Optional[str] = Field(None, example="https://company.com/job/123")

class VacancyCreate(VacancyBase):
    pass

class Vacancy(VacancyBase):
    id: int

    class Config:
        orm_mode = True

class VacancyQuery(BaseModel):
    text: str
    area: int = 1
    salary: int
    per_page: int = 20
    experience: str
