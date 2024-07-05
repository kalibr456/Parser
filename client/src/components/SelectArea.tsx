import { FormControl } from "./ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const SelectArea = ({
  onChange,
  defaultValue,
}: {
  onChange: (value: string) => void;
  defaultValue: string;
}) => {
  return (
    <Select onValueChange={onChange} defaultValue={defaultValue}>
      <FormControl>
        <SelectTrigger>
          <SelectValue placeholder="Выберите регион" />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        <SelectItem value="113">Россия</SelectItem>
        <SelectItem value="1">Москва</SelectItem>
        <SelectItem value="2">Санкт-Петербург</SelectItem>
        <SelectItem value="130">Севастополь</SelectItem>
        <SelectItem value="1217">Алтайский край</SelectItem>
        <SelectItem value="1932">Амурская область</SelectItem>
        <SelectItem value="1008">Архангельская область</SelectItem>
        <SelectItem value="1505">Астраханская область</SelectItem>
        <SelectItem value="1817">Белгородская область</SelectItem>
        <SelectItem value="1828">Брянская область</SelectItem>
        <SelectItem value="1716">Владимирская область</SelectItem>
        <SelectItem value="1511">Волгоградская область</SelectItem>
        <SelectItem value="1739">Вологодская область</SelectItem>
        <SelectItem value="1844">Воронежская область</SelectItem>
        <SelectItem value="2134">Донецкая Народная Республика</SelectItem>
        <SelectItem value="1941">Еврейская АО</SelectItem>
        <SelectItem value="1192">Забайкальский край</SelectItem>
        <SelectItem value="2155">Запорожская область</SelectItem>
        <SelectItem value="1754">Ивановская область</SelectItem>
        <SelectItem value="1124">Иркутская область</SelectItem>
        <SelectItem value="1463">Кабардино-Балкарская республика</SelectItem>
        <SelectItem value="1020">Калининградская область</SelectItem>
        <SelectItem value="1859">Калужская область</SelectItem>
        <SelectItem value="1943">Камчатский край</SelectItem>
        <SelectItem value="1471">Карачаево-Черкесская Республика</SelectItem>
        <SelectItem value="1229">Кемеровская область</SelectItem>
        <SelectItem value="1661">Кировская область</SelectItem>
        <SelectItem value="1771">Костромская область</SelectItem>
        <SelectItem value="1438">Краснодарский край</SelectItem>
        <SelectItem value="1146">Красноярский край</SelectItem>
        <SelectItem value="1308">Курганская область</SelectItem>
        <SelectItem value="1880">Курская область</SelectItem>
        <SelectItem value="145">Ленинградская область</SelectItem>
        <SelectItem value="1890">Липецкая область</SelectItem>
        <SelectItem value="2173">Луганская Народная Республика</SelectItem>
        <SelectItem value="1946">Магаданская область</SelectItem>
        <SelectItem value="2019">Московская область</SelectItem>
        <SelectItem value="1061">Мурманская область</SelectItem>
        <SelectItem value="1985">Ненецкий АО</SelectItem>
        <SelectItem value="1679">Нижегородская область</SelectItem>
        <SelectItem value="1051">Новгородская область</SelectItem>
        <SelectItem value="1202">Новосибирская область</SelectItem>
        <SelectItem value="1249">Омская область</SelectItem>
        <SelectItem value="1563">Оренбургская область</SelectItem>
        <SelectItem value="1898">Орловская область</SelectItem>
        <SelectItem value="1575">Пензенская область</SelectItem>
        <SelectItem value="1317">Пермский край</SelectItem>
        <SelectItem value="1948">Приморский край</SelectItem>
        <SelectItem value="1090">Псковская область</SelectItem>
        <SelectItem value="1422">Республика Адыгея</SelectItem>
        <SelectItem value="1216">Республика Алтай</SelectItem>
        <SelectItem value="1347">Республика Башкортостан</SelectItem>
        <SelectItem value="1118">Республика Бурятия</SelectItem>
        <SelectItem value="1424">Республика Дагестан</SelectItem>
        <SelectItem value="1434">Республика Ингушетия</SelectItem>
        <SelectItem value="1553">Республика Калмыкия</SelectItem>
        <SelectItem value="1077">Республика Карелия</SelectItem>
        <SelectItem value="1041">Республика Коми</SelectItem>
        <SelectItem value="2114">Республика Крым</SelectItem>
        <SelectItem value="1620">Республика Марий Эл</SelectItem>
        <SelectItem value="1556">Республика Мордовия</SelectItem>
        <SelectItem value="1174">Республика Саха (Якутия)</SelectItem>
        <SelectItem value="1475">Республика Северная Осетия-Алания</SelectItem>
        <SelectItem value="1624">Республика Татарстан</SelectItem>
        <SelectItem value="1169">Республика Тыва</SelectItem>
        <SelectItem value="1187">Республика Хакасия</SelectItem>
        <SelectItem value="1530">Ростовская область</SelectItem>
        <SelectItem value="1704">Рязанская область</SelectItem>
        <SelectItem value="1586">Самарская область</SelectItem>
        <SelectItem value="1596">Саратовская область</SelectItem>
        <SelectItem value="1960">Сахалинская область</SelectItem>
        <SelectItem value="1261">Свердловская область</SelectItem>
        <SelectItem value="1103">Смоленская область</SelectItem>
        <SelectItem value="1481">Ставропольский край</SelectItem>
        <SelectItem value="1905">Тамбовская область</SelectItem>
        <SelectItem value="1783">Тверская область</SelectItem>
        <SelectItem value="1255">Томская область</SelectItem>
        <SelectItem value="1913">Тульская область</SelectItem>
        <SelectItem value="1342">Тюменская область</SelectItem>
        <SelectItem value="1646">Удмуртская Республика</SelectItem>
        <SelectItem value="1614">Ульяновская область</SelectItem>
        <SelectItem value="1975">Хабаровский край</SelectItem>
        <SelectItem value="1368">Ханты-Мансийский АО - Югра</SelectItem>
        <SelectItem value="2209">Херсонская область</SelectItem>
        <SelectItem value="1384">Челябинская область</SelectItem>
        <SelectItem value="1500">Чеченская республика</SelectItem>
        <SelectItem value="1652">Чувашская Республика</SelectItem>
        <SelectItem value="1982">Чукотский АО</SelectItem>
        <SelectItem value="1414">Ямало-Ненецкий АО</SelectItem>
        <SelectItem value="1806">Ярославская область</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectArea;
