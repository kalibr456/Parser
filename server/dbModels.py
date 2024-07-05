from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from database import Base

class Vacancy(Base):
    __tablename__ = 'vacancies'
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    area_name = Column(String, nullable=True)
    salary = Column(String, nullable=True)
    currency = Column(String, nullable=True)
    employer_name = Column(String, nullable=True)
    requirement = Column(String, nullable=True)
    responsibility = Column(String, nullable=True)
    alternate_url = Column(String, nullable=True)
