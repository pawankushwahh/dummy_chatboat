// Get the canvas and context
const canvas = document.getElementById("background-canvas");
const ctx = canvas.getContext("2d");

// Set the canvas size to fill the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Variables for line animation
const lines = [];
const lineCount = 30;  // Number of lines
const maxLineLength = 300; // Max length of each line

// Line class to create moving lines
class Line {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.length = Math.random() * maxLineLength;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = 0.5 + Math.random() * 2;  // Random speed
        this.opacity = Math.random() * 0.4 + 0.2;  // Random opacity for effect
    }

    draw() {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        const x2 = this.x + Math.cos(this.angle) * this.length;
        const y2 = this.y + Math.sin(this.angle) * this.length;
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
    }

    update() {
        // Move the lines based on speed and angle
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;

        // If a line goes out of bounds, reset it
        if (this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0) {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
        }
    }
}

// Initialize the lines array
for (let i = 0; i < lineCount; i++) {
    lines.push(new Line());
}

// Animate the canvas
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    lines.forEach(line => {
        line.update();
        line.draw();
    });

    requestAnimationFrame(animate);
}

// Start the animation
animate();
