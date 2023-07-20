import React from "react";
import styles from "../style";



const NewsColumn = ({ articles }) => {
    if (!articles || !articles.response) {
        return null; // or render a loading state or an error message
    }
    const { response } = articles;
    return (
        <section className="news-col">
            {response.results.map((result, index) => (
                <div className={`card container-fluid ${styles.flexCenter} py-3 mt-4 mb-4`}>
                    <div className={`row container-fluid ${styles.flexCenter} `}>
                        <img src={result.fields.thumbnail} className="card-img-top card-img" alt={result.fields.id} />
                        <div className={`container-fluid card-body justify-content-center`}>
                            <h5 className={`card-title text-center fs-3 fw-bolder py-2`}>{result.fields.headline}</h5>
                            <a href="#" className={`btn btn-dark card-button ${styles.flexCenter}`}>Go somewhere</a>
                        </div>
                    </div>
                </div>

            ))}


        </section>

    )
}






export default NewsColumn