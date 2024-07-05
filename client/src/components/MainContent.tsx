import { useState } from "react";
import { Vacancy } from "../api/generated";
import VacancyForm from "./VacancyForm";
import VacancyList from "./VacancyList";

const MainContent = () => {
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  return (
    <div className="max-w-[900px] mx-auto bg-white p-5 rounded-sm">
      <VacancyForm setVacancies={setVacancies} />
      <VacancyList list={vacancies} />
    </div>
  );
};

export default MainContent;
