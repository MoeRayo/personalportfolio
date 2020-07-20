// Get the input values
// let nameInput = document.querySelector('#name');
// let emailInput = document.querySelector('#email');
// let msgInput = document.querySelector('#message');

// Get the modal
const modal = document.querySelector(".modal");
// Get the button that opens the modal
const btn = document.querySelector("#submit");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal

btn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('clicked')
//  console.log( nameInput.vaule)
//   emailInput.vaule = "";
//   msgInput.vaule = "";
  modal.style.display = "block";


})

// When the user clicks on <span> (x), close the modal
span.onclick = ()=> {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}