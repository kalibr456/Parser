import { Vacancy } from "../api/generated";
import VacancyCard from "./VacancyCard";

const VacancyList = ({ list }: { list: Vacancy[] }) => {
  return (
    <div className="flex flex-col gap-2">
      {list.length ? (
        <>
          {list.map((item) => (
            <VacancyCard vacancy={item} />
          ))}
        </>
      ) : (
        <h2 className="text-3xl text-center mt-5">Ничего не найдено</h2>
      )}
    </div>
  );
};

export default VacancyList;
