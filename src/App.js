import React from 'react';
import './components.js/components.css'
import './components.js/global.css'
import './components.js/sample-wallpaper.css'
import './components.js/layout.css'


function App() {
  return (
    <div>
           <nav className="navbar">
      <div className="container">
        <a href="#">Hulk</a>
        <a href="#" className="logo is-active">Mavel</a>
        <a href="#">Venom</a>
      </div>
    </nav>


    <header className="header">
      <div className="container">
        <h1 className="title">Mavel's Fearless</h1>
        <p class="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
          molestias earum eveniet.
        </p>
        <div className="search-bar">
          <input type="search" placeholder="Search" />
        </div>

        <div className="sample-wallpaper">
          <article className="wallpaper">
            <img src="./img/venom-1.jpg" alt="Wallpaper #1" className="wallpaper" />
          </article>

          <article className="wallpaper">
            <img src="./img/hulk-1.jpg" alt="Wallpaper #1" className="wallpaper" />
          </article>

          
          <article className="wallpaper">
            <img src="./img/venom-2.jpg" alt="Wallpaper #1" className="wallpaper" />
          </article>
        </div>
      </div>
    </header>
    </div>
  );
}

export default App;
