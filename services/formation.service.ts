// services/apiService.ts

const API_BASE_URL = 'http://localhost:3000/formation-center';

export async function getAllFormations() {
  try {
    const response = await fetch(`${API_BASE_URL}/`);

    // Vérification si la requête a réussi
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data from API:", error);
    throw error;
  }
}
