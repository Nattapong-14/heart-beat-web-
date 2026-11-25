// PERSONALIZE THESE FILE NAMES AND MESSAGES
const voiceMessages = [
  "MP3/000.mp3"
];

const messages = [
  "No matter how ordinary a day feels, I hope you remember how special you are.",
  "I wish I could pause the happiest moments and keep them a little longer.",
  "This is just a small gift to remind you that you mean a lot to me. ♡"
];

const welcomeScreen = document.getElementById("welcomeScreen");
const giftScreen = document.getElementById("giftScreen");
const finalScreen = document.getElementById("finalScreen");
const envelope = document.getElementById("openGift");
const backgroundMusic = document.getElementById("backgroundMusic");
const voiceAudio = document.getElementById("voiceAudio");
const audioStatus = document.getElementById("audioStatus");
const mainMessage = document.getElementById("mainMessage");
const musicToggle = document.getElementById("musicToggle");

let messageIndex = 0;
let voiceIndex = 0;

envelope.addEventListener("click", () => {
  envelope.classList.add("open");
  window.setTimeout(() => {
    welcomeScreen.classList.add("hidden");
    giftScreen.classList.remove("hidden");
  }, 450);
});

function playVoice(file) {
  voiceAudio.pause();
  voiceAudio.src = file;
  voiceAudio.currentTime = 0;
  voiceAudio.play()
    .then(() => { audioStatus.textContent = "Playing a little message for you ♡"; })
    .catch(() => { audioStatus.textContent = "Tap again to play the voice message."; });
}

document.getElementById("voiceOne").addEventListener("click", () => {
  playVoice(voiceMessages[voiceIndex]);
  voiceIndex = (voiceIndex + 1) % voiceMessages.length;
});

document.getElementById("nextMessage").addEventListener("click", () => {
  messageIndex = (messageIndex + 1) % messages.length;
  mainMessage.textContent = messages[messageIndex];
  audioStatus.textContent = "A new little message just for you.";
});

musicToggle.addEventListener("click", async () => {
  if (backgroundMusic.paused) {
    try {
      await backgroundMusic.play();
      musicToggle.textContent = "Pause music";
      musicToggle.setAttribute("aria-pressed", "true");
    } catch (error) {
      audioStatus.textContent = "Please check that 000.mp3 is in the assets folder.";
    }
  } else {
    backgroundMusic.pause();
    musicToggle.textContent = "Play music";
    musicToggle.setAttribute("aria-pressed", "false");
  }
});

document.getElementById("finalSurprise").addEventListener("click", () => {
  giftScreen.classList.add("hidden");
  finalScreen.classList.remove("hidden");
});

document.getElementById("backToGift").addEventListener("click", () => {
  finalScreen.classList.add("hidden");
  giftScreen.classList.remove("hidden");
});
