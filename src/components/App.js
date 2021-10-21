import React from 'react';
import { useEffect } from 'react';
import {useState} from 'react';

const App=()=> {
    const [prod,setPro]=useState({})
    
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then((res) => {
            setPro(res)
            })
    },[])
    let arr=JSON.stringify(prod)
    return (
        <>
            <p>hjwfiohj</p>
            {arr}
        </>
    );
};

export default App;