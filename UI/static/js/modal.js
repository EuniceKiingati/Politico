// Get the modal
let vote_modal = document.getElementById('vote-modal');

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];


// When the user clicks the politician, open the modal 
function displayModal() {
    vote_modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    vote_modal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == vote_modal) {
        vote_modal.style.display = "none";
    }

}