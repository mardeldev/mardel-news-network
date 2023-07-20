import axios from 'axios';

export const getNewsArticle = async () => {
    try {
        const responseData = await axios.get("http://localhost:3000/response");
        return responseData.data;
    } catch (error) {
        return error;
    }
}
// http://localhost:4000/mockApiResponse