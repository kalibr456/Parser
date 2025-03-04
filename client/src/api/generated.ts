/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * FastAPI
 * Example app
 * OpenAPI spec version: 0.1.0
 */
import { createInstance } from "./api-instance";
import type { BodyType } from "./api-instance";
export type ValidationErrorLocItem = string | number;

export interface ValidationError {
  loc: ValidationErrorLocItem[];
  msg: string;
  type: string;
}

export interface VacancyQuery {
  area?: number;
  experience: string;
  per_page?: number;
  salary: number;
  text: string;
}

export type VacancyCreateSalary = string | null;

export type VacancyCreateResponsibility = string | null;

export type VacancyCreateRequirement = string | null;

export type VacancyCreateEmployerName = string | null;

export type VacancyCreateCurrency = string | null;

export type VacancyCreateAreaName = string | null;

export type VacancyCreateAlternateUrl = string | null;

export interface VacancyCreate {
  alternate_url?: VacancyCreateAlternateUrl;
  area_name?: VacancyCreateAreaName;
  currency?: VacancyCreateCurrency;
  employer_name?: VacancyCreateEmployerName;
  name: string;
  requirement?: VacancyCreateRequirement;
  responsibility?: VacancyCreateResponsibility;
  salary?: VacancyCreateSalary;
}

export type VacancySalary = string | null;

export type VacancyResponsibility = string | null;

export type VacancyRequirement = string | null;

export type VacancyEmployerName = string | null;

export type VacancyCurrency = string | null;

export type VacancyAreaName = string | null;

export type VacancyAlternateUrl = string | null;

export interface Vacancy {
  alternate_url?: VacancyAlternateUrl;
  area_name?: VacancyAreaName;
  currency?: VacancyCurrency;
  employer_name?: VacancyEmployerName;
  id: number;
  name: string;
  requirement?: VacancyRequirement;
  responsibility?: VacancyResponsibility;
  salary?: VacancySalary;
}

export interface HTTPValidationError {
  detail?: ValidationError[];
}

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

/**
 * @summary Fetchvacancies
 */
export const fetchVacanciesFetchVacanciesPost = (
  vacancyQuery: BodyType<VacancyQuery>,
  options?: SecondParameter<typeof createInstance>
) => {
  return createInstance<Vacancy[]>(
    {
      url: `/fetch-vacancies/`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: vacancyQuery,
    },
    options
  );
};

/**
 * @summary Createvacancydb
 */
export const createVacancyDBVacanciesPost = (
  vacancyCreate: BodyType<VacancyCreate>,
  options?: SecondParameter<typeof createInstance>
) => {
  return createInstance<Vacancy>(
    {
      url: `/vacancies/`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: vacancyCreate,
    },
    options
  );
};

/**
 * @summary Getanalytics
 */
export const getAnalyticsAnalyticsGet = (
  options?: SecondParameter<typeof createInstance>
) => {
  return createInstance<unknown>(
    { url: `/analytics/`, method: "GET" },
    options
  );
};

export type FetchVacanciesFetchVacanciesPostResult = NonNullable<
  Awaited<ReturnType<typeof fetchVacanciesFetchVacanciesPost>>
>;
export type CreateVacancyDBVacanciesPostResult = NonNullable<
  Awaited<ReturnType<typeof createVacancyDBVacanciesPost>>
>;
export type GetAnalyticsAnalyticsGetResult = NonNullable<
  Awaited<ReturnType<typeof getAnalyticsAnalyticsGet>>
>;
