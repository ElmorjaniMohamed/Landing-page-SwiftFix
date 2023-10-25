// ===============FAQs===================
const questions = document.querySelectorAll(".question");

questions.forEach(question => {
    question.addEventListener("click", () => {
        question.nextElementSibling.classList.toggle('openAnswer');
    });
});