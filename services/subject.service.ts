import { config } from 'dotenv';
config();

const API_BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/subject`;

// Récupérer tous les sujets
export async function getAllSubjects() {
  try {
    const response = await fetch(`${API_BASE_URL}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching subjects:', error);
    throw error;
  }
}

// Créer un sujet
export async function createSubject(newSubjectData: any) {
  try {
    const response = await fetch(`${API_BASE_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newSubjectData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error creating subject:', error);
    throw error;
  }
}

// Récupérer un sujet par ID
export async function getSubjectById(subjectId: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/${subjectId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching subject by ID:', error);
    throw error;
  }
}

// Modifier un sujet
export async function updateSubject(subjectId: string, updatedData: any) {
  try {
    const response = await fetch(`${API_BASE_URL}/${subjectId}`, {
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
    console.error('Error updating subject:', error);
    throw error;
  }
}