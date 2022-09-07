import React from "react";
import "../Exercice1.css";

function Footer() {
    return <div class="footer">
        <div class="footer-cols">
            <div class="footer-col">
                <h3>
                    ING France
                </h3>
                <a href="">
                    Notre actualité
                </a>
                <a href="">
                    Nous rejoindre
                </a>
                <a href="">
                    Banque de Financement et d’Investissement
                </a>
            </div>
            <div class="footer-col">
                <h3>
                    Accès rapides
                </h3>
                <a href="">
                    Espace client
                </a>
                <a href="">
                    Tarifs et modalités
                </a>
                <a href="">
                    FAQ
                </a>
                <a href="">
                    Nous contacter
                </a>
                <a href="">
                    Garanties financières
                </a>
            </div>
            <div class="footer-col">
                <h3>
                    Téléchargez l'application
                </h3>
                <input 
                    type="image" 
                    src="https://www.ing.fr/assets/images/pictos/logo-apple.svg"
                />
                <imput
                    type="image" 
                    src="https://www.ing.fr/assets/images/pictos/Logo-google-play.svg"
                />
            </div>
        </div>
        <div class="footer-row">
            <a 
                class="footer-a"
                href="">
                Sécurité
            </a>
            <a 
                class="footer-a"
                href="">
                Infos légales
            </a>
            <a 
                class="footer-a"
                href="">
                Politiques cookies
            </a>
            <a 
                class="footer-a"
                href="">
                Protection vie privée
            </a>
            <a 
                class="footer-a"
                href="">
                Developer portal
            </a>
            <a href="">
                Accessibilité
            </a>
        </div>
    </div>;
}

export default Footer;