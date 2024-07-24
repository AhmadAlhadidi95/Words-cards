if (!localStorage.key("cardsNumber")) localStorage.setItem("cardsNumber", prompt("How many new words have you want learned?", "7"));

let cardsNumber = localStorage.getItem("cardsNumber");

building(cardsNumber);
logic(cardsNumber);

function logic(cards) {

    let wordsArray = Array.from({length: cards});
    let cluesArray = Array.from({length: cards});
    
    for (let i = 0; i < wordsArray.length; i++) {
        
        wordsArray[i] = "Word"
    
        cluesArray[i] = "Clue";
        
    };
    
    document.querySelectorAll(".container .flip-card").forEach((card, i) => {
    
        let theWords = JSON.parse(localStorage.getItem("theWords")) || wordsArray;
        let theClues = JSON.parse(localStorage.getItem("theClues")) || cluesArray;
    
        card.querySelector(".front b").innerHTML = i + 1;
    
        let h2 = card.querySelector(".front h2");
        let para = card.querySelector(".back p");
    
        h2.innerHTML = theWords[i];
        para.innerHTML = theClues[i];
        
        card.querySelectorAll("span").forEach((span) => {
            
            span.onclick = () => {card.classList.toggle("switch")};
    
        });
        
        h2.onclick = () => {
    
            let newWord = prompt("Write the new word", "Word");
    
            newWord === null ? h2.textContent = "Word" : h2.textContent = newWord;
    
            wordsArray[i] = newWord
    
            localStorage.setItem("theWords", JSON.stringify(wordsArray))
    
        };
    
        para.onclick = () => {
    
            let newSentence = prompt("Write the new sentence", "Clue");
    
            para.textContent = newSentence;

            newSentence === null ? para.textContent = "Clue" : para.textContent = newSentence;
    
            cluesArray[i] = newSentence;
    
            localStorage.setItem("theClues", JSON.stringify(cluesArray));
    
        };
    
    });

}


function building(cards) {

    for (let i = 0; i < cards; i++) {

        let flipCard = document.createElement("div");
        flipCard.className = `flip-card`;

        let front = document.createElement("div");
        front.className = `front`;

        let b = document.createElement("b");

        let h2 = document.createElement("h2");
        h2.title = `Change the word`;

        let frontSpan = document.createElement("span");

        front.append(b, h2, frontSpan);

        let back = document.createElement("div");
        back.className = `back`;


        let p = document.createElement("p");
        p.title = `Change the sentence`;

        let backSpan = document.createElement("span");

        back.append(p, backSpan);

        flipCard.append(front, back);

        document.querySelector(".container").appendChild(flipCard);
        
    };

};

document.body.appendChild(myInformation());

function myInformation(myInfo) {

    myInfo = document.createElement("div");
    myInfo.className = `my-info`;

    let xLink = document.createElement("a");
    xLink.href = "https://twitter.com/AhmadAlhadidi95";
    xLink.target = "_blank";
    xLink.rel = "noopener noreferrer";
    xLink.title = "Visit my X";

    let xIcon = document.createElement("i");
    xIcon.className = `fa-brands fa-x-twitter`;

    xLink.appendChild(xIcon);

    let myWebsiteLink = document.createElement("a");
    myWebsiteLink.href = "https://alhadidi95.netlify.app";
    myWebsiteLink.target = "_blank";
    myWebsiteLink.rel = "noopener noreferrer";
    myWebsiteLink.title = `Visit my website`;

    let myLogo = document.createElement("img");
    myLogo.src = `/My-sign.png`;
    myLogo.alt = `My-sign`;
    myLogo.style.width = `40px`;

    myWebsiteLink.appendChild(myLogo);

    let githubLink = document.createElement("a");
    githubLink.href = "https://github.com/AhmadAlhadidi95";
    githubLink.target = "_blank";
    githubLink.rel = "noopener noreferrer";
    githubLink.title = "Visit my Github";

    let githubIcon = document.createElement("i");
    githubIcon.className = `fa-brands fa-github`;

    githubLink.appendChild(githubIcon);

    let resetImg = document.createElement("img");
    resetImg.id = `resetImg`;
    resetImg.src = "/images/tarot-card.png";
    resetImg.title = "Reset";

    myInfo.append(xLink, myWebsiteLink, githubLink, resetImg);

    return myInfo;

};

document.getElementById("resetImg").addEventListener("click", () => {

    localStorage.clear();

    if (!localStorage.key("cardsNumber")) {

        localStorage.setItem("cardsNumber", prompt("How many new words have you learned?", "7"));

        cardsNumber = localStorage.getItem("cardsNumber");

        document.querySelector(".container").innerHTML = "";
    
        building(cardsNumber);
        logic(cardsNumber);
    };

});