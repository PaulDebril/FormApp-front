// services/apiService.ts

const API_BASE_URL = 'http://localhost:3000/api/Intervention/'; // L'URL de base de l'API

export async function getBPFData(endpoint: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/`);

    // Vérification si la requête a réussi
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // const data = await response.json();
    const data = [
      {
        session: "Session 1",
        date: new Date(),
        heures: 10,
        nbEtudiant: 5,
        nbEtudiantXHeures: 50,
        totalBrut: 1000,
        totalNet: 800,
      },
      {
        session: "Session 99",
        date: new Date("2023-12-31"),
        heures: 10,
        nbEtudiant: 5,
        nbEtudiantXHeures: 50,
        totalBrut: 1000,
        totalNet: 800,
      },
      {
        session: "Session 8",
        date: new Date("2022-02-11"),
        heures: 10,
        nbEtudiant: 5,
        nbEtudiantXHeures: 50,
        totalBrut: 1000,
        totalNet: 800,
      },
    ];
    return data;
  } catch (error) {
    console.error("Error fetching data from API:", error);
    throw error;
  }
}
