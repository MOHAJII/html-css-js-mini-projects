let noteContainer = document.querySelector('.notes');

//showNotes();

const createNote = () => {
    let note = document.createElement('div');
    let textNote = document.createElement('p');
    let img = document.createElement('img');

    textNote.setAttribute('contenteditable', 'true');
    textNote.setAttribute('spellcheck', 'false');

    note.classList.add('note');

    img.src = 'images/delete.png';

    note.appendChild(textNote);
    note.appendChild(document.createElement('br'))
    note.appendChild(img);


    noteContainer.appendChild(note);

    saveChanges();
}

noteContainer.addEventListener('click', (e) => {
    if(e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        saveChanges();
    }else if(e.target.tagName === 'P') {
        notes = document.querySelectorAll('.note p');
        notes.forEach(nt => {
            nt.onkeyup = () => {
                saveChanges();
            };
        })
    }
});

document.addEventListener('keydown',(e) => {
    if(e.key === 'Enter') {
        document.execCommand('insertLineBreak');
        e.preventDefault();
    }
})

const saveChanges = () => {
    localStorage.setItem('saveNotes', noteContainer.innerHTML);
}

const showNotes = () => {
    noteContainer.innerHTML = localStorage.getItem('saveNotes');
}

showNotes();