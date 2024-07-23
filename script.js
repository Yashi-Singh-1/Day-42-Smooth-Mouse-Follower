document.addEventListener("DOMContentLoaded", function () {
    const follower = document.querySelector(".follower");
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let posX = mouseX;
    let posY = mouseY;
  
    document.addEventListener("mousemove", function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
  
    function updatePosition() {
      posX += (mouseX - posX) * 0.1;
      posY += (mouseY - posY) * 0.1;
      follower.style.left = posX - 12 + "px";
      follower.style.top = posY - 12 + "px";
      requestAnimationFrame(updatePosition);
    }
  
    updatePosition();
});  