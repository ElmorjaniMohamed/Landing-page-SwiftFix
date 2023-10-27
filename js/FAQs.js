// ===============FAQs===================
const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const iconsRotate = document.querySelectorAll(".rotate-icon");

let currentlyOpenQuestion = null;

questions.forEach((question, index) => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        const iconRotate = iconsRotate[index];

        if (answer.classList.contains("openAnswer") && currentlyOpenQuestion === question) {
            
            // Si la réponse est déjà ouverte and il s'agit de la même question, fermez-la
            answer.classList.remove("openAnswer");
            iconRotate.style.transform = 'rotate(0deg)';
            currentlyOpenQuestion = null; // Réinitialise la question ouverte
        } else {
            // Fermez d'abord toutes les réponses ouvertes et réinitialisez toutes les icônes
            answers.forEach((otherAnswer, answerIndex) => {
                if (otherAnswer.classList.contains("openAnswer")) {
                    otherAnswer.classList.remove("openAnswer");
                    iconsRotate[answerIndex].style.transform = 'rotate(0deg)';
                }
            });

            // Ouvrez la réponse et faites pivoter l'icône
            answer.classList.add('openAnswer');
            iconRotate.style.transform = 'rotate(180deg)';
            currentlyOpenQuestion = question; // Met à jour la question ouverte
        }
    });
});
