const API_BASE_URL = 'http://localhost:3000/pricing';

// Récupérer toutes les informations de prix
export async function getAllPricing() {
  try {
    const response = await fetch(`${API_BASE_URL}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching pricing:", error);
    throw error;
  }
}

// Récupérer un prix par ID
export async function getPricingById(pricingId: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/${pricingId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching pricing by ID:", error);
    throw error;
  }
}

// Créer un nouveau prix
export async function createPricing(newPricingData: any) {
  try {
    const response = await fetch(`${API_BASE_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPricingData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating pricing:", error);
    throw error;
  }
}

// Mettre à jour un prix
export async function editPricing(pricingId: string, updatedPricingData: any) {
  try {
    const response = await fetch(`${API_BASE_URL}/${pricingId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPricingData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating pricing:", error);
    throw error;
  }
}

// Supprimer un prix
export async function deletePricing(pricingId: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/${pricingId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return true;
  } catch (error) {
    console.error("Error deleting pricing:", error);
    throw error;
  }
}
