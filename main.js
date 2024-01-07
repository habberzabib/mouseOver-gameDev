let canvas = document.getElementById("canvas");
canvas.width = 400;
canvas.height = 300;

let ctx = canvas.getContext("2d");

// Draw red rectangle
ctx.fillStyle = "red";
ctx.fillRect(canvas.width - 150, 0, 150, 100);

// Draw green circle
ctx.beginPath();
ctx.fillStyle = "green";
ctx.arc(50, 50, 40, 0, Math.PI * 2);
ctx.fill();

// Draw blue rectangle
let blueRect = {
  x: canvas.width - 120,
  y: canvas.height - 90,
  width: 120,
  height: 90,
};
ctx.fillStyle = "blue";
ctx.fillRect(blueRect.x, blueRect.y, blueRect.width, blueRect.height);

// Draw orange circle
let orangeCircle = {
  x: 35,
  y: canvas.height - 35,
  radius: 35,
};
ctx.fillStyle = "orange";
ctx.beginPath();
ctx.arc(orangeCircle.x, orangeCircle.y, orangeCircle.radius, 0, Math.PI * 2);
ctx.fill();

function handleMouseMove(e) {
  let mouseX = e.clientX - canvas.getBoundingClientRect().left;
  let mouseY = e.clientY - canvas.getBoundingClientRect().top;

  if (
    mouseX > canvas.width - 150 &&
    mouseX < canvas.width &&
    mouseY > 0 &&
    mouseY < 100
  ) {
    document.body.style.backgroundColor = "red";
  } else if (Math.sqrt((mouseX - 50) ** 2 + (mouseY - 50) ** 2) < 40) {
    document.body.style.backgroundColor = "green";
  } else if (
    mouseX > blueRect.x &&
    mouseX < blueRect.x + blueRect.width &&
    mouseY > blueRect.y &&
    mouseY < blueRect.y + blueRect.height
  ) {
    document.body.style.backgroundColor = "blue";

    // Set the location and size of the blue rectangle to random values
    blueRect.x = Math.random() * (canvas.width - 120);
    blueRect.y = Math.random() * (canvas.height - 90);
    blueRect.width = Math.random() * 120 + 30;
    blueRect.height = Math.random() * 90 + 30;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "red"; // Redraw other shapes
    ctx.fillRect(canvas.width - 150, 0, 150, 100);

    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(50, 50, 40, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "blue"; // Draw the blue rectangle at the new position
    ctx.fillRect(blueRect.x, blueRect.y, blueRect.width, blueRect.height);

    ctx.fillStyle = "orange"; // Redraw the orange circle
    ctx.beginPath();
    ctx.arc(
      orangeCircle.x,
      orangeCircle.y,
      orangeCircle.radius,
      0,
      Math.PI * 2
    );
    ctx.fill();
  } else if (
    Math.sqrt((mouseX - orangeCircle.x) ** 2 + (mouseY - orangeCircle.y) ** 2) <
    orangeCircle.radius
  ) {
    document.body.style.backgroundColor = "orange";

    // Set the location and size of the orange circle to random values
    orangeCircle.x = Math.random() * (canvas.width - 70) + 35;
    orangeCircle.y = Math.random() * (canvas.height - 70) + 35;
    orangeCircle.radius = Math.random() * 35 + 15;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "red"; // Redraw other shapes
    ctx.fillRect(canvas.width - 150, 0, 150, 100);

    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(50, 50, 40, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "blue"; // Redraw the blue rectangle
    ctx.fillRect(blueRect.x, blueRect.y, blueRect.width, blueRect.height);

    ctx.fillStyle = "orange"; // Draw the new orange circle
    ctx.beginPath();
    ctx.arc(
      orangeCircle.x,
      orangeCircle.y,
      orangeCircle.radius,
      0,
      Math.PI * 2
    );
    ctx.fill();
  } else {
    document.body.style.backgroundColor = "white"; // Default background color
  }
}

document.addEventListener("mousemove", handleMouseMove);
