displayNotes();
var submit = document.getElementById('submit');

//Adds text input to local storage when clicking add button
submit.addEventListener('click', function(){

  let notesHolder;
  let formControlTextarea = document.getElementById('formControlTextarea');
  let notesString = localStorage.getItem('notes');

  if (notesString == null) {
    notesHolder = [];
  } else {
    notesHolder = JSON.parse(notesString);
  }

  //Adds the date and time to the note
  let now = new Date();
  let dateTime = `${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()} | ${now.getHours()}:${now.getMinutes()}`;

  let tempHolder = {
    text: formControlTextarea.value,
    time: dateTime
  };

  //Sends the note to the local storage
  notesHolder.push(tempHolder);
  localStorage.setItem('notes', JSON.stringify(notesHolder));

  formControlTextarea.value = '';

  displayNotes();
});

function displayNotes(){
  let notesHolder;
  let notesString = localStorage.getItem('notes');

  if (notesString == null) {
    notesHolder = [];
  } else {
    notesHolder = JSON.parse(notesString);
  }

  let noteHtml = '';

  notesHolder.forEach(function(element,index){
    noteHtml += `
      <div class='card mx-4 my-2 bg-dark text-white myNote' style='width: 18rem;'>
        <div class="card-body">
          <h6>${element.time}</h6>
          <p class="card-text">${element.text.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
          <button id='${index}' onclick=deleteNote(this.id) class='btn btn-warning'>Delete</button>
        </div>
      </div>

    `;
  });

  let noteEle = document.getElementById('notes')

  if(notesHolder.length != 0){
    noteEle.innerHTML = noteHtml;
  }else{
    noteEle.innerHTML = '<h3 style="text-align: center; color: grey;">Nothing to display</h3>';
  }

}

// Function to delete
function deleteNote(index){
  let notesHolder;
  let notesString = localStorage.getItem('notes');

  if (notesString == null) {
    notesHolder = [];
  } else {
    notesHolder = JSON.parse(notesString);
  }

  notesHolder.splice(index,1);
  localStorage.setItem('notes',JSON.stringify(notesHolder));

  displayNotes();
}
