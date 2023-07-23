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
                <div className={`d-inline-flex ${styles.flexCenter}`}>
                    <Link to={article.webUrl} className={`text-center fs-3 fw-medium mt-5 mb-2 article-link`} target="_blank">{article.fields.headline}</Link>
                </div>

                <p className="text-center fw-lighter fst-italic"><small>Click on the headline above to go to the original article</small></p>
                {/* <a href={article.webUrl} className="text-center fs-4"></a> */}
                <img className={`article-img`} src={article.fields.thumbnail} alt={article.webTitle} />
                <h2 className="text-center mt-4">Summary</h2>
                <p className={`text-break text-center article-text py-1`}>{article.fields.bodyText}</p>

            </section>
        </div>
    );
};

export default Article;
