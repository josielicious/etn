// Contestant Class Definition //
class Contestant {
    constructor(name, image, gender = 'female') {
        this._name = name;
        this._image = image;
        this._gender = gender;

        this.role = 'The Savant';
        this.helper = null;

        this.placementTexts = [];
        this.placementColors = [];

        this.workScore = 0;

        this.relationships = {};
    }

    get name() {
        return this._name;
    }

    get image() {
        return this._image;
    }

    get gender() {
        return this._gender;
    }
}

// Host //
const joeygraceffa = new Contestant('Joey Graceffa', 'resources/images/contestants/TLT/joeygraceffa.webp', 'male');

// Season 1 Contestants //
const andreabrooks = new Contestant('Andrea Brooks', 'resources/images/contestants/1/andreabrooks.webp');
const evagutowski = new Contestant('Eva Gutowski', 'resources/images/contestants/1/evagutowski.webp');
const glozellgreen = new Contestant('Glozell Green', 'resources/images/contestants/1/glozellgreen.webp');
const lelepons = new Contestant('Lele Pons', 'resources/images/contestants/1/lelepons.webp');
const matthaag = new Contestant('Matt Haag', 'resources/images/contestants/1/matthaag.webp', 'male');
const oliwhite = new Contestant('Oli White', 'resources/images/contestants/1/oliwhite.webp', 'male');
const shanedawson = new Contestant('Shane Dawson', 'resources/images/contestants/1/shanedawson.webp', 'male');
const sierrafurtado = new Contestant('Sierra Furtado', 'resources/images/contestants/1/sierrafurtado.webp');

// Season 2 Contestants //
const andrearusset = new Contestant('Andrea Russet', 'resources/images/contestants/2/andrearusset.webp');
const jessewellens = new Contestant('Jesse Wellens', 'resources/images/contestants/2/jessewellens.webp', 'male');
const laurenriihimaki = new Contestant('Lauren Riihimaki', 'resources/images/contestants/2/laurenriihimaki.webp');
const lizakoshy = new Contestant('Liza Koshy', 'resources/images/contestants/2/lizakoshy.webp');
const tyleroakley = new Contestant('Tyler Oakley', 'resources/images/contestants/2/tyleroakley.webp', 'male');

// Season 3 Contestants //
const jccaylen = new Contestant('JC Caylen', 'resources/images/contestants/3/jccaylen.webp', 'male');
const matthewpatrick = new Contestant('Matthew Patrick', 'resources/images/contestants/3/matthewpatrick.webp', 'male');
const roifabito = new Contestant('Roi Fabito', 'resources/images/contestants/3/roifabito.webp', 'male');
const safiyanygaard = new Contestant('Safiya Nygaard', 'resources/images/contestants/3/safiyanygaard.webp');
const tealadunn = new Contestant('Teala Dunn', 'resources/images/contestants/3/tealadunn.webp');

// Season 4 Contestants //
const alexwassabi = new Contestant('Alex Wassabi', 'resources/images/contestants/4/alexwassabi.webp', 'male');
const bretmanrock = new Contestant('Bretman Rock', 'resources/images/contestants/4/bretmanrock.webp', 'male');
const colleenballinger = new Contestant('Colleen Ballinger', 'resources/images/contestants/4/colleenballinger.webp');
const destormpower = new Contestant('DeStorm Power', 'resources/images/contestants/4/destormpower.webp', 'male');
const gabbiehanna = new Contestant('Gabbie Hanna', 'resources/images/contestants/4/gabbiehanna.webp');
const justineezarik = new Contestant('Justine Ezarik', 'resources/images/contestants/4/justineezarik.webp');
const timothydelaghetto = new Contestant('Timothy DeLaGhetto', 'resources/images/contestants/4/timothydelaghetto.webp', 'male');

// The Lost Tapes Contestants //
const jojosiwa = new Contestant('Jojo Siwa', 'resources/images/contestants/TLT/jojosiwa.webp');
const mannymua = new Contestant('Manny MUA', 'resources/images/contestants/TLT/mannymua.webp', 'male');
const nikitadragun = new Contestant('Nikita Dragun', 'resources/images/contestants/TLT/nikitadragun.webp');
const rosannapansino = new Contestant('Rosanna Pansino', 'resources/images/contestants/TLT/rosannapansino.webp');
const tanamongeau = new Contestant('Tana Mongeau', 'resources/images/contestants/TLT/tanamongeau.webp');

const PREDEFINED_CASTS = {
    'Season 1': [joeygraceffa, evagutowski, oliwhite, lelepons, timothydelaghetto, matthaag, sierrafurtado, glozellgreen, justineezarik, andreabrooks, shanedawson],
    'Season 2': [joeygraceffa, andrearusset, alexwassabi, destormpower, gabbiehanna, jessewellens, laurenriihimaki, lizakoshy, tanamongeau, tyleroakley],
    'Season 3': [joeygraceffa, colleenballinger, jccaylen, mannymua, matthewpatrick, nikitadragun, roifabito, rosannapansino, safiyanygaard, tealadunn],
    'Season 4': [joeygraceffa, alexwassabi, bretmanrock, colleenballinger, destormpower, gabbiehanna, justineezarik, rosannapansino, tanamongeau, timothydelaghetto],
    'The Lost Tapes': [joeygraceffa, jojosiwa, mannymua, nikitadragun, rosannapansino, tanamongeau]
};

const allContestants = [
    evagutowski, oliwhite, lelepons, timothydelaghetto, matthaag, sierrafurtado, glozellgreen, justineezarik, andreabrooks, shanedawson,
    andrearusset, alexwassabi, destormpower, gabbiehanna, jessewellens, laurenriihimaki, lizakoshy, tanamongeau, tyleroakley,
    colleenballinger, jccaylen, mannymua, matthewpatrick, nikitadragun, roifabito, rosannapansino, safiyanygaard, tealadunn,
    bretmanrock, jojosiwa, joeygraceffa
];

// Cast Management //
const castmatesList = document.getElementById('castmates-list');
const castSizeDisplay = document.getElementById('cast-size');
const searchInput = document.getElementById('search-castmate');
const searchResultsDiv = document.getElementById('search-results');
const randomCastmateButton = document.getElementById('random-castmate');
const predefinedCastButton = document.getElementById('predefined-cast');
const predefinedMenu = document.getElementById('predefined-menu');

let currentCast = [];

const getPlaceholderImage = (name) => {
    const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    return `https://placehold.co/100x100/1abc9c/ffffff?text=${initials}`;
};

const renderCastmates = () => {
    castmatesList.innerHTML = '';
    castSizeDisplay.textContent = currentCast.length;

    if (currentCast.length === 0) {
        castmatesList.innerHTML = '<p style="font-style: italic; opacity: 0.8;">The cast is empty! Use the search bar or "Add Random" to build your season.<br>Or if you are lazy, or wanna resimulate a past cast, use the "Predefined Casts" button.</p>';
        return;
    }

    if (currentCast.length >= 3) {
        simulationButton.style.display = 'inline-block';
    } else {
        simulationButton.style.display = 'none';
    }

    currentCast.forEach((contestant, index) => {
        const memberDiv = document.createElement('div');
        memberDiv.id = 'member-container';
        memberDiv.innerHTML = `
                    <img 
                        src="${contestant.image}" 
                        alt="${contestant.name}"
                        onerror="this.onerror=null; this.src='${getPlaceholderImage(contestant.name)}';">
                    <p>${contestant.name}</p>
                    <button class="remove-castmate" data-index="${index}">X</button>
                `;
        castmatesList.appendChild(memberDiv);
    });

    document.querySelectorAll('.remove-castmate').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = parseInt(e.target.dataset.index);
            removeCastmate(index);
        });
    });
};

const renderSearchResults = (results) => {
    searchResultsDiv.innerHTML = '';

    if (results.length === 0) {
        searchResultsDiv.style.display = 'none';
        return;
    }

    results.forEach(contestant => {
        const resultItem = document.createElement('div');
        resultItem.className = 'search-result-item';
        resultItem.textContent = contestant.name;

        resultItem.dataset.name = contestant.name;

        resultItem.addEventListener('click', () => {
            addCastmate(contestant);
            searchInput.value = '';
            searchResultsDiv.style.display = 'none';
        });

        searchResultsDiv.appendChild(resultItem);
    });
    searchResultsDiv.style.display = 'block';
};

const setupPredefinedMenu = () => {
    predefinedMenu.innerHTML = '';

    Object.keys(PREDEFINED_CASTS).forEach(seasonName => {
        const item = document.createElement('div');
        item.className = 'predefined-item';
        item.textContent = seasonName;
        item.addEventListener('click', () => {
            currentCast = [...PREDEFINED_CASTS[seasonName]];
            renderCastmates();
            predefinedMenu.style.display = 'none';
        });
        predefinedMenu.appendChild(item);
    });
};

const togglePredefinedMenu = () => {
    predefinedMenu.style.display = predefinedMenu.style.display === 'block' ? 'none' : 'block';
    if (predefinedMenu.style.display === 'block') {
        searchResultsDiv.style.display = 'none';
    }
};

const addCastmate = (contestant) => {
    if (currentCast.length >= allContestants.length) {
        console.warn('Max cast size reached!');
        return;
    }
    if (currentCast.some(c => c.name === contestant.name)) {
        console.warn(`${contestant.name} is already in the cast!`);
        return;
    }

    currentCast.push(contestant);
    renderCastmates();
};

const removeCastmate = (index) => {
    currentCast.splice(index, 1);
    renderCastmates();
};

const addRandomCastmate = () => {
    if (currentCast.length >= allContestants.length) return;

    const availableContestants = allContestants.filter(
        c => !currentCast.some(cc => cc.name === c.name)
    );

    if (availableContestants.length === 0) {
        console.warn('All available contestants have been added.');
        return;
    }

    const randomIndex = Math.floor(Math.random() * availableContestants.length);
    addCastmate(availableContestants[randomIndex]);
};

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    if (query.length === 0) {
        searchResultsDiv.style.display = 'none';
        return;
    }

    const filteredContestants = allContestants.filter(contestant =>
        contestant.name.toLowerCase().includes(query) &&
        !currentCast.some(c => c.name === contestant.name)
    )

    renderSearchResults(filteredContestants);
});

document.addEventListener('click', (e) => {
    if (e.target !== searchInput && !searchResultsDiv.contains(e.target)) {
        searchResultsDiv.style.display = 'none';
    }
});

predefinedCastButton.addEventListener('click', togglePredefinedMenu);
randomCastmateButton.addEventListener('click', addRandomCastmate);

setupPredefinedMenu();
renderCastmates();

// Simulation Initialization //
const simulationButton = document.getElementById('start-simulation');
simulationButton.addEventListener('click', startSimulation);

let episodeNumber = 0;
let deadCast = [];

function startSimulation() {
    if (currentCast.length <= 2) {
        alert('Please add at least 3 castmates to start the simulation.');
        return;
    }

    startEntranceSequence();
}

// UI Class //
class UI {
    constructor() {
        this.container = document.getElementById('container');
    }

    wipe() {
        this.container.innerHTML = '';
    }

    addImage(src, alt = '', style = 'contestant', transition = false) {
        const img = document.createElement('img');
        img.src = src;
        img.alt = alt;
        if (transition === true) {
            img.style.transition = 'opacity 0.5s ease-in-out';
            img.style.opacity = '0';
        }
        this.container.appendChild(img);

        if (style === 'contestant') {
            img.style.width = '100px';
            img.style.height = '100px';
            img.style.objectFit = 'cover';
            img.style.borderRadius = '50%';
            img.style.border = '2px solid #be9871';
            img.style.margin = '5px';
        } else if (style === 'dead') {
            img.style.width = '100px';
            img.style.height = '100px';
            img.style.objectFit = 'cover';
            img.style.borderRadius = '50%';
            img.style.border = '2px solid #be9871';
            img.style.margin = '5px';
            img.style.filter = 'grayscale(100%)';
        }

        return img;
    }

    addParagraph(text, id = '') {
        const p = document.createElement('p');
        p.textContent = text;
        if (id) p.id = id;
        this.container.appendChild(p);
    }

    addBoldParagraph(text, id = '') {
        const p = document.createElement('p');
        const strong = document.createElement('strong');
        strong.textContent = text;
        p.appendChild(strong);
        if (id) p.id = id;
        this.container.appendChild(p);
    }

    addButton(text, clickHandler) {
        const button = document.createElement('button');
        button.textContent = text;
        button.addEventListener('click', clickHandler);
        this.container.appendChild(button);
    }

    addRow() {
        const hr = document.createElement('hr');
        this.container.appendChild(hr);
    }
}

const ui = new UI();

function initializeRelationships() {
    console.log('Initializing relationships...');
    const livingCast = currentCast;

    for (let i = 0; i < livingCast.length; i++) {
        const contestantA = livingCast[i];

        for (let j = i + 1; j < livingCast.length; j++) {
            const contestantB = livingCast[j];
            const initialScore = Math.floor(Math.random() * 6) - 5;

            contestantA.relationships[contestantB.name] = initialScore;
            contestantB.relationships[contestantA.name] = initialScore;
        }
    }
    console.log('Initial Relationships:', currentCast.map(c => ({ name: c.name, relationships: c.relationships })));
}

function updateRelationship(contestantA, contestantB, scoreChange) {
    const minScore = -10;
    const maxScore = 10;

    if (!contestantA.relationships[contestantB.name]) {
        contestantA.relationships[contestantB.name] = 0;
    }
    if (!contestantB.relationships[contestantA.name]) {
        contestantB.relationships[contestantA.name] = 0;
    }

    let newScoreA = contestantA.relationships[contestantB.name] + scoreChange;
    newScoreA = Math.min(Math.max(newScoreA, minScore), maxScore);
    contestantA.relationships[contestantB.name] = newScoreA;

    let newScoreB = contestantB.relationships[contestantA.name] + scoreChange;
    newScoreB = Math.min(Math.max(newScoreB, minScore), maxScore);
    contestantB.relationships[contestantA.name] = newScoreB;
    console.log(`${contestantA.name} and ${contestantB.name} relationship updated to ${newScoreA}`);
}

function resimulate() {
    finaleStretchLastEp = false;

    episodeNumber = 0;

    seasonOver = false;

    captureChallenge = false;
    burialHappened = false;
    pairChallenge = false;
    doubleLive = false;
    doubleDeath = false;
    currentCast.push(...deadCast);
    deadCast = [];

    currentCast.forEach(contestant => {
        contestant.helper = null;
        contestant.role = '';

        contestant.workScore = 0;

        contestant.placementTexts = [];
        contestant.placementColors = [];

        contestant.relationships = {};
    });

    startSimulation();
}

const roleList = [
    { name: 'The Savant', gender: 'both' },
    { name: 'The Journalist', gender: 'both' },
    { name: 'The Big Game Hunter', gender: 'male' },
    { name: 'The Hustler', gender: 'male' },
    { name: 'The Mobster', gender: 'male' },
    { name: 'The Professor', gender: 'both' },
    { name: 'The Heiress', gender: 'female' },
    { name: 'The Jazz Singer', gender: 'both' },
    { name: 'The Gambler', gender: 'both' },
    { name: 'The Fixer', gender: 'both' },
    { name: 'The Renegade', gender: 'both' },
    { name: 'The Mystic', gender: 'both' },
    { name: 'The Thespian', gender: 'both' },
    { name: 'The Novelist', gender: 'both' },
    { name: 'The Vaudevillian', gender: 'both' },
    { name: 'The Saloon Girl', gender: 'female' },
    { name: 'The Explorer', gender: 'both' },
    { name: 'The Railroad Tycoon', gender: 'male' },
    { name: 'The Outlaw', gender: 'both' },
    { name: 'The Engineer', gender: 'male' },
    { name: 'The Detective', gender: 'both' },
    { name: 'The Troublemaker', gender: 'both' },
    { name: 'The Record Producer', gender: 'male' },
    { name: 'The Jet-Setter', gender: 'both' },
    { name: 'The Investigative Reporter', gender: 'both' },
    { name: 'The Disco Dancer', gender: 'both' },
    { name: 'The Super Spy', gender: 'both' },
    { name: 'The Daredevil', gender: 'both' },
    { name: 'The Hippie', gender: 'both' },
    { name: 'The Duchess', gender: 'female' },
    { name: 'The Playboy', gender: 'male' },
    { name: 'The Socialite', gender: 'female' },
    { name: 'The Aviator', gender: 'both' },
    { name: 'The Hollywood Star', gender: 'both' },
    { name: 'The Pin-Up Girl', gender: 'female' },
    { name: 'The Enforcer', gender: 'both' },
    { name: 'The Con Man', gender: 'male' },
    { name: 'The Adventurer', gender: 'both' },
    { name: 'The Glam Rocker', gender: 'both' },
    { name: 'The Jock', gender: 'male' },
    { name: 'The Fitness Instructor', gender: 'both' },
    { name: 'The Burnout', gender: 'both' },
    { name: 'The Prom Queen', gender: 'female' }
];

const usedRoles = [];

function getRandomRole(gender = null) {
    let availableRoles = roleList.filter(role =>
        !usedRoles.includes(role.name) &&
        (gender === null || role.gender === gender || role.gender === 'both')
    );

    if (availableRoles.length === 0) {
        usedRoles = [];
        availableRoles = roleList.filter(role =>
            gender === null || role.gender === gender || role.gender === 'both'
        );
    }

    const selected = availableRoles[Math.floor(Math.random() * availableRoles.length)];
    usedRoles.push(selected.name);

    return selected.name;
}

function startEntranceSequence() {
    ui.wipe();

    console.log('Starting entrance sequence for the cast:', currentCast);
    initializeRelationships();

    ui.addBoldParagraph(`The ${currentCast.length} guests enter the house...`, 'episode-title');
    ui.addRow();

    currentCast.forEach((contestant, index) => {
        contestant.role = getRandomRole();

        ui.addImage(contestant.image, contestant.name);
        ui.addBoldParagraph(`${contestant.name} - ${contestant.role}`);
        ui.addParagraph(`${contestant.name} has entered the house!`);
    });

    ui.addButton('Begin', newEpisode);
}

let artifactsLeft = 0;

const workActions = {
    low: [
        'barely lifts a finger and ends up making a mess instead',
        'gets overwhelmed and sits on the floor breathing heavily',
        'wanders around aimlessly, pretending to look busy',
        'has a mini breakdown and isolates themselves in the bathroom',
        'starts cleaning something, then immediately gives up',
        'finds a sticky note and declares that it is a clue.',
        'opens a box and says "I REBUKE YOU SATAN".'
    ],
    mediumLow: [
        'attempts to work but gets distracted by every small noise',
        'starts a task, then abandons it halfway for something else',
        'complains quietly about how exhausting everything is',
        'keeps asking others if they’re doing things correctly',
        'tries organizing a drawer but ends up stuffing everything inside'
    ],
    medium: [
        'does their assigned task with moderate efficiency',
        'helps tidy up a room but misses some obvious spots',
        'searches for useful items but overlooks important ones',
        'does a decent job but needs occasional breaks',
        'works at a steady pace without attracting attention'
    ],
    mediumHigh: [
        'shows real focus and starts finding valuable items',
        'cleans a whole room impressively well',
        'discovers something interesting and documents it carefully',
        'coordinates quietly with others to be more productive',
        'keeps the momentum going and motivates nearby houseguests'
    ],
    high: [
        'works with remarkable dedication and finds clues quickly',
        'strategically organizes everyone’s tasks like a leader',
        'uncovers something extremely important to the storyline',
        'cleans, sorts, searches AND reports findings flawlessly',
        'singlehandedly accomplishes more than half the house combined'
    ]
};

const discussionPrompts = [
    (a, b) => `${a} and ${b} argue about who’s slacking the most.`,
    (a, b) => `${a} and ${b} team up and start working together efficiently.`,
    (a, b) => `${a} vents to ${b} about the stress of living in the house.`,
    (a, b) => `${a} and ${b} get distracted chatting about last night’s drama.`,
    (a, b) => `${a} teaches ${b} a better way to search the house.`,
    (a, b) => `${a} accuses ${b} of hiding items to sabotage the group.`,
    (a, b) => `${a} and ${b} discover something together and freak out.`,
    (a, b) => `${a} calls ${b} a beef jerky looking ass bitch`,
];

function houseguestWorkPhase() {
    currentCast.forEach(contestant => {
        contestant.workScore = Math.random() * 100;

        let actionList;
        if (contestant.workScore < 20) actionList = workActions.low;
        else if (contestant.workScore < 40) actionList = workActions.mediumLow;
        else if (contestant.workScore < 60) actionList = workActions.medium;
        else if (contestant.workScore < 80) actionList = workActions.mediumHigh;
        else actionList = workActions.high;

        const action = actionList[Math.floor(Math.random() * actionList.length)];

        ui.addImage(contestant.image, contestant.name);
        ui.addParagraph(`${contestant.name} ${action}.`);
    });

    const discussionCount = Math.floor(Math.random() * 3);

    for (let i = 0; i < discussionCount; i++) {
        const personA = currentCast[Math.floor(Math.random() * currentCast.length)];
        let personB = currentCast[Math.floor(Math.random() * currentCast.length)];

        while (personA === personB) {
            personB = currentCast[Math.floor(Math.random() * currentCast.length)];
        }

        const prompt = discussionPrompts[Math.floor(Math.random() * discussionPrompts.length)];

        ui.addImage(personA.image, personA.name);
        ui.addImage(personB.image, personB.name);
        ui.addParagraph(prompt(personA.name, personB.name));
    }
}

function worstRelationshipPair(person, group) {
    const livingCast = group.filter(c => c.name !== person.name);

    if (livingCast.length === 0) {
        return null;
    }

    let worstScore = 11;
    let worstContestant = null;

    for (const contestantB of livingCast) {
        const score = person.relationships[contestantB.name] || 0;

        if (score < worstScore) {
            worstScore = score;
            worstContestant = contestantB;
        }
    }

    console.log(`${person.name}'s worst relationship is with ${worstContestant ? worstContestant.name : 'nobody'}, score: ${worstScore}`);
    return worstContestant;
}

function bestRelationshipPair(person, group) {
    const livingCast = group.filter(c => c !== person);

    if (livingCast.length === 0) {
        return null;
    }

    let bestScore = -11;
    let bestContestant = null;

    for (const contestantB of livingCast) {
        const score = person.relationships[contestantB.name] || 0;

        if (score > bestScore) {
            bestScore = score;
            bestContestant = contestantB;
        }
    }

    console.log(`${person.name}'s best relationship is with ${bestContestant ? bestContestant.name : 'nobody'}, score: ${bestScore}`);
    return bestContestant;
}

let finaleStretchLastEp = false;

let votePool = [];
let deathNominees = [];

let captureChallenge = false;
let burialHappened = false;
let pairChallenge = false;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function newEpisode() {
    episodeNumber += 1;
    console.log('Starting a new episode with the current cast:', currentCast);

    if (episodeNumber === 1) {
        artifactsLeft = currentCast.length - 3;
    }

    deadCast.forEach(contestant => {
        contestant.placementColors.push('lightgray');
        contestant.placementTexts.push(' ');
    });

    if ((artifactsLeft == 0 && currentCast.length <= 3)) {
        startFinale();
        return;
    }

    ui.wipe();
    ui.addBoldParagraph(`Episode ${episodeNumber}`, 'episode-title');
    ui.addRow();

    votePool = [];

    if (episodeNumber === 1) {
        ui.addParagraph("The houseguests are settling in and getting to know each other...");
        if (Math.random() < 0.1 && currentCast.length > 10) {
            const poisonedContestantIndex = Math.floor(Math.random() * currentCast.length);
            const poisonedContestant = currentCast[poisonedContestantIndex];

            const nonPoisonedContestants = currentCast.filter(c => c.name !== poisonedContestant.name);
            nonPoisonedContestants.forEach(c => {
                c.workScore = Math.random() * 100;
            });
            const hardestWorker = nonPoisonedContestants.sort((a, b) => b.workScore - a.workScore)[0];

            ui.addImage(poisonedContestant.image, poisonedContestant.name);
            ui.addParagraph(`Oh no! ${poisonedContestant.name} has been poisoned...`);
            ui.addBoldParagraph(`The rest of the houseguests must find the antidote before it's too late!`);

            if (Math.random() < 0.5) {
                ui.addImage(poisonedContestant.image, poisonedContestant.name);
                ui.addParagraph(`Luckily, the houseguests found the antidote in time! ${poisonedContestant.name} has been cured!`);

                updateRelationship(poisonedContestant, hardestWorker, 3);

                ui.addImage(hardestWorker.image, hardestWorker.name);
                ui.addImage(poisonedContestant.image, poisonedContestant.name);
                ui.addParagraph(`${hardestWorker.name}'s efforts earned ${poisonedContestant.name}'s gratitude!`);
            } else {
                ui.addImage(poisonedContestant.image, poisonedContestant.name, 'dead');
                ui.addParagraph(`Unfortunately, the houseguests couldn't find the antidote in time. ${poisonedContestant.name} has been died...`);
                currentCast.splice(poisonedContestantIndex, 1);
                deadCast.unshift(poisonedContestant);

                ui.addImage(hardestWorker.image, hardestWorker.name);
                ui.addParagraph(`${hardestWorker.name} did the most work...`);

                currentCast.forEach(c => {
                    c.workScore = 0;
                });
            }
            ui.addParagraph(`The guests find out the must find ${artifactsLeft} artifacts to survive...`);
            ui.addBoldParagraph(`For each artifact found, they must cleanse it, in exchange for a human life...`);
        } else {
            ui.addParagraph(`The guests find out the must find ${artifactsLeft} artifacts to survive...`);
            ui.addBoldParagraph(`For each artifact found, they must cleanse it, in exchange for a human life...`);
        }

        ui.addRow();
    }

    houseguestWorkPhase();

    ui.addRow();
    if ((artifactsLeft == 1 && currentCast.length === 4 && Math.random() < 0.5) || artifactsLeft == 0 && currentCast.length === 4) {
        ui.addBoldParagraph(`The guests find the last artifact.`);
        artifactsLeft -= 1;
        if (Math.random() < 0.5) {
            const captured = currentCast[3];

            currentCast.forEach(contestant => {
                ui.addImage(contestant.image, contestant.name);
            })
            ui.addParagraph('All of the contestant reach the exit until...');

            ui.addImage(captured.image, captured.name);
            ui.addBoldParagraph(`${captured.name}  is stopped by an invisible force and dragged away...`);

            const deadIndex = currentCast.findIndex(c => c.name === captured.name);
            currentCast.splice(deadIndex, 1);
            deadCast.unshift(captured);

            captured.placementColors.push('red');
            captured.placementTexts.push('DEAD');

            currentCast.forEach(contestant => {
                contestant.placementColors.push('tomato');
                contestant.placementTexts.push('RACE');
            });

            finaleStretchLastEp = true;
        } else {
            currentCast.forEach(contestant => {
                contestant.workScore = Math.random() * 100;
            });

            const captured = currentCast.sort((a, b) => a.workScore - b.workScore)[0];

            currentCast.forEach(contestant => {
                ui.addImage(contestant.image, contestant.name);
            })
            ui.addParagraph('All of the contestant race for survival...');

            ui.addImage(captured.image, captured.name);
            ui.addBoldParagraph(`${captured.name} doesn't make it in time and is murdered.`);

            const deadIndex = currentCast.findIndex(c => c.name === captured.name);
            currentCast.splice(deadIndex, 1);
            deadCast.unshift(captured);

            captured.placementColors.push('red');
            captured.placementTexts.push('DEAD');

            currentCast.forEach(contestant => {
                contestant.placementColors.push('tomato');
                contestant.placementTexts.push('RACE');
            });
        }
        ui.addButton('Proceed', contestantProgress);
    } else {
        ui.addBoldParagraph(`Suddenly, the houseguests get chased by a monster.`);
        ui.addParagraph(`In the chaos, they scatter and search for artifacts to survive...`);

        currentCast.forEach(contestant => {
            contestant.workScore = Math.random() * 100;
        });

        const hardestWorker = currentCast.sort((a, b) => b.workScore - a.workScore)[0];
        ui.addImage(hardestWorker.image, hardestWorker.name);
        ui.addParagraph(`${hardestWorker.name} manages to find an artifact!`);

        artifactsLeft -= 1;
        ui.addRow();

        ui.addBoldParagraph(`To cleanse the artifact, a sacrifice must be made...`);
        if (Math.random() < 0.1 && !burialHappened) {
            burialHappened = true;

            ui.addParagraph(`A contestant must be BURRIED alive in order to cleanse the artifact...`);
            currentCast.forEach(contestant => {
                contestant.vote = worstRelationshipPair(contestant, currentCast);
                votePool.push(contestant.vote);
                ui.addImage(contestant.image, contestant.name);
                ui.addImage(contestant.vote.image, contestant.vote.image);
                ui.addParagraph(`${contestant.name} writes ${contestant.vote.name}'s name.`);
            });

            ui.addBoldParagraph(`The votes are in...`);
            ui.addParagraph('After shuffling the votes, the person meeting their fate is...');

            shuffleArray(votePool);

            const nominee = votePool[0];
            ui.addParagraph(`${nominee.name} has been chosen to be BURIED alive!`);

            if (Math.random() < 0.5) {
                ui.addImage(nominee.image, nominee.name, 'dead');
                ui.addParagraph(`The houseguests carry out the grim task, ${nominee.name} has been BURIED alive...`);
                const nomineeIndex = currentCast.findIndex(c => c.name === nominee.name);
                currentCast.splice(nomineeIndex, 1);
                deadCast.unshift(nominee);
            } else {
                ui.addImage(nominee.image, nominee.name);
                ui.addParagraph(`Suddenly ${nominee.name} runs away! The houseguests catch them.`);

                ui.addImage(nominee.image, nominee.name, 'dead');
                ui.addParagraph(`The houseguests carry out the grim task, ${nominee.name} has been BURIED alive...`);
                const nomineeIndex = currentCast.findIndex(c => c.name === nominee.name);
                currentCast.splice(nomineeIndex, 1);
                deadCast.unshift(nominee);
            }

            nominee.placementTexts.push('DEAD');
            nominee.placementColors.push('#b22222');

            const nonNominees = currentCast.filter(c => c.name !== nominee.name);
            nonNominees.forEach(c => {
                c.placementColors.push('white');
                c.placementTexts.push('SAFE');
            });
            ui.addButton('Proceed', contestantProgress);
        } else {
            ui.addParagraph(`The houseguests must vote a contestant each...`);
            currentCast.forEach(contestant => {
                contestant.vote = worstRelationshipPair(contestant, currentCast);
                votePool.push(contestant.vote);
                ui.addImage(contestant.image, contestant.name);
                ui.addImage(contestant.vote.image, contestant.vote.image);
                ui.addParagraph(`${contestant.name} chooses ${contestant.vote.name}'s tarot card.`);
            });

            ui.addBoldParagraph(`The votes are in...`);
            ui.addParagraph('After shuffling the votes, the first tarot card drawn is...');

            shuffleArray(votePool);


            const nominee1 = votePool[0];
            nominee1.helper = null;
            ui.addImage(nominee1.image, nominee1.name);
            ui.addParagraph(`The first card drawn reveals ${nominee1.name}!`);

            const remainingVotePool = votePool.slice(1);
            const filteredVotePool = remainingVotePool.filter(contestant => contestant.name !== nominee1.name);

            const nominee2 = filteredVotePool[0];
            nominee2.helper = null;
            ui.addImage(nominee2.image, nominee2.name);
            ui.addParagraph(`The second card drawn reveals ${nominee2.name}!`);

            deathNominees = [nominee1, nominee2];

            if (Math.random() < 0.25) {
                pairChallenge = true;

                ui.addRow();
                ui.addBoldParagraph('The nominees must pick a partner to help them in the challenge...');

                const possibleHelpers = currentCast.filter(contestant => contestant.name !== nominee1.name && contestant.name !== nominee2.name);

                const helper1 = bestRelationshipPair(nominee1, possibleHelpers);
                nominee1.helper = helper1;
                ui.addImage(nominee1.image, nominee1.name);
                ui.addImage(helper1.image, helper1.name);
                ui.addParagraph(`${nominee1.name} chooses ${helper1.name} as their partner.`);

                const possibleHelpers2 = possibleHelpers.filter(contestant => contestant.name !== nominee1.helper.name);

                const helper2 = bestRelationshipPair(nominee2, possibleHelpers2);
                nominee2.helper = helper2;
                ui.addImage(nominee2.image, nominee2.name);
                ui.addImage(helper2.image, helper2.name);
                ui.addParagraph(`${nominee2.name} chooses ${helper2.name} as their partner.`);

            }

            const nonNominees = currentCast.filter(c => c.name !== nominee1.name && c.name !== nominee2.name);
            nonNominees.forEach(c => {
                c.placementColors.push('white');
                c.placementTexts.push('SAFE');
            });

            ui.addButton('Proceed', finalDeathChallenge);
        }
    }
}

let seasonOver = false;

function startFinale() {
    ui.wipe();
    ui.addBoldParagraph(`Episode ${episodeNumber} - Finale`, 'episode-title');
    ui.addRow();

    if (finaleStretchLastEp) {
        episodeNumber--;
    }

    currentCast.forEach(contestant => {
        ui.addImage(contestant.image, contestant.name);
        ui.addParagraph(`${contestant.name} has escaped the night...`);

        if (contestant.role === 'The Savant') {
            contestant.placementTexts.push('HOST');
        } else {
            contestant.placementTexts.push('WINNER');
        }
        contestant.placementColors.push('#90ee90')
    });

    seasonOver = true;

    ui.addButton('Proceed', contestantProgress);
}

let betrayalDeath = false;

let doubleDeath = false;
let doubleLive = false;

function finalDeathChallenge() {
    ui.wipe();
    ui.addBoldParagraph(`The final death challenge begins...`);

    if (typeof ui.addRow === 'function') {
        ui.addRow();
    }

    if (!Array.isArray(deathNominees) || deathNominees.length < 2) {
        ui.addParagraph('Error: Not enough death nominees to start the challenge.');
        return;
    }
    if (!pairChallenge) {
        if (Math.random() < 0.25 && !betrayalDeath) {
            betrayalDeath = true;
            const nonNominees = currentCast.filter(contestant => !deathNominees.includes(contestant));

            ui.addBoldParagraph('The contestants are have both been spared and are safe');
            ui.addImage(deathNominees[0].image, deathNominees[0].name);
            ui.addImage(deathNominees[1].image, deathNominees[1].name);
            ui.addParagraph(`However, ${deathNominees[0].name} and ${deathNominees[1].name} MUST betray a contestant.`);

            const voter = deathNominees[Math.floor(Math.random() * deathNominees.length)];
            const nominee = worstRelationshipPair(voter, nonNominees);

            deathNominees.forEach(nominee => {
                nominee.placementTexts.push('VOTE');
                nominee.placementColors.push('hotpink');
            });

            ui.addImage(nominee.image, nominee.name);
            ui.addParagraph(`${deathNominees[0].name} and ${deathNominees[1].name} have agreed on betraying ${nominee.name} `);
            ui.addBoldParagraph(`${nominee.name} has been murdered...`)

            nominee.placementTexts.pop();
            nominee.placementColors.pop();

            nominee.placementTexts.push('DEAD');
            nominee.placementColors.push('#b22222');

            const eliminatedIndex = currentCast.findIndex(c => c.name === nominee.name);
            if (eliminatedIndex !== -1) {
                currentCast.splice(eliminatedIndex, 1);
            }
            deadCast.unshift(nominee);
        } else {
            deathNominees.forEach(contestant => {
                contestant.workScore = Math.random() * 100;
            });

            const sortedNominees = [...deathNominees].sort((a, b) => b.workScore - a.workScore);
            const winner = sortedNominees[0];
            const loser = sortedNominees[1];

            if (Math.random() < 0.05 && doubleDeath === false) {
                ui.addBoldParagraph('The contestants fail to complete the challenge in time, and both are murdered!');

                ui.addImage(deathNominees[0].image, deathNominees[0].name);
                ui.addImage(deathNominees[1].image, deathNominees[1].name);

                deathNominees.forEach(nominee => {
                    nominee.placementTexts.push('DEAD');
                    nominee.placementColors.push('red');
                    deadCast.unshift(nominee);
                });

                currentCast = currentCast.filter(c => c.name !== deathNominees[0].name && c.name !== deathNominees[1].name);

                ui.addParagraph(`${deathNominees[0].name} and ${deathNominees[1].name} are both murdered!`);

                if (typeof ui.addRow === 'function') {
                    ui.addRow();
                }

                ui.addParagraph('The other houseguest attempt to finish the challenge for them...');

                currentCast.forEach(contestant => {
                    contestant.workScore = Math.random() * 100;
                });

                doubleDeath = true;

                const hardestWorker = currentCast.sort((a, b) => b.workScore - a.workScore)[0];
                ui.addImage(hardestWorker.image, hardestWorker.name);
                ui.addParagraph(`${hardestWorker.name} manages to finish the challenge!`);

            } else if (Math.random() < 0.1 && doubleLive === false) {

                doubleLive = true;
                ui.addBoldParagraph('The contestants exceed all expectations, and both survive!');
                ui.addImage(deathNominees[0].image, deathNominees[0].name);
                ui.addImage(deathNominees[1].image, deathNominees[1].name);
                ui.addParagraph(`${deathNominees[0].name} and ${deathNominees[1].name} both survive the challenge!`);

                deathNominees.forEach(nominee => {
                    nominee.placementTexts.push('VOTE');
                    nominee.placementColors.push('hotpink');
                });
            } else {
                ui.addBoldParagraph('A contestant completes the challenge just in time...');

                ui.addImage(winner.image, winner.name);
                ui.addParagraph(`${winner.name} wins the challenge and survives!`);

                winner.placementTexts.push('VOTE');
                winner.placementColors.push('lightpink');

                ui.addImage(loser.image, loser.name, 'dead');
                ui.addParagraph(`${loser.name} has been murdered!`);

                loser.placementTexts.push('DEAD');
                loser.placementColors.push('red');

                const eliminatedIndex = currentCast.findIndex(c => c.name === loser.name);
                if (eliminatedIndex !== -1) {
                    currentCast.splice(eliminatedIndex, 1);
                }
                deadCast.unshift(loser);
            }
        }
    } else {
        ui.addBoldParagraph('The nominees and their partners race to complete the challenge...');

        const nominee1 = deathNominees[0];
        const nominee2 = deathNominees[1];

        nominee1.workScore = Math.random() * 100;
        nominee1.helper.workScore = Math.random() * 100;

        nominee2.workScore = Math.random() * 100;
        nominee2.helper.workScore = Math.random() * 100;

        const team1Score = nominee1.workScore + nominee1.helper.workScore;
        const team2Score = nominee2.workScore + nominee2.helper.workScore;

        const winnerNominee = team1Score > team2Score ? nominee1 : nominee2;
        const loserNominee = team1Score > team2Score ? nominee2 : nominee1;

        if (Math.random() < 0.1) {
            ui.addImage(winnerNominee.helper.image, winnerNominee.helper.name);
            ui.addImage(loserNominee.image, loserNominee.name);
            ui.addParagraph(`${winnerNominee.helper.name} cheated and sabotaged ${loserNominee.name}'s progress.`);
        }

        //-- WINNER NARRATIVE --

        ui.addBoldParagraph(`${winnerNominee.helper.name} and ${winnerNominee.name} complete the challenge just in time!`);

        ui.addImage(winnerNominee.image, winnerNominee.name);
        ui.addImage(winnerNominee.helper.image, winnerNominee.helper.name);

        winnerNominee.placementTexts.push('VOTE');
        winnerNominee.placementColors.push('lightpink');

        winnerNominee.helper.placementTexts.pop();
        winnerNominee.helper.placementColors.pop();

        winnerNominee.helper.placementTexts.push('HELP');
        winnerNominee.helper.placementColors.push('#fffacd');
        ui.addParagraph(`${winnerNominee.helper.name} won, and their nominee is safe.`);

        // --- LOSER NARRATIVE ---
        ui.addImage(loserNominee.image, loserNominee.name, 'dead');
        loserNominee.placementTexts.push('DEAD');
        loserNominee.placementColors.push('red');

        ui.addImage(loserNominee.helper.image, loserNominee.helper.name);
        loserNominee.helper.placementTexts.pop();
        loserNominee.helper.placementColors.pop();

        loserNominee.helper.placementTexts.push('HELP');
        loserNominee.helper.placementColors.push('#7b68ee');
        ui.addParagraph(`${loserNominee.helper.name} lost, and their nominee was murdered.`);

        const eliminatedIndex = currentCast.findIndex(c => c.name === loserNominee.name);
        if (eliminatedIndex !== -1) {
            currentCast.splice(eliminatedIndex, 1);
        }
        deadCast.unshift(loserNominee);
    }

    ui.addButton('Proceed', contestantProgress);
}

function contestantProgress() {
    ui.wipe();
    ui.addBoldParagraph('Contestant Progress', 'episode-title');
    ui.addRow();
    const center = document.createElement('center');
    const containerToCapture = document.createElement('div');

    const table = document.createElement('table');
    table.id = 'progress-container';
    const headerRow = document.createElement('tr');
    const nameHeader = document.createElement('th');
    const nameHeader2 = document.createElement('th');
    const nameHeader3 = document.createElement('th');
    nameHeader.textContent = 'Contestant';
    nameHeader2.textContent = 'Image';
    nameHeader3.textContent = 'Role';
    headerRow.appendChild(nameHeader);
    headerRow.appendChild(nameHeader2);
    headerRow.appendChild(nameHeader3);
    for (let i = 1; i <= episodeNumber; i++) {
        const episodeHeader = document.createElement('th');
        episodeHeader.textContent = `Ep ${i} `;
        if (i === episodeNumber && seasonOver && finaleStretchLastEp) {
            episodeHeader.colSpan = 2;
        }

        headerRow.appendChild(episodeHeader);
    }
    table.appendChild(headerRow);

    currentCast.forEach(contestant => {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        nameCell.textContent = contestant.name;
        const imageCell = document.createElement('td');
        imageCell.style.backgroundImage = `url(${contestant.image})`;
        imageCell.style.backgroundSize = 'cover';
        const rolecell = document.createElement('td');
        rolecell.textContent = contestant.role;
        row.appendChild(nameCell);
        row.appendChild(imageCell);
        row.appendChild(rolecell);
        for (let i = 0; i < contestant.placementTexts.length; i++) {
            const statusCell = document.createElement('td');
            statusCell.innerHTML = contestant.placementTexts[i] || '';
            statusCell.style.color = 'black';
            statusCell.style.backgroundColor = contestant.placementColors[i] || 'black';
            row.appendChild(statusCell);
        }
        table.appendChild(row);
    });

    deadCast.forEach(contestant => {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        nameCell.textContent = contestant.name;
        const imageCell = document.createElement('td');
        imageCell.style.backgroundImage = `url(${contestant.image})`;
        imageCell.style.backgroundSize = 'cover';
        const rolecell = document.createElement('td');
        rolecell.textContent = contestant.role;
        row.appendChild(nameCell);
        row.appendChild(imageCell);
        row.appendChild(rolecell);
        for (let i = 0; i < contestant.placementTexts.length; i++) {
            const statusCell = document.createElement('td');
            statusCell.innerHTML = contestant.placementTexts[i] || '';
            statusCell.style.color = 'black';
            statusCell.style.backgroundColor = contestant.placementColors[i] || 'black';
            row.appendChild(statusCell);
        }
        table.appendChild(row);
    });

    pairChallenge = false;

    containerToCapture.appendChild(table);
    center.appendChild(containerToCapture);
    ui.container.appendChild(center);

    ui.addButton('Download', downloadProgress);
    if (!seasonOver) {
        ui.addButton('Next Episode', newEpisode);
    } else {
        ui.addButton('Resimulate', resimulate);
    }
}

function downloadProgress() {
    const input = document.getElementById('progress-container');

    if (!input) {
        console.error("Progress container element not found!");
        alert("Cannot find the table to download. Please ensure the structure is correct.");
        return;
    }

    html2canvas(input, {
        scale: 2,
        logging: false,
        backgroundColor: '#000'
    }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const link = document.createElement('a');

        link.download = `TrackRecord_Episode${episodeNumber}.png`;
        link.href = imgData;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }).catch(err => {
        console.error("Error generating image:", err);
        alert("Failed to generate the image for download.");
    });
}