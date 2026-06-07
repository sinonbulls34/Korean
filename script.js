const soundGroups = [
  {
    id: "basic-vowels",
    title: "基本母音 10 個",
    description: "先用嘴型分辨前後、圓唇與扁唇。母音練穩，後面的拼字會快很多。",
    items: [
      { char: "ㅏ", roman: "a", speak: "아", shape: "open", mouth: "自然張口", tip: "像中文「啊」，下巴放鬆，舌頭低一點。" },
      { char: "ㅑ", roman: "ya", speak: "야", shape: "open", mouth: "先 y 再啊", tip: "先做短短的「ㄧ」滑音，再接「啊」。" },
      { char: "ㅓ", roman: "eo", speak: "어", shape: "back", mouth: "後口腔", tip: "嘴不要太扁，聲音往喉嚨後方放。" },
      { char: "ㅕ", roman: "yeo", speak: "여", shape: "back", mouth: "y + 後口腔", tip: "先輕輕帶出 y，再進到 ㅓ 的位置。" },
      { char: "ㅗ", roman: "o", speak: "오", shape: "round", mouth: "圓唇", tip: "嘴唇收圓，像要吹氣但聲音短。" },
      { char: "ㅛ", roman: "yo", speak: "요", shape: "round", mouth: "y + 圓唇", tip: "先 y，再把嘴唇收圓到 ㅗ。" },
      { char: "ㅜ", roman: "u", speak: "우", shape: "round-small", mouth: "小圓唇", tip: "比 ㅗ 更往前收，嘴唇圓且小。" },
      { char: "ㅠ", roman: "yu", speak: "유", shape: "round-small", mouth: "y + 小圓唇", tip: "先 y，再快速收成 ㅜ 的嘴型。" },
      { char: "ㅡ", roman: "eu", speak: "으", shape: "flat", mouth: "平嘴", tip: "嘴唇放平，不要發成中文「ㄜ」。" },
      { char: "ㅣ", roman: "i", speak: "이", shape: "smile", mouth: "微笑嘴", tip: "嘴角往兩側拉，接近中文「衣」。" },
    ],
  },
  {
    id: "compound-vowels",
    title: "複合母音 11 個",
    description: "複合母音多半是兩個嘴型的滑動。先慢慢拆，再練成一拍。",
    items: [
      { char: "ㅐ", roman: "ae", speak: "애", shape: "smile-open", mouth: "扁開口", tip: "介於 ㅏ 與 ㅣ 之間，嘴角略往兩側。" },
      { char: "ㅒ", roman: "yae", speak: "얘", shape: "smile-open", mouth: "y + 扁開口", tip: "先 y，再接 ㅐ。" },
      { char: "ㅔ", roman: "e", speak: "에", shape: "smile-open", mouth: "扁開口", tip: "現代口語常和 ㅐ 接近，初學先認字形。" },
      { char: "ㅖ", roman: "ye", speak: "예", shape: "smile-open", mouth: "y + e", tip: "常在禮貌表達 예 裡出現，發音短而清楚。" },
      { char: "ㅘ", roman: "wa", speak: "와", shape: "round-open", mouth: "圓到開", tip: "從 ㅗ 的圓唇滑到 ㅏ 的開口。" },
      { char: "ㅙ", roman: "wae", speak: "왜", shape: "round-smile", mouth: "圓到扁", tip: "從圓唇滑到 ㅐ，常見於 왜「為什麼」。" },
      { char: "ㅚ", roman: "oe", speak: "외", shape: "round-smile", mouth: "圓到 i", tip: "口語常接近 we，先記成 ㅗ + ㅣ。" },
      { char: "ㅝ", roman: "wo", speak: "워", shape: "round-back", mouth: "圓到後", tip: "從 ㅜ 滑到 ㅓ，嘴唇先收再放。" },
      { char: "ㅞ", roman: "we", speak: "웨", shape: "round-smile", mouth: "圓到 e", tip: "從 ㅜ 滑到 ㅔ。" },
      { char: "ㅟ", roman: "wi", speak: "위", shape: "round-smile", mouth: "圓到 i", tip: "先圓唇，再把嘴角拉開。" },
      { char: "ㅢ", roman: "ui", speak: "의", shape: "flat-smile", mouth: "平到 i", tip: "從 ㅡ 滑到 ㅣ；助詞時常讀得更輕。" },
    ],
  },
  {
    id: "single-consonants",
    title: "單子音 14 個",
    description: "子音要搭配母音才會成聲。先用代表音節練入口位置與氣流。",
    items: [
      { char: "ㄱ", roman: "g/k", speak: "가", shape: "tongue-back", mouth: "舌根", tip: "舌根碰軟顎，句首偏 k，母音中間偏 g。" },
      { char: "ㄴ", roman: "n", speak: "나", shape: "tongue-front", mouth: "舌尖", tip: "舌尖貼上齒齦，氣從鼻腔走。" },
      { char: "ㄷ", roman: "d/t", speak: "다", shape: "tongue-front", mouth: "舌尖", tip: "舌尖短暫擋住氣流，句首偏 t。" },
      { char: "ㄹ", roman: "r/l", speak: "라", shape: "tongue-tap", mouth: "舌尖輕彈", tip: "像很短的 r；收音時接近 l。" },
      { char: "ㅁ", roman: "m", speak: "마", shape: "closed", mouth: "雙唇", tip: "雙唇閉合，氣從鼻腔出來。" },
      { char: "ㅂ", roman: "b/p", speak: "바", shape: "closed-air", mouth: "雙唇爆破", tip: "嘴唇先閉再放開，句首偏 p。" },
      { char: "ㅅ", roman: "s", speak: "사", shape: "air-front", mouth: "細氣流", tip: "氣流從牙齒附近通過；接 ㅣ 時更接近 shi。" },
      { char: "ㅇ", roman: "silent/ng", speak: "아", shape: "open", mouth: "起音空位", tip: "在開頭不發音；在收音位置是 ng。" },
      { char: "ㅈ", roman: "j", speak: "자", shape: "air-front", mouth: "舌面", tip: "像 j 與 ch 之間，氣流較短。" },
      { char: "ㅊ", roman: "ch", speak: "차", shape: "aspirated", mouth: "送氣", tip: "比 ㅈ 多一口氣，手放嘴前會感到氣。" },
      { char: "ㅋ", roman: "k", speak: "카", shape: "aspirated", mouth: "舌根送氣", tip: "比 ㄱ 明顯送氣。" },
      { char: "ㅌ", roman: "t", speak: "타", shape: "aspirated", mouth: "舌尖送氣", tip: "比 ㄷ 明顯送氣。" },
      { char: "ㅍ", roman: "p", speak: "파", shape: "closed-air", mouth: "雙唇送氣", tip: "比 ㅂ 明顯送氣。" },
      { char: "ㅎ", roman: "h", speak: "하", shape: "aspirated", mouth: "喉部氣流", tip: "用一口輕氣帶出後面的母音。" },
    ],
  },
  {
    id: "double-consonants",
    title: "雙子音 5 個",
    description: "雙子音不是拉長，而是先把氣鎖住，再短促地放開。",
    items: [
      { char: "ㄲ", roman: "kk", speak: "까", shape: "tight", mouth: "緊舌根", tip: "像 ㄱ，但喉嚨與舌根先收緊。" },
      { char: "ㄸ", roman: "tt", speak: "따", shape: "tight", mouth: "緊舌尖", tip: "像 ㄷ，但更短、更緊，沒有明顯送氣。" },
      { char: "ㅃ", roman: "pp", speak: "빠", shape: "tight-closed", mouth: "緊雙唇", tip: "像 ㅂ，但嘴唇先鎖住再放。" },
      { char: "ㅆ", roman: "ss", speak: "싸", shape: "tight-air", mouth: "緊細氣流", tip: "像 ㅅ，但氣流更集中。" },
      { char: "ㅉ", roman: "jj", speak: "짜", shape: "tight-air", mouth: "緊舌面", tip: "像 ㅈ，但起音更緊、更短。" },
    ],
  },
];

const pronunciationRules = [
  {
    title: "母音前需要 ㅇ 當起音",
    body: "韓文音節一定要有子音位置。單獨母音前面放 ㅇ，這個 ㅇ 在開頭不發音。",
    examples: ["ㅏ → 아", "ㅗ → 오", "ㅢ → 의"],
  },
  {
    title: "收音只保留少數代表音",
    body: "音節底部的子音叫收音。初學先抓七個代表聲音：ㄱ、ㄴ、ㄷ、ㄹ、ㅁ、ㅂ、ㅇ。",
    examples: ["국", "문", "닫", "말", "밤", "밥", "강"],
  },
  {
    title: "下一音節是 ㅇ 時會連音",
    body: "前一個收音遇到後面 ㅇ 開頭，常把收音移到後面的母音前，讀起來更順。",
    examples: ["한국어 → 한구거", "먹어요 → 머거요", "걸어요 → 거러요"],
  },
  {
    title: "ㄱ ㄷ ㅂ ㅈ 在中間較濁",
    body: "在母音之間，這些子音聽起來更接近 g、d、b、j；在句首則更接近 k、t、p、ch。",
    examples: ["가구", "바다", "아버지"],
  },
  {
    title: "送氣音要真的有氣",
    body: "ㅋ、ㅌ、ㅍ、ㅊ 比 ㄱ、ㄷ、ㅂ、ㅈ 多一口氣。可以把手放在嘴前感覺氣流。",
    examples: ["가 / 카", "다 / 타", "바 / 파", "자 / 차"],
  },
  {
    title: "雙子音短促緊張",
    body: "ㄲ、ㄸ、ㅃ、ㅆ、ㅉ 不是大聲，也不是拉長。先把發音部位鎖住，再快速放開。",
    examples: ["가 / 까", "다 / 따", "사 / 싸", "자 / 짜"],
  },
];

const dailyPhrases = [
  { ko: "안녕하세요", zh: "你好", roman: "annyeonghaseyo", note: "最安全的禮貌問候。" },
  { ko: "감사합니다", zh: "謝謝", roman: "gamsahamnida", note: "正式、禮貌，日常很常用。" },
  { ko: "네", zh: "是 / 好", roman: "ne", note: "回答、確認、表示有在聽。" },
  { ko: "아니요", zh: "不是 / 不", roman: "aniyo", note: "禮貌否定。" },
  { ko: "괜찮아요", zh: "沒關係 / 還好", roman: "gwaenchanayo", note: "拒絕或安慰都可用。" },
  { ko: "죄송합니다", zh: "對不起", roman: "joesonghamnida", note: "正式道歉。" },
  { ko: "좋아요", zh: "好 / 喜歡", roman: "joayo", note: "表示同意或喜歡。" },
  { ko: "싫어요", zh: "不喜歡", roman: "sireoyo", note: "表達不想要或不喜歡。" },
  { ko: "주세요", zh: "請給我", roman: "juseyo", note: "點餐、購物必備。" },
  { ko: "화장실", zh: "洗手間", roman: "hwajangsil", note: "旅行與日常都很實用。" },
];

const travelPhrases = [
  { ko: "공항", zh: "機場", roman: "gonghang", note: "抵達與交通會常看到。" },
  { ko: "호텔", zh: "飯店", roman: "hotel", note: "外來語，讀音接近英文 hotel。" },
  { ko: "지하철", zh: "地鐵", roman: "jihacheol", note: "首爾移動高頻詞。" },
  { ko: "버스", zh: "公車", roman: "beoseu", note: "注意 ㅡ 的平嘴音。" },
  { ko: "택시", zh: "計程車", roman: "taeksi", note: "外來語 taxi。" },
  { ko: "여기", zh: "這裡", roman: "yeogi", note: "搭配 주세요 很常用。" },
  { ko: "얼마예요?", zh: "多少錢？", roman: "eolmayeyo", note: "購物、點餐都可用。" },
  { ko: "예약했어요", zh: "我有預約", roman: "yeyakaesseoyo", note: "飯店、餐廳報到。" },
  { ko: "길을 잃었어요", zh: "我迷路了", roman: "gireul ireosseoyo", note: "需要協助時使用。" },
  { ko: "도와주세요", zh: "請幫忙", roman: "dowajuseyo", note: "緊急或需要協助時使用。" },
  { ko: "물", zh: "水", roman: "mul", note: "收音 ㄹ 要收住。" },
  { ko: "카드", zh: "卡片 / 信用卡", roman: "kadeu", note: "付款時常用。" },
];

const leadingConsonants = [
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
  ["ㅎ", 18],
];

const vowels = [
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
  ["ㅣ", 20],
];

const finalConsonants = [
  ["無收音", 0],
  ["ㄱ", 1],
  ["ㄴ", 4],
  ["ㄷ", 7],
  ["ㄹ", 8],
  ["ㅁ", 16],
  ["ㅂ", 17],
  ["ㅇ", 21],
];

const allSoundItems = soundGroups.flatMap((group) =>
  group.items.map((item) => ({ ...item, groupTitle: group.title, id: `${group.id}-${item.char}` }))
);
const phraseItems = [...dailyPhrases, ...travelPhrases];
const progressKey = "hangul-starter-progress-v1";
let completedSounds = new Set(JSON.parse(localStorage.getItem(progressKey) || "[]"));
let activeSoundGroup = soundGroups[0].id;
let practiceState = {
  type: "sound-letter",
  score: 0,
  total: 0,
  question: null,
  answered: false,
};

const learnContent = document.querySelector("#learn-content");
const practiceContent = document.querySelector("#practice-content");
const progressValue = document.querySelector("#progress-value");
const toast = document.querySelector("#toast");

init();

function init() {
  bindNavigation();
  renderLearning("sounds");
  renderPractice("sound-letter");
  updateProgress();
  hydrateVoices();
}

function bindNavigation() {
  document.querySelectorAll("[data-main-tab]").forEach((button) => {
    button.addEventListener("click", () => activateMainTab(button.dataset.mainTab));
  });

  document.querySelectorAll("[data-learn-section]").forEach((button) => {
    button.addEventListener("click", () => {
      setActiveButton("[data-learn-section]", button);
      renderLearning(button.dataset.learnSection);
      activateMainTab("learn");
    });
  });

  document.querySelectorAll("[data-practice-type]").forEach((button) => {
    button.addEventListener("click", () => {
      setActiveButton("[data-practice-type]", button);
      renderPractice(button.dataset.practiceType);
      activateMainTab("practice");
    });
  });
}

function activateMainTab(tabName) {
  document.querySelectorAll("[data-main-tab]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mainTab === tabName);
  });
  document.querySelectorAll("[data-panel]").forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.panel === tabName);
  });
}

function setActiveButton(selector, activeButton) {
  document.querySelectorAll(selector).forEach((button) => {
    button.classList.toggle("is-active", button === activeButton);
  });
}

function renderLearning(section) {
  const renderers = {
    sounds: renderSounds,
    rules: renderRules,
    spelling: renderSpelling,
    daily: () => renderPhrases("生活常用詞語", "先練能立刻用上的禮貌句與短詞。", dailyPhrases),
    travel: () => renderPhrases("旅行常用詞語", "把交通、住宿、問路與付款先放進耳朵。", travelPhrases),
  };
  renderers[section]();
}

function renderSounds() {
  const group = soundGroups.find((item) => item.id === activeSoundGroup) || soundGroups[0];
  learnContent.innerHTML = `
    <div class="section-head">
      <div>
        <p class="eyebrow">Hangul 40</p>
        <h2>韓文 40 音</h2>
        <p>依照基本母音、複合母音、單子音、雙子音練習。每張卡片都可以播放代表音節，點過會計入 40 音進度。</p>
      </div>
      <div class="mini-stat">
        <strong>${allSoundItems.length}</strong>
        <span>音素卡</span>
      </div>
    </div>

    <div class="chip-row" aria-label="40 音分類">
      ${soundGroups
        .map(
          (item) => `
            <button class="chip ${item.id === group.id ? "is-active" : ""}" type="button" data-sound-group="${item.id}">
              ${item.title}
            </button>
          `
        )
        .join("")}
    </div>

    <div class="section-head">
      <div>
        <h2>${group.title}</h2>
        <p>${group.description}</p>
      </div>
    </div>

    <div class="sound-grid">
      ${group.items.map((item) => renderSoundCard({ ...item, id: `${group.id}-${item.char}` })).join("")}
    </div>
  `;

  learnContent.querySelectorAll("[data-sound-group]").forEach((button) => {
    button.addEventListener("click", () => {
      activeSoundGroup = button.dataset.soundGroup;
      renderSounds();
    });
  });

  learnContent.querySelectorAll("[data-sound-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = allSoundItems.find((sound) => sound.id === button.dataset.soundId);
      if (!item) return;
      speakKorean(item.speak);
      completedSounds.add(item.id);
      localStorage.setItem(progressKey, JSON.stringify([...completedSounds]));
      button.classList.add("is-complete");
      updateProgress();
    });
  });
}

function renderSoundCard(item) {
  return `
    <button class="sound-card ${completedSounds.has(item.id) ? "is-complete" : ""}" type="button" data-sound-id="${item.id}">
      <div class="sound-symbol">
        <strong>${item.char}</strong>
        <span>${item.roman}</span>
      </div>
      ${mouthIllustration(item.shape)}
      <p class="sound-tip">${item.tip}</p>
      <div class="sound-meta">
        <span>${item.mouth}</span>
        <span>例音 ${item.speak}</span>
      </div>
    </button>
  `;
}

function renderRules() {
  learnContent.innerHTML = `
    <div class="section-head">
      <div>
        <p class="eyebrow">Pronunciation</p>
        <h2>發音規則</h2>
        <p>先學會最常影響讀字的規則。這些規則會讓音節方塊從「看懂」變成「讀順」。</p>
      </div>
    </div>

    <div class="rule-grid">
      ${pronunciationRules
        .map(
          (rule) => `
            <section class="rule-card">
              <h3>${rule.title}</h3>
              <p>${rule.body}</p>
              <div class="example-strip">
                ${rule.examples.map((example) => `<span>${example}</span>`).join("")}
              </div>
            </section>
          `
        )
        .join("")}
    </div>
  `;
}

function renderSpelling() {
  learnContent.innerHTML = `
    <div class="section-head">
      <div>
        <p class="eyebrow">Block Builder</p>
        <h2>拼字</h2>
        <p>韓文不是一個字母排一排，而是把子音、母音、收音放進音節方塊。母音直線形多半左右排，橫線形多半上下排，有收音時收在最下面。</p>
      </div>
    </div>

    <div class="builder-layout">
      <div class="builder-controls">
        <div class="select-group">
          <label for="lead-select">起音子音</label>
          <select id="lead-select">
            ${leadingConsonants.map(([label, index]) => `<option value="${index}">${label}</option>`).join("")}
          </select>
        </div>
        <div class="select-group">
          <label for="vowel-select">母音</label>
          <select id="vowel-select">
            ${vowels.map(([label, index]) => `<option value="${index}">${label}</option>`).join("")}
          </select>
        </div>
        <div class="select-group">
          <label for="final-select">收音</label>
          <select id="final-select">
            ${finalConsonants.map(([label, index]) => `<option value="${index}">${label}</option>`).join("")}
          </select>
        </div>

        <div class="rule-grid">
          <section class="rule-card">
            <h3>子音 + 母音</h3>
            <p>가、나、다 這類音節沒有收音，讀完母音就結束。</p>
            <div class="example-strip"><span>ㄱ + ㅏ = 가</span><span>ㅇ + ㅗ = 오</span></div>
          </section>
          <section class="rule-card">
            <h3>子音 + 母音 + 收音</h3>
            <p>감、문、밥 這類音節底部有收音，嘴型要在最後收住。</p>
            <div class="example-strip"><span>ㄱ + ㅏ + ㅁ = 감</span><span>ㅁ + ㅜ + ㄴ = 문</span></div>
          </section>
        </div>
      </div>

      <div class="syllable-output">
        <strong id="syllable-result">가</strong>
        <p id="syllable-breakdown">ㄱ + ㅏ</p>
        <button class="play-button" type="button" id="play-syllable">播放發音</button>
      </div>
    </div>
  `;

  const leadSelect = learnContent.querySelector("#lead-select");
  const vowelSelect = learnContent.querySelector("#vowel-select");
  const finalSelect = learnContent.querySelector("#final-select");
  const result = learnContent.querySelector("#syllable-result");
  const breakdown = learnContent.querySelector("#syllable-breakdown");
  const play = learnContent.querySelector("#play-syllable");

  const updateSyllable = () => {
    const lead = Number(leadSelect.value);
    const vowel = Number(vowelSelect.value);
    const final = Number(finalSelect.value);
    const syllable = composeHangul(lead, vowel, final);
    result.textContent = syllable;
    const leadLabel = leadingConsonants.find(([, index]) => index === lead)?.[0] || "";
    const vowelLabel = vowels.find(([, index]) => index === vowel)?.[0] || "";
    const finalLabel = finalConsonants.find(([, index]) => index === final)?.[0] || "";
    breakdown.textContent = final === 0 ? `${leadLabel} + ${vowelLabel}` : `${leadLabel} + ${vowelLabel} + ${finalLabel}`;
  };

  [leadSelect, vowelSelect, finalSelect].forEach((select) => select.addEventListener("change", updateSyllable));
  play.addEventListener("click", () => speakKorean(result.textContent));
  updateSyllable();
}

function renderPhrases(title, description, phrases) {
  learnContent.innerHTML = `
    <div class="section-head">
      <div>
        <p class="eyebrow">Words & Phrases</p>
        <h2>${title}</h2>
        <p>${description}</p>
      </div>
      <div class="mini-stat">
        <strong>${phrases.length}</strong>
        <span>詞語</span>
      </div>
    </div>

    <div class="phrase-grid">
      ${phrases.map(renderPhraseCard).join("")}
    </div>
  `;

  learnContent.querySelectorAll("[data-speak]").forEach((button) => {
    button.addEventListener("click", () => speakKorean(button.dataset.speak));
  });
}

function renderPhraseCard(phrase) {
  return `
    <section class="phrase-card">
      <div class="phrase-main">
        <div>
          <strong>${phrase.ko}</strong>
          <p>${phrase.roman}</p>
        </div>
        <span>${phrase.zh}</span>
      </div>
      <p class="phrase-note">${phrase.note}</p>
      <button class="play-button secondary" type="button" data-speak="${phrase.ko}">播放發音</button>
    </section>
  `;
}

function renderPractice(type) {
  practiceState = {
    type,
    score: 0,
    total: 0,
    question: null,
    answered: false,
  };

  const titles = {
    "sound-letter": ["聽音選字", "先聽代表音節，再選出對應的韓文字母。"],
    "sound-word": ["聽音選詞", "聽完整詞語，選出你聽到的韓文。"],
    "meaning-word": ["中文選韓文", "看到中文意思後，選出對應韓文。"],
  };

  const [title, description] = titles[type];
  practiceContent.innerHTML = `
    <div class="section-head">
      <div>
        <p class="eyebrow">Practice</p>
        <h2>${title}</h2>
        <p>${description}</p>
      </div>
    </div>

    <div class="practice-shell">
      <div class="score-row">
        <span>本輪答題 <strong id="practice-total">0</strong></span>
        <span>正確 <strong id="practice-score">0</strong></span>
      </div>
      <div id="question-stage"></div>
      <div class="feedback" id="feedback">準備好了就開始第一題。</div>
    </div>
  `;

  nextQuestion();
}

function nextQuestion() {
  const question = buildQuestion(practiceState.type);
  practiceState.question = question;
  practiceState.answered = false;

  const isMeaning = practiceState.type === "meaning-word";
  const stage = practiceContent.querySelector("#question-stage");
  stage.innerHTML = `
    <section class="question-box">
      <p class="question-kicker">${question.kicker}</p>
      <p class="question-main ${isMeaning ? "" : "korean"}">${question.prompt}</p>
      ${
        question.speak
          ? `<button class="play-button" type="button" id="play-question">播放題目</button>`
          : ""
      }
    </section>
    <div class="option-grid">
      ${question.options
        .map(
          (option) => `
            <button class="option-button" type="button" data-answer="${option}">
              ${option}
            </button>
          `
        )
        .join("")}
    </div>
    <button class="next-button" type="button" id="next-question">下一題</button>
  `;

  practiceContent.querySelector("#feedback").textContent = "選一個答案。";
  stage.querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => submitAnswer(button));
  });
  stage.querySelector("#next-question").addEventListener("click", nextQuestion);
  const playButton = stage.querySelector("#play-question");
  if (playButton) {
    playButton.addEventListener("click", () => speakKorean(question.speak));
    window.setTimeout(() => speakKorean(question.speak), 250);
  }
}

function buildQuestion(type) {
  if (type === "sound-letter") {
    const item = pick(allSoundItems);
    const pool = allSoundItems.filter((candidate) => candidate.char !== item.char);
    return {
      kicker: item.groupTitle,
      prompt: "?",
      speak: item.speak,
      answer: item.char,
      explain: `${item.char} 的例音是 ${item.speak}，${item.tip}`,
      options: shuffle([item.char, ...shuffle(pool).slice(0, 3).map((candidate) => candidate.char)]),
    };
  }

  if (type === "sound-word") {
    const item = pick(phraseItems);
    const pool = phraseItems.filter((candidate) => candidate.ko !== item.ko);
    return {
      kicker: "聽到哪一個韓文詞？",
      prompt: "?",
      speak: item.ko,
      answer: item.ko,
      explain: `${item.ko} 是「${item.zh}」。`,
      options: shuffle([item.ko, ...shuffle(pool).slice(0, 3).map((candidate) => candidate.ko)]),
    };
  }

  const item = pick(phraseItems);
  const pool = phraseItems.filter((candidate) => candidate.ko !== item.ko);
  return {
    kicker: "選出對應韓文",
    prompt: item.zh,
    answer: item.ko,
    explain: `${item.zh} 對應 ${item.ko}，讀作 ${item.roman}。`,
    options: shuffle([item.ko, ...shuffle(pool).slice(0, 3).map((candidate) => candidate.ko)]),
  };
}

function submitAnswer(button) {
  if (practiceState.answered) return;
  practiceState.answered = true;
  practiceState.total += 1;

  const answer = button.dataset.answer;
  const isCorrect = answer === practiceState.question.answer;
  if (isCorrect) {
    practiceState.score += 1;
  }

  practiceContent.querySelectorAll("[data-answer]").forEach((option) => {
    const optionAnswer = option.dataset.answer;
    option.classList.toggle("is-correct", optionAnswer === practiceState.question.answer);
    option.classList.toggle("is-wrong", option === button && !isCorrect);
  });

  practiceContent.querySelector("#practice-score").textContent = practiceState.score;
  practiceContent.querySelector("#practice-total").textContent = practiceState.total;
  practiceContent.querySelector("#feedback").innerHTML = isCorrect
    ? `<strong>答對了。</strong> ${practiceState.question.explain}`
    : `<strong>再聽一次。</strong> 正解是 ${practiceState.question.answer}。${practiceState.question.explain}`;

  if (practiceState.question.speak) {
    speakKorean(practiceState.question.speak);
  }
}

function composeHangul(leadIndex, vowelIndex, finalIndex) {
  return String.fromCharCode(0xac00 + (leadIndex * 21 + vowelIndex) * 28 + finalIndex);
}

function updateProgress() {
  const count = allSoundItems.filter((item) => completedSounds.has(item.id)).length;
  const percent = Math.round((count / allSoundItems.length) * 100);
  progressValue.textContent = `${percent}%`;
}

function speakKorean(text) {
  if (!("speechSynthesis" in window)) {
    showToast("這個瀏覽器沒有內建語音播放。");
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ko-KR";
  utterance.rate = 0.82;
  utterance.pitch = 1;
  const voices = window.speechSynthesis.getVoices();
  const koreanVoice = voices.find((voice) => voice.lang.toLowerCase().startsWith("ko"));
  if (koreanVoice) {
    utterance.voice = koreanVoice;
  }
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function hydrateVoices() {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function pick(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function mouthIllustration(shape) {
  const variants = {
    open: `
      <ellipse class="skin" cx="64" cy="38" rx="44" ry="28"></ellipse>
      <ellipse class="fill" cx="64" cy="42" rx="20" ry="18"></ellipse>
      <ellipse class="lip" cx="64" cy="42" rx="22" ry="20"></ellipse>
      <path class="tongue" d="M50 55 C58 61 70 61 78 55"></path>
    `,
    back: `
      <ellipse class="skin" cx="64" cy="38" rx="44" ry="28"></ellipse>
      <path class="fill" d="M43 42 C48 26 80 26 85 42 C78 58 50 58 43 42Z"></path>
      <path class="lip" d="M42 42 C49 26 79 26 86 42 C78 58 50 58 42 42Z"></path>
      <path class="tongue" d="M48 54 C60 48 74 49 82 55"></path>
    `,
    round: `
      <ellipse class="skin" cx="64" cy="38" rx="44" ry="28"></ellipse>
      <circle class="fill" cx="64" cy="42" r="18"></circle>
      <circle class="lip" cx="64" cy="42" r="20"></circle>
      <path class="tongue" d="M55 56 C61 59 68 59 74 56"></path>
    `,
    "round-small": `
      <ellipse class="skin" cx="64" cy="38" rx="44" ry="28"></ellipse>
      <circle class="fill" cx="64" cy="42" r="13"></circle>
      <circle class="lip" cx="64" cy="42" r="15"></circle>
      <path class="tongue" d="M58 55 C62 57 67 57 71 55"></path>
    `,
    flat: `
      <ellipse class="skin" cx="64" cy="38" rx="44" ry="28"></ellipse>
      <path class="fill" d="M36 43 C52 50 76 50 92 43 C76 39 52 39 36 43Z"></path>
      <path class="lip" d="M34 43 C52 51 76 51 94 43"></path>
      <path class="tongue" d="M44 52 C58 56 72 56 86 52"></path>
    `,
    smile: `
      <ellipse class="skin" cx="64" cy="38" rx="44" ry="28"></ellipse>
      <path class="fill" d="M30 42 C46 58 82 58 98 42 C80 46 48 46 30 42Z"></path>
      <path class="lip" d="M30 42 C46 58 82 58 98 42"></path>
      <path class="tongue" d="M46 53 C58 57 70 57 82 53"></path>
    `,
    "smile-open": `
      <ellipse class="skin" cx="64" cy="38" rx="44" ry="28"></ellipse>
      <path class="fill" d="M35 42 C44 28 84 28 93 42 C84 55 44 55 35 42Z"></path>
      <path class="lip" d="M34 42 C44 28 84 28 94 42 C84 55 44 55 34 42Z"></path>
      <path class="tongue" d="M45 54 C58 58 70 58 83 54"></path>
    `,
    "round-open": `
      <ellipse class="skin" cx="64" cy="38" rx="44" ry="28"></ellipse>
      <path class="fill" d="M43 42 C49 25 78 25 85 42 C80 60 48 60 43 42Z"></path>
      <path class="lip" d="M43 42 C49 25 78 25 85 42 C80 60 48 60 43 42Z"></path>
      <path class="air" d="M88 42 H112"></path>
    `,
    "round-smile": `
      <ellipse class="skin" cx="64" cy="38" rx="44" ry="28"></ellipse>
      <path class="fill" d="M38 42 C47 32 81 32 90 42 C78 53 50 53 38 42Z"></path>
      <path class="lip" d="M38 42 C47 32 81 32 90 42 C78 53 50 53 38 42Z"></path>
      <path class="air" d="M88 42 H112"></path>
    `,
    "round-back": `
      <ellipse class="skin" cx="64" cy="38" rx="44" ry="28"></ellipse>
      <circle class="fill" cx="58" cy="42" r="15"></circle>
      <path class="lip" d="M43 42 C50 28 75 28 84 42 C78 58 50 58 43 42Z"></path>
      <path class="tongue" d="M50 55 C60 50 72 50 80 55"></path>
    `,
    "flat-smile": `
      <ellipse class="skin" cx="64" cy="38" rx="44" ry="28"></ellipse>
      <path class="fill" d="M34 43 C50 51 78 51 94 43 C78 39 50 39 34 43Z"></path>
      <path class="lip" d="M34 43 C50 51 78 51 94 43"></path>
      <path class="air" d="M94 43 H113"></path>
    `,
    "tongue-back": consonantArt("back"),
    "tongue-front": consonantArt("front"),
    "tongue-tap": consonantArt("tap"),
    closed: consonantArt("closed"),
    "closed-air": consonantArt("closed-air"),
    "air-front": consonantArt("air-front"),
    aspirated: consonantArt("aspirated"),
    tight: consonantArt("tight"),
    "tight-closed": consonantArt("tight-closed"),
    "tight-air": consonantArt("tight-air"),
  };

  return `
    <svg class="mouth-art" viewBox="0 0 128 76" role="img" aria-label="嘴型示意">
      ${variants[shape] || variants.open}
    </svg>
  `;
}

function consonantArt(type) {
  const map = {
    back: `
      <path class="skin" d="M24 52 C42 18 86 18 104 52 C86 66 42 66 24 52Z"></path>
      <path class="lip" d="M28 52 C45 63 83 63 100 52"></path>
      <path class="tongue" d="M42 54 C55 35 81 33 94 48"></path>
      <path class="air" d="M89 45 C99 43 106 39 114 33"></path>
    `,
    front: `
      <path class="skin" d="M24 52 C42 18 86 18 104 52 C86 66 42 66 24 52Z"></path>
      <path class="lip" d="M28 52 C45 63 83 63 100 52"></path>
      <path class="tongue" d="M38 56 C54 44 72 43 88 52"></path>
      <path class="air" d="M88 48 H116"></path>
    `,
    tap: `
      <path class="skin" d="M24 52 C42 18 86 18 104 52 C86 66 42 66 24 52Z"></path>
      <path class="lip" d="M28 52 C45 63 83 63 100 52"></path>
      <path class="tongue" d="M42 57 C58 43 72 42 82 34"></path>
      <path class="air" d="M84 37 C96 37 104 35 114 30"></path>
    `,
    closed: `
      <ellipse class="skin" cx="64" cy="38" rx="44" ry="28"></ellipse>
      <path class="lip" d="M32 42 C48 38 80 38 96 42"></path>
      <path class="tongue" d="M48 55 C60 59 70 59 82 55"></path>
    `,
    "closed-air": `
      <ellipse class="skin" cx="64" cy="38" rx="44" ry="28"></ellipse>
      <path class="lip" d="M32 42 C48 38 80 38 96 42"></path>
      <path class="air" d="M92 42 H116"></path>
      <path class="air" d="M94 34 C101 32 108 29 115 24"></path>
    `,
    "air-front": `
      <path class="skin" d="M24 52 C42 18 86 18 104 52 C86 66 42 66 24 52Z"></path>
      <path class="lip" d="M30 48 C48 55 80 55 98 48"></path>
      <path class="tongue" d="M42 56 C58 49 75 49 88 54"></path>
      <path class="air" d="M88 45 H116"></path>
      <path class="air" d="M88 36 H110"></path>
    `,
    aspirated: `
      <path class="skin" d="M24 52 C42 18 86 18 104 52 C86 66 42 66 24 52Z"></path>
      <path class="lip" d="M30 48 C48 58 80 58 98 48"></path>
      <path class="tongue" d="M42 56 C58 46 75 46 88 54"></path>
      <path class="air" d="M86 42 H118"></path>
      <path class="air" d="M86 32 C98 29 108 24 118 17"></path>
      <path class="air" d="M86 53 C99 57 108 60 118 66"></path>
    `,
    tight: `
      <path class="skin" d="M24 52 C42 18 86 18 104 52 C86 66 42 66 24 52Z"></path>
      <path class="lip" d="M32 47 C50 53 78 53 96 47"></path>
      <path class="tongue" d="M42 55 C56 35 80 34 94 48"></path>
      <path class="air" d="M92 44 H108"></path>
    `,
    "tight-closed": `
      <ellipse class="skin" cx="64" cy="38" rx="44" ry="28"></ellipse>
      <path class="lip" d="M34 42 C50 39 78 39 94 42"></path>
      <path class="air" d="M94 42 H108"></path>
    `,
    "tight-air": `
      <path class="skin" d="M24 52 C42 18 86 18 104 52 C86 66 42 66 24 52Z"></path>
      <path class="lip" d="M31 47 C49 53 79 53 97 47"></path>
      <path class="tongue" d="M43 56 C58 48 75 48 88 54"></path>
      <path class="air" d="M90 44 H111"></path>
    `,
  };
  return map[type];
}
