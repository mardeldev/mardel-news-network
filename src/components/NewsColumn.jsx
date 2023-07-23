import React from "react";
import styles from "../style";
import { getNewsArticle } from "../dataService";
import { useState, useEffect } from "react";

const NewsColumn = ({ }) => {


    const [article, setArticle] = useState([]);

    const getData = async () => {
        const data = await getNewsArticle();
        if (data?.error) {
            console.log(data.error.message);
            setArticle([]);
        } else {
            const { results } = data;
            setArticle(results);
        }
    }
    useEffect(() => {
        getData()
    }, [])


    if (!article || article.length === 0) {
        return <p>No article to display.</p>;
    }

    return (
        <section className="news-col">
            {article.map((result, index) => (
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


// if (!articles || !articles.response) {
    //     return null; // or render a loading state or an error message
    // }