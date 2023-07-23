import { Home, Article } from './components';
import { getData } from "./utils/getData";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const App = ({ }) => {

  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getData({ setArticle })
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home articles={article} />} />
        <Route path='/article/:id' element={<Article articles={article} />} />
      </Routes>
    </Router>

  )
}

export default App