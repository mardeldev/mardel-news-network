import React from "react";
import styles from "../style";



const NewsColumn = ({ articles }) => {
    if (!articles || !articles.response) {
        return null; // or render a loading state or an error message
    }
    const { response } = articles;
    return (
        <section className="news-col py-3">

            <div className={`card container-fluid ${styles.flexCenter}`}>
                <img src="https://media.guim.co.uk/526802e87e837142de4c0c854e8a95a7740dd197/0_65_6078_3647/500.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className={`card-title ${styles.flexCenter}`}>Card title</h5>
                    <a href="#" className={`btn btn-dark ${styles.flexCenter}`}>Go somewhere</a>
                </div>
            </div>
            <div>
                {response.results.map((result, index) => (
                    <div>
                        {/* <p>{response.results[index].fields.headline}</p> */}
                        <p>{result.fields.headline}</p>
                    </div>
                ))}

            </div>

        </section>

    )
}






export default NewsColumn