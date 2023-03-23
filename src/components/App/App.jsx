import React, { useState, useEffect } from 'react';
import Header from '../Header/Header.jsx'
import './App.css';
import ShoppingList from '../ShoppingList/ShoppingList.jsx';


function App() {

    let [shoppingList, setShoppingList ] = useState([]);

    useEffect(() => {
        
      }, [])


    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
                <ShoppingList list={shoppingList} />
            </main>
        </div>
    );
}

export default App;
