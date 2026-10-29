const particles = document.getElementById("particles");
const star = document.createElement("span");
star.textContent = "●";
star.className = "particle";
star.style.position = "absolute";
//Math.random():随机生成一个0~1之间的数字
star.style.left = Math.random()*100+"vw";
star.style.top = Math.random()*100+"vh";
star.style.color = "#D4AF65";
star.style.fontSize = "18px";
particles.appendChild(star);
