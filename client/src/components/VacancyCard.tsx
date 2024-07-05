import { Vacancy } from "../api/generated";

const VacancyCard = ({ vacancy }: { vacancy: Vacancy }) => {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg p-6 bg-white">
      <div className="mb-4">
        <h2 className="text-xl font-bold">{vacancy.name}</h2>
        <p className="text-gray-700">Компания: {vacancy.employer_name}</p>
        <p className="text-gray-700">Город: {vacancy.area_name}</p>
        <p className="text-gray-700">Зарплата: {vacancy.salary}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Обязанности:</h3>
        <p className="text-gray-700">{vacancy.responsibility}</p>
      </div>
      {vacancy.requirement && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Требования:</h3>
          <p className="text-gray-700">{vacancy.requirement}</p>
        </div>
      )}
      <div>
        <a
          href={vacancy.alternate_url ?? ""}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Открыть вакансию
        </a>
      </div>
    </div>
  );
};

export default VacancyCard;
