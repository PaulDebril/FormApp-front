import { config } from 'dotenv';
config();

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const ENDPOINT = 'mission';

// Récupérer toutes les missions
export async function getAllMissions() {
  try {
    const response = await fetch(`${API_BASE_URL}/${ENDPOINT}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching missions:', error);
    throw error;
  }
}

// Créer une mission
export async function createMission(newMissionData: any) {
  try {
    const response = await fetch(`${API_BASE_URL}/${ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMissionData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error creating mission:', error);
    throw error;
  }
}

// Récupérer une mission par ID
export async function getMissionById(missionId: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/${ENDPOINT}/${missionId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching mission by ID:', error);
    throw error;
  }
}

// Modifier une mission
export async function updateMission(missionId: string, updatedData: any) {
  try {
    const response = await fetch(`${API_BASE_URL}/${ENDPOINT}/${missionId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error updating mission:', error);
    throw error;
  }
}