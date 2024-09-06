import React, { Component,StrictMode} from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse ,Button } from 'bootstrap';
import $ from 'jquery';

const container=createRoot(document.getElementById("root"))

container.render(<StrictMode><App/></StrictMode>)
