const API_BASE_URL = 'http://localhost:3000/mission';

// Récupérer toutes les missions
export async function getAllMissions() {
  try {
    const response = await fetch(`${API_BASE_URL}`);
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
    const response = await fetch(`${API_BASE_URL}`, {
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
    const response = await fetch(`${API_BASE_URL}/${missionId}`);
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
    const response = await fetch(`${API_BASE_URL}/${missionId}`, {
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

// Supprimer une mission
export async function deleteMission(missionId: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/${missionId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return true;
  } catch (error) {
    console.error('Error deleting mission:', error);
    throw error;
  }
}
