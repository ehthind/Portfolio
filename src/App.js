import React from 'react';
import './App.css';

import { Menu } from 'element-react';
import 'element-theme-default';

function App() {
  return (
    <div className="App">
      <Menu
        theme="light"
        defaultActive="1"
        className=""
        mode="horizontal"
      >
        <Menu.Item Index="1">It's a me Mario</Menu.Item>
      </Menu> 
    </div>
  );
}



export default App;
