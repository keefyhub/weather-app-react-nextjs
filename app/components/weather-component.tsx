"use client";

import { useRef, useState } from "react";
import { getTemp, getFormattedTemp, getDay } from "../utils/utils";
import { setTimeout } from "timers";

const colorVariants = {
    'bg-ebony': 'before:bg-ebony',
    'bg-manhattan': 'before:bg-manhattan',
    'bg-shadow-green': 'before:bg-shadow-green',
} as any;

export const WeatherComponent = ({ props }: { props: any }) => {
    const currentWeatherElement = useRef(null);
    const [weatherData, setWeatherData] = useState(props);
    const [backgroundColor, setBackgroundColor] = useState({
        'bgColor': weatherData.currentDay.main.bgColor,
    });

    function handleOnClick(index: number, e: MouseEvent) {
        e.preventDefault();

        if (currentWeatherElement.current) {
            const mainElement = currentWeatherElement.current as HTMLElement;
            mainElement.classList.add("opacity-0", "translate-y-4");
        }

        // Add delay for animation
        setTimeout(() => {
            setWeatherData({
                ...weatherData,
                currentDay: weatherData.items[index]
            });

            setBackgroundColor({
                'bgColor': weatherData.items[index].main.bgColor,
            });

            if (currentWeatherElement.current) {
                const mainElement = currentWeatherElement.current as HTMLElement;
                mainElement.classList.remove("opacity-0", "translate-y-4");
            }
        }, 300);
    }

    const formattedTemp = getFormattedTemp(weatherData.currentDay.main.temp);
    const day = getDay(weatherData.currentDay.dt_txt);

    return (
        <div className="max-w-96 w-full">
            <header className={`text-white px-4 py-24 min-h-60 text-center transition ${backgroundColor.bgColor}`}>
                <div className="flex flex-col gap-2 transition" ref={currentWeatherElement}>
                    <h1>{weatherData.city}</h1>
                    <h4 className="">{day}</h4>
                    <h4 className="font-bold">{weatherData.currentDay.weather[0].main}</h4>
                    <div className="font-bold text-6xl">{formattedTemp}</div>
                </div>
            </header>
            <div className="bg-white flex flex-wrap">
                {weatherData.items.map((item: any, index: number) => {
                    const day = getDay(item.dt_txt);
                    const temp = getTemp(item.main.temp);
                    const formattedTemp = getFormattedTemp(item.main.temp);

                    // console.log(item);

                    return (
                        <button
                            key={index}
                            className={`w-full text-start flex justify-between items-center p-2 active-underline group ${colorVariants[item.main.bgColor]} ${(weatherData.currentDay.dt === item.dt ? 'is-active' : '')}`}
                            onClick={(e: any) => { handleOnClick(index, e) }}
                        >
                            <div className="group-[.is-active]:pl-2 transition-all delay-300">{day}</div>
                            <div className="w-1/5 flex flex-col">
                                <div>{formattedTemp}</div>
                                <p className="text-sm">{item.weather[0].main}</p>
                                {/* <img width="32px" src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} /> */}
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
