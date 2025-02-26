const translations = {
  ja: {
      title: "四体液説診断",
      description: "9個の質問に答えて、<br>四体液説からあなたの気質を診断してみよう！",
      startButton: "診断する！",
  },
  en: {
      title: "Four Temperaments Quiz",
      description: "Answer 9 questions to find out your temperament based on the Four Temperaments theory!",
      startButton: "Start Quiz!",
  },
  pt: {
      title: "Teste dos Quatro Temperamentos",
      description: "Responda as 9 perguntas para descobrir seu temperamento com base na teoria dos Quatro Temperamentos!",
      startButton: "Começar o Teste!",
  }
};

// 言語ごとの質問データ
const questions = {
  ja: [
  { text: "あなたの普段の性格を最もよく表しているのは？", options: ["熱血的で行動的", "冷静で思慮深い", "感情的で親しみやすい", "内向的で物静か"] },
  { text: "あなたが最もストレスを感じる状況は？", options: ["何もしないでいるとき", "計画通りにいかないとき", "人とのつながりが薄れるとき", "周囲の刺激が多すぎるとき"] },
  { text: "あなたの体調に関してよくある悩みは？", options: ["熱っぽさや乾燥", "冷えや体の重さ", "胃の不快感やむくみ", "疲労感や無気力"] },
  { text: "あなたが最も心地よく感じる季節は？", options: ["夏", "冬", "春", "秋"] },
  { text: "あなたが食事を選ぶときの好みは？", options: ["辛いものやスパイスの効いた料理", "温かくて塩味の効いたもの", "甘いものや柔らかいもの", "あっさりしたものや冷たいもの"] },
  { text: "朝起きたとき、まず最初にすることは？", options: ["ストレッチや運動をする", "ベッドでゴロゴロしながら今日の予定を考える", "スマホを見てSNSをチェックする", "お茶やコーヒーを飲んで目を覚ます"] },
  { text: "あなたの部屋のインテリアを表すとしたら？", options: ["カラフルで元気な雰囲気", "シンプルで落ち着いたデザイン", "柔らかくて居心地が良い空間", "涼しげで整理整頓された場所"] },
  { text: "冒険に出るとしたらどの仲間を連れて行きたい？", options: ["勇敢な戦士", "計画を立てる戦術家", "ムードメーカー", "静かに支えてくれるヒーラー"] },
  { text: "不思議な森で迷いました。どうする？", options: ["直感を信じて進む", "地図を探して慎重に進む", "周囲を観察し協力する", "焦らず楽しみながら進む"] },
  ],
  en: [
      { text: "Which of the following best describes your usual personality?", options: ["Passionate and energetic", "Calm and thoughtful", "Emotional and friendly", "Introverted and quiet"] },
  { text: "What situation stresses you out the most?", options: ["Doing nothing", "When things don’t go as planned", "When connections with people weaken", "When there are too many external stimuli"] },
  { text: "Which of the following best describes your common health concerns?", options: ["Feeling hot or dry", "Feeling cold or heavy", "Stomach discomfort or swelling", "Fatigue or lack of motivation"] },
  { text: "Which season makes you feel the most comfortable?", options: ["Summer", "Winter", "Spring", "Autumn"] },
  { text: "How do you choose your food?", options: ["Spicy and flavorful dishes", "Warm and salty dishes", "Sweet and soft foods", "Light or cold foods"] },
  { text: "What is the first thing you do after waking up?", options: ["Exercise or stretch", "Stay in bed and plan your day", "Check social media", "Drink tea or coffee"] },
  { text: "How would you describe your room’s interior?", options: ["Bright and energetic", "Simple and calming", "Cozy and comfortable", "Cool and neatly organized"] },
  { text: "If you were going on an adventure, what kind of companion would you take?", options: ["A brave warrior", "A wise strategist", "A cheerful mood-maker", "A quiet healer"] },
  { text: "You get lost in a mysterious forest. What do you do?", options: ["Trust your instincts", "Look for a map and proceed carefully", "Observe surroundings and collaborate", "Enjoy the journey without rushing"] },
  ],
  pt: [
      { text: "Qual das seguintes opções melhor descreve sua personalidade?", options: ["Apaixonado e enérgico", "Calmo e reflexivo", "Emocional e amigável", "Introvertido e quieto"] },
  { text: "Que situação mais te causa estresse?", options: ["Ficar sem fazer nada", "Quando as coisas não saem como planejado", "Quando as conexões enfraquecem", "Quando há muitos estímulos"] },
  { text: "Quais são suas preocupações de saúde mais comuns?", options: ["Sensação de calor ou secura", "Sensação de frio ou peso", "Desconforto estomacal", "Fadiga ou falta de motivação"] },
  { text: "Qual estação do ano você acha mais confortável?", options: ["Verão", "Inverno", "Primavera", "Outono"] },
  { text: "Como você escolhe sua comida?", options: ["Pratos picantes e saborosos", "Pratos quentes e salgados", "Doces e macios", "Comidas leves ou frias"] },
  { text: "Qual a primeira coisa que você faz ao acordar?", options: ["Fazer exercícios", "Ficar na cama planejando", "Ver redes sociais", "Tomar chá ou café"] },
  { text: "Como você descreveria seu quarto?", options: ["Brilhante e cheio de energia", "Simples e relaxante", "Aconchegante e confortável", "Fresco e bem organizado"] },
  { text: "Se você fosse partir para uma aventura, quem levaria?", options: ["Um guerreiro corajoso", "Um estrategista sábio", "Um animador", "Um curandeiro silencioso"] },
  { text: "Você se perdeu em uma floresta. O que você faz?", options: ["Confia em seus instintos", "Procura um mapa e segue com cautela", "Observa e colabora", "Aproveita a jornada sem pressa"] },
  ]
};

let currentLanguage = "ja"; // デフォルト言語
let questionsList = questions[currentLanguage]; // 言語ごとの質問リスト
let currentQuestionIndex = 0;
const choiceCounts = [0, 0, 0, 0]; // 選択肢のカウント

// 言語を変更する関数
function changeLanguage(lang) {
  currentLanguage = lang; // 言語を更新
  questionsList = questions[lang]; // 言語に対応する質問リストを更新

  document.title = translations[lang].title;
  document.querySelector(".description").innerHTML = translations[lang].description;
  document.querySelector(".btn").textContent = translations[lang].startButton;

  // 診断開始前に言語を変更したら質問ページをリセット
  currentQuestionIndex = 0;
  choiceCounts.fill(0);
  document.querySelector('.home-page').style.display = 'block';
  document.querySelector('.question-page').style.display = 'none';
}

// クイズを開始する
function startQuiz() {
  document.querySelector('.home-page').style.display = 'none';
  document.querySelector('.question-page').style.display = 'block';
  currentQuestionIndex = 0;
  choiceCounts.fill(0);
  showQuestion();
}

// 質問を表示する
function showQuestion() {
  const question = questionsList[currentQuestionIndex];
  document.getElementById('question-text').textContent = question.text;
  document.getElementById('option1').textContent = question.options[0];
  document.getElementById('option2').textContent = question.options[1];
  document.getElementById('option3').textContent = question.options[2];
  document.getElementById('option4').textContent = question.options[3];
}

// 回答が選択されたとき
function selectAnswer(option) {
  choiceCounts[option - 1]++; // 選択肢のカウントを増加
  console.log(`選択肢${option}を選びました`);

  currentQuestionIndex++;

  if (currentQuestionIndex < questionsList.length) {
    showQuestion();
  } else {
    showResult();
  }
}

// 結果を表示する
function showResult() {
  const maxCount = Math.max(...choiceCounts); // 最大カウントを取得
  const resultIndex = choiceCounts.indexOf(maxCount) + 1; // 最も多い選択肢のインデックスを取得
  console.log(`結果ページ: result/${resultIndex}`);
  window.location.href = `result/${resultIndex}.html`; // 該当する結果ページに遷移
}

// 結果シェア
function showResult() {
  const maxCount = Math.max(...choiceCounts); // 最大カウントを取得
  const resultIndex = choiceCounts.indexOf(maxCount) + 1; // 最も多い選択肢のインデックスを取得
  const resultDescription = getResultDescription(resultIndex); // 結果の説明を取得

  // 結果ページにデータをクエリとして渡す
  const encodedDescription = encodeURIComponent(resultDescription); // URLエンコード
  window.location.href = `result/${resultIndex}.html?description=${encodedDescription}`;
}

// 診断結果の説明を取得（例）
function getResultDescription(resultIndex) {
  const descriptions = [
    "熱血的で行動的なあなた！",
    "冷静で思慮深い性格です。",
    "親しみやすく感情豊かです。",
    "内向的で落ち着いた性格を持っています。",
  ];
  return descriptions[resultIndex - 1];
}
