import { config } from 'dotenv';
config();

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const ENDPOINT = 'intervention';

// Récupérer toutes les interventions
export async function getAllInterventions() {
  try {
    const response = await fetch(`${API_BASE_URL}/${ENDPOINT}`);
    console.error(response);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching interventions:", error);
    throw error;
  }
}

// Récupérer une intervention par ID
export async function getInterventionById(interventionId: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/${ENDPOINT}/${interventionId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching intervention by ID:", error);
    throw error;
  }
}

// Créer une nouvelle intervention
export async function createIntervention(newInterventionData: any) {
  try {
    const response = await fetch(`${API_BASE_URL}/${ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newInterventionData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating intervention:", error);
    throw error;
  }
}

// Mettre à jour une intervention
export async function editIntervention(interventionId: string, updatedInterventionData: any) {
  try {
    const response = await fetch(`${API_BASE_URL}/${ENDPOINT}/${interventionId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedInterventionData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating intervention:", error);
    throw error;
  }
}

// Supprimer une intervention
export async function deleteIntervention(interventionId: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/${ENDPOINT}/${interventionId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return true;
  } catch (error) {
    console.error("Error deleting intervention:", error);
    throw error;
  }
}