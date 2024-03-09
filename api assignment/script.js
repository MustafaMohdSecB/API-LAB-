// Define API endpoint
const apiUrl = 'https://api.adviceslip.com/advice';

// Function to fetch data from the Advice Slip JSON API
async function fetchAdvice() {
    try {
        // Fetch advice data from the API
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch advice data');
        }

        // Extract JSON data
        const data = await response.json();

        // Display advice on the webpage
        const adviceElement = document.getElementById('advice');
        adviceElement.textContent = data.slip.advice;
    } catch (error) {
        console.error('Error fetching advice data:', error);
    }
}

// Event listener for the "Get New Advice" button
document.getElementById('newAdviceBtn').addEventListener('click', fetchAdvice);

// Fetch advice when the page loads
fetchAdvice();
