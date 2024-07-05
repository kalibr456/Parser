import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import SelectArea from "./SelectArea";
import { Vacancy, fetchVacanciesFetchVacanciesPost } from "../api/generated";
import { Dispatch, SetStateAction } from "react";

const formSchema = z.object({
  text: z.string().min(1, {
    message: "Обязательное поле.",
  }),
  experience: z.string().min(1, {
    message: "Обязательное поле.",
  }),
  salary: z.string().min(1, {
    message: "Обязательное поле.",
  }),
  area: z.string().min(1, {
    message: "Обязательное поле.",
  }),
  perPage: z.string().min(1, {
    message: "Обязательное поле.",
  }),
});

const VacancyForm = ({
  setVacancies,
}: {
  setVacancies: Dispatch<SetStateAction<Vacancy[]>>;
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: "",
      experience: "",
      salary: "",
      area: "",
      perPage: "",
    },
  });

  async function onSubmit({
    text,
    area,
    salary,
    experience,
    perPage,
  }: z.infer<typeof formSchema>) {
    const vacancies = await fetchVacanciesFetchVacanciesPost({
      text,
      salary: Number(salary),
      area: Number(area),
      experience,
      per_page: Number(perPage),
    });

    setVacancies(vacancies);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex gap-3">
          <FormField
            control={form.control}
            name="text"
            render={({ field }) => (
              <FormItem className="w-[50%]">
                <FormLabel className="text-xl mb-2">
                  Введите название профессии
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="perPage"
            render={({ field }) => (
              <FormItem className="w-[50%]">
                <FormLabel className="text-xl mb-2">
                  Введите число для вывода
                </FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-3">
          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem className="w-[280px]">
                <FormLabel>Стаж</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите стаж работы" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="noExperience">Нет опыта</SelectItem>
                    <SelectItem value="between1And3">
                      От 1 года до 3 лет
                    </SelectItem>
                    <SelectItem value="between3And6">От 3 до 6 лет</SelectItem>
                    <SelectItem value="moreThan6">Более 6 лет</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="salary"
            render={({ field }) => (
              <FormItem className="w-[280px]">
                <FormLabel>Введите зарплату</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="area"
            render={({ field }) => (
              <FormItem className="w-[280px]">
                <FormLabel>Регион</FormLabel>
                <SelectArea
                  onChange={field.onChange}
                  defaultValue={field.value}
                />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Найти</Button>
      </form>
    </Form>
  );
};

export default VacancyForm;
