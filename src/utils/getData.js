import { getNewsArticle } from "../utils/dataService";


export const getData = async ({ setArticle }) => {
    const data = await getNewsArticle();
    if (data?.error) {
        console.log(data.error.message);
        setArticle([]);
        return;
    }
    const { results } = data.response;
    setArticle(results);
}


