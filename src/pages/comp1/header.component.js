import React from 'react';
import '../Exercice1.css';

function Header() {
  return <div class="header">
    <div>
        <img class="logo" src="https://www.ing.fr/assets/images/icons/Logo.svg" /> 
    </div>
    <div class="header-link">
        <button class="header-search">
          Chercher
        </button>
        <a style={{paddingLeft: "5px", paddingRight: "5px"}} 
          href="http://localhost:3000/exercice1">Vos projets
        </a>
        <a style={{paddingLeft: "5px", paddingRight: "5px"}} 
          href="http://localhost:3000/exercice1">Besoin d'aide ?
        </a>
    </div>
    <div class="header-btn">
        <button class="espace-cl">Espace client</button>
    </div>
  </div>;
}

export default Header;