import React from 'react';
import styles from './style';
import { Navbar, NewsColumn } from './components';

import { getNewsArticle } from "./dataService";
import { useState, useEffect } from "react";


const App = () => {

  const [article, setArticle] = useState([]);

  const getData = async () => {
    const data = await getNewsArticle();
    if (data?.error) {
      console.log(data.error.message);
      setArticle([]);
    } else {
      setArticle(data);
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
