const API_URL = import.meta.env.VITE_URL_API;

export const GETFunction = async (endpoint: string) => {
    try {
        console.log(API_URL)
        const response = await fetch(`${API_URL}${endpoint}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const finalResponse = response.json()

        console.log(endpoint)
        console.log(finalResponse)
        console.log('-_-_-_-_-_-_-_-_-_-_-_-_')

        return finalResponse;
    } catch (error) {
        console.error("Error:", error);
        return error;
    }
}


export const POSTFunction = () => {

}