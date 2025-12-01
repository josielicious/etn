// Contestant Class Definition //
class Contestant {
    constructor(name, image, gender = 'Female') {
        this._name = name;
        this._image = image;
        this._gender = gender;

        this.placementTexts = [];
        this.placementColors = [];
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
const joeygraceffa = new Contestant('Joey Graceffa', 'resources/images/contestants/TLT/joeygraceffa.webp', 'Male');

// Season 1 Contestants //
const andreabrooks = new Contestant('Andrea Brooks', 'resources/images/contestants/1/andreabrooks.webp');
const evagutowski = new Contestant('Eva Gutowski', 'resources/images/contestants/1/evagutowski.webp');
const glozellgreen = new Contestant('Glozell Green', 'resources/images/contestants/1/glozellgreen.webp');
const lelepons = new Contestant('Lele Pons', 'resources/images/contestants/1/lelepons.webp');
const matthaag = new Contestant('Matt Haag', 'resources/images/contestants/1/matthaag.webp', 'Male');
const oliwhite = new Contestant('Oli White', 'resources/images/contestants/1/oliwhite.webp', 'Male');
const shanedawson = new Contestant('Shane Dawson', 'resources/images/contestants/1/shanedawson.webp', 'Male');
const sierrafurtado = new Contestant('Sierra Furtado', 'resources/images/contestants/1/sierrafurtado.webp');

// Season 2 Contestants //
const andrearusset = new Contestant('Andrea Russet', 'resources/images/contestants/2/andrearusset.webp');
const jessewellens = new Contestant('Jesse Wellens', 'resources/images/contestants/2/jessewellens.webp', 'Male');
const laurenriihimaki = new Contestant('Lauren Riihimaki', 'resources/images/contestants/2/laurenriihimaki.webp');
const lizakoshy = new Contestant('Liza Koshy', 'resources/images/contestants/2/lizakoshy.webp');
const tyleroakley = new Contestant('Tyler Oakley', 'resources/images/contestants/2/tyleroakley.webp', 'Male');

// Season 3 Contestants //
const jccaylen = new Contestant('JC Caylen', 'resources/images/contestants/3/jccaylen.webp', 'Male');
const matthewpatrick = new Contestant('Matthew Patrick', 'resources/images/contestants/3/matthewpatrick.webp', 'Male');
const roifabito = new Contestant('Roi Fabito', 'resources/images/contestants/3/roifabito.webp', 'Male');
const safiyanygaard = new Contestant('Safiya Nygaard', 'resources/images/contestants/3/safiyanygaard.webp');
const tealadunn = new Contestant('Teala Dunn', 'resources/images/contestants/3/tealadunn.webp');

// Season 4 Contestants //
const alexwassabi = new Contestant('Alex Wassabi', 'resources/images/contestants/4/alexwassabi.webp', 'Male');
const bretmanrock = new Contestant('Bretman Rock', 'resources/images/contestants/4/bretmanrock.webp', 'Male');
const colleenballinger = new Contestant('Colleen Ballinger', 'resources/images/contestants/4/colleenballinger.webp');
const destormpower = new Contestant('DeStorm Power', 'resources/images/contestants/4/destormpower.webp', 'Male');
const gabbiehanna = new Contestant('Gabbie Hanna', 'resources/images/contestants/4/gabbiehanna.webp');
const justineezarik = new Contestant('Justine Ezarik', 'resources/images/contestants/4/justineezarik.webp');
const timothydelaghetto = new Contestant('Timothy DeLaGhetto', 'resources/images/contestants/4/timothydelaghetto.webp', 'Male');

// The Lost Tapes Contestants //
const jojosiwa = new Contestant('Jojo Siwa', 'resources/images/contestants/TLT/jojosiwa.webp');
const mannymua = new Contestant('Manny MUA', 'resources/images/contestants/TLT/mannymua.webp', 'Male');
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
let deadContestants = 0;

function startSimulation() {
    if (currentCast.length <= 2) {
        alert('Please add at least 3 castmates to start the simulation.');
        return;
    }
}

function newEpisode() {
    console.log('Starting a new episode with the current cast:', currentCast);
}