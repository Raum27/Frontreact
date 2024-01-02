import React, { useEffect, useState } from 'react';
import axios from 'axios'


function App() {
    const ip = 'http://127.0.0.1:5000'
    
    useEffect(() => {
        axios.get(ip).then((res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    return (
        <>
            <h1>Hello wordl!!!</h1>
        </>
    );
}

export default App;
