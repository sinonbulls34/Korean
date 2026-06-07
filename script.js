const letterSets = {
  vowels: [
    ["ㅏ", "a", "像「啊」", "아"],
    ["ㅑ", "ya", "像「呀」", "야"],
    ["ㅓ", "eo", "嘴巴放鬆的 o", "어"],
    ["ㅕ", "yeo", "yeo", "여"],
    ["ㅗ", "o", "圓唇往上", "오"],
    ["ㅛ", "yo", "yo", "요"],
    ["ㅜ", "u", "圓唇往下", "우"],
    ["ㅠ", "yu", "yu", "유"],
    ["ㅡ", "eu", "嘴角拉平", "으"],
    ["ㅣ", "i", "像「衣」", "이"],
    ["ㅐ", "ae", "接近 e", "애"],
    ["ㅔ", "e", "接近 e", "에"],
  ],
  consonants: [
    ["ㄱ", "g / k", "介於 g 和 k", "가"],
    ["ㄴ", "n", "舌尖碰上排牙齦", "나"],
    ["ㄷ", "d / t", "介於 d 和 t", "다"],
    ["ㄹ", "r / l", "輕彈舌尖", "라"],
    ["ㅁ", "m", "雙唇閉合", "마"],
    ["ㅂ", "b / p", "雙唇爆破", "바"],
    ["ㅅ", "s", "像 s", "사"],
    ["ㅇ", "無聲 / ng", "開頭不發音", "아"],
    ["ㅈ", "j", "像 j", "자"],
    ["ㅊ", "ch", "送氣 ch", "차"],
    ["ㅋ", "k", "送氣 k", "카"],
    ["ㅌ", "t", "送氣 t", "타"],
    ["ㅍ", "p", "送氣 p", "파"],
    ["ㅎ", "h", "像 h", "하"],
  ],
  finals: [
    ["ㄱ", "k", "嘴型停在 k", "악"],
    ["ㄴ", "n", "舌尖停住", "안"],
    ["ㄷ", "t", "短促 t", "앋"],
    ["ㄹ", "l", "舌尖收住", "알"],
    ["ㅁ", "m", "雙唇收住", "암"],
    ["ㅂ", "p", "雙唇停住", "압"],
    ["ㅇ", "ng", "鼻音 ng", "앙"],
  ],
};

const initials = [
  ["ㄱ", "g/k"],
  ["ㄲ", "kk"],
  ["ㄴ", "n"],
  ["ㄷ", "d/t"],
  ["ㄸ", "tt"],
  ["ㄹ", "r/l"],
  ["ㅁ", "m"],
  ["ㅂ", "b/p"],
  ["ㅃ", "pp"],
  ["ㅅ", "s"],
  ["ㅆ", "ss"],
  ["ㅇ", "silent"],
  ["ㅈ", "j"],
  ["ㅉ", "jj"],
  ["ㅊ", "ch"],
  ["ㅋ", "k"],
  ["ㅌ", "t"],
  ["ㅍ", "p"],
  ["ㅎ", "h"],
];

const vowels = [
  ["ㅏ", "a"],
  ["ㅐ", "ae"],
  ["ㅑ", "ya"],
  ["ㅒ", "yae"],
  ["ㅓ", "eo"],
  ["ㅔ", "e"],
  ["ㅕ", "yeo"],
  ["ㅖ", "ye"],
  ["ㅗ", "o"],
  ["ㅘ", "wa"],
  ["ㅙ", "wae"],
  ["ㅚ", "oe"],
  ["ㅛ", "yo"],
  ["ㅜ", "u"],
  ["ㅝ", "wo"],
  ["ㅞ", "we"],
  ["ㅟ", "wi"],
  ["ㅠ", "yu"],
  ["ㅡ", "eu"],
  ["ㅢ", "ui"],
  ["ㅣ", "i"],
];

const finals = [
  ["", "無"],
  ["ㄱ", "k"],
  ["ㄲ", "k"],
  ["ㄳ", "k"],
  ["ㄴ", "n"],
  ["ㄵ", "n"],
  ["ㄶ", "n"],
  ["ㄷ", "t"],
  ["ㄹ", "l"],
  ["ㄺ", "k"],
  ["ㄻ", "m"],
  ["ㄼ", "l"],
  ["ㄽ", "l"],
  ["ㄾ", "l"],
  ["ㄿ", "p"],
  ["ㅀ", "l"],
  ["ㅁ", "m"],
  ["ㅂ", "p"],
  ["ㅄ", "p"],
  ["ㅅ", "t"],
  ["ㅆ", "t"],
  ["ㅇ", "ng"],
  ["ㅈ", "t"],
  ["ㅊ", "t"],
  ["ㅋ", "k"],
  ["ㅌ", "t"],
  ["ㅍ", "p"],
  ["ㅎ", "t"],
];

const quizItems = [
  { prompt: "가", answer: "ga", options: ["ga", "na", "da", "ra"] },
  { prompt: "나", answer: "na", options: ["ma", "na", "ba", "sa"] },
  { prompt: "오", answer: "o", options: ["u", "eo", "o", "i"] },
  { prompt: "한", answer: "han", options: ["ha", "han", "hang", "hyeon"] },
  { prompt: "국", answer: "guk", options: ["gu", "guk", "go", "geuk"] },
];

const letterGrid = document.querySelector("#letterGrid");
const tabButtons = document.querySelectorAll("[data-letter-tab]");
const initialSelect = document.querySelector("#initialSelect");
const vowelSelect = document.querySelector("#vowelSelect");
const finalSelect = document.querySelector("#finalSelect");
const builtSyllable = document.querySelector("#builtSyllable");
const builderNote = document.querySelector("#builderNote");
const quizPrompt = document.querySelector("#quizPrompt");
const quizOptions = document.querySelector("#quizOptions");
const quizProgress = document.querySelector("#quizProgress");
const quizFeedback = document.querySelector("#quizFeedback");

let currentQuiz = 0;
let answered = false;

function speak(text) {
  if (!("speechSynthesis" in window)) return;

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ko-KR";
  utterance.rate = 0.72;
  window.speechSynthesis.speak(utterance);
}

function renderLetters(type) {
  letterGrid.innerHTML = "";
  letterSets[type].forEach(([symbol, roman, note, sample]) => {
    const card = document.createElement("article");
    card.className = "letter-card";
    card.innerHTML = `
      <span class="letter-symbol">${symbol}</span>
      <span class="letter-meta">
        <strong>${roman}</strong>
        <span>${note}</span>
      </span>
      <button class="icon-button" type="button" aria-label="播放 ${sample}">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 9v6h4l5 4V5L8 9H4zm12.5-.7a5 5 0 0 1 0 7.4m2.4-9.8a8.5 8.5 0 0 1 0 12.2" />
        </svg>
      </button>
    `;
    card.querySelector("button").addEventListener("click", () => speak(sample));
    letterGrid.appendChild(card);
  });
}

function fillSelect(select, values) {
  values.forEach(([letter, roman], index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = letter ? `${letter} · ${roman}` : "無收音";
    select.appendChild(option);
  });
}

function composeHangul(initialIndex, vowelIndex, finalIndex) {
  return String.fromCharCode(0xac00 + initialIndex * 588 + vowelIndex * 28 + finalIndex);
}

function updateBuilder() {
  const initialIndex = Number(initialSelect.value);
  const vowelIndex = Number(vowelSelect.value);
  const finalIndex = Number(finalSelect.value);
  const syllable = composeHangul(initialIndex, vowelIndex, finalIndex);
  const initial = initials[initialIndex];
  const vowel = vowels[vowelIndex];
  const final = finals[finalIndex];
  builtSyllable.textContent = syllable;
  builderNote.textContent = final[0]
    ? `${initial[0]} + ${vowel[0]} + ${final[0]} = ${syllable}。羅馬音提示：${initial[1]} + ${vowel[1]} + ${final[1]}。`
    : `${initial[0]} + ${vowel[0]} = ${syllable}。羅馬音提示：${initial[1]} + ${vowel[1]}。`;
}

function renderQuiz() {
  const item = quizItems[currentQuiz];
  answered = false;
  quizPrompt.textContent = item.prompt;
  quizProgress.textContent = `${currentQuiz + 1} / ${quizItems.length}`;
  quizFeedback.textContent = "";
  quizOptions.innerHTML = "";

  item.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(button, option));
    quizOptions.appendChild(button);
  });
}

function checkAnswer(button, option) {
  if (answered) return;

  const item = quizItems[currentQuiz];
  answered = true;
  button.classList.add(option === item.answer ? "correct" : "wrong");
  quizFeedback.textContent =
    option === item.answer ? `答對了，${item.prompt} 讀作 ${item.answer}。` : `這題是 ${item.answer}，再聽一次就會更穩。`;
  speak(item.prompt);
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderLetters(button.dataset.letterTab);
  });
});

document.querySelector("#playWelcome").addEventListener("click", () => speak("안녕하세요"));
document.querySelector("#speakBuilt").addEventListener("click", () => speak(builtSyllable.textContent));
document.querySelector("#speakQuiz").addEventListener("click", () => speak(quizPrompt.textContent));
document.querySelector("#nextQuiz").addEventListener("click", () => {
  currentQuiz = (currentQuiz + 1) % quizItems.length;
  renderQuiz();
});

document.querySelectorAll(".practice-item").forEach((button) => {
  button.addEventListener("click", () => speak(button.dataset.say));
});

fillSelect(initialSelect, initials);
fillSelect(vowelSelect, vowels);
fillSelect(finalSelect, finals);
initialSelect.value = "0";
vowelSelect.value = "0";
finalSelect.value = "0";

[initialSelect, vowelSelect, finalSelect].forEach((select) => {
  select.addEventListener("change", updateBuilder);
});

renderLetters("vowels");
updateBuilder();
renderQuiz();
