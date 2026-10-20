const players = [

    {
        month: "AUGUST",
        name: "Raphinha",
        club: "Barcelona",
        position: "ST",
        image: "RAPHINHAPOTM.jpeg"
    },

    {
        month: "SEPTEMBER",
        name: "Raphinha",
        club: "Barcelona",
        position: "ST",
        image: "RAPHINHAPOTM.jpeg"
    },

    {
        month: "OCTOBER",
        name: "?",
        club: "?",
        position: "?",
        image: "Вопрос.jpg"
    },

    {
        month: "NOVEMBER",
        name: "?",
        club: "?",
        position: "?",
        image: "Вопрос.jpg"
    },

    {
        month: "DECEMBER",
        name: "?",
        club: "?",
        position: "?",
        image: "Вопрос.jpg"
    },

    {
        month: "JANUARY",
        name: "?",
        club: "?",
        position: "?",
        image: "Вопрос.jpg"
    },

    {
        month: "FEBRUARY",
        name: "?",
        club: "?",
        position: "?",
        image: "Вопрос.jpg"
    },

    {
        month: "MARCH",
        name: "?",
        club: "?",
        position: "?",
        image: "Вопрос.jpg"
    },

    {
        month: "APRIL",
        name: "?",
        club: "?",
        position: "?",
        image: "Вопрос.jpg"
    },

    {
        month: "MAY",
        name: "?",
        club: "?",
        position: "?",
        image: "Вопрос.jpg"
    },

    {
        month: "JUNE",
        name: "?",
        club: "?",
        position: "?",
        image: "Вопрос.jpg"
    }

];


const monthGrid =
    document.getElementById("monthGrid");


players.forEach((player, index) => {

    const card =
        document.createElement("div");

    card.className = "month-card";


    card.innerHTML = `

        <div class="card-number">
            ${String(index + 1).padStart(2,"0")}
        </div>

        <img
            class="player-image"
            src="${player.image}"
            alt="${player.name}"
        >

        <div class="card-content">

            <div class="month">
                ${player.month}
            </div>

            <div class="player-name">
                ${player.name}
            </div>

            <div class="player-meta">

                <span class="player-position">
                    ${player.position}
                </span>

                <span>
                    •
                </span>

                <span>
                    ${player.club}
                </span>

            </div>

        </div>

    `;


    monthGrid.appendChild(card);

});
