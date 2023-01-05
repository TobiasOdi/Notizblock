let titles = [];
let texts = [];
let titlesTrash = [];
let textsTrash = [];


load();
loadTrash();

function render(){
    let content = document.getElementById('content');
    content.innerHTML = '';

    for (i = 0; i < titles.length; i++) {
        let title = titles[i];
        let text = texts[i];

        content.innerHTML += `
        <div id="note">
                <div class="titlePin">
                    <input id="title" type="text" placeholder="${title}">
                </div>
                <div class="text">
                    <textarea it="text" cols="32" rows="7" placeholder="Notiz schreiben...">${text}</textarea>
                </div>
                <div class="delete">
                    <button onclick="deleteNote(${i})">Löschen</button>
                </div>
        </div>`;
    }

}

function renderTrash() {
    let content = document.getElementById('content');
    content.innerHTML = '';

    for (t = 0; t < titlesTrash.length; t++) {
        let titleTrash = titlesTrash[t];
        let textTrash = textsTrash[t];

        content.innerHTML += `
        <div id="note">
                <div class="titlePin">
                    <input id="title" type="text" placeholder="${titleTrash}">

                </div>
                <div class="text">
                    <textarea it="text" cols="32" rows="7" placeholder="Notiz schreiben...">${textTrash}</textarea>
                </div>
                <div class="delete">
                    <div>
                        <button onclick="restore(${t})">Wiederherstellen</button>
                        <button onclick="deletdefinitely(${t})">Löschen</button>
                    </div>
                    <div>
                        <p>Gelöscht</p>
                    </div>
                </div>
      </div>`;
    }
}

function addNote() {
    let title = document.getElementById('title');
    let text = document.getElementById('text');

    if(title.value.length === 0) {

    } else {
        titles.push(title.value);
        texts.push(text.value);
        render();
        save();
    
        document.getElementById('contentFix').innerHTML = '';
        document.getElementById('contentFix').innerHTML += `
        <div>
            <div id="noteFix">
            <div class="titlePin">
                <input id="title" type="text" placeholder="Titel">
                <img onclick="addNote(), activeNotes()" src="./img/9025901_push_pin_icon.png" class="icon">
            </div>
            <div class="text">
                <textarea id="text" cols="32" rows="7" placeholder="Notiz schreiben..."></textarea>
            </div>
            </div>
        </div>`;
    }
}

function deleteNote(i) {
    titlesTrash.push(titles[i]);
    textsTrash.push(texts[i]);
    titles.splice(i, 1);
    texts.splice(i, 1);
    render();
    save();
    saveTrash()
}

function restore(t) {
    titles.push(titlesTrash[t]);
    texts.push(textsTrash[t]);
    titlesTrash.splice(t, 1);
    textsTrash.splice(t, 1);
    renderTrash();
    saveTrash()
    save();
}

function deletdefinitely(t) {
    titlesTrash.splice(t, 1);
    textsTrash.splice(t, 1);
    renderTrash();
    saveTrash();
}

function save() {
    let titlesAsText = JSON.stringify(titles);       
    localStorage.setItem('titles', titlesAsText);     
    let textsAsText = JSON.stringify(texts);
    localStorage.setItem('texts', textsAsText);
}

function saveTrash() {
    let titlesTrashAsText = JSON.stringify(titlesTrash);       
    localStorage.setItem('titlesTrash', titlesTrashAsText);     
    let textsTrashAsText = JSON.stringify(textsTrash);
    localStorage.setItem('textsTrash', textsTrashAsText);
}

function load() {
    let titlesAsText = localStorage.getItem('titles');
    let textsAsText = localStorage.getItem('texts');
    if(titlesAsText && textsAsText) { 
    titles = JSON.parse(titlesAsText);
    texts = JSON.parse(textsAsText);
}
}

 function loadTrash() {
    let titlesTrashAsText = localStorage.getItem('titlesTrash');
    let textsTrashAsText = localStorage.getItem('textsTrash');
    if(titlesTrashAsText && textsTrashAsText) { 
    titlesTrash = JSON.parse(titlesTrashAsText);
    textsTrash = JSON.parse(textsTrashAsText);
}
} 

/* ====================== Suchfunktion ========================== */

function searchD() {                                           // Suchfunktion
    let searchD = document.getElementById('searchD').value;
    searchD = searchD.toLowerCase();                          // Grossbuchstaben in Kleinbuchstaben umwandeln
    console.log(searchD);


    let content = document.getElementById('content');
    content.innerHTML = '';

    for (let i = 0; i < titles.length; i++) {
        let title = titles[i];
        let text = texts[i];
        let titleTrash = titlesTrash[i];
        let textTrash = textsTrash[i];

        if(title.toLowerCase().includes(searchD) || text.toLowerCase().includes(searchD)){
        content.innerHTML += `
        <div id="note">
                <div class="titlePin">
                    <input id="title" type="text" placeholder="${title}">
                </div>
                <div class="text">
                    <textarea it="text" cols="32" rows="7" placeholder="Notiz schreiben...">${text}</textarea>
                </div>
                <div class="delete">
                    <button onclick="deleteNote(${i})">Löschen</button>
                </div>
        </div>`;

        } else if(titleTrash.toLowerCase().includes(searchD) || textTrash.toLowerCase().includes(searchD)) {
                content.innerHTML += `
                <div id="note">
                    <div class="titlePin">
                        <input id="title" type="text" placeholder="${titleTrash}">

                    </div>
                    <div class="text">
                        <textarea it="text" cols="32" rows="7" placeholder="Notiz schreiben...">${textTrash}</textarea>
                    </div>
                    <div class="delete">
                        <div>
                            <button onclick="restore(${i})">Wiederherstellen</button>
                            <button onclick="deletdefinitely(${i})">Löschen</button>
                        </div>
                        <div>
                            <p>Gelöscht</p>
                        </div>
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

    for (let i = 0; i < titles.length; i++) {
        let title = titles[i];
        let text = texts[i];
        let titleTrash = titlesTrash[i];
        let textTrash = textsTrash[i];

        if(title.toLowerCase().includes(searchM) || text.toLowerCase().includes(searchM)){
        content.innerHTML += `
        <div id="note">
                <div class="titlePin">
                    <input id="title" type="text" placeholder="${title}">
                </div>
                <div class="text">
                    <textarea it="text" cols="32" rows="7" placeholder="Notiz schreiben...">${text}</textarea>
                </div>
                <div class="delete">
                    <button onclick="deleteNote(${i})">Löschen</button>
                </div>
        </div>`;

        } else if(titleTrash.toLowerCase().includes(searchM) || textTrash.toLowerCase().includes(searchM)) {
                content.innerHTML += `
            <div id="note">
                <div class="titlePin">
                    <input id="title" type="text" placeholder="${titleTrash}">

                </div>
                <div class="text">
                    <textarea it="text" cols="32" rows="7" placeholder="Notiz schreiben...">${textTrash}</textarea>
                </div>
                <div class="delete">
                    <div>
                        <button onclick="restore(${t})">Wiederherstellen</button>
                        <button onclick="deletdefinitely(${t})">Löschen</button>
                    </div>
                    <div>
                        <p>Gelöscht</p>
                    </div>
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
    notes.style.backgroundColor = "rgb(254,239,195)";
    trash.style.backgroundColor = "rgb(255, 255, 255)";
    notesM.style.backgroundColor = "rgb(254,239,195)";
    trashM.style.backgroundColor = "rgb(255, 255, 255)";
}

function activeTrash() {
    let notes = document.getElementById('notes');
    let trash = document.getElementById('trash');
    let notesM = document.getElementById('notesM');
    let trashM = document.getElementById('trashM');
    notes.style.backgroundColor = "rgb(255, 255, 255)";
    trash.style.backgroundColor = "rgb(254,239,195)";
    notesM.style.backgroundColor = "rgb(255, 255, 255)";
    trashM.style.backgroundColor = "rgb(254,239,195)";

}

function activeNotesM() {
    let notesM = document.getElementById('notesM');
    let trashM = document.getElementById('trashM');
    let notes = document.getElementById('notes');
    let trash = document.getElementById('trash');
    notesM.style.backgroundColor = "rgb(254,239,195)";
    trashM.style.backgroundColor = "rgb(255, 255, 255)";
    notes.style.backgroundColor = "rgb(254,239,195)";
    trash.style.backgroundColor = "rgb(255, 255, 255)";
}

function activeTrashM() {
    let notesM = document.getElementById('notesM');
    let trashM = document.getElementById('trashM');
    let notes = document.getElementById('notes');
    let trash = document.getElementById('trash');
    notesM.style.backgroundColor = "rgb(255, 255, 255)";
    trashM.style.backgroundColor = "rgb(254,239,195)";
    notes.style.backgroundColor = "rgb(255, 255, 255)";
    trash.style.backgroundColor = "rgb(254,239,195)";
}




















