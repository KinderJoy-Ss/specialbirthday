document.addEventListener("DOMContentLoaded", function () {
  const player = document.getElementById("player");
  const moveBtn = document.getElementById("moveBtn");
  const message = document.getElementById("message");
  const typedMessage = document.getElementById("typedMessage");
  const bgMusic = document.getElementById("bgMusic");
  const galleryBtn = document.getElementById("galleryBtn");
  const gallery = document.getElementById("gallery");

  let position = 0;
  const step = 40;
  const maxPosition = 260;

  const loveText = `Horaayyy, selamat ulang tahunn yaa sayangg 🎉🎉
maaff aku belum bisaa rayainn ulang tahun kamuu karena kendala 1 dan 2 hal 😭
kado kamuu juga aku belum bisa kasihh, mungkin minggu depann yahh, maaff php 😔
TAPI walaupun begituu, kamu harus tauu kalo akuu tetap sayangg sama kamu yahh 💖
Tetap cintaa sama kamuu 💞
Semoga kedepannyaa aku bisa lebih baik lagii yaa sama kamuu 😚
LOVE YOUUUUU 😘
~adikk kecilmuu 💋`;

  moveBtn.addEventListener("click", () => {
    if (position < maxPosition) {
      position += step;
      player.style.left = position + "px";
    } else {
      if (message.classList.contains("hidden")) {
        message.classList.remove("hidden");
        moveBtn.textContent = "🥰 Kamu Udah Sampai!";
        moveBtn.disabled = true;
        typeMessage(loveText, typedMessage);
      }
    }
  });

  galleryBtn.addEventListener("click", () => {
    gallery.classList.toggle("hidden");
  });

  function typeMessage(text, element) {
    let i = 0;
    element.textContent = '';
    const interval = setInterval(() => {
      element.textContent += text[i];
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 30);
  }
});

const playMusicBtn = document.getElementById("playMusicBtn");

playMusicBtn.addEventListener("click", () => {
  bgMusic.play();
  playMusicBtn.style.display = "none"; // sembunyikan tombol setelah diputar
});

// === ANIMASI HATI BERJATUH ===
const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

function randomHeart() {
  return {
    x: Math.random() * canvas.width,
    y: -20,
    size: Math.random() * 20 + 10,
    speed: Math.random() * 1 + 0.5,
    opacity: Math.random() * 0.5 + 0.5
  };
}

function drawHeart(x, y, size, opacity) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(size / 20, size / 20);
  ctx.beginPath();
  ctx.globalAlpha = opacity;
  ctx.fillStyle = "hotpink";
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(0, -3, -5, -3, -5, 0);
  ctx.bezierCurveTo(-5, 3, 0, 5, 0, 8);
  ctx.bezierCurveTo(0, 5, 5, 3, 5, 0);
  ctx.bezierCurveTo(5, -3, 0, -3, 0, 0);
  ctx.fill();
  ctx.restore();
}

function updateHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (hearts.length < 50) {
    hearts.push(randomHeart());
  }
  for (let i = 0; i < hearts.length; i++) {
    let h = hearts[i];
    h.y += h.speed;
    drawHeart(h.x, h.y, h.size, h.opacity);
    if (h.y > canvas.height) {
      hearts[i] = randomHeart();
    }
  }
  requestAnimationFrame(updateHearts);
}

updateHearts();
