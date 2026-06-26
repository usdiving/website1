// ============================================================
// WeLive2Inspire.com
// Vanilla JavaScript only (no frameworks, per project rules).
// ============================================================

// ── EmailJS configuration ─────────────────────────────────
// 1. Sign up free at https://www.emailjs.com
// 2. Add an Email Service (connect your Gmail / Outlook)
// 3. Create an Email Template with these variables:
//      {{to_email}}       – recipient's address
//      {{result_emoji}}   – e.g. 🔴
//      {{result_title}}   – quiz result headline
//      {{result_body}}    – result explanation (plain text)
//      {{result_urgency}} – urgency line
//      {{result_cta}}     – call-to-action label
//      {{shop_url}}       – link to Zinzino shop
// 4. Replace the three placeholder strings below.
var EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";   // Account → API Keys
var EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";   // Email Services tab
var EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";  // Email Templates tab
// ──────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", function () {

  // --------------------------------------------------------
  // Gold sparkle particle canvas on the hero
  // --------------------------------------------------------
  (function () {
    var hero = document.querySelector(".hero");
    if (!hero) return;

    var canvas = document.createElement("canvas");
    canvas.id = "sparkleCanvas";
    hero.insertBefore(canvas, hero.firstChild);

    var ctx    = canvas.getContext("2d");
    var W, H, particles;

    var COLORS = ["#ffd700", "#d4af37", "#ffe066", "#fff0a0", "#f5e27a"];

    function resize() {
      W = canvas.width  = hero.offsetWidth;
      H = canvas.height = hero.offsetHeight;
    }

    function randomParticle() {
      return {
        x:      Math.random() * W,
        y:      Math.random() * H,
        r:      Math.random() * 1.8 + 0.4,
        color:  COLORS[Math.floor(Math.random() * COLORS.length)],
        alpha:  0,
        speed:  Math.random() * 0.4 + 0.15,
        drift:  (Math.random() - 0.5) * 0.4,
        phase:  Math.random() * Math.PI * 2,
        blink:  Math.random() * 0.02 + 0.008
      };
    }

    function init() {
      resize();
      particles = [];
      for (var i = 0; i < 80; i++) {
        var p = randomParticle();
        p.alpha = Math.random();
        particles.push(p);
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(function (p) {
        p.phase += p.blink;
        p.alpha  = (Math.sin(p.phase) + 1) / 2;
        p.y     -= p.speed;
        p.x     += p.drift;
        if (p.y < -4 || p.x < -4 || p.x > W + 4) {
          Object.assign(p, randomParticle());
          p.y = H + 4;
          p.alpha = 0;
        }
        ctx.save();
        ctx.globalAlpha = p.alpha * 0.75;
        ctx.fillStyle   = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur  = 6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        /* 4-point star sparkle for larger particles */
        if (p.r > 1.4) {
          var s = p.r * 3;
          ctx.fillStyle   = p.color;
          ctx.globalAlpha = p.alpha * 0.5;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y - s);
          ctx.lineTo(p.x + s * 0.12, p.y - s * 0.12);
          ctx.lineTo(p.x + s, p.y);
          ctx.lineTo(p.x + s * 0.12, p.y + s * 0.12);
          ctx.lineTo(p.x, p.y + s);
          ctx.lineTo(p.x - s * 0.12, p.y + s * 0.12);
          ctx.lineTo(p.x - s, p.y);
          ctx.lineTo(p.x - s * 0.12, p.y - s * 0.12);
          ctx.closePath();
          ctx.fill();
        }
        ctx.restore();
      });
      requestAnimationFrame(draw);
    }

    init();
    draw();
    window.addEventListener("resize", function () { init(); });
  }());

  // Initialise EmailJS
  if (typeof emailjs !== "undefined") {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }

  // Auto-fill current year in footer
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // --------------------------------------------------------
  // Health Balance Quiz
  // --------------------------------------------------------

  var questions = [
    {
      text: "How often do you feel tired or low on energy — even after a full night's sleep?",
      icon: "😴",
      options: [
        { label: "Rarely — I wake up feeling great",        score: 0 },
        { label: "Sometimes — a few times a week",          score: 1 },
        { label: "Often — most mornings I feel drained",    score: 2 },
        { label: "Almost every day — fatigue is constant",  score: 3 }
      ]
    },
    {
      text: "Do you experience joint pain, muscle aches, or ongoing inflammation in your body?",
      icon: "🦴",
      options: [
        { label: "Never — my body feels strong",            score: 0 },
        { label: "Occasionally — nothing serious",          score: 1 },
        { label: "Regularly — it slows me down",            score: 2 },
        { label: "It's a daily struggle I live with",       score: 3 }
      ]
    },
    {
      text: "How would you describe your sleep, digestion, and gut health?",
      icon: "🌿",
      options: [
        { label: "All good — no issues",                              score: 0 },
        { label: "Minor issues now and then",                         score: 1 },
        { label: "Frequent bloating, discomfort, or poor sleep",      score: 2 },
        { label: "Serious issues — insomnia, colon pain, no routine", score: 3 }
      ]
    },
    {
      text: "Do you experience brain fog, trouble concentrating, mood swings, or low motivation?",
      icon: "🧠",
      options: [
        { label: "No — my mind is sharp and my mood is stable",  score: 0 },
        { label: "Occasionally, but it passes",                  score: 1 },
        { label: "A few times a week — it affects my work",      score: 2 },
        { label: "Daily — I feel mentally off most of the time", score: 3 }
      ]
    },
    {
      text: "How often do you eat omega-3 rich foods — fatty fish like salmon, mackerel, or sardines?",
      icon: "🐟",
      options: [
        { label: "3 or more times a week",  score: 0 },
        { label: "Once or twice a week",    score: 1 },
        { label: "A few times a month",     score: 2 },
        { label: "Rarely or never",         score: 3 }
      ]
    }
  ];

  var resultData = [
    {
      range: [0, 4],
      emoji: "🟡",
      title: "You May Be Close to Balanced — But Are You Sure?",
      body: "Your answers suggest you're not experiencing major warning signs — but imbalance often hides silently before symptoms appear. 80% of people who feel \"fine\" are actually omega-deficient. The only way to know for certain is to test.",
      urgency: "Don't wait for symptoms to get worse.",
      cta: "Get Your Balance Test Now"
    },
    {
      range: [5, 9],
      emoji: "🟠",
      title: "Your Body Is Showing Early Signs of Imbalance.",
      body: "Your answers reveal several signals your body is sending — fatigue, inflammation, sleep or gut issues. These are classic signs of an omega-6 to omega-3 imbalance, which affects over 95% of people in the Western world. The good news: it is completely fixable.",
      urgency: "The sooner you test, the sooner you can correct it.",
      cta: "Order the Balance Test & Start Healing"
    },
    {
      range: [10, 15],
      emoji: "🔴",
      title: "Your Body Is Out of Balance — And It's Asking for Help.",
      body: "Your answers show multiple strong signals of imbalance — chronic fatigue, inflammation, poor sleep, digestive issues, and low omega-3 intake. This is your body's way of telling you it needs real support. Zinzino's Balance Test will show you exactly what's wrong — and BalanceOil will begin correcting it within 120 days, guaranteed.",
      urgency: "Your health cannot wait. Take action today.",
      cta: "Get the Test & BalanceOil Now"
    }
  ];

  var SHOP_URL = "https://www.zinzino.com/2020240904";

  var currentQ      = 0;
  var totalScore    = 0;
  var selectedScore = null;
  var visitorEmail  = "";

  var launchPanel = document.getElementById("quizLaunch");
  var emailGate   = document.getElementById("quizEmailGate");
  var emailForm   = document.getElementById("quizEmailForm");
  var emailInput  = document.getElementById("visitorEmail");
  var emailError  = document.getElementById("emailError");
  var card        = document.getElementById("quizCard");
  var stepLabel   = document.getElementById("quizStepLabel");
  var progress    = document.getElementById("quizProgress");
  var questionEl  = document.getElementById("quizQuestion");
  var optionsEl   = document.getElementById("quizOptions");
  var nextBtn     = document.getElementById("quizNext");
  var resultEl    = document.getElementById("quizResult");

  if (!card) return;

  // ── Step 1: trigger → show email gate ───────────────────

  function showEmailGate() {
    if (launchPanel) launchPanel.style.display = "none";
    if (emailGate)   emailGate.style.display   = "block";
    document.getElementById("quiz")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }

  document.querySelectorAll(".js-quiz-trigger").forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      showEmailGate();
    });
  });

  // ── Step 2: email submit → open quiz ────────────────────

  function isValidEmail(val) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  }

  if (emailForm) {
    emailForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var val = emailInput.value.trim();
      if (!isValidEmail(val)) {
        emailInput.classList.add("input-error");
        emailError.textContent = "Please enter a valid email address.";
        return;
      }
      emailInput.classList.remove("input-error");
      emailError.textContent = "";
      visitorEmail = val;
      emailGate.style.display = "none";
      card.classList.remove("quiz-card--hidden");
      card.classList.add("quiz-card--visible");
      renderQuestion();
    });
  }

  // ── Step 3: send results via EmailJS ────────────────────

  function sendResultsByEmail(result) {
    if (typeof emailjs === "undefined") return;
    if (!visitorEmail) return;
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      to_email:       visitorEmail,
      result_emoji:   result.emoji,
      result_title:   result.title,
      result_body:    result.body,
      result_urgency: result.urgency,
      result_cta:     result.cta,
      shop_url:       SHOP_URL
    });
  }

  // ── Quiz logic ───────────────────────────────────────────

  function renderQuestion() {
    var q = questions[currentQ];
    selectedScore = null;
    nextBtn.style.display = "none";

    var pct = (currentQ / questions.length) * 100;
    progress.style.width = pct + "%";
    stepLabel.textContent =
      "Question " + (currentQ + 1) + " of " + questions.length;

    questionEl.innerHTML =
      "<div class='quiz-icon'>" + q.icon + "</div>" +
      "<p class='quiz-q-text'>" + q.text + "</p>";

    optionsEl.innerHTML = "";
    q.options.forEach(function (opt) {
      var btn = document.createElement("button");
      btn.className = "quiz-option";
      btn.innerHTML = opt.label;
      btn.addEventListener("click", function () {
        optionsEl.querySelectorAll(".quiz-option")
          .forEach(function (b) { b.classList.remove("selected"); });
        btn.classList.add("selected");
        selectedScore = opt.score;
        nextBtn.style.display = "inline-block";
      });
      optionsEl.appendChild(btn);
    });
  }

  function showResult() {
    progress.style.width = "100%";
    stepLabel.textContent = "Your Results";
    questionEl.innerHTML  = "";
    optionsEl.innerHTML   = "";
    nextBtn.style.display = "none";

    var result = resultData[0];
    for (var i = 0; i < resultData.length; i++) {
      if (totalScore >= resultData[i].range[0] &&
          totalScore <= resultData[i].range[1]) {
        result = resultData[i];
        break;
      }
    }

    sendResultsByEmail(result);

    var emailNote = visitorEmail
      ? "<p class='result-email-note'>" +
          "&#10003; Your results are being sent to <strong>" +
          visitorEmail + "</strong>" +
        "</p>"
      : "";

    resultEl.innerHTML =
      "<div class='result-emoji'>" + result.emoji + "</div>" +
      "<h3 class='result-title'>" + result.title + "</h3>" +
      "<p class='result-body'>" + result.body + "</p>" +
      "<p class='result-urgency'>" + result.urgency + "</p>" +
      emailNote +
      "<div class='result-actions'>" +
        "<a href='" + SHOP_URL + "' class='btn btn-gold btn-large' " +
           "target='_blank' rel='noopener'>" +
          result.cta +
        "</a>" +
        "<button class='btn-retake' id='retakeBtn'>Retake Quiz</button>" +
      "</div>";

    resultEl.style.display = "block";

    document.getElementById("retakeBtn")
      .addEventListener("click", resetQuiz);
  }

  function resetQuiz() {
    currentQ      = 0;
    totalScore    = 0;
    selectedScore = null;
    visitorEmail  = "";
    resultEl.style.display = "none";
    if (emailInput) {
      emailInput.value = "";
      emailInput.classList.remove("input-error");
    }
    if (emailError) emailError.textContent = "";
    card.classList.add("quiz-card--hidden");
    card.classList.remove("quiz-card--visible");
    if (emailGate)   emailGate.style.display   = "none";
    if (launchPanel) launchPanel.style.display  = "block";
    document.getElementById("quiz")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }

  nextBtn.addEventListener("click", function () {
    if (selectedScore === null) return;
    totalScore += selectedScore;
    currentQ++;
    if (currentQ < questions.length) {
      renderQuestion();
    } else {
      showResult();
    }
  });

});
