window.addEventListener("load", function () {

    const track = document.getElementById("projectTrack");

    const originalCards = [...track.children];

    const originalWidth = track.scrollWidth;

    const trackStyle = window.getComputedStyle(track);
    const gap = parseFloat(trackStyle.gap) || 0;

    originalCards.forEach(function (card) {
        const duplicateCard = card.cloneNode(true);
        duplicateCard.setAttribute("aria-hidden", "true");
        track.appendChild(duplicateCard);
    });

    track.style.setProperty(
        "--slide-distance",
        `${originalWidth + gap}px`
    );

});


const facts = [
    "I can spend hours fixing one tiny CSS problem.",
    "One Piece is one of my favourite anime.",
    "I enjoy building both software and hardware projects.",
    "I enjoy chess, coding, designing and making random things.",
    "Maths did not defeat me. I scored 93% in Class 12th (I love maths)",
    "I work Hard NOT Smart :("
];

const factText = document.getElementById("factText");
const factButton = document.getElementById("factButton");

let previousFactIndex = -1;

factButton.addEventListener("click", function () {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * facts.length);
    } while (randomIndex === previousFactIndex);

    previousFactIndex = randomIndex;
    factText.textContent = facts[randomIndex];
});
