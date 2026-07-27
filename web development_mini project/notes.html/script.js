const title = document.getElementById("noteTitle");
const text = document.getElementById("noteText");
const saveBtn = document.getElementById("saveBtn");
const notesList = document.getElementById("notesList");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

// Show Notes
function showNotes() {

    notesList.innerHTML = "";

    for (let i = 0; i < notes.length; i++) {

        let note = document.createElement("div");
        note.className = "note";

        note.innerHTML = `
            <h3>${notes[i].title}</h3>
            <p>${notes[i].text}</p>
            <button class="deleteBtn" onclick="deleteNote(${i})">Delete</button>
        `;

        notesList.appendChild(note);
    }
}

// Save Note
function saveNote() {

    let noteTitle = title.value.trim();
    let noteText = text.value.trim();

    if (noteTitle === "" && noteText === "") {
        alert("Please write a note.");
        return;
    }

    notes.push({
        title: noteTitle,
        text: noteText
    });

    localStorage.setItem("notes", JSON.stringify(notes));

    title.value = "";
    text.value = "";

    showNotes();
}

// Delete Note
function deleteNote(index) {

    notes.splice(index, 1);

    localStorage.setItem("notes", JSON.stringify(notes));

    showNotes();
}

// Button Click
saveBtn.addEventListener("click", saveNote);

// Load Notes
showNotes();