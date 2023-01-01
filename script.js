let titels = [];
let texts = [];
let titelsTrash = [];
let textsTrash = [];


load();
loadTrash();

function render(){
    let content = document.getElementById('content');
    content.innerHTML = '';
    content.innerHTML += `
            <div id="note">
                <div class="titelPin">
                    <input id="titel" type="text" placeholder="Titel">
                    <img onclick="addNote()" src="./img/9025901_push_pin_icon.png" class="icon">
                </div>
                <div class="text">
                    <textarea id="text" cols="32" rows="7" placeholder="Notiz schreiben..."></textarea>
                </div>
            </div>`;

    for (i = 0; i < titels.length; i++) {
        let titel = titels[i];
        let text = texts[i];

        content.innerHTML += `
        <div id="note">
                <div class="titelPin">
                    <input id="title" type="text" placeholder="${titel}">
                    <img src="./img/9025901_push_pin_icon.png" class="icon">
                </div>
                <div class="text">
                    <textarea it="text" cols="32" rows="7" placeholder="Notiz schreiben...">${text}</textarea>
                </div>
                <div class="delete">
                    <span></span>
                    <button onclick="deleteNote(${i})">Löschen</button>
                </div>
        </div>`;
    }
}

function renderTrash() {
    let content = document.getElementById('content');
    content.innerHTML = '';

    for (t = 0; t < titelsTrash.length; t++) {
        let titelTrash = titelsTrash[t];
        let textTrash = textsTrash[t];

        content.innerHTML += `
        <div id="note">
                <div class="titelPin">
                    <input id="title" type="text" placeholder="${titelTrash}">
                    <img src="./img/9025901_push_pin_icon.png" class="icon">
                </div>
                <div class="text">
                    <textarea it="text" cols="32" rows="7" placeholder="Notiz schreiben...">${textTrash}</textarea>
                </div>
                <div class="delete">
                    <p>Im Papierkorb</p>
                    <button onclick="deletdefinitely(${t})">Löschen</button>
                </div>
      </div>`;
    }
}

function addNote() {
    let titel = document.getElementById('titel');
    let text = document.getElementById('text');
    titels.push(titel.value);
    texts.push(text.value);
    render();
    save();
}

function deleteNote(i) {
    titelsTrash.push(titels[i]);
    textsTrash.push(texts[i]);
    titels.splice(i, 1);
    texts.splice(i, 1);
    render();
    save();
    saveTrash()
}

function deletdefinitely(t) {
    titelsTrash.splice(t, 1);
    textsTrash.splice(t, 1);
    renderTrash();
    saveTrash();
}

function save() {
    let titelsAsText = JSON.stringify(titels);       
    localStorage.setItem('titels', titelsAsText);     
    let textsAsText = JSON.stringify(texts);
    localStorage.setItem('texts', textsAsText);
}

function saveTrash() {
    let titelsTrashAsText = JSON.stringify(titelsTrash);       
    localStorage.setItem('titelsTrash', titelsTrashAsText);     
    let textsTrashAsText = JSON.stringify(textsTrash);
    localStorage.setItem('textsTrash', textsTrashAsText);
}

function load() {
    let titelsAsText = localStorage.getItem('titels');
    let textsAsText = localStorage.getItem('texts');
    if(titelsAsText && textsAsText) { 
    titels = JSON.parse(titelsAsText);
    texts = JSON.parse(textsAsText);
}
}

 function loadTrash() {
    let titelsTrashAsText = localStorage.getItem('titelsTrash');
    let textsTrashAsText = localStorage.getItem('textsTrash');
    if(titelsTrashAsText && textsTrashAsText) { 
    titelsTrash = JSON.parse(titelsTrashAsText);
    textsTrash = JSON.parse(textsTrashAsText);
}
} 

/* ====================== Suchfunktion ========================== */

function searchD() {                                    // Suchfunktion
    let searchD = document.getElementById('searchD').value;
    searchD = searchD.toLowerCase();                          // Grossbuchstaben in Kleinbuchstaben umwandeln

    let content = document.getElementById('content');
    content.innerHTML = '';

    for (let i = 0; i < titels.length; i++) {
        let titel = titels[i];
        let text = texts[i];
        let titelTrash = titelsTrash[i];
        let textTrash = textsTrash[i];

        if(titel.toLowerCase().includes(searchD) || text.toLowerCase().includes(searchD)){
        content.innerHTML += `
        <div id="note">
                <div class="titelPin">
                    <input id="title" type="text" placeholder="${titel}">
                    <img src="./img/9025901_push_pin_icon.png" class="icon">
                </div>
                <div class="text">
                    <textarea it="text" cols="32" rows="7" placeholder="Notiz schreiben...">${text}</textarea>
                </div>
                <div class="delete">
                    <span></span>
                    <button onclick="deleteNote(${i})">Löschen</button>
                </div>
        </div>`;
        } else if(titelTrash.toLowerCase().includes(searchD) || textTrash.toLowerCase().includes(searchD)) {
                content.innerHTML += `
            <div id="note">
                <div class="titelPin">
                    <input id="title" type="text" placeholder="${titelTrash}">
                    <img src="./img/9025901_push_pin_icon.png" class="icon">
                </div>
                <div class="text">
                    <textarea it="text" cols="32" rows="7" placeholder="Notiz schreiben...">${textTrash}</textarea>
                </div>
                <div class="delete">
                    <p>Im Papierkorb</p>
                    <button onclick="deletdefinitely(${t})">Löschen</button>
                </div>
            </div>`;
            }
        }
    }

function searchM() {                                    // Suchfunktion
    let searchM = document.getElementById('searchM').value;
    searchM = searchM.toLowerCase();                          // Grossbuchstaben in Kleinbuchstaben umwandeln

    let content = document.getElementById('content');
    content.innerHTML = '';

    for (let i = 0; i < titels.length; i++) {
        let titel = titels[i];
        let text = texts[i];
        let titelTrash = titelsTrash[i];
        let textTrash = textsTrash[i];

        if(titel.toLowerCase().includes(searchM) || text.toLowerCase().includes(searchM)){
        content.innerHTML += `
        <div id="note">
                <div class="titelPin">
                    <input id="title" type="text" placeholder="${titel}">
                    <img src="./img/9025901_push_pin_icon.png" class="icon">
                </div>
                <div class="text">
                    <textarea it="text" cols="32" rows="7" placeholder="Notiz schreiben...">${text}</textarea>
                </div>
                <div class="delete">
                    <span></span>
                    <button onclick="deleteNote(${i})">Löschen</button>
                </div>
        </div>`;
        } else if(titelTrash.toLowerCase().includes(searchM) || textTrash.toLowerCase().includes(searchM)) {
                content.innerHTML += `
            <div id="note">
                <div class="titelPin">
                    <input id="title" type="text" placeholder="${titelTrash}">
                    <img src="./img/9025901_push_pin_icon.png" class="icon">
                </div>
                <div class="text">
                    <textarea it="text" cols="32" rows="7" placeholder="Notiz schreiben...">${textTrash}</textarea>
                </div>
                <div class="delete">
                    <p>Im Papierkorb</p>
                    <button onclick="deletdefinitely(${t})">Löschen</button>
                </div>
            </div>`;
            }
        }
    }


/* ====================== Sidebar Funktionen ========================== */

function activeNotes() {
    let notes = document.getElementById('notes');
    let trash = document.getElementById('trash');
    let notesM = document.getElementById('notesM');
    let trashM = document.getElementById('trashM');
    notes.style.backgroundColor = "rgb(224, 193, 54)";
    trash.style.backgroundColor = "rgb(255, 255, 255)";
    notesM.style.backgroundColor = "rgb(224, 193, 54)";
    trashM.style.backgroundColor = "rgb(255, 255, 255)";
}

function activeTrash() {
    let notes = document.getElementById('notes');
    let trash = document.getElementById('trash');
    let notesM = document.getElementById('notesM');
    let trashM = document.getElementById('trashM');
    notes.style.backgroundColor = "rgb(255, 255, 255)";
    trash.style.backgroundColor = "rgb(224, 193, 54)";
    notesM.style.backgroundColor = "rgb(255, 255, 255)";
    trashM.style.backgroundColor = "rgb(224, 193, 54)";

}

function activeNotesM() {
    let notesM = document.getElementById('notesM');
    let trashM = document.getElementById('trashM');
    let notes = document.getElementById('notes');
    let trash = document.getElementById('trash');
    notesM.style.backgroundColor = "rgb(224, 193, 54)";
    trashM.style.backgroundColor = "rgb(255, 255, 255)";
    notes.style.backgroundColor = "rgb(224, 193, 54)";
    trash.style.backgroundColor = "rgb(255, 255, 255)";
}

function activeTrashM() {
    let notesM = document.getElementById('notesM');
    let trashM = document.getElementById('trashM');
    let notes = document.getElementById('notes');
    let trash = document.getElementById('trash');
    notesM.style.backgroundColor = "rgb(255, 255, 255)";
    trashM.style.backgroundColor = "rgb(224, 193, 54)";
    notes.style.backgroundColor = "rgb(255, 255, 255)";
    trash.style.backgroundColor = "rgb(224, 193, 54)";
}




















