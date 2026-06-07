const STORAGE_KEY = "hangulDailyProgress.v1";

const groups = {
  basicVowels: {
    label: "基本母音",
    summary: "先分清楚張口、圓唇、扁平嘴型。",
    items: [
      { id: "v-a", symbol: "ㅏ", sound: "아", roman: "a", zh: "像 ㄚ，嘴巴自然張開。", mouth: "open", mouthLabel: "張口，舌頭放低。" },
      { id: "v-ya", symbol: "ㅑ", sound: "야", roman: "ya", zh: "先有短短的 y，再接 ㄚ。", mouth: "open", mouthLabel: "先微笑起音，再張口。" },
      { id: "v-eo", symbol: "ㅓ", sound: "어", roman: "eo", zh: "介於 ㄜ 和 ㄛ，嘴不圓。", mouth: "backOpen", mouthLabel: "下巴放鬆，嘴唇不收圓。" },
      { id: "v-yeo", symbol: "ㅕ", sound: "여", roman: "yeo", zh: "y + ㅓ，起音輕。", mouth: "backOpen", mouthLabel: "先抬舌，再打開。" },
      { id: "v-o", symbol: "ㅗ", sound: "오", roman: "o", zh: "像 ㄛ，嘴唇往前收圓。", mouth: "round", mouthLabel: "圓唇，聲音集中。" },
      { id: "v-yo", symbol: "ㅛ", sound: "요", roman: "yo", zh: "y + ㅗ，圓唇不要太晚。", mouth: "round", mouthLabel: "先 y，再快速收圓。" },
      { id: "v-u", symbol: "ㅜ", sound: "우", roman: "u", zh: "像 ㄨ，嘴唇更小更前。", mouth: "smallRound", mouthLabel: "小圓唇，舌頭後縮。" },
      { id: "v-yu", symbol: "ㅠ", sound: "유", roman: "yu", zh: "y + ㅜ，保持小圓唇。", mouth: "smallRound", mouthLabel: "起音短，尾音穩。" },
      { id: "v-eu", symbol: "ㅡ", sound: "으", roman: "eu", zh: "中文沒有完全相同音，嘴唇拉平。", mouth: "flat", mouthLabel: "扁嘴，舌根後縮。" },
      { id: "v-i", symbol: "ㅣ", sound: "이", roman: "i", zh: "像 ㄧ，嘴角微微拉開。", mouth: "spread", mouthLabel: "微笑嘴型，舌頭抬高。" }
    ]
  },
  compoundVowels: {
    label: "複合母音",
    summary: "多數是兩個母音快速滑過，嘴型要連續。",
    items: [
      { id: "cv-ae", symbol: "ㅐ", sound: "애", roman: "ae", zh: "接近 ㄟ，嘴比 ㅔ 稍開。", mouth: "spread", mouthLabel: "嘴角拉開，開口略大。" },
      { id: "cv-yae", symbol: "ㅒ", sound: "얘", roman: "yae", zh: "y + ㅐ。", mouth: "spread", mouthLabel: "先 y，再拉開。" },
      { id: "cv-e", symbol: "ㅔ", sound: "에", roman: "e", zh: "接近 ㄟ，現代口語常與 ㅐ 接近。", mouth: "spread", mouthLabel: "嘴形較窄，舌頭抬起。" },
      { id: "cv-ye", symbol: "ㅖ", sound: "예", roman: "ye", zh: "y + ㅔ。", mouth: "spread", mouthLabel: "輕起音，嘴角穩。" },
      { id: "cv-wa", symbol: "ㅘ", sound: "와", roman: "wa", zh: "ㅗ + ㅏ，從圓唇滑到張口。", mouth: "glideOpen", mouthLabel: "圓到開，動作連續。" },
      { id: "cv-wae", symbol: "ㅙ", sound: "왜", roman: "wae", zh: "ㅗ + ㅐ，像 wae。", mouth: "glideSpread", mouthLabel: "圓唇後拉開嘴角。" },
      { id: "cv-oe", symbol: "ㅚ", sound: "외", roman: "oe/we", zh: "常讀近似 we。", mouth: "glideSpread", mouthLabel: "短圓唇後接扁嘴。" },
      { id: "cv-wo", symbol: "ㅝ", sound: "워", roman: "wo", zh: "ㅜ + ㅓ，從小圓唇到不圓。", mouth: "glideBack", mouthLabel: "收圓後放開下巴。" },
      { id: "cv-we", symbol: "ㅞ", sound: "웨", roman: "we", zh: "ㅜ + ㅔ。", mouth: "glideSpread", mouthLabel: "小圓唇滑向微笑嘴。" },
      { id: "cv-wi", symbol: "ㅟ", sound: "위", roman: "wi", zh: "ㅜ + ㅣ。", mouth: "glideSpread", mouthLabel: "小圓唇後拉開。" },
      { id: "cv-ui", symbol: "ㅢ", sound: "의", roman: "ui", zh: "ㅡ + ㅣ，詞中常弱化。", mouth: "flatSpread", mouthLabel: "扁嘴滑向微笑嘴。" }
    ]
  },
  singleConsonants: {
    label: "單子音",
    summary: "注意平音、送氣音，以及 ㄹ 在字首與字尾的差異。",
    items: [
      { id: "c-giyeok", symbol: "ㄱ", sound: "가", roman: "g/k", zh: "像 ㄍ 與 ㄎ 之間，開頭不重送氣。", mouth: "tongueBack", mouthLabel: "舌後靠近軟顎後放開。" },
      { id: "c-nieun", symbol: "ㄴ", sound: "나", roman: "n", zh: "像 ㄋ，鼻音穩。", mouth: "nasal", mouthLabel: "舌尖抵上齒齦，氣走鼻腔。" },
      { id: "c-digeut", symbol: "ㄷ", sound: "다", roman: "d/t", zh: "像 ㄉ 與 ㄊ 之間，平音。", mouth: "tongue", mouthLabel: "舌尖輕碰上齒齦。" },
      { id: "c-rieul", symbol: "ㄹ", sound: "라", roman: "r/l", zh: "字首像輕彈 r，字尾接近 l。", mouth: "tongueTap", mouthLabel: "舌尖短促彈一下。" },
      { id: "c-mieum", symbol: "ㅁ", sound: "마", roman: "m", zh: "像 ㄇ，雙唇閉合。", mouth: "lips", mouthLabel: "嘴唇閉住，氣走鼻腔。" },
      { id: "c-bieup", symbol: "ㅂ", sound: "바", roman: "b/p", zh: "像 ㄅ 與 ㄆ 之間，平音。", mouth: "lips", mouthLabel: "雙唇閉合後放開。" },
      { id: "c-siot", symbol: "ㅅ", sound: "사", roman: "s", zh: "像 ㄙ；接 ㅣ 時接近 xi。", mouth: "fricative", mouthLabel: "牙縫留窄，氣流摩擦。" },
      { id: "c-ieung", symbol: "ㅇ", sound: "아", roman: "silent/ng", zh: "字首不發音；收音時像 ㄥ。", mouth: "nasal", mouthLabel: "字首放空，字尾鼻腔收束。" },
      { id: "c-jieut", symbol: "ㅈ", sound: "자", roman: "j", zh: "像 ㄐ 與 ㄗ 間的塞擦音。", mouth: "fricative", mouthLabel: "舌面靠近硬顎後放開。" },
      { id: "c-chieut", symbol: "ㅊ", sound: "차", roman: "ch", zh: "ㅈ 的送氣版。", mouth: "air", mouthLabel: "放開時有明顯氣流。" },
      { id: "c-kieuk", symbol: "ㅋ", sound: "카", roman: "k", zh: "ㄱ 的送氣版，像 ㄎ。", mouth: "airBack", mouthLabel: "舌後放開並送氣。" },
      { id: "c-tieut", symbol: "ㅌ", sound: "타", roman: "t", zh: "ㄷ 的送氣版，像 ㄊ。", mouth: "air", mouthLabel: "舌尖放開並送氣。" },
      { id: "c-pieup", symbol: "ㅍ", sound: "파", roman: "p", zh: "ㅂ 的送氣版，像 ㄆ。", mouth: "airLips", mouthLabel: "雙唇放開並送氣。" },
      { id: "c-hieut", symbol: "ㅎ", sound: "하", roman: "h", zh: "像 ㄏ，氣音清楚。", mouth: "airOpen", mouthLabel: "喉部送氣，嘴型跟母音走。" }
    ]
  },
  doubleConsonants: {
    label: "雙子音",
    summary: "緊音不是變大聲，而是喉部與口腔先收緊再放開。",
    items: [
      { id: "dc-kk", symbol: "ㄲ", sound: "까", roman: "kk", zh: "ㄱ 的緊音，氣少、起音緊。", mouth: "tenseBack", mouthLabel: "喉口先收緊，突然放開。" },
      { id: "dc-tt", symbol: "ㄸ", sound: "따", roman: "tt", zh: "ㄷ 的緊音。", mouth: "tense", mouthLabel: "舌尖頂住，短促爆開。" },
      { id: "dc-pp", symbol: "ㅃ", sound: "빠", roman: "pp", zh: "ㅂ 的緊音。", mouth: "tenseLips", mouthLabel: "雙唇緊閉，氣流少。" },
      { id: "dc-ss", symbol: "ㅆ", sound: "싸", roman: "ss", zh: "ㅅ 的緊音，摩擦更集中。", mouth: "tenseFricative", mouthLabel: "牙縫更窄，氣流集中。" },
      { id: "dc-jj", symbol: "ㅉ", sound: "짜", roman: "jj", zh: "ㅈ 的緊音。", mouth: "tenseFricative", mouthLabel: "舌面收緊後放開。" }
    ]
  }
};

const learningSteps = [
  { id: "step-basic-vowels", title: "基本母音", detail: "10 個核心嘴型，先把 ㅏ、ㅓ、ㅗ、ㅜ、ㅡ、ㅣ 分清楚。" },
  { id: "step-compound-vowels", title: "複合母音", detail: "11 個滑音，把圓唇到張口、扁嘴的移動練順。" },
  { id: "step-consonants", title: "單子音與雙子音", detail: "平音、送氣音、緊音分開練，避免只用中文注音硬套。" },
  { id: "step-grammar", title: "助詞與語序", detail: "先掌握 SOV、은/는、이/가、을/를，再慢慢加時態與敬語。" }
];

const themes = [
  {
    id: "food",
    label: "飲食",
    words: [
      { ko: "밥", zh: "飯", sentence: "밥을 먹어요." },
      { ko: "물", zh: "水", sentence: "물을 마셔요." },
      { ko: "커피", zh: "咖啡", sentence: "커피를 좋아해요." },
      { ko: "김치", zh: "泡菜", sentence: "김치가 매워요." }
    ]
  },
  {
    id: "directions",
    label: "問路",
    words: [
      { ko: "역", zh: "車站", sentence: "역이 어디예요?" },
      { ko: "오른쪽", zh: "右邊", sentence: "오른쪽으로 가세요." },
      { ko: "왼쪽", zh: "左邊", sentence: "왼쪽에 있어요." },
      { ko: "여기", zh: "這裡", sentence: "여기가 맞아요." }
    ]
  },
  {
    id: "shopping",
    label: "購物",
    words: [
      { ko: "얼마예요?", zh: "多少錢？", sentence: "이거 얼마예요?" },
      { ko: "카드", zh: "卡片", sentence: "카드 돼요?" },
      { ko: "봉투", zh: "袋子", sentence: "봉투 주세요." },
      { ko: "싸요", zh: "便宜", sentence: "이거 싸요." }
    ]
  },
  {
    id: "hobby",
    label: "興趣",
    words: [
      { ko: "음악", zh: "音樂", sentence: "음악을 들어요." },
      { ko: "영화", zh: "電影", sentence: "영화를 봐요." },
      { ko: "운동", zh: "運動", sentence: "운동을 해요." },
      { ko: "책", zh: "書", sentence: "책을 읽어요." }
    ]
  }
];

const pronunciationRules = [
  {
    id: "final-stop",
    title: "收音要收住",
    pattern: "밥",
    example: "밥",
    zh: "底部的 ㅂ 是收音，嘴唇閉住即可，不要多加一個「ㄅㄨ」。"
  },
  {
    id: "liaison",
    title: "遇到 ㅇ 會連音",
    pattern: "한국어 -> 한구거",
    example: "한국어",
    zh: "後一字以 ㅇ 開頭時，前一字的收音常滑到下一個音節。"
  },
  {
    id: "nasal",
    title: "鼻音化很常見",
    pattern: "입니다 -> 임니다",
    example: "입니다",
    zh: "ㅂ 遇到 ㄴ 時常變成鼻音 ㅁ，聽起來更順。"
  },
  {
    id: "aspiration",
    title: "送氣音不是大聲",
    pattern: "ㅋ ㅌ ㅍ ㅊ",
    example: "카 타 파 차",
    zh: "送氣音重點是氣流明顯，不是把聲音喊大。"
  },
  {
    id: "tense",
    title: "雙子音是緊音",
    pattern: "ㄲ ㄸ ㅃ ㅆ ㅉ",
    example: "까 따 빠 싸 짜",
    zh: "先把喉部與口腔短短收緊，再乾淨放開，氣流反而少。"
  },
  {
    id: "rieul",
    title: "ㄹ 會像 r 也會像 l",
    pattern: "라 / 말",
    example: "라 말",
    zh: "字首常像舌尖輕彈，收音時舌尖停住，接近 l。"
  }
];

const travelWords = [
  { id: "tw-airport", ko: "공항", zh: "機場", sentence: "공항에 가요.", note: "交通" },
  { id: "tw-station", ko: "역", zh: "車站", sentence: "역이 어디예요?", note: "交通" },
  { id: "tw-subway", ko: "지하철", zh: "地鐵", sentence: "지하철을 타요.", note: "交通" },
  { id: "tw-hotel", ko: "호텔", zh: "飯店", sentence: "호텔에 있어요.", note: "住宿" },
  { id: "tw-room", ko: "방", zh: "房間", sentence: "방이 깨끗해요.", note: "住宿" },
  { id: "tw-market", ko: "시장", zh: "市場", sentence: "시장에 가요.", note: "購物" },
  { id: "tw-price", ko: "가격", zh: "價格", sentence: "가격이 좋아요.", note: "購物" },
  { id: "tw-bag", ko: "봉투", zh: "袋子", sentence: "봉투 주세요.", note: "購物" },
  { id: "tw-water", ko: "물", zh: "水", sentence: "물 주세요.", note: "餐廳" },
  { id: "tw-menu", ko: "메뉴", zh: "菜單", sentence: "메뉴 주세요.", note: "餐廳" },
  { id: "tw-ticket", ko: "표", zh: "票", sentence: "표 한 장 주세요.", note: "交通" },
  { id: "tw-restroom", ko: "화장실", zh: "洗手間", sentence: "화장실이 어디예요?", note: "緊急" }
];

const travelSentences = [
  { id: "ts-where", ko: "여기가 어디예요?", zh: "這裡是哪裡？", tip: "問路時最萬用。" },
  { id: "ts-station", ko: "역에 어떻게 가요?", zh: "車站怎麼去？", tip: "어떻게 是「怎麼」。" },
  { id: "ts-price", ko: "이거 얼마예요?", zh: "這個多少錢？", tip: "購物第一句。" },
  { id: "ts-card", ko: "카드 돼요?", zh: "可以刷卡嗎？", tip: "돼요 表示「可以」。" },
  { id: "ts-menu", ko: "메뉴 주세요.", zh: "請給我菜單。", tip: "주세요 是請給我。" },
  { id: "ts-one", ko: "이거 하나 주세요.", zh: "請給我一個這個。", tip: "指著點餐或購物都可用。" },
  { id: "ts-water", ko: "물 좀 주세요.", zh: "請給我一點水。", tip: "좀 讓語氣更柔和。" },
  { id: "ts-help", ko: "도와주세요.", zh: "請幫幫我。", tip: "需要協助時使用。" }
];

const dailySentences = [
  { id: "ds-hello", ko: "안녕하세요.", zh: "你好。", tip: "正式又安全的問候。" },
  { id: "ds-thanks", ko: "감사합니다.", zh: "謝謝。", tip: "比 고마워요 更正式。" },
  { id: "ds-sorry", ko: "죄송합니다.", zh: "不好意思，抱歉。", tip: "打擾、道歉都能用。" },
  { id: "ds-name", ko: "저는 대만 사람이에요.", zh: "我是台灣人。", tip: "自我介紹常用。" },
  { id: "ds-like", ko: "한국어를 좋아해요.", zh: "我喜歡韓語。", tip: "좋아해요 前面常接 를/을。" },
  { id: "ds-ok", ko: "괜찮아요.", zh: "沒關係，可以。", tip: "回應關心或婉拒都常見。" },
  { id: "ds-again", ko: "다시 말해 주세요.", zh: "請再說一次。", tip: "自學者非常需要的一句。" },
  { id: "ds-slow", ko: "천천히 말해 주세요.", zh: "請慢慢說。", tip: "旅行時很實用。" }
];

const checklistItems = [
  { id: "listen", label: "聽 5 個音，至少 1 次慢速。" },
  { id: "read", label: "讀出 3 個自己拼出的韓字。" },
  { id: "word", label: "記 1 個生活單字並造短句。" }
];

const soundQuizPool = [
  ...groups.basicVowels.items,
  ...groups.compoundVowels.items.slice(0, 7),
  ...groups.singleConsonants.items.slice(0, 12),
  ...groups.doubleConsonants.items
];

const wordQuizPool = [
  ...travelWords,
  ...themes.flatMap((theme) =>
    theme.words.map((word, index) => ({
      id: `${theme.id}-${index}`,
      ko: word.ko,
      zh: word.zh,
      sentence: word.sentence,
      note: theme.label
    }))
  )
];

const sentenceQuizPool = [...travelSentences, ...dailySentences];

const quizModes = {
  soundToLetter: {
    label: "聽 40 音選字",
    chip: "40 音",
    hint: "聽完後選出正確字母。必要時切到慢速或拆音。"
  },
  soundToWord: {
    label: "聽音選詞",
    chip: "詞語",
    hint: "聽韓語單字或短語，選出你聽到的韓文。"
  },
  zhToKorean: {
    label: "看中文選韓文",
    chip: "中韓轉換",
    hint: "先看中文意思，再選對應的韓文。"
  }
};

const initials = [
  ["ㄱ", 0],
  ["ㄲ", 1],
  ["ㄴ", 2],
  ["ㄷ", 3],
  ["ㄸ", 4],
  ["ㄹ", 5],
  ["ㅁ", 6],
  ["ㅂ", 7],
  ["ㅃ", 8],
  ["ㅅ", 9],
  ["ㅆ", 10],
  ["ㅇ", 11],
  ["ㅈ", 12],
  ["ㅉ", 13],
  ["ㅊ", 14],
  ["ㅋ", 15],
  ["ㅌ", 16],
  ["ㅍ", 17],
  ["ㅎ", 18]
];

const medialVowels = [
  ["ㅏ", 0],
  ["ㅐ", 1],
  ["ㅑ", 2],
  ["ㅒ", 3],
  ["ㅓ", 4],
  ["ㅔ", 5],
  ["ㅕ", 6],
  ["ㅖ", 7],
  ["ㅗ", 8],
  ["ㅘ", 9],
  ["ㅙ", 10],
  ["ㅚ", 11],
  ["ㅛ", 12],
  ["ㅜ", 13],
  ["ㅝ", 14],
  ["ㅞ", 15],
  ["ㅟ", 16],
  ["ㅠ", 17],
  ["ㅡ", 18],
  ["ㅢ", 19],
  ["ㅣ", 20]
];

const finals = [
  ["無", 0],
  ["ㄱ", 1],
  ["ㄴ", 4],
  ["ㄷ", 7],
  ["ㄹ", 8],
  ["ㅁ", 16],
  ["ㅂ", 17],
  ["ㅅ", 19],
  ["ㅇ", 21]
];

let progress = loadProgress();
let activeGroup = "basicVowels";
let activeTheme = "food";
let activeQuizMode = "soundToLetter";
let currentQuiz = null;
let speechRate = Number(progress.rate || 0.72);
let activeSeconds = 0;

function loadProgress() {
  const fallback = {
    rate: 0.72,
    knownSounds: [],
    completedSteps: [],
    checkins: {},
    checklist: {},
    notes: "",
    quizCorrect: 0,
    quizTotal: 0,
    minutes: {}
  };

  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return { ...fallback, ...saved };
  } catch {
    return fallback;
  }
}

function saveProgress() {
  progress.rate = speechRate;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  updateStats();
}

function todayKey(offset = 0) {
  const date = new Date();
  date.setDate(date.getDate() + offset);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function speak(text, options = {}) {
  if (!text || !("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ko-KR";
  utterance.rate = Number(options.rate || speechRate);
  utterance.pitch = 1;
  const voices = typeof window.speechSynthesis.getVoices === "function" ? window.speechSynthesis.getVoices() : [];
  const koreanVoice = voices.find((voice) => voice.lang.toLowerCase().startsWith("ko"));
  if (koreanVoice) {
    utterance.voice = koreanVoice;
  }
  window.speechSynthesis.speak(utterance);
}

function renderLearningPath() {
  const container = document.querySelector("#lessonPath");
  container.innerHTML = learningSteps
    .map((step, index) => {
      const checked = progress.completedSteps.includes(step.id) ? "checked" : "";
      return `
        <article class="lesson-card">
          <div class="lesson-top">
            <span class="lesson-number">${String(index + 1).padStart(2, "0")}</span>
            <label>
              <input type="checkbox" data-step="${step.id}" ${checked} />
              完成
            </label>
          </div>
          <h3>${step.title}</h3>
          <p>${step.detail}</p>
        </article>
      `;
    })
    .join("");

  container.querySelectorAll("input[data-step]").forEach((input) => {
    input.addEventListener("change", (event) => {
      const id = event.currentTarget.dataset.step;
      progress.completedSteps = toggleInArray(progress.completedSteps, id, event.currentTarget.checked);
      saveProgress();
    });
  });
}

function renderSoundGrid() {
  const group = groups[activeGroup];
  document.querySelector("#groupLabel").textContent = group.label;
  document.querySelector("#groupSummary").textContent = group.summary;

  document.querySelector("#soundGrid").innerHTML = group.items
    .map((item) => {
      const checked = progress.knownSounds.includes(item.id) ? "checked" : "";
      return `
        <article class="sound-card">
          <div class="sound-main">
            <div>
              <div class="sound-symbol">${item.symbol}</div>
              <div class="sound-meta">
                <strong>${item.sound}</strong>
                <span>${item.roman}</span>
              </div>
            </div>
            <button class="icon-button" type="button" data-speak="${item.sound}" title="播放 ${item.sound}" aria-label="播放 ${item.sound}">▶</button>
          </div>
          <p class="sound-tip">${item.zh}</p>
          <div class="mouth-row">
            ${mouthSvg(item.mouth)}
            <span class="mouth-label">${item.mouthLabel}</span>
          </div>
          <div class="card-actions">
            <label class="mark-sound">
              <input type="checkbox" data-sound="${item.id}" ${checked} />
              熟了
            </label>
            <button class="quiet-action" type="button" data-speak-slow="${item.sound}">拆音聽</button>
          </div>
        </article>
      `;
    })
    .join("");

  document.querySelectorAll("[data-speak]").forEach((button) => {
    button.addEventListener("click", () => speak(button.dataset.speak));
  });

  document.querySelectorAll("[data-speak-slow]").forEach((button) => {
    button.addEventListener("click", () => speak(button.dataset.speakSlow, { rate: 0.5 }));
  });

  document.querySelectorAll("input[data-sound]").forEach((input) => {
    input.addEventListener("change", (event) => {
      const id = event.currentTarget.dataset.sound;
      progress.knownSounds = toggleInArray(progress.knownSounds, id, event.currentTarget.checked);
      saveProgress();
    });
  });
}

function renderPronunciationRules() {
  document.querySelector("#pronunciationRuleGrid").innerHTML = pronunciationRules
    .map(
      (rule) => `
        <article class="pronunciation-card">
          <span>${rule.pattern}</span>
          <h3>${rule.title}</h3>
          <p>${rule.zh}</p>
          <button class="icon-text-button" type="button" data-phrase="${rule.example}">
            <span aria-hidden="true">▶</span>
            聽例子
          </button>
        </article>
      `
    )
    .join("");

  bindPhraseButtons("#pronunciationRuleGrid");
}

function renderLearningBanks() {
  renderWordBank("#travelWordGrid", travelWords);
  renderSentenceBank("#travelSentenceGrid", travelSentences);
  renderSentenceBank("#dailySentenceGrid", dailySentences);
}

function renderWordBank(selector, words) {
  document.querySelector(selector).innerHTML = words
    .map(
      (word) => `
        <article class="word-card">
          <div>
            <span class="topic-tag">${word.note}</span>
            <strong>${word.ko}</strong>
            <h3>${word.zh}</h3>
          </div>
          <p>${word.sentence}</p>
          <button class="icon-text-button" type="button" data-phrase="${word.sentence}">
            <span aria-hidden="true">▶</span>
            聽例句
          </button>
        </article>
      `
    )
    .join("");

  bindPhraseButtons(selector);
}

function renderSentenceBank(selector, sentences) {
  document.querySelector(selector).innerHTML = sentences
    .map(
      (sentence) => `
        <article class="sentence-card">
          <div>
            <strong>${sentence.ko}</strong>
            <h3>${sentence.zh}</h3>
          </div>
          <p>${sentence.tip}</p>
          <button class="icon-text-button" type="button" data-phrase="${sentence.ko}">
            <span aria-hidden="true">▶</span>
            慢速聽句
          </button>
        </article>
      `
    )
    .join("");

  bindPhraseButtons(selector);
}

function bindPhraseButtons(scopeSelector = document) {
  const scope = typeof scopeSelector === "string" ? document.querySelector(scopeSelector) : scopeSelector;
  scope?.querySelectorAll("[data-phrase]").forEach((button) => {
    button.addEventListener("click", () => speak(button.dataset.phrase));
  });
}

function mouthSvg(type) {
  const variants = {
    open: `<ellipse class="mouth" cx="39" cy="34" rx="16" ry="15" /><path class="tongue" d="M27 40 Q39 47 51 40" />`,
    backOpen: `<path class="mouth" d="M22 31 Q39 18 56 31 Q51 51 39 51 Q27 51 22 31Z" /><path class="tongue" d="M29 43 Q39 47 49 43" />`,
    round: `<circle class="mouth" cx="39" cy="35" r="13" /><circle cx="39" cy="35" r="5" fill="#7d2b32" />`,
    smallRound: `<circle class="mouth" cx="39" cy="35" r="10" /><circle cx="39" cy="35" r="3.5" fill="#7d2b32" />`,
    flat: `<path class="mouth" d="M21 36 Q39 28 57 36 Q39 44 21 36Z" />`,
    spread: `<path class="mouth" d="M18 34 Q39 47 60 34 Q39 39 18 34Z" />`,
    lips: `<path class="mouth" d="M22 34 Q39 29 56 34 Q39 39 22 34Z" /><path class="tongue" d="M25 34 L53 34" />`,
    nasal: `<path class="mouth" d="M24 36 Q39 30 54 36 Q39 42 24 36Z" /><path class="air" d="M19 20 Q10 16 8 27" /><path class="air" d="M59 20 Q68 16 70 27" />`,
    tongue: `<path class="mouth" d="M20 34 Q39 23 58 34 Q51 48 39 48 Q27 48 20 34Z" /><path class="tongue" d="M31 35 Q39 30 47 35 Q43 43 35 43 Q32 40 31 35Z" />`,
    tongueBack: `<path class="mouth" d="M20 34 Q39 24 58 34 Q51 50 39 50 Q27 50 20 34Z" /><path class="tongue" d="M35 43 Q48 33 56 36 Q50 48 39 49" />`,
    tongueTap: `<path class="mouth" d="M20 34 Q39 24 58 34 Q50 50 39 50 Q28 50 20 34Z" /><path class="tongue" d="M30 41 Q37 28 46 37" />`,
    fricative: `<path class="mouth" d="M18 34 Q39 28 60 34 Q39 40 18 34Z" /><path class="air" d="M58 26 C66 23 67 37 74 34" />`,
    air: `<path class="mouth" d="M20 34 Q39 25 58 34 Q52 48 39 48 Q26 48 20 34Z" /><path class="air" d="M58 26 C66 21 68 36 75 31" /><path class="air" d="M57 38 C66 35 68 47 74 44" />`,
    airBack: `<path class="mouth" d="M20 34 Q39 24 58 34 Q52 50 39 50 Q26 50 20 34Z" /><path class="tongue" d="M35 43 Q48 33 56 36" /><path class="air" d="M58 25 C68 19 69 34 76 30" />`,
    airLips: `<path class="mouth" d="M22 34 Q39 29 56 34 Q39 39 22 34Z" /><path class="air" d="M56 27 C66 21 68 34 75 29" /><path class="air" d="M56 40 C66 38 67 49 74 45" />`,
    airOpen: `<ellipse class="mouth" cx="39" cy="35" rx="16" ry="13" /><path class="air" d="M57 24 C67 18 70 31 76 27" />`,
    tense: `<path class="mouth" d="M20 34 Q39 24 58 34 Q50 46 39 46 Q28 46 20 34Z" /><path class="tongue" d="M30 39 Q39 30 48 39" /><path class="air" d="M58 31 L72 31" />`,
    tenseBack: `<path class="mouth" d="M20 34 Q39 24 58 34 Q50 47 39 47 Q28 47 20 34Z" /><path class="tongue" d="M36 43 Q48 32 57 35" /><path class="air" d="M58 31 L72 31" />`,
    tenseLips: `<path class="mouth" d="M21 34 Q39 28 57 34 Q39 37 21 34Z" /><path class="air" d="M57 31 L72 31" />`,
    tenseFricative: `<path class="mouth" d="M18 34 Q39 29 60 34 Q39 38 18 34Z" /><path class="air" d="M58 31 L74 31" />`,
    glideOpen: `<circle class="mouth" cx="31" cy="33" r="8" /><ellipse class="mouth" cx="50" cy="36" rx="13" ry="15" />`,
    glideSpread: `<circle class="mouth" cx="29" cy="33" r="8" /><path class="mouth" d="M39 35 Q53 44 67 35 Q53 39 39 35Z" />`,
    glideBack: `<circle class="mouth" cx="30" cy="34" r="8" /><path class="mouth" d="M42 33 Q55 24 68 33 Q64 47 55 47 Q46 47 42 33Z" />`,
    flatSpread: `<path class="mouth" d="M14 36 Q28 30 42 36 Q28 41 14 36Z" /><path class="mouth" d="M39 35 Q53 44 67 35 Q53 39 39 35Z" />`
  };

  return `
    <svg class="mouth-svg mouth-${type}" viewBox="0 0 78 64" aria-hidden="true" focusable="false">
      <rect class="face" x="5" y="5" width="68" height="54" rx="27" />
      <ellipse class="cheek" cx="20" cy="35" rx="6" ry="3.5" />
      <ellipse class="cheek" cx="58" cy="35" rx="6" ry="3.5" />
      <circle cx="27" cy="24" r="2.2" fill="#18231f" />
      <circle cx="51" cy="24" r="2.2" fill="#18231f" />
      <path d="M37 25 Q39 30 36 32" fill="none" stroke="#18231f" stroke-width="1.4" stroke-linecap="round" />
      ${variants[type] || variants.open}
    </svg>
  `;
}

function toggleInArray(array, item, shouldInclude) {
  const set = new Set(array);
  if (shouldInclude) {
    set.add(item);
  } else {
    set.delete(item);
  }
  return [...set];
}

function renderBuilder() {
  const initialSelect = document.querySelector("#initialSelect");
  const vowelSelect = document.querySelector("#vowelSelect");
  const finalSelect = document.querySelector("#finalSelect");

  initialSelect.innerHTML = initials.map(([label, value]) => `<option value="${value}">${label}</option>`).join("");
  vowelSelect.innerHTML = medialVowels.map(([label, value]) => `<option value="${value}">${label}</option>`).join("");
  finalSelect.innerHTML = finals.map(([label, value]) => `<option value="${value}">${label}</option>`).join("");

  [initialSelect, vowelSelect, finalSelect].forEach((select) => {
    select.addEventListener("change", updateBuilder);
  });

  updateBuilder();
}

function updateBuilder() {
  const l = Number(document.querySelector("#initialSelect").value);
  const v = Number(document.querySelector("#vowelSelect").value);
  const t = Number(document.querySelector("#finalSelect").value);
  const syllable = String.fromCharCode(0xac00 + (l * 21 + v) * 28 + t);
  const initialLabel = initials.find((item) => item[1] === l)?.[0] || "";
  const vowelLabel = medialVowels.find((item) => item[1] === v)?.[0] || "";
  const finalLabel = finals.find((item) => item[1] === t)?.[0] || "";
  document.querySelector("#builtSyllable").textContent = syllable;
  document.querySelector("#builderNote").textContent =
    t === 0 ? `${initialLabel} + ${vowelLabel} = ${syllable}` : `${initialLabel} + ${vowelLabel} + ${finalLabel} = ${syllable}`;
  document.querySelector("#heroSyllable").textContent = syllable;
}

function setupQuizModes() {
  document.querySelectorAll("#quizModeTabs [data-practice-view]").forEach((button) => {
    button.addEventListener("click", () => {
      activatePracticeView(button.dataset.practiceView, button.dataset.mode);
    });
  });
}

function activatePracticeView(view, mode) {
  document.querySelectorAll("#quizModeTabs [data-practice-view]").forEach((button) => {
    const isActive = button.dataset.practiceView === view && (!mode || button.dataset.mode === mode);
    button.classList.toggle("is-active", isActive);
  });
  document.querySelectorAll(".practice-view").forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === view);
  });
  if (mode) {
    activeQuizMode = mode;
    newQuiz();
  }
}

function setupLearningViews() {
  document.querySelectorAll(".learning-menu [data-learning-view]").forEach((button) => {
    button.addEventListener("click", () => {
      activateLearningView(button.dataset.learningView, true);
    });
  });
}

function activateLearningView(id, shouldScroll = false) {
  document.querySelectorAll(".learning-menu [data-learning-view]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.learningView === id);
  });
  document.querySelectorAll(".learning-view").forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === id);
  });
  window.history.replaceState(null, "", `#${id}`);
  if (shouldScroll) {
    document.querySelector(".content-shell")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function newQuiz() {
  const modeInfo = quizModes[activeQuizMode];
  let answer;
  let options;
  let prompt;
  let speakText = "";
  let correctText = "";

  if (activeQuizMode === "soundToLetter") {
    answer = randomItem(soundQuizPool);
    options = makeOptions(soundQuizPool, answer).map((item) => ({
      id: item.id,
      primary: item.symbol,
      secondary: item.sound
    }));
    prompt = "聽音後選出正確的韓文字母";
    speakText = answer.sound;
    correctText = `${answer.symbol} ${answer.sound} (${answer.roman})`;
  } else if (activeQuizMode === "soundToWord") {
    answer = randomItem(wordQuizPool);
    options = makeOptions(wordQuizPool, answer).map((item) => ({
      id: item.id,
      primary: item.ko,
      secondary: item.zh
    }));
    prompt = "聽音後選出正確詞語";
    speakText = answer.ko;
    correctText = `${answer.ko}：${answer.zh}`;
  } else {
    answer = randomItem(sentenceQuizPool);
    options = makeOptions(sentenceQuizPool, answer).map((item) => ({
      id: item.id,
      primary: item.ko,
      secondary: item.tip
    }));
    prompt = `「${answer.zh}」的韓文是？`;
    correctText = `${answer.ko}：${answer.zh}`;
  }

  currentQuiz = {
    id: answer.id,
    speakText,
    correctText
  };

  const quizCard = document.querySelector(".quiz-card");
  const playButton = document.querySelector("#playQuiz");
  quizCard.classList.toggle("no-audio", !speakText);
  playButton.classList.toggle("is-hidden", !speakText);
  playButton.setAttribute("aria-hidden", speakText ? "false" : "true");

  document.querySelector("#quizLevel").textContent = modeInfo.chip;
  document.querySelector("#quizResult").textContent = "";
  document.querySelector("#quizPrompt").textContent = prompt;
  document.querySelector("#quizHint").textContent = modeInfo.hint;
  document.querySelector("#answerGrid").innerHTML = options
    .map((item) => `<button type="button" data-answer="${item.id}">${item.primary}<small>${item.secondary}</small></button>`)
    .join("");

  document.querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", checkAnswer);
  });
}

function makeOptions(pool, answer) {
  return shuffle([answer, ...shuffle(pool.filter((item) => item.id !== answer.id)).slice(0, 3)]);
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function checkAnswer(event) {
  const button = event.currentTarget;
  const isCorrect = button.dataset.answer === currentQuiz.id;
  progress.quizTotal += 1;
  if (isCorrect) {
    progress.quizCorrect += 1;
  }

  document.querySelectorAll("[data-answer]").forEach((answerButton) => {
    answerButton.disabled = true;
    if (answerButton.dataset.answer === currentQuiz.id) {
      answerButton.classList.add("is-correct");
    }
  });

  if (!isCorrect) {
    button.classList.add("is-wrong");
  }

  document.querySelector("#quizResult").textContent = isCorrect
    ? `答對了：${currentQuiz.correctText}`
    : `這題是 ${currentQuiz.correctText}`;
  saveProgress();
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function renderThemes() {
  const tabs = document.querySelector("#themeTabs");
  tabs.innerHTML = themes
    .map((theme) => `<button type="button" class="${theme.id === activeTheme ? "is-active" : ""}" data-theme="${theme.id}">${theme.label}</button>`)
    .join("");

  tabs.querySelectorAll("[data-theme]").forEach((button) => {
    button.addEventListener("click", () => {
      activeTheme = button.dataset.theme;
      renderThemes();
      renderWords();
    });
  });

  renderWords();
}

function renderWords() {
  const theme = themes.find((item) => item.id === activeTheme) || themes[0];
  document.querySelector("#wordGrid").innerHTML = theme.words
    .map(
      (word) => `
        <article class="word-card">
          <div>
            <strong>${word.ko}</strong>
            <h3>${word.zh}</h3>
          </div>
          <p>${word.sentence}</p>
          <button class="icon-text-button" type="button" data-word="${word.sentence}">
            <span aria-hidden="true">▶</span>
            聽例句
          </button>
        </article>
      `
    )
    .join("");

  document.querySelectorAll("[data-word]").forEach((button) => {
    button.addEventListener("click", () => speak(button.dataset.word));
  });
}

function renderChecklist() {
  const day = todayKey();
  const saved = progress.checklist[day] || [];
  document.querySelector("#dailyChecklist").innerHTML = checklistItems
    .map((item) => {
      const checked = saved.includes(item.id) ? "checked" : "";
      return `
        <label>
          <input type="checkbox" data-check="${item.id}" ${checked} />
          ${item.label}
        </label>
      `;
    })
    .join("");

  document.querySelectorAll("[data-check]").forEach((input) => {
    input.addEventListener("change", () => {
      const checkedIds = [...document.querySelectorAll("[data-check]:checked")].map((node) => node.dataset.check);
      progress.checklist[day] = checkedIds;
      saveProgress();
    });
  });
}

function checkInToday() {
  const day = todayKey();
  progress.checkins[day] = true;
  progress.checklist[day] = checklistItems.map((item) => item.id);
  saveProgress();
  renderChecklist();
  document.querySelector("#checkInButton").textContent = "今天已打卡";
}

function updateStats() {
  const day = todayKey();
  const totalSounds = Object.values(groups).reduce((sum, group) => sum + group.items.length, 0);
  const completedRatio = Math.round(((progress.knownSounds.length + progress.completedSteps.length) / (totalSounds + learningSteps.length)) * 100);
  const minutes = progress.minutes[day] || 0;

  document.querySelector("#todayMinutes").textContent = minutes;
  document.querySelector("#knownSounds").textContent = `${progress.knownSounds.length}/${totalSounds}`;
  document.querySelector("#streakDays").textContent = calculateStreak();
  document.querySelector("#heroProgress").textContent = `${completedRatio}%`;
  document.querySelector("#heroProgressBar").style.width = `${completedRatio}%`;
  document.querySelector("#checkInButton").textContent = progress.checkins[day] ? "今天已打卡" : "完成今日學習";
  renderWeekBars();
}

function calculateStreak() {
  let streak = 0;
  for (let offset = 0; offset > -365; offset -= 1) {
    if (progress.checkins[todayKey(offset)]) {
      streak += 1;
    } else {
      break;
    }
  }
  return streak;
}

function renderWeekBars() {
  const container = document.querySelector("#weekBars");
  const days = Array.from({ length: 7 }, (_, index) => index - 6).map((offset) => {
    const key = todayKey(offset);
    const [year, month, dayNumber] = key.split("-").map(Number);
    const date = new Date(year, month - 1, dayNumber);
    return {
      key,
      label: `${date.getMonth() + 1}/${date.getDate()}`,
      minutes: progress.minutes[key] || 0,
      checked: Boolean(progress.checkins[key])
    };
  });
  const max = Math.max(15, ...days.map((day) => day.minutes));

  container.innerHTML = days
    .map((day) => {
      const height = Math.max(4, Math.round((day.minutes / max) * 100));
      const marker = day.checked ? "✓" : "";
      return `
        <div class="week-day" style="--bar-width:${height}%">
          <div class="bar-shell">
            <div class="bar-fill" style="height:${height}%"></div>
          </div>
          <strong>${day.label}</strong>
          <span>${day.minutes} 分 ${marker}</span>
        </div>
      `;
    })
    .join("");
}

function setupTabs() {
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => activateTab(button.dataset.tab, true));
  });

  document.querySelectorAll("[data-tab-target]").forEach((button) => {
    button.addEventListener("click", () => activateTab(button.dataset.tabTarget, true));
  });

  document.querySelector(".brand").addEventListener("click", (event) => {
    event.preventDefault();
    activateTab("learning", true);
  });

  const hash = window.location.hash.replace("#", "");
  if (["learning", "practice", "record"].includes(hash)) {
    activateTab(hash, true);
  } else if (hash && document.getElementById(hash)?.classList.contains("learning-view")) {
    activateTab("learning", false);
    activateLearningView(hash, false);
  } else if (hash && document.getElementById(hash)?.classList.contains("practice-view")) {
    activateTab("practice", false);
    const button = document.querySelector(`[data-practice-view="${hash}"]`);
    activatePracticeView(hash, button?.dataset.mode);
  }
}

function activateTab(id, shouldScroll = false) {
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.tab === id);
  });
  document.querySelectorAll(".tab-panel").forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === id);
  });
  window.history.replaceState(null, "", `#${id}`);
  const panel = document.querySelector(`#${id}`);
  panel?.focus({ preventScroll: true });
  if (shouldScroll) {
    panel?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function setupControls() {
  setupLearningViews();
  setupQuizModes();

  document.querySelectorAll(".group-button").forEach((button) => {
    button.addEventListener("click", () => {
      activeGroup = button.dataset.group;
      document.querySelectorAll(".group-button").forEach((node) => node.classList.toggle("is-active", node === button));
      renderSoundGrid();
    });
  });

  document.querySelectorAll(".speed-button").forEach((button) => {
    button.classList.toggle("is-active", Number(button.dataset.rate) === speechRate);
    button.addEventListener("click", () => {
      speechRate = Number(button.dataset.rate);
      document.querySelectorAll(".speed-button").forEach((node) => node.classList.toggle("is-active", node === button));
      saveProgress();
    });
  });

  document.querySelector("#stopSpeech").addEventListener("click", () => window.speechSynthesis?.cancel());
  document.querySelector("#playGroup").addEventListener("click", playActiveGroup);
  document.querySelector("#playQuiz").addEventListener("click", () => {
    if (currentQuiz?.speakText) {
      speak(currentQuiz.speakText);
    }
  });
  document.querySelector("#nextQuiz").addEventListener("click", newQuiz);
  document.querySelector("#playBuilt").addEventListener("click", () => speak(document.querySelector("#builtSyllable").textContent));
  document.querySelector("#checkInButton").addEventListener("click", checkInToday);
  document.querySelector("#studyNotes").addEventListener("input", (event) => {
    progress.notes = event.currentTarget.value;
    saveProgress();
  });
  document.querySelector("#studyNotes").value = progress.notes || "";

  document.querySelector("#exportProgress").addEventListener("click", exportProgress);
  document.querySelector("#resetProgress").addEventListener("click", resetProgress);

  document.querySelectorAll("[data-jump]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.jump;
      if (document.querySelector(`#${target}.learning-view`)) {
        activateTab("learning", false);
        activateLearningView(target, false);
        document.querySelector(".content-shell")?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      document.querySelector(`#${target}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function playActiveGroup() {
  if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
    return;
  }
  const sounds = groups[activeGroup].items.map((item) => item.sound);
  let index = 0;

  const playNext = () => {
    if (index >= sounds.length) {
      return;
    }
    const utterance = new SpeechSynthesisUtterance(sounds[index]);
    utterance.lang = "ko-KR";
    utterance.rate = speechRate;
    utterance.onend = () => {
      index += 1;
      window.setTimeout(playNext, 260);
    };
    window.speechSynthesis.speak(utterance);
  };

  window.speechSynthesis?.cancel();
  playNext();
}

function exportProgress() {
  const blob = new Blob([JSON.stringify(progress, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `hangul-progress-${todayKey()}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function resetProgress() {
  const confirmed = window.confirm("確定要清除這台裝置上的學習紀錄嗎？");
  if (!confirmed) {
    return;
  }
  localStorage.removeItem(STORAGE_KEY);
  progress = loadProgress();
  speechRate = Number(progress.rate || 0.72);
  renderLearningPath();
  renderSoundGrid();
  renderChecklist();
  document.querySelector("#studyNotes").value = "";
  updateStats();
}

function trackStudyTime() {
  window.setInterval(() => {
    if (document.hidden) {
      return;
    }
    activeSeconds += 10;
    if (activeSeconds >= 60) {
      activeSeconds = 0;
      const day = todayKey();
      progress.minutes[day] = (progress.minutes[day] || 0) + 1;
      saveProgress();
    }
  }, 10000);
}

function init() {
  setupControls();
  setupTabs();
  renderLearningPath();
  renderSoundGrid();
  renderPronunciationRules();
  renderLearningBanks();
  renderBuilder();
  renderThemes();
  renderChecklist();
  newQuiz();
  updateStats();
  trackStudyTime();
}

window.speechSynthesis?.getVoices();
window.addEventListener("load", init);
