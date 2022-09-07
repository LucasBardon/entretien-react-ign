import React from "react";
import "../Exercice1.css";

function More() {
    return <div class="more">
        <div class="more-1">
            <img 
                class="toysoldier"
                src="https://www.ing.fr/assets/images/home/jumelles-rouge.jpg"
            />
            <h2 style={{color: "orange"}}>
                On vous dit tout sur votre situation personnelle
            </h2>
            <hr/>
            <br/>
            <p>  
                Avec notre outil d'accompagnement, découvrez ce qui 
                change pour l’ensemble de vos comptes, ainsi que les 
                démarches et dates clés pour bénéficier des offres de 
                Boursorama Banque.
            </p>
            <button class="more1-btn">
                Découvrir
            </button>
        </div>

        <div class="more-2">
            <img
                class="doge"
                src="https://www.ing.fr/assets/images/home/chien2.jpg"
            />
            <h2 style={{color: "orange"}}>
                Parce que vos questions ne doivent pas rester sans 
                réponses
            </h2>
            <hr/>
            <br/>
            <p>
                Rendez-vous sur notre Foire Aux Questions
            </p>
            <button class="more2-btn">
                En savoir plus
            </button>
        </div>
    </div>;
}

export default More;