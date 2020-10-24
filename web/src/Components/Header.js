import React, {Component} from 'react';
import ParticlesBg from "particles-bg";

class Header extends Component {
  render() {

    if (this.props.data) {
      var name = this.props.data.name;
      var description = this.props.data.description;
    }

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true}/>
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Accueil</a></li>
            <li><a className="smoothscroll" href="#about">A propos</a></li>
            <li><a className="smoothscroll" href="#solution">Solution</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3>{description}.</h3>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
        </p>

      </header>
    );
  }
}

export default Header;
