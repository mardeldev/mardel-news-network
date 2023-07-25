import axios from 'axios';

export const getNewsArticle = async () => {
    try {
        const responseData = await axios.get("http://localhost:3000/response");
        return responseData.data;
    } catch (error) {
        return { error };
    }
}

// Replace the URL above with the guardian api url below for live data.

// https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=121530fe-30bb-4e77-af58-f964b4fb4640

// http://localhost:3000/response