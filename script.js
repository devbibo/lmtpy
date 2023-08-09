   // الأسئلة للاختبار
   var questions = [
    "أفضل قضاء وقت فراغي بمفردي بدلاً من مع مجموعة من الناس.",
    "أتخذ القرارات بناءً على المنطق بدلاً من المشاعر.",
    "أستمتع بالتخطيط والتنظيم.",
    "أجد من السهل التعاطف مع الآخرين.",
    "أفضل الروتين وأكره التغييرات المفاجئة.",
    "أستمتع باستكشاف أفكار واحتمالات جديدة.",
    "أشعر بالراحة في المواقف الاجتماعية.",
    "أولي اهتمامًا بالتفاصيل.",
    "أفضل اتباع القواعد والإرشادات المعتمدة.",
    "أستمتع بالمخاطرة وتجربة تجارب جديدة."
];

// نظام التقييم لكل إجابة
var scoring = {
    'A': 1,  // موافق
    'D': -1,  // غير موافق
    'U': 0  // محايد/لا أدري
};

// تهيئة المتغيرات
var currentQuestion = 0;
var score_E = 0;
var score_S = 0;
var score_T = 0;
var score_J = 0;

// الحصول على العناصر
var questionElement = document.querySelector('.question');
var optionsElement = document.querySelector('.options');
var resultElement = document.querySelector('.result');
var nextButton = document.querySelector('.button');

// وظيفة لعرض السؤال الحالي
function displayQuestion() {
    questionElement.textContent = questions[currentQuestion];
}

// وظيفة للتعامل مع النقرة على زر التالي
function nextQuestion() {
    var selectedOption = document.querySelector('input[name="answer"]:checked');

    // التحقق من صحة إجابة المستخدم
    if (!selectedOption) {
        alert("يرجى اختيار إجابة.");
        return;
    }

    // تحديث النقاط بناءً على الإجابة
    var answer = selectedOption.value;
    score_E += scoring[answer];
    score_S += scoring[answer];
    score_T += scoring[answer];
    score_J += scoring[answer];

    // مسح الاختيار المحدد
    selectedOption.checked = false;

    // الانتقال إلى السؤال التالي
    currentQuestion++;

    // التحقق مما إذا تم الإجابة على جميع الأسئلة
    if (currentQuestion === questions.length) {
        displayResult();
    } else {
        displayQuestion();
    }
}

// وظيفة لعرض النتيجة
function displayResult() {
    var mbti_type = "";

    if (score_E > 0) {
        mbti_type += "E";
    } else {
        mbti_type += "I";
    }

    if (score_S > 0) {
        mbti_type += "S";
    } else {
        mbti_type += "N";
    }

    if (score_T > 0) {
        mbti_type += "T";
    } else {
        mbti_type += "F";
    }

    if (score_J > 0) {
        mbti_type += "J";
    } else {
        mbti_type += "P";
    }

    resultElement.textContent = "نوع شخصيتك هو " + mbti_type;
    optionsElement.style.display = "none";
    nextButton.style.display = "none";
}

// عرض السؤال الأول
displayQuestion();