import React from "react";
import styles from "../style";

const NewsColumn = ({ articles }) => {
    // const { results } = articles;


    if (!articles || articles.length === 0) {
        return <p>No articles to display.</p>;
    }

    return (
        <section className="news-col">
            {articles.map((result, index) => (
                <div className={`card container-fluid ${styles.flexCenter} py-3 mt-4 mb-4`} key={index}>
                    <div className={`row container-fluid ${styles.flexCenter} `}>
                        <img src={result.fields.thumbnail} className="card-img-top card-img mt-5" alt={result.fields.id} />
                        <div className={`container-fluid card-body justify-content-center`}>
                            <h5 className={`card-title text-center fs-3 fw-normal py-2`}>{result.fields.headline}</h5>
                            <a href="#" className={`btn btn-secondary card-button ${styles.flexCenter}`}>Go somewhere</a>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default NewsColumn;


// if (!articles || !articles.response) {
    //     return null; // or render a loading state or an error message
    // }