import { useEffect } from "react";
import { getData } from "./utils/api";
import { getTemp } from "./utils/utils";
import { WeatherComponent } from "./components/weather-component";

export default async function Home() {
  const res = await getData();

  // Filter results as there are 4 hourly items returned, maybe look at another API/endpoint
  const filteredList = res.list.map((item: any, index: number) => {
    if (
      index === 0 ||
      index === 8 ||
      index === 16 ||
      index === 24 ||
      index === 32
    ) {
      const temp = getTemp(item.main.temp);
      item.main.bgColor = 'bg-ebony';

      if (temp >= 8 && temp <= 9) {
        item.main.bgColor = 'bg-shadow-green';
      }
      else if (temp >= 10) {
        item.main.bgColor = 'bg-manhattan';
      }

      return item;
    }
  });

  const weatherData = {
    city: `${res.city.name}, ${res.city.country}`,
    currentDay: filteredList[0],
    items: filteredList
  }

  return (
    <main className="font-poppins flex min-h-screen flex-col items-center text-river-bed">
      <WeatherComponent props={weatherData} />
    </main>
  );
}
