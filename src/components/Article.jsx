import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Navbar } from "./index";

import styles from "../style";


const Article = ({ articles }) => {
    const { id } = useParams();
    const realId = id.replace(/_/g, '/');
    const article = articles.find(article => article.id === realId);


    if (!article) {
        return <p>Article not found</p>;
    }

    return (
        <div>
            <Navbar />
            <section className={`row ${styles.flexCenter} ${styles.boxWidth}`}>
                <h1 className={`text-center py-5`}>{article.fields.headline}</h1>
                <Link className={` btn-secondary card-button ${styles.flexCenter}`}
                    to={article.webUrl}> Read the full article on The Guardian's website here...
                </Link>
                {/* <a href={article.webUrl} className="text-center fs-4"></a> */}
                <img className={`article-img py-3`} src={article.fields.thumbnail} alt={article.webTitle} />
                <h1 className="text-center py-4">Summary</h1>
                <p className={`text-break text-center article-text py-2`}>{article.fields.bodyText}</p>

            </section>
        </div>
    );
};

export default Article;
