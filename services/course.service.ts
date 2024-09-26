const API_BASE_URL = 'http://localhost:3000/course';

// Récupérer tous les cours
export async function getAllCourses() {
  try {
    const response = await fetch(`${API_BASE_URL}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
}

// Créer un cours
export async function createCourse(newCourseData: any) {
  try {
    const response = await fetch(`${API_BASE_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCourseData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error creating course:', error);
    throw error;
  }
}

// Récupérer un cours par ID
export async function getCourseById(courseId: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/${courseId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching course by ID:', error);
    throw error;
  }
}

// Modifier un cours
export async function updateCourse(courseId: string, updatedData: any) {
  try {
    const response = await fetch(`${API_BASE_URL}/${courseId}`, {
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
    console.error('Error updating course:', error);
    throw error;
  }
}

// Supprimer un cours
export async function deleteCourse(courseId: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/${courseId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return true;
  } catch (error) {
    console.error('Error deleting course:', error);
    throw error;
  }
}
