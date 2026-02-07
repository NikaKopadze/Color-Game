const colors = [
  { name: "წითელი", value: "red" },
  { name: "ლურჯი", value: "blue" },
  { name: "მწვანე", value: "green" },
  { name: "ყვითელი", value: "yellow" },
  { name: "იასამნისფერი", value: "purple" },
  { name: "ნარინჯისფერი", value: "orange" }
];

const container = document.getElementById("container");
const colorName = document.getElementById("colorName");
const scoreEl = document.getElementById("score");

let score = 0;
let correctColor;

document.getElementById("easy").onclick = () => startGame(3);
document.getElementById("hard").onclick = () => startGame(6);

function startGame(count) {
  squaresCount = count;
  container.innerHTML = "";

  const randomColors = shuffle(colors).slice(0, squaresCount);
  correctColor = randomColors[Math.floor(Math.random() * randomColors.length)];

  colorName.textContent = correctColor.name;

  randomColors.forEach(color => {
    const div = document.createElement("div");
    div.classList.add("square");
    div.style.backgroundColor = color.value;

    div.onclick = () => {
      if (color === correctColor) {
        score++;
        alert("სწორია!");
      } else {
        score--;
        alert("არასწორია!");
      }
      scoreEl.textContent = score;
      startGame(squaresCount);
    };

    container.appendChild(div);
  });
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

startGame(3);
