import React from "react";
import styles from "../style";




const NewsColumn = () => {
    return (
        <section className="news-col py-3">

            <div className={`card container-fluid ${styles.flexCenter}`}>
                <img src="https://media.guim.co.uk/526802e87e837142de4c0c854e8a95a7740dd197/0_65_6078_3647/500.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class={`card-title ${styles.flexCenter}`}>Card title</h5>
                    {/* <p class={`card-text ${styles.flexCenter}`}>Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <a href="#" class={`btn btn-dark ${styles.flexCenter}`}>Go somewhere</a>
                </div>
            </div>
        </section>


        // <div class="card" >
        //     <img src="https://media.guim.co.uk/526802e87e837142de4c0c854e8a95a7740dd197/0_65_6078_3647/500.jpg" class="card-img-top" alt="..." />
        //     <div class="card-body">
        //         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //     </div>
        // </div>

    )
}


export default NewsColumn