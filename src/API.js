const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const contactApi = async (registrationData) => {
    const apiUrl = `${BACKEND_URL}/newRegistration`;
  
    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(registrationData),
        });
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching API:", error);
    }
  };