function displayAffirmations(response) {
    new Typewriter('#affirmations-text', {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
    });
}

function generateAffirmations(event) {
    event.preventDefault();
    // get input instructions
    let promptInstructions = document.querySelector("#prompt-instructions");
    // build api url
    let apiKey = "f73594a0o47570b2323t3d3f7085b0ba";
    let prompt =  `Generate 5 daily affirmations for women about ${promptInstructions.value}`;
    let context = "You are a women empowerment coach who believes in the power of affirmations. Your mission is to generate affirmations that encourage women based on the theme provided. Write them in a neat HTML ordered list.";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    // make apiCall 
    axios.get(apiUrl).then(displayAffirmations)

    //let affirmationText = document.querySelector("#affirmations-text");
    //affirmationsText.innerHTML = "Affirmations will go here"

    
}

let affirmationsFormElement = document.querySelector("#form");
affirmationsFormElement.addEventListener("submit", generateAffirmations);