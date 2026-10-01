/* =========================================
   GUESS THE SPORTS CAR
   4 LEVELS - 20 CARS
========================================= */


/* =========================================
   DATOS DE LOS NIVELES
========================================= */

const levels = [

    /* =====================================
       LEVEL 1
    ===================================== */

    {
        name: "CLASSIC SPORTS CARS",

        cars: [

            {
                brand: "Ford",
                model: "Mustang",
                year: "1965",
                name: "Ford Mustang 1965",
                image: "./Imagenes/Ford Mustang 1965.webp",

                clues: [
                    "This American sports car became an icon of the 1960s.",
                    "It was introduced by Ford in 1964 and became very popular.",
                    "This is the 1965 model of the famous Mustang."
                ]
            },

            {
                brand: "Chevrolet",
                model: "Corvette C2",
                year: "1963",
                name: "Chevrolet Corvette C2 1963",
                image: "./Imagenes/Chevrolet Corvette C2 1963.avif",

                clues: [
                    "This American sports car is famous for its fiberglass body.",
                    "Its second generation is known as the C2.",
                    "This 1963 model introduced the famous split rear window."
                ]
            },

            {
                brand: "Jaguar",
                model: "E-Type Series 1",
                year: "1961",
                name: "Jaguar E-Type Series 1 1961",
                image: "./Imagenes/Jaguar E-Type Series 1 1961.jpg",

                clues: [
                    "This British sports car is famous for its elegant design.",
                    "It was introduced in the early 1960s.",
                    "This is the Series 1 model from 1961."
                ]
            },

            {
                brand: "Porsche",
                model: "356 Speedster",
                year: "1954",
                name: "Porsche 356 Speedster 1954",
                image: "./Imagenes/Porsche 356 Speedster 1954.jpg",

                clues: [
                    "This classic German sports car came before the famous 911.",
                    "It has a lightweight and simple roadster design.",
                    "This is the 1954 356 Speedster."
                ]
            },

            {
                brand: "Ferrari",
                model: "250 GT",
                year: "1959",
                name: "Ferrari 250 GT 1959",
                image: "./Imagenes/Ferrari 250 GT 1959.jpg",

                clues: [
                    "This Italian sports car belongs to Ferrari's famous 250 family.",
                    "It became known for both racing and grand touring.",
                    "This is the 1959 Ferrari 250 GT."
                ]
            }

        ]
    },


    /* =====================================
       LEVEL 2
    ===================================== */

    {
        name: "OLD SPORTS CARS",

        cars: [

            {
                brand: "Ford",
                model: "GT40 Mk I",
                year: "1966",
                name: "Ford GT40 Mk I 1966",
                image: "./Imagenes/Ford GT40 Mk I 1966.jpg",

                clues: [
                    "This American-British racing car was created to compete at Le Mans.",
                    "It became famous for defeating Ferrari at the 24 Hours of Le Mans.",
                    "This is the Mk I version from 1966."
                ]
            },

            {
                brand: "Lamborghini",
                model: "Miura P400",
                year: "1967",
                name: "Lamborghini Miura P400 1967",
                image: "./Imagenes/Lamborghini Miura P400 1967.jpg",

                clues: [
                    "This Italian car helped define the modern supercar.",
                    "It uses a mid-mounted V12 engine.",
                    "This is the 1967 Miura P400."
                ]
            },

            {
                brand: "Chevrolet",
                model: "Camaro",
                year: "1968",
                name: "Chevrolet Camaro Z/28 1968",
                image: "imagenes/Chevrolet Camaro  1968.jpg",

                clues: [
                    "This American performance car was created by Chevrolet.",
                    "The Z/28 version was designed with performance in mind.",
                    "This is the 1968 Camaro Z/28."
                ]
            },

            {
                brand: "Dodge",
                model: "Charger R/T",
                year: "1968",
                name: "Dodge Charger R/T 1968",
                image: "./Imagenes/Dodge Charger 1968.jpg",

                clues: [
                    "This American muscle car became famous for its aggressive design.",
                    "The R/T badge identifies a high-performance version.",
                    "This is the 1968 Charger R/T."
                ]
            },

            {
                brand: "De Tomaso",
                model: "Pantera",
                year: "1971",
                name: "De Tomaso Pantera 1971",
                image: "./Imagenes/De Tomaso Pantera 1971.jpg",

                clues: [
                    "This sports car was produced by an Italian manufacturer.",
                    "It combined Italian styling with an American V8 engine.",
                    "This is the 1971 De Tomaso Pantera."
                ]
            }

        ]
    },


    /* =====================================
       LEVEL 3
    ===================================== */

    {
        name: "80s & 90s LEGENDS",

        cars: [

            {
                brand: "Ferrari",
                model: "Testarossa",
                year: "1984",
                name: "Ferrari Testarossa 1984",
                image: "./Imagenes/Ferrari Testarossa 1984.jpg",

                clues: [
                    "This Italian supercar became one of Ferrari's most recognizable models.",
                    "It is famous for its wide rear design and side air intakes.",
                    "This is the original 1984 Testarossa."
                ]
            },

            {
                brand: "Lamborghini",
                model: "Countach 5000 QV",
                year: "1985",
                name: "Lamborghini Countach 5000 QV 1985",
                image: "./Imagenes/Lamborghini Countach 5000 QV 1985.jpeg",

                clues: [
                    "This Italian supercar is famous for its wedge-shaped design.",
                    "It uses Lamborghini's V12 engine.",
                    "This is the 5000 QV version from 1985."
                ]
            },

            {
                brand: "Porsche",
                model: "959",
                year: "1986",
                name: "Porsche 959 1986",
                image: "./Imagenes/Porsche 959 1986.jpg",

                clues: [
                    "This German supercar was technologically advanced for its time.",
                    "It featured all-wheel drive and advanced engineering.",
                    "This is the 1986 Porsche 959."
                ]
            },

            {
                brand: "BMW",
                model: "M3 E30",
                year: "1988",
                name: "BMW M3 E30 1988",
                image: "./Imagenes/BMW M3 E30 1988.jpg",

                clues: [
                    "This German performance car became a legend in touring car racing.",
                    "It is part of BMW's famous M division.",
                    "This is the 1988 M3 E30."
                ]
            },

            {
                brand: "Ferrari",
                model: "F40",
                year: "1987",
                name: "Ferrari F40 1987",
                image: "./Imagenes/Ferrari F40 1987.jpg",

                clues: [
                    "This Ferrari was created to celebrate the company's 40th anniversary.",
                    "It is known for its lightweight construction and twin-turbo V8.",
                    "This is the 1987 Ferrari F40."
                ]
            }

        ]
    },


    /* =====================================
       LEVEL 4
    ===================================== */

    {
        name: "MODERN SUPERCARS",

        cars: [

            {
                brand: "Ferrari",
                model: "SF90 Stradale",
                year: "2019",
                name: "Ferrari SF90 Stradale 2019",
                image: "./Imagenes/Ferrari SF90 Stradale 2019.jpg",

                clues: [
                    "This modern Italian supercar combines a V8 engine with electric motors.",
                    "It is named after Ferrari's Formula 1 team.",
                    "This is the 2019 SF90 Stradale."
                ]
            },

            {
                brand: "Lamborghini",
                model: "Revuelto",
                year: "2023",
                name: "Lamborghini Revuelto 2023",
                image: "./Imagenes/Lamborghini Revuelto 2023.jpg",

                clues: [
                    "This modern Lamborghini uses a V12 engine and hybrid technology.",
                    "It replaced the Aventador in Lamborghini's lineup.",
                    "This is the 2023 Revuelto."
                ]
            },

            {
                brand: "McLaren",
                model: "750S",
                year: "2023",
                name: "McLaren 750S 2023",
                image: "./Imagenes/McLaren 750S 2023.jpg",

                clues: [
                    "This British supercar comes from McLaren.",
                    "Its name refers to its approximate horsepower.",
                    "This is the 2023 750S."
                ]
            },

            {
                brand: "Porsche",
                model: "911 GT3 992",
                year: "2021",
                name: "Porsche 911 GT3 992 2021",
                image: "./Imagenes/Porsche 911 GT3 992 2021.jpg",

                clues: [
                    "This performance car belongs to the famous Porsche 911 family.",
                    "The GT3 is focused strongly on track performance.",
                    "This is the 992-generation GT3 from 2021."
                ]
            },

            {
                brand: "Chevrolet",
                model: "Corvette C8 Stingray",
                year: "2020",
                name: "Chevrolet Corvette C8 Stingray 2020",
                image: "./Imagenes/Chevrolet Corvette C8 Stingray 2020.webp",

                clues: [
                    "This American sports car changed to a mid-engine layout.",
                    "It is part of the eighth generation of the Corvette.",
                    "This is the 2020 C8 Stingray."
                ]
            }

        ]
    }

];


/* =========================================
   VARIABLES
========================================= */

let currentLevel = 0;
let currentRound = 0;

let score = 0;
let levelScore = 0;

let clueIndex = 0;

let timeLeft = 30;
let timeStart = 30;

let timerInterval = null;
let lastTimerUpdate = 0;

let gameFinished = false;
let answerLocked = false;


/* =========================================
   ELEMENTOS HTML
========================================= */

const startScreen =
    document.getElementById("start-screen");

const gameScreen =
    document.getElementById("game-screen");

const endScreen =
    document.getElementById("end-screen");

const levelCards =
    document.querySelectorAll(".level-card");

const levelName =
    document.getElementById("level-name");

const roundNumber =
    document.getElementById("round-number");

const scoreDisplay =
    document.getElementById("score");

const timer =
    document.getElementById("timer");

const timeBar =
    document.getElementById("time-bar");

const progressBar =
    document.getElementById("progress-bar");

const progressText =
    document.getElementById("progress-text");

const carImage =
    document.getElementById("car-image");

const clueText =
    document.getElementById("clue-text");

const clueNumber =
    document.getElementById("clue-number");

const clueBtn =
    document.getElementById("clue-btn");

const answersContainer =
    document.getElementById("answers");

const message =
    document.getElementById("message");

const menuBtn =
    document.getElementById("menu-btn");

const finalLevel =
    document.getElementById("final-level");

const finalScore =
    document.getElementById("final-score");

const finalStreak =
    document.getElementById("final-streak");

const finalMessage =
    document.getElementById("final-message");

const playAgainBtn =
    document.getElementById("play-again");

const levelsBtn =
    document.getElementById("levels-btn");


/* =========================================
   MEZCLAR ARRAY
========================================= */

function shuffle(array) {

    const newArray = [...array];

    for (
        let i = newArray.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            newArray[i],
            newArray[j]
        ] = [
            newArray[j],
            newArray[i]
        ];

    }

    return newArray;
}


/* =========================================
   TODOS LOS CARROS
========================================= */

function getAllCars() {

    return levels.flatMap(
        level => level.cars
    );

}


/* =========================================
   RESPUESTAS ALEATORIAS
========================================= */

function getRandomOptions(correctCar) {

    const allCars =
        getAllCars();

    const incorrectCars =
        allCars.filter(
            car =>
                car.name !== correctCar.name
        );

    const randomIncorrect =
        shuffle(incorrectCars)
        .slice(0, 3);

    return shuffle([
        correctCar,
        ...randomIncorrect
    ]);

}


/* =========================================
   SELECCIONAR NIVEL
========================================= */

function selectLevel(levelIndex) {

    currentLevel = levelIndex;

    currentRound = 0;

    score = 0;

    levelScore = 0;

    gameFinished = false;

    answerLocked = false;

    clearInterval(timerInterval);

    startScreen.classList.add("hidden");

    endScreen.classList.add("hidden");

    gameScreen.classList.remove("hidden");


    /* MEZCLAR CARROS */

    levels[currentLevel].cars =
        shuffle(
            levels[currentLevel].cars
        );

    loadRound();

}


/* =========================================
   CARGAR RONDA
========================================= */

function loadRound() {

    clearInterval(timerInterval);

    answerLocked = false;

    clueIndex = 0;

    timeLeft = 30;

    timeStart = 30;


    const level =
        levels[currentLevel];

    const car =
        level.cars[currentRound];


    /* HEADER */

    levelName.textContent =
        level.name;

    roundNumber.textContent =
        `${currentRound + 1} / 5`;

    scoreDisplay.textContent =
        levelScore;


    /* PROGRESO */

    const progress =
        ((currentRound + 1) / 5) * 100;

    progressBar.style.width =
        `${progress}%`;

    progressText.textContent =
        `${currentRound + 1} / 5`;


    /* BARRA DE TIEMPO */

    timeBar.style.width =
        "100%";


    /* IMAGEN */

    carImage.style.opacity = "0";

    carImage.src = car.image;

    carImage.alt =
        `Guess the ${car.name}`;

    carImage.onload = () => {

        carImage.style.opacity =
            "1";

    };


    carImage.onerror = () => {

        console.error(
            "No se pudo cargar:",
            car.image
        );

        carImage.style.opacity =
            "1";

    };


    /* PISTA */

    clueText.textContent =
        car.clues[0];

    clueNumber.textContent =
        "1";

    clueBtn.disabled = false;

    clueBtn.textContent =
        "UNLOCK NEXT CLUE";


    /* MENSAJE */

    message.textContent = "";

    message.className =
        "message";


    /* RESPUESTAS */

    createAnswers(car);


    /* TIMER */

    updateTimerDisplay();

    startTimer();

}


/* =========================================
   CREAR RESPUESTAS
========================================= */

function createAnswers(correctCar) {

    answersContainer.innerHTML = "";

    const options =
        getRandomOptions(correctCar);

    options.forEach(car => {

        const button =
            document.createElement("button");

        button.classList.add(
            "answer-btn"
        );

        button.textContent =
            car.name;

        button.dataset.answer =
            car.name;

        button.addEventListener(
            "click",
            () =>
                checkAnswer(
                    car,
                    correctCar
                )
        );

        answersContainer.appendChild(
            button
        );

    });

}


/* =========================================
   SIGUIENTE PISTA
========================================= */

function showNextClue() {

    if (answerLocked) {
        return;
    }

    const car =
        levels[currentLevel]
        .cars[currentRound];


    if (
        clueIndex <
        car.clues.length - 1
    ) {

        clueIndex++;

        clueText.textContent =
            car.clues[clueIndex];

        clueNumber.textContent =
            clueIndex + 1;


        if (
            clueIndex ===
            car.clues.length - 1
        ) {

            clueBtn.textContent =
                "ALL CLUES SHOWN";

            clueBtn.disabled =
                true;

        }

    }

}


/* =========================================
   TIMER
========================================= */

function startTimer() {

    clearInterval(timerInterval);

    timeStart = timeLeft;

    lastTimerUpdate =
        Date.now();


    timerInterval =
        setInterval(() => {

            const now =
                Date.now();

            const elapsed =
                (now - lastTimerUpdate)
                / 1000;

            lastTimerUpdate =
                now;


            /*
            -------------------------------
            VELOCIDAD
            -------------------------------

            30 - 20 = normal

            20 - 10 = 1.25x

            10 - 5 = 1.5x

            5 - 0 = 2x
            */

            let speed = 1;


            if (timeLeft <= 20) {

                speed = 1.25;

            }


            if (timeLeft <= 10) {

                speed = 1.5;

            }


            if (timeLeft <= 5) {

                speed = 2;

            }


            timeLeft -=
                elapsed * speed;


            if (timeLeft <= 0) {

                timeLeft = 0;

                updateTimerDisplay();

                clearInterval(
                    timerInterval
                );

                timeOut();

                return;

            }


            updateTimerDisplay();

        }, 50);

}


/* =========================================
   ACTUALIZAR TIMER
========================================= */

function updateTimerDisplay() {

    const displayTime =
        Math.ceil(timeLeft);


    timer.textContent =
        displayTime;


    /*
    BARRA
    */

    const percentage =
        (timeLeft / timeStart) * 100;


    timeBar.style.width =
        `${Math.max(
            0,
            percentage
        )}%`;


    /*
    COLORES
    */

    timer.classList.remove(
        "warning",
        "danger"
    );


    if (timeLeft <= 10) {

        timer.classList.add(
            "warning"
        );

    }


    if (timeLeft <= 5) {

        timer.classList.remove(
            "warning"
        );

        timer.classList.add(
            "danger"
        );

    }

}


/* =========================================
   TIEMPO AGOTADO
========================================= */

function timeOut() {

    if (answerLocked) {
        return;
    }

    answerLocked = true;


    const correctCar =
        levels[currentLevel]
        .cars[currentRound];


    const buttons =
        document.querySelectorAll(
            ".answer-btn"
        );


    buttons.forEach(button => {

        button.disabled = true;


        if (
            button.dataset.answer ===
            correctCar.name
        ) {

            button.classList.add(
                "correct"
            );

        }

    });


    message.textContent =
        `TIME'S UP! The correct answer was ${correctCar.name}.`;

    message.className =
        "message-time";


    setTimeout(() => {

        nextRound();

    }, 1800);

}


/* =========================================
   COMPROBAR RESPUESTA
========================================= */

function checkAnswer(
    selectedCar,
    correctCar
) {

    if (answerLocked) {
        return;
    }

    answerLocked = true;

    clearInterval(
        timerInterval
    );


    const buttons =
        document.querySelectorAll(
            ".answer-btn"
        );


    buttons.forEach(button => {

        button.disabled = true;

    });


    /* CORRECTA */

    if (
        selectedCar.name ===
        correctCar.name
    ) {

        levelScore++;

        score++;

        scoreDisplay.textContent =
            levelScore;


        buttons.forEach(button => {

            if (
                button.dataset.answer ===
                correctCar.name
            ) {

                button.classList.add(
                    "correct"
                );

            }

        });


        message.textContent =
            "✓ CORRECT! +1 POINT";

        message.className =
            "message-correct";

    }


    /* INCORRECTA */

    else {

        buttons.forEach(button => {

            if (
                button.dataset.answer ===
                selectedCar.name
            ) {

                button.classList.add(
                    "incorrect"
                );

            }


            if (
                button.dataset.answer ===
                correctCar.name
            ) {

                button.classList.add(
                    "correct"
                );

            }

        });


        message.textContent =
            `✗ INCORRECT! The correct answer was ${correctCar.name}.`;

        message.className =
            "message-incorrect";

    }


    setTimeout(() => {

        nextRound();

    }, 1800);

}


/* =========================================
   SIGUIENTE RONDA
========================================= */

function nextRound() {

    if (gameFinished) {
        return;
    }


    currentRound++;


    if (
        currentRound >=
        levels[currentLevel].cars.length
    ) {

        finishLevel();

        return;

    }


    loadRound();

}


/* =========================================
   TERMINAR NIVEL
========================================= */

function finishLevel() {

    clearInterval(
        timerInterval
    );

    gameFinished = true;


    gameScreen.classList.add(
        "hidden"
    );

    endScreen.classList.remove(
        "hidden"
    );


    finalLevel.textContent =
        levels[currentLevel].name;


    finalScore.textContent =
        `${levelScore} / 5`;


    finalStreak.textContent =
        levelScore;


    if (levelScore === 5) {

        finalMessage.textContent =
            "PERFECT SCORE! You know your sports cars! 🏆";

    }

    else if (levelScore >= 4) {

        finalMessage.textContent =
            "Excellent job! You really know sports cars! 🔥";

    }

    else if (levelScore >= 3) {

        finalMessage.textContent =
            "Great job! Keep learning about sports cars! 🚘";

    }

    else if (levelScore >= 1) {

        finalMessage.textContent =
            "Good effort! Try the level again! 💪";

    }

    else {

        finalMessage.textContent =
            "Keep practicing and try again! 🏁";

    }

}


/* =========================================
   VOLVER A NIVELES
========================================= */

function showLevelsMenu() {

    clearInterval(
        timerInterval
    );

    gameFinished = true;


    gameScreen.classList.add(
        "hidden"
    );

    endScreen.classList.add(
        "hidden"
    );

    startScreen.classList.remove(
        "hidden"
    );

}


/* =========================================
   JUGAR OTRA VEZ
========================================= */

function playAgain() {

    clearInterval(
        timerInterval
    );


    endScreen.classList.add(
        "hidden"
    );

    gameScreen.classList.remove(
        "hidden"
    );


    currentRound = 0;

    levelScore = 0;

    score = 0;

    gameFinished = false;

    answerLocked = false;


    /*
    --------------------------------
    MEZCLAR NUEVAMENTE LOS CARROS
    --------------------------------
    */

    levels[currentLevel].cars =
        shuffle(
            levels[currentLevel].cars
        );


    loadRound();

}


/* =========================================
   EVENTOS
========================================= */


/* NIVELES */

levelCards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            const levelIndex =
                Number(
                    card.dataset.level
                );

            selectLevel(
                levelIndex
            );

        }
    );

});


/* PISTAS */

clueBtn.addEventListener(
    "click",
    showNextClue
);


/* VOLVER */

menuBtn.addEventListener(
    "click",
    showLevelsMenu
);


/* PLAY AGAIN */

playAgainBtn.addEventListener(
    "click",
    playAgain
);


/* OTRO NIVEL */

levelsBtn.addEventListener(
    "click",
    showLevelsMenu
);


/* =========================================
   INICIO
========================================= */

console.log(
    "Guess The Sports Car loaded successfully."
);

console.log(
    "20 cars available across 4 levels."
);