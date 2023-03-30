import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MemeGenerator from './MemeGenerator';


const root = ReactDOM.createRoot(document.getElementById("root"))

const element = <MemeGenerator />
root.render(element)

