const stars = "★".split("");
const snowflakes = "❄️".split("");
const twinkleLightsCount = 50; // Number of twinkling lights

// Function to create a star
const createStar = () => {
    const star = document.createElement("div");
    star.textContent = stars[Math.floor(Math.random() * stars.length)];
    star.className = "star";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.animationDuration = Math.random() * 3 + 6 + "s";
    star.style.fontSize = Math.random() * 1.5 + 0.5 + "rem";
    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 8000);
};

// Function to create snowflakes
const createSnowflake = () => {
    const snowflake = document.createElement("div");
    snowflake.textContent = snowflakes[Math.floor(Math.random() * snowflakes.length)];
    snowflake.className = "snowflake";
    snowflake.style.left = Math.random() * 100 + "vw";
    snowflake.style.animationDuration = Math.random() * 5 + 5 + "s";
    snowflake.style.fontSize = Math.random() * 1.5 + 0.5 + "rem";
    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 10000);
};

// Function to create twinkling lights
const createTwinkle = () => {
    const twinkle = document.createElement("div");
    twinkle.className = "twinkle";
    twinkle.style.left = Math.random() * 100 + "vw";
    twinkle.style.top = Math.random() * 100 + "vh";
    document.body.appendChild(twinkle);

    setTimeout(() => {
        twinkle.remove();
    }, 1500);
};

// Create twinkling lights
for (let i = 0; i < twinkleLightsCount; i++) {
    createTwinkle();
}

// Interval to create falling stars and snowflakes
setInterval(createStar, 100);  
setInterval(createSnowflake, 100);