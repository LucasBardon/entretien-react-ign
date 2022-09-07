import React from "react";
import "../Exercice1.css";

function Understand() {
    return <div class="understand">
        <h3
            style={{color: "rgb(235, 65, 144)"}}>
            Des offres exclusives réservées aux clients ING
        </h3>
        <p>
            Le montant de votre offre de bienvenue sera égal 
            au cumul des offres correspondant aux produits 
            bancaires que vous choisirez chez Boursorama 
            Banque.
        </p>
        <br/>
        <h4
            style={{color: "rgb(235, 65, 144)"}}>
            Jusqu’à 130€ offerts pour la banque au quotidien : 
        </h4>
        <p>
            - 30€ pour toute 1re ouverture d’un compte bancaire 
            seul (hors offre pro et compte joint)
        </p>
        <p>
            - Et 50€ pour toute 1re souscription d’une carte 
            bancaire Ultim ou Welcome concomitante à l’ouverture 
            du compte bancaire
        </p>
        <p>
            - Ou 8 mois de cotisation offertepour toute 1re 
            souscription à l’Offre METAL
        </p>
        <p>
            - Et 50€ offertspour toute demande de mobilité bancaire 
            Easy Move, soumis à conditions
        </p>
        <br/>
        <h4 
            style={{color: "rgb(235, 65, 144)"}}>
            Pour les autres produits de la gamme Boursorama 
            Banque :
        </h4>
        <p>
            - 30€ pour toute 1re ouverture de Compte Sur Livret
        </p>
        <p>    
            - 30€ pour toute 1re ouverture de Livret A
        </p>
        <p>
            - 30€ pour toute 1re ouverture de LDDS
        </p>
        <p>   
            - 50€ pour toute 1re ouverture de Compte Titres 
            Ordinaire
        </p>
        <p>   
            - 50€ pour toute 1re ouverture de PEA
        </p>
        <p>    
            - 50€ pour toute demande de mobilité Bourse pour 
            transférer votre compte CTO et/ou PEA
        </p>
        <div class="exemple">
            <p
                style={{fontWeight: "bold"}}>
                Exemple
            </p>
            <p>
                Vous ouvrez un 1er compte courant avec une 
                carte ULTIM + un PEA + un Livret A
            </p>
            <p
                style={{color: "rgb(235, 65, 144)"}}>
                Votre prime s'élève à
            </p>
            <h1
                style={{color: "rgb(235, 65, 144)"}}>
                130€*
            </h1>
            <p
                style={{color: "rgb(235, 65, 144)"}}>
                (30€ + 50€ + 50€ = 130€)
            </p>
            <p
                style={{fontSize: "12px"}}>
                * Conformément aux conditions de l'offre.
            </p>
        </div>
        <div class="understand-info">
            Si vous êtes déjà client Boursorama Banque, les 
            primes s’appliqueront uniquement sur les nouveaux 
            produits éligibles auxquels vous souscrirez.
        </div>
    </div>
}

export default Understand;