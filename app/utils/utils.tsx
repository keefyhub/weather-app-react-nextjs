export const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

export const getTemp = (temp: number) => {
    return Math.round((temp - 273.15) * 100 / 100);
}

export const getFormattedTemp = (temp: number) => {
    return (
        <>
            {getTemp(temp)}<span className="absolute">&deg;</span>
        </>
    );
}

export const getDay = (dateString: string) => {
    return days[new Date(dateString.substring(0, 10)).getDay()];
}