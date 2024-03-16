export async function getCountries() {
    try {
        const resp = await fetch("https://ih-countries-api.herokuapp.com/countries");
        if (!resp.ok) {
            throw new Error("Failed to fetch the information");
        }
        const countriesData = await resp.json();
        return countriesData;
    } catch (error) {
        console.error("Error fetching countries: ", error);
        return null;
    }
}
