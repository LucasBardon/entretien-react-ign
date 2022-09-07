import React from 'react';
import '../Exercice1.css';

function Info() {
    return <div class="info">
        <img class="fingers" src="https://www.ing.fr/assets/images/showcase/hp_referral_visuelshowcase.webp" />
        <div>
            <p class="info-text">
                ING va arrêter son activité de banque en ligne 
                et fermer progressivement les comptes de ses 
                clients en 2022. Dans ce contexte, nous voulons 
                accompagner au mieux nos clients vers un nouvel 
                établissement bancaire. Nous avons mis au point 
                la meilleure alternative bancaire avec Boursorama 
                Banque, leader du marché, qui partage avec nous 
                la même vision de la banque en ligne.
            </p>
            <p class="info-text" style={{fontWeight: "bold"}}>
                Le tout en bénéficiant d’offres exclusives 
                réservées aux clients ING.
            </p>
            <a href="http://localhost:3000/exercice1"
                style={{paddingLeft: "10%", paddingRight: "10%"}}>
                Voir le détai ldes offres et conditions
            </a>

            <p class="info-text" 
                style={{color: "orange"}}>
                Découvrez-les en détails ci-dessous et 
                retrouvez les démarches à suivre pour en 
                profiter
            </p>
            <p style={{marginLeft: "10%"}}>
                <i class="arrow down"></i>
            </p>
        </div>
    </div>;
  }
  
  export default Info;