const translations = {
    ja: {
      // title: "診断結果",
      description: "あなたの気質は...",
      types: ["黄胆汁質", "黒胆汁質", "多血質", "粘液質"],
      summaries: [
        "あなたはエネルギッシュで情熱的。<br>周囲を引っ張るリーダーシップが光ります！",
        "あなたは落ち着きがあり、物事を冷静に判断できる性格を持っています。<br>人の意見をよく聞き、深く考えてから行動に移します。",
        "あなたは情熱的で、物事に対して強いエネルギーを持っています。<br>自分の信念を大切にし、周囲を引っ張る力も持っています。",
        "あなたは冷静で穏やかな性格の持ち主です。<br>周囲から信頼される存在です。"
      ],
      strengths: "強み",
      weaknesses: "弱み",
      strengthsList: [
        ["物事を最後までやり抜く力がある", "困難な状況でも積極的に挑戦できる"],
        ["冷静に問題を分析し、的確な判断を下せる", "集中力が高く、長時間取り組むことができる"],
        ["積極的で新しい挑戦を楽しめる", "明るい性格で周囲を元気づける"],
        ["安定した精神力で状況に流されない", "穏やかな雰囲気で周囲を和ませる"]
      ],
      weaknessesList: [
        ["感情的になりやすい", "冷静さを欠く場面がある"],
        ["慎重すぎて行動が遅くなることがある", "感情を表に出さないため誤解されることがある"],
        ["計画性に欠けることがある", "集中力が続かない場面がある"],
        ["積極性に欠ける場面がある", "変化を好まず、停滞することがある"]
      ],
      returnButton: "トップに戻る",
      shareTitle: "診断結果を共有する"
    },
    en: {
      // title: "Result",
      description: "Your temperament is...",
      types: ["Choleric", "Melancholic", "Sanguine", "Phlegmatic"],
      summaries: [
        "You are energetic and passionate.<br>Your leadership skills shine as you guide those around you!",
        "You are calm and composed, able to make decisions with a cool head.<br>You listen carefully to others and think deeply before taking action.",
        "You are enthusiastic and full of energy.<br>You cherish your beliefs and have the power to lead those around you.",
        "You are calm and gentle.<br>People around you trust and rely on you."
      ],
      strengths: "Strengths",
      weaknesses: "Weaknesses",
      strengthsList: [
        ["You have the ability to see things through to the end.", "You can take on challenges proactively, even in difficult situations."],
        ["You can analyze problems calmly and make accurate judgments.", "You have high concentration and can focus for long periods."],
        ["You are proactive and enjoy new challenges.", "Your bright personality energizes those around you."],
        ["You have a stable mindset and do not get easily swayed.", "Your calm demeanor soothes those around you."]
      ],
      weaknessesList: [
        ["You tend to be emotional.", "You may lose your composure in some situations."],
        ["You are overly cautious, which may slow down your actions.", "You don't express emotions openly, which can cause misunderstandings."],
        ["You sometimes lack planning skills.", "You may struggle with maintaining focus."],
        ["You tend to lack assertiveness.", "You dislike change and may become stagnant."]
      ],
      returnButton: "Back to Top",
      shareTitle: "Share Your Result"
    },
    pt: {
      // title: "Resultado",
      description: "Seu temperamento é...",
      types: ["Colérico", "Melancólico", "Sanguíneo", "Fleumático"],
      summaries: [
        "Você é energético e apaixonado.<br>Sua liderança brilha ao guiar as pessoas ao seu redor!",
        "Você é calmo e ponderado, capaz de tomar decisões com serenidade.<br>Ouve atentamente os outros e pensa profundamente antes de agir.",
        "Você é entusiasmado e cheio de energia.<br>Valoriza suas crenças e tem o poder de influenciar aqueles ao seu redor.",
        "Você é tranquilo e gentil.<br>As pessoas ao seu redor confiam e contam com você."
      ],
      strengths: "Pontos Fortes",
      weaknesses: "Pontos Fracos",
      strengthsList: [
        ["Você tem a capacidade de concluir as coisas até o fim.", "Você encara desafios proativamente, mesmo em situações difíceis."],
        ["Você pode analisar problemas com calma e tomar decisões precisas.", "Você tem alta concentração e pode focar por longos períodos."],
        ["Você é proativo e gosta de novos desafios.", "Sua personalidade vibrante anima aqueles ao seu redor."],
        ["Você tem uma mentalidade estável e não se deixa levar facilmente.", "Sua atitude tranquila acalma aqueles ao seu redor."]
      ],
      weaknessesList: [
        ["Você tende a ser emocional.", "Pode perder a compostura em certas situações."],
        ["Você é excessivamente cauteloso, o que pode retardar suas ações.", "Você não expressa emoções abertamente, o que pode causar mal-entendidos."],
        ["Às vezes, falta planejamento.", "Pode ter dificuldade em manter o foco."],
        ["Você tende a ser pouco assertivo.", "Evita mudanças e pode ficar estagnado."]
      ],
      returnButton: "Voltar ao início",
      shareTitle: "Compartilhar Resultado"
    }
};

let currentLanguage = "ja";

function changeLanguage(lang) {
    currentLanguage = lang;
  
   
    document.title = translations[lang].title;
    document.querySelector(".result-page h2").textContent = translations[lang].description;

    const resultIndex = parseInt(window.location.pathname.match(/\d+/)[0]) - 1;
    document.querySelector(".resulttype span").textContent = translations[lang].types[resultIndex];

    // ★ `h1` の `textContent` を変更しないように修正
    document.querySelector(".header-logo").alt = translations[lang].title;

    // ★ここを修正！.resulttype の <span> を変更する
    document.querySelector(".resulttype span").textContent = translations[lang].types[resultIndex];

    document.querySelector(".result-summary").innerHTML = translations[lang].summaries[resultIndex];

    document.querySelector(".result-container h4:nth-of-type(1)").textContent = translations[lang].strengths;
    document.querySelector(".result-container p:nth-of-type(1)").innerHTML = translations[lang].strengthsList[resultIndex].join("<br>");

    document.querySelector(".result-container h4:nth-of-type(2)").textContent = translations[lang].weaknesses;
    document.querySelector(".result-container p:nth-of-type(2)").innerHTML = translations[lang].weaknessesList[resultIndex].join("<br>");

    document.querySelector(".btn").textContent = translations[lang].returnButton;
    document.querySelector(".mbti-share h4").textContent = translations[lang].shareTitle;

    updateShareLinks();
}


document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const pageURL = window.location.href.includes("file://") ? "https://あなたのサイトURL" : window.location.href;
    const description = "私の診断結果はこちら！";

    document.querySelector('.share-twitter').setAttribute("href",
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(description)}&url=${encodeURIComponent(pageURL)}`
    );

    document.querySelector('.share-facebook').setAttribute("href",
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageURL)}`
    );

    document.querySelector('.share-line').setAttribute("href",
      `https://line.me/R/msg/text/?${encodeURIComponent(description + "\n" + pageURL)}`
    );
  }, 100); // 少し遅延させる
});

function goBack() {
    window.location.href = "../index.html"; // これでも試してみて！
}
