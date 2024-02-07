export async function getData() {
    const apiKey = "b949a98c4939fc9af1f13538f5467c2a";
    const city = "littlehampton, uk";
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    const res = await fetch(url, {
        cache: 'no-cache'
    });

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return res.json();
}
