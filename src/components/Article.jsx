import { useNavigate, useParams } from "react-router";
import styles from "../style";
import { getData } from "../utils/getData";
import { useState, useEffect } from "react";

const Article = ({ articles }) => {


    const { id } = useParams
    // const { articles } = article
    console.log(article.pages)
    console.log("hello")

    return (
        <section className={`${styles.flexCenter}`}>



        </section>
    )
}

export default Article