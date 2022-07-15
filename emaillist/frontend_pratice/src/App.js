import React from 'react';
import emails from './assets/json/data.json';
import Searchbar from './Searchbar';
import Emaillist from './Emaillist';
import styles from './assets/css/styles.css';


function App() {
    return (
        <div id={styles.App}>                
            <Searchbar />
            <Emaillist emails ={emails}/>
        </div>
       );
}

export default App;