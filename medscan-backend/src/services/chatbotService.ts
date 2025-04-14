import axios from 'axios';

const baseUrl = 'https://api.healthcare.gov';

async function fetchHealthcareData(endpoint: string) {
  try {
    const response = await axios.get(${baseUrl}/${endpoint});
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
