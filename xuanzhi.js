const particles = document.getElementById("particles");
for (let i = 0; i < 10; i++) {
const star = document.createElement("span");
star.textContent = "●";
star.className = "particle";
star.style.position = "absolute";
//Math.random():随机生成一个0~1之间的数字
star.style.left = Math.random()*100+"vw";
star.style.top = Math.random()*100+"vh";
star.style.color = "#D4AF65";
star.style.fontSize = "6px";
particles.appendChild(star);
// 随机水平移动距离
const moveX = (Math.random() - 0.5) * 100;
// 随机垂直移动距离
const moveY = (Math.random() - 0.5) * 100;
// 把随机距离交给 CSS
star.style.setProperty("--move-x", moveX + "px");
star.style.setProperty("--move-y", moveY + "px");

}
