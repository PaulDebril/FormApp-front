import { config } from 'dotenv';
config();

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const ENDPOINT = 'contract';

// Récupérer tous les contrats
export async function getAllContracts() {
  try {
    const response = await fetch(`${API_BASE_URL}/${ENDPOINT}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching contracts:', error);
    throw error;
  }
}

// Créer un contrat
export async function createContract(newContractData: any) {
  try {
    const response = await fetch(`${API_BASE_URL}/${ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newContractData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error creating contract:', error);
    throw error;
  }
}

// Récupérer un contrat par ID
export async function getContractById(contractId: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/${ENDPOINT}/${contractId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching contract by ID:', error);
    throw error;
  }
}

// Modifier un contrat
export async function updateContract(contractId: string, updatedData: any) {
  try {
    const response = await fetch(`${API_BASE_URL}/${ENDPOINT}/${contractId}`, {
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
    console.error('Error updating contract:', error);
    throw error;
  }
}

// Supprimer un contrat
export async function deleteContract(contractId: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/${ENDPOINT}/${contractId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return true;
  } catch (error) {
    console.error('Error deleting contract:', error);
    throw error;
  }
}