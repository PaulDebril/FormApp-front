// services/apiService.ts

const API_BASE_URL = 'http://localhost:3000/intervention';

export async function getAllIntervention() {
  try {
    const response = await fetch(`${API_BASE_URL}/`);

    // Vérification si la requête a réussi
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // const data = await response.json();
    const data = [{
      session: "Session 23",
      date : new Date(), 
      sallecours: "Salle 1",
      referent: "Référent 1",
      cours: "Cours 1",
    }];

    return data;
  } catch (error) {
    console.error("Error fetching data from API:", error);
    throw error;
  }
}
