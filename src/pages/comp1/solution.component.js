import React, { useState } from "react";
import "../Exercice1.css";

import Understand from "./understand.component";

function Solution() {
    const [hidden, setHidden] = useState(true);

    return <div class="solution">
        <h2 style={{color: "orange"}}>
            La meilleure solution alternative bancaire
        </h2>
        <hr/>
        <br/>
        <h3>
            Deux banques, une même vision 
        </h3>
        <p>
            Si nous avons choisi Boursorama Banque, 
            c’est parce que nous partageons avec Boursorama 
            Banque la même vision de la banque en ligne : une 
            promesse visant à simplifier la vie de nos clients, 
            une large gamme de produits simples et performants, 
            des tarifs très compétitifs… Vous ne devriez pas être 
            dépaysés.
        </p>
        <br/>
        <h3>
            Une solution alternative mise au point pour vous
        </h3>
        <p>
            Avec Boursorama Banque, vous pourrez profiter de 
            nombreux avantages exclusifs :
        </p>
        <br/>
        <div class="offers">
            <h3 class="offer-1">
                Un parcours
                d'ouverture de compte
                simplifié
            </h3>
            <div class="offer-2">
                <h3>
                    D’offres exclusives jusqu’à
                    320€ offerts
                    (sous conditions)
                </h3>
                <a style={{fontSize: "14px", paddingBottom: "10px"}} href="http://localhost:3000/exercice1">
                    Voir le détail des offres et des conditions
                </a>
                <br/>
                <button 
                    className="offers-details"
                    onClick={() => setHidden(s => !s)}>
                    Comprendre les offres
                </button>
            </div>
            <h3 class="offer-3">
                Aucuns frais sur les
                transferts et sur
                les clôtures de compte
            </h3>
        </div>
        {!hidden ? <Understand /> : null}
        <br/>
        <p>
            Pour la clôture des livrets d’épargne réglementés
            (Livret A et Livret Développement Durable et Solidaire) : 
            Vous bénéficierez d’un dédommagement forfaitaire compensant 
            en partie la perte d’intérêts liée au délai entre la clôture 
            de votre livret ING et l’ouverture d’un nouveau livret. Ce 
            montant représente jusqu’à 10€ pour un Livret A supérieur au 
            plafond (22 950€) et jusqu’à 5€ pour un LDDS. Un montant 
            forfaitaire de 1€ sera versé aux clients pour tout livret 
            avec moins de 5 000€.
        </p>
        <p>
            A noter : si la clôture est à votre initiative, 
            vous ne bénéficierez pas du dédommagement.
        </p>
        <br/>
        <h3>
            De nombreuses offres adaptées à vos besoins
        </h3>
        <p>
            Welcome, Ultim ou l’Offre Metal… Boursorama Banque 
            propose une gamme complète de cartes bancaires qui 
            s’adapte à tous vos besoins, des services pour gérer 
            simplement votre argent, ainsi qu’une grande variété 
            de produits d’épargne et de bourse. Une chose est sûre, 
            vous y trouverez votre compte !
        </p>
        <a href="http://localhost:3000/exercice1">
            Découvrez les offres Boursorama Banque
        </a>
        <p>
            Pour vous aider à choisir votre carte bancaire 
            Boursorama Banque, cliquez sur l'offre que vous 
            détenez chez ING pour découvrir celle qui lui 
            correspond.
        </p>
        <div class="offers-card">
            <button class="cards-btn">
                Offre Intégrale
                <img src="https://www.ing.fr/assets/images/home/carte-integrale-small.png"/>
            </button>
            <button class="cards-btn">
                Offre Essentielle
                <img src="https://www.ing.fr/assets/images/home/carte-essentielle-small.png"/>
            </button>
        </div>
    </div>
}

export default Solution;