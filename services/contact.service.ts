const API_BASE_URL = 'http://localhost:3000/contact';

// Récupérer tous les contacts
export async function getAllContacts() {
  try {
    const response = await fetch(`${API_BASE_URL}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  }
}

// Créer un contact
export async function createContact(newContactData: any) {
  try {
    const response = await fetch(`${API_BASE_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newContactData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error creating contact:', error);
    throw error;
  }
}

// Récupérer un contact par ID
export async function getContactById(contactId: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/${contactId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching contact by ID:', error);
    throw error;
  }
}

// Modifier un contact
export async function updateContact(contactId: string, updatedData: any) {
  try {
    const response = await fetch(`${API_BASE_URL}/${contactId}`, {
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
    console.error('Error updating contact:', error);
    throw error;
  }
}

// Supprimer un contact
export async function deleteContact(contactId: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/${contactId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return true;
  } catch (error) {
    console.error('Error deleting contact:', error);
    throw error;
  }
}
