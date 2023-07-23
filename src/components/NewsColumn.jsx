import styles from "../style";
import { getData } from "../utils/getData";
import { useState, useEffect } from "react";



const NewsColumn = ({ articles }) => {

    if (!articles || articles.length === 0) {
        return <p>No article to display.</p>;
    }

    return (
        <section className="news-col">
            {articles.map((result, index) => (
                <div className={`card container-fluid ${styles.flexCenter} py-3 mt-4 mb-4`} key={index}>
                    <div className={`row container-fluid ${styles.flexCenter} `}>
                        <img src={result.fields.thumbnail} className="card-img-top card-img mt-5" alt={result.fields.id} />
                        <div className={`row d-flex container-fluid card-body justify-content-center`}>
                            <h5 className={`card-title text-center fs-5 fw-normal py-2`}>{result.fields.headline}</h5>
                            <a href="#" className={`btn btn-secondary card-button ${styles.flexCenter}`}>Read on...</a>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default NewsColumn;
