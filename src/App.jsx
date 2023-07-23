import React from 'react';
import styles from './style';
import { Home, Header, Navbar, NewsColumn } from './components';

import { getNewsArticle } from "./dataService";
import { useState, useEffect } from "react";


import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


const App = () => {

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

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home articles={article} />} />

      </Routes>
    </Router>

  )
}

export default App
