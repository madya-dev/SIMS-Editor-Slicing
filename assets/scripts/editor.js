const btnText = document.getElementById("btn-text");
const btnShape = document.getElementById("btn-shape");
const btnImage = document.getElementById("btn-image");
const navItem = document.getElementsByClassName("nav-item");
const textEditing = document.getElementById("text-editing");
const shapeEditing = document.getElementById("shape-editing");
const imageEditing = document.getElementById("image-editing");
const sidebarEdit = document.getElementById("sidebar-edit");
const btnCloseSidebarEdit = document.getElementById("btn-close-sidebar-edit");

textEditing.style.display = "block";
shapeEditing.style.display = "none";
imageEditing.style.display = "none";
btnText.addEventListener("click", function () {
  removeActive();
  this.parentElement.classList.add("active");
  textEditing.style.display = "block";
  shapeEditing.style.display = "none";
  imageEditing.style.display = "none";
  sidebarEdit.classList.add("show");
});
btnShape.addEventListener("click", function () {
  removeActive();
  this.parentElement.classList.add("active");
  textEditing.style.display = "none";
  shapeEditing.style.display = "block";
  imageEditing.style.display = "none";
  sidebarEdit.classList.add("show");
});
btnImage.addEventListener("click", function () {
  removeActive();
  this.parentElement.classList.add("active");
  textEditing.style.display = "none";
  shapeEditing.style.display = "none";
  imageEditing.style.display = "block";
  sidebarEdit.classList.add("show");
});

function removeActive() {
  for (i = 0; i < navItem.length; i++) {
    navItem[i].classList.remove("active");
  }
}

btnCloseSidebarEdit.addEventListener("click", function () {
  sidebarEdit.classList.remove("show");
});
