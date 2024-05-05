export async function fetchCountryData() {
    try {
      const response = await fetch('https://ih-countries-api.herokuapp.com/countries');
      return await response.json();
    } catch (error) {
      console.error('Error fetching countries:', error);
      return [];
    }
  }