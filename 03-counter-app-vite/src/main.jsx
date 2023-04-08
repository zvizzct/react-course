import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './CounterApp'
import { FirstApp } from './FirstApp'

import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <FirstApp title={"lol"} /> */}
    <CounterApp value={20} />
  </React.StrictMode >,
)
