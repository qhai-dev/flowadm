import  'reflect-metadata';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

function main(){
    ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
        .render(
            <React.StrictMode>
                <App />
            </React.StrictMode>,
        )
}

main()

// TODO tsyringe 依赖注入实践