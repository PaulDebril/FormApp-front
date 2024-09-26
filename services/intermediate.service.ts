import { config } from 'dotenv';
config();

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const ENDPOINT = 'intermediaire';

// Récupérer tous les intermédiaires
export async function getAllIntermediaires() {
  try {
    const response = await fetch(`${API_BASE_URL}/${ENDPOINT}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching intermediaires:", error);
    throw error;
  }
}

// Récupérer un intermédiaire par ID
export async function getIntermediaireById(intermediaireId: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/${ENDPOINT}/${intermediaireId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching intermediaire by ID:", error);
    throw error;
  }
}

// Créer un nouvel intermédiaire
export async function createIntermediaire(newIntermediaireData: any) {
  try {
    const response = await fetch(`${API_BASE_URL}/${ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newIntermediaireData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating intermediaire:", error);
    throw error;
  }
}

// Mettre à jour un intermédiaire
export async function editIntermediaire(intermediaireId: string, updatedIntermediaireData: any) {
  try {
    const response = await fetch(`${API_BASE_URL}/${ENDPOINT}/${intermediaireId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedIntermediaireData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating intermediaire:", error);
    throw error;
  }
}

// Supprimer un intermédiaire
export async function deleteIntermediaire(intermediaireId: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/${ENDPOINT}/${intermediaireId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return true;
  } catch (error) {
    console.error("Error deleting intermediaire:", error);
    throw error;
  }
}