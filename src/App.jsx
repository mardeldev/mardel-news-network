import React from 'react';
import styles from './style';
import { Navbar, NewsColumn } from './components';

import { getNewsArticle } from "./dataService";
import { useState, useEffect } from "react";
import Header from './components/Header';


const App = () => {

  const [article, setArticle] = useState([]);

  const getData = async () => {
    const data = await getNewsArticle();
    if (data?.error) {
      console.log(data.error.message);
      // setArticle([]);
    } else {
      const { results } = data;
      setArticle(results);
    }
  }


  useEffect(() => {
    getData()
  }, [])

  return (
    <div >
      <div >
        <div >
          <Navbar />
        </div>
        <div>
          <Header />
        </div>
      </div>

      <div>
        <div>
          <NewsColumn articles={article} />
        </div>
      </div>
    </div>
  )
}

export default App
