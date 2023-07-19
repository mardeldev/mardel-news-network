import React from 'react';
import styles from './style';
import { Navbar, NewsColumn } from './components';



const App = () => (
  <div >
    <div >
      <div>
        <Navbar />
      </div>
    </div>

    <div>
      <div>
        <NewsColumn />
      </div>
    </div>
  </div>
)
export default App
