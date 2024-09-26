import { config } from 'dotenv';
config();

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const ENDPOINT = 'formation-center';

// Récupérer toutes les formations
export async function getAllFormations() {
  try {
    const response = await fetch(`${API_BASE_URL}/${ENDPOINT}/`);
    console.error("response", response);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched formations:", data);
    return data;
  } catch (error) {
    console.error("Error fetching formations:", error);
    throw error;
  }
}

// Créer une nouvelle formation
export async function createFormation(newFormationData: any) {
  try {
    const response = await fetch(`${API_BASE_URL}/${ENDPOINT}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFormationData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Created formation:", data);
    return data;
  } catch (error) {
    console.error("Error creating formation:", error);
    throw error;
  }
}

// Supprimer une formation
export async function deleteFormation(formationId: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/${ENDPOINT}/${formationId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    console.log("Deleted formation with ID:", formationId);
    return true;
  } catch (error) {
    console.error("Error deleting formation:", error);
    throw error;
  }
}

// Mettre à jour une formation 
export async function editFormation(formationId: string, updatedData: any) {
  try {
    const response = await fetch(`${API_BASE_URL}/${ENDPOINT}/${formationId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Updated formation:", data);
    return data;
  } catch (error) {
    console.error("Error updating formation:", error);
    throw error;
  }
}