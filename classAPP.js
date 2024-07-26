let form = document.querySelector(".form");
let posts = document.querySelector(".posts");
let input = document.querySelector(".input");
let msg = document.querySelector(".msg");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  formValidation();
  console.log(Button Clicked);
});

let formValidation = () => {
  if (input.value == "") {
    msg.innerHTML = "Cannot be empty";
    console.log("Failure");
  } else {
    msg.innerHTML = "";
    acceptData();
    console.log(Success);
  }
};

let data = {};

let acceptData = () => {
  // data[text] = input.value;
  createPost();
};

let createPost = () => {
  posts.innerHTML += `
    <div>
    <p>${input.value}
    <span class="options">
    <i onClick="editPost(this)" class="fas fa-edit"></i>
     <i onClick="editPost(this)"  class="fas fa-trash-alt"></i>
    </span>
    `;
};