import axios from 'axios';

export const getNewsArticle = async () => {
    try {
        const responseData = await axios.get(`http://localhost:4000/mockApiResponse`);
        return responseData.data;
    } catch (error) {
        return error;
    }
}
