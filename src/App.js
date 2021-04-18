import './App.css';
import Header from './Header';
import BottomNav from './BottomNav'

import Home from './Home';
import Social from './Social';
import Work from './Work';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';

const App = () => {

  useEffect(() => {
    const card = document.querySelector(".main-card");
    const container = document.querySelector(".App");

    const titleBar = document.querySelector(".title-bar");
    const content = document.querySelector(".content-wrapper");
    const bottomNav = document.querySelector(".bottom-nav");

    container.addEventListener("mousemove", (e) => {
      let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    container.addEventListener("mouseenter", (e) => {
      card.style.transition = "none";

      titleBar.style.transform = "translateZ(150px)";
      content.style.transform = "translateZ(100px)";
      bottomNav.style.transform = "translateZ(150px)";
    });

    container.addEventListener("mouseleave", (e) => {
      card.style.transition = "all 0.5s ease";
      card.style.transform = `rotateY(0deg) rotateX(0deg)`;

      titleBar.style.transform = "translateZ(0px)";
      bottomNav.style.transform = "translateZ(0)";
      content.style.transform = "translateZ(0px)";
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <div className="main-card">
          <Header />
          <div className="content-wrapper">
            <Switch>
              <Route path='/social' component={Social} />
              <Route path='/work' component={Work} />
              <Route path='/' component={Home} />
            </Switch>
            <iframe className="spotify" src="https://open.spotify.com/embed/playlist/48Dkv5u690qbZLk02JJaLT"
              title="spotify player"
              height="60" width="60"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media">
            </iframe>
          </div>
          <BottomNav />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;