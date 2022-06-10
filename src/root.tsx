import * as React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';

function render() {
    const container = document.getElementById('app-content')

    const root = createRoot(container)

    root.render(<App />);
}

render();