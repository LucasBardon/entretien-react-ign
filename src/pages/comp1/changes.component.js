import React from "react";
import '../Exercice1.css';

function Changes() {
    return <div class="changes">
        <div class="changes-div">
            <h2 style={{fontWeight: "bold", color: "orange"}}>
                Les changements à venir
            </h2>
            <hr/>
            <p style={{paddingTop: "10px"}}>
                ING se retire du marché de la banque en 
                ligne en France.
            </p>
            <p>
                Nous allons fermer progressivement les 
                comptes de nos clients.
            </p>
            <p>
                En tant que client, vous allez recevoir à 
                votre domicile un courrier d’information 
                concernant vos comptes ING. Après réception 
                de ce courrier, vous pourrez si vous le 
                souhaitez devenir client de Boursorama Banque 
                en accédant à un parcours d’ouverture 
                simplifié et en bénéficiant d'offres 
                exclusives réservées aux clients ING.
            </p>
            <p>
                Si vous détenez un contrat d’assurance-vie 
                ING Direct Vie, sa gestion a été transférée 
                chez Boursorama Banque, sans aucune modification 
                de ses conditions.
            </p>
            <p>
                Votre crédit immobilier et/ou votre prêt 
                personnel restent quant à eux chez ING.
                Leurs conditions ne sont pas modifiées.
            </p>
            <p style={{color: "orange"}}>
                Découvrez comment passer chez Boursorama 
                Banque, étape par étape
            </p>
            <hr/>
            <img src=""/>
            <a style={{fontWeight: "bold"}} href="http://localhost:3000/exercice1">
                Télécharger les démarches à suivre
            </a>
        </div>
    </div>
}

export default Changes;