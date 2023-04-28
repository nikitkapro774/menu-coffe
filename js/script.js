function Image(imageUrl) {
  document.getElementById("img-main").src = imageUrl;
}

var buttons = document.querySelectorAll(".li-menu");
for (var button of buttons) {
   button.addEventListener('click', function () {
     buttons.forEach(i => i.classList.remove('active'));
     this.classList.toggle('active');
   });
};
