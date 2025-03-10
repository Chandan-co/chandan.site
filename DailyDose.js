document.addEventListener("DOMContentLoaded", function () {
    const num1 = document.getElementById("Mno1");
    const num2 = document.getElementById("Mno2");
    const answerInput = document.getElementById("ans");
    const submitBtn = document.getElementById("submit");
    const nextBtn = document.getElementById("nextbtn");
    const feedbackIcons = document.querySelector(".feedback");
    const fas1 = document.querySelector(".fas1");
    const fas2 = document.querySelector(".fas2");
    const scoreCard = document.getElementById("scorecard");

    let score = 0;

    function generateNumbers() {
        let randomNum1 = Math.floor(Math.random() * 1000)+1;
        let randomNum2 = Math.floor(Math.random() * 1000)+1;
        num1.value = randomNum1;
        num2.value = randomNum2;
        answerInput.value = "";
        answerInput.classList.remove("colorchange1", "colorchange2");
        fas1.classList.remove("showtrue", "showfalse");
        fas2.classList.remove("showtrue", "showfalse");
    }

    submitBtn.addEventListener("click", function () {
        let userAnswer = parseInt(answerInput.value);
        let correctAnswer = parseInt(num1.value) * parseInt(num2.value);

        if (!isNaN(userAnswer) && userAnswer === correctAnswer) {
            score++;
            answerInput.classList.add("colorchange1");
            answerInput.classList.remove("colorchange2");
            fas1.classList.add("showtrue");
            fas2.classList.remove("showfalse");
        } else {
            answerInput.classList.add("colorchange2");
            answerInput.classList.remove("colorchange1");
            fas1.classList.remove("showtrue");
            fas2.classList.add("showfalse");
        }

        scoreCard.textContent = ` ✈ Score: ${score}`;
    });

    nextBtn.addEventListener("click", generateNumbers);

    
    // Improve responsiveness
    window.addEventListener("resize", function () {
        if (window.innerWidth < 480) {
            nextBtn.style.width = "130px";
            submitBtn.style.width = "130px";
            nextBtn.style.fontSize = "1rem";
            submitBtn.style.fontSize = "1rem";
        } else {
            nextBtn.style.width = "160px";
            submitBtn.style.width = "160px";
            nextBtn.style.fontSize = "1.2rem";
            submitBtn.style.fontSize = "1.2rem";
        }
    });

    generateNumbers(); // Initial call to set the first question
});