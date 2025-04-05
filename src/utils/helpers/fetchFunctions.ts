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
        return []; // Retorna un string vacío en caso de error
    }
}

export const POSTFunction = async (endpoint: string, _dataObject: any, loader?: any) => {
    try {
        console.log(_dataObject)
        console.log('AAAAAAAAAAAAAA')
        const response = await fetch(`${API_URL}${endpoint}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('userToken')}`
            },
            body: JSON.stringify(_dataObject)
        });
        const finalResponse = response.json()
        if (loader) loader(false)

        console.log(endpoint)
        console.log(finalResponse)
        console.log('-_-_-_-_-_-_-_-_-_-_-_-_')

        return finalResponse;
    } catch (error) {
        console.error("Error:", error);
        return []; // Retorna un string vacío en caso de error
    }
}

export const PUTFunction = async (endpoint: string, _dataObject: any, loader?: any) => {
    try {
        const response = await fetch(`${API_URL}${endpoint}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('userToken')}`
            },
            body: JSON.stringify(_dataObject)
        });
        const finalResponse = await response.json()
        if (loader) loader(false)

        console.log(endpoint)
        console.log(finalResponse)
        console.log('-_-_-_-_-_-_-_-_-_-_-_-_')

        return finalResponse;
    } catch (error) {
        console.error("Error:", error);
        return []; // Retorna un string vacío en caso de error
    }
}

export const DELETEFunction = async (endpoint: string) => {
    try {
        const response = await fetch(`${API_URL}${endpoint}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('userToken')}`
            },
        });

        return response.json();
    } catch (error) {
        return error; // Retorna un string vacío en caso de error
    }
}
