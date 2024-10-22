function generateAffirmations(event) {
    event.preventDefault();

    //let affirmationText = document.querySelector("#affirmations-text");
    //affirmationsText.innerHTML = "Affirmations will go here"

    new Typewriter('#affirmations-text', {
    strings: ['Affirmations will go here'],
    autoStart: true,
    delay: 1,
    cursor: "",
    });
}

let affirmationsFormElement = document.querySelector("#form");
affirmationsFormElement.addEventListener("submit", generateAffirmations);