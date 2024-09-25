// services/formation.service.ts

const API_BASE_URL = 'http://localhost:3000/formation-center';

// Récupérer toutes les formations
export async function getAllFormations() {
  try {
    const response = await fetch(`${API_BASE_URL}/`);
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
    const response = await fetch(`${API_BASE_URL}/`, {
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
    const response = await fetch(`${API_BASE_URL}/${formationId}`, {
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
    const response = await fetch(`${API_BASE_URL}/${formationId}`, {
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
    return data;
  } catch (error) {
    console.error("Error updating formation:", error);
    throw error;
  }
}

// Récupérer une formation par ID
export async function getFormationById(formationId: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/${formationId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched formation by ID:", data);
    return data;
  } catch (error) {
    console.error("Error fetching formation by ID:", error);
    throw error;
  }
}
