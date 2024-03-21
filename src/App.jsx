import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const App = () => {
    return (
        <div>
            <h1 className=' text-pink-400'>Hello, Electron with React!</h1>
        </div>
    );
};

const root = createRoot(document.body);
root.render(<App/>);
