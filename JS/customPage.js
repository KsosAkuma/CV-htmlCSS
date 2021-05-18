// on fait un petit boutton pour changer le chemin entre entre deux ficher CSS

const quelStyle = document.getElementById("styleCSS");
const btnStyle = document.getElementById('btnStyleCSS');

let interrupteur = 0;

pageAccueil = function(){
    switch (interrupteur){
        case 0 : 
            quelStyle.href = "CSS/style2.css";
            btnStyle.textContent =" Mode : Grid";
            interrupteur = 1;
            break;

        case 1 : 
            quelStyle.href = "CSS/style1.1.css";
            btnStyle.textContent =" Mode : Grid";
            interrupteur = 2;
            break;

        case 2 : 
            quelStyle.href = "CSS/style.css";
            btnStyle.textContent =" Mode : Flex";
            interrupteur = 0;
            break;

        default :
            quelStyle.href = "CSS/style1.1.css";
            btnStyle.textContent =" Mode : Flex";
            interrupteur = 0;
            break;
    }
}