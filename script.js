/* =========================================================
   Questions Data
========================================================= */

const sections = [

    {
        number: "أولاً",
        title: "الضغوط الانفعالية",

        questions: [

            "أشعر بالقلق المستمر على مستقبل طفلي.",

            "ينتابني الإحباط عندما لا يتحسن طفلي.",

            "أتوتر أثناء التعامل مع سلوكيات طفلي الصعبة.",

            "أفكر كثيراً في مشكلات طفلي حتى عندما أحاول الانشغال بشيء آخر.",

            "أشعر بالحزن عند مقارنة طفلي بالأطفال الآخرين.",

            "ينتابني الشعور بالذنب لأنني لا أستطيع تلبية جميع احتياجات طفلي.",

            "أرهق نفسياً بسبب متطلبات طفلي اليومية.",

            "أخاف على مستقبل طفلي بعد وفاتي.",

            "أصبحت أعاني من العصبية الزائدة بسبب سلوكيات طفلي المتكررة.",

            "حياتي أصبحت مليئة بالتوتر منذ اكتشاف حالة طفلي."

        ]
    },


    {
        number: "ثانياً",
        title: "الضغوط الاجتماعية",

        questions: [

            "أشعر بالحرج من سلوك طفلي أمام الآخرين.",

            "أتجنب الذهاب إلى المناسبات الاجتماعية بسبب طفلي.",

            "أعاني من عدم تقبل الآخرين لطفلي.",

            "أشعر بأن المجتمع لا يوفر دعماً كافياً لأمهات الأطفال ذوي التوحد.",

            "أتعرض لنظرات الشفقة أو الاستغراب بسبب طفلي.",

            "فقدت بعض العلاقات الاجتماعية بسبب انشغالي بطفلي.",

            "أشعر بالعزلة لأنني أقضي معظم الوقت مع طفلي.",

            "أجد صعوبة في الخروج أو التنقل بسبب سلوكيات طفلي.",

            "أخفق في وجود من أشاركه مشاعري حول الضغوط التي أواجهها في رعاية طفلي.",

            "أتعرض لانتقادات من الآخرين حول أسلوب تربيتي لطفلي."

        ]
    },


    {
        number: "ثالثاً",
        title: "الضغوط الاقتصادية",

        questions: [

            "أتحمل أعباء مالية كبيرة بسبب جلسات العلاج لطفلي.",

            "أشعر بالضيق بسبب ارتفاع تكاليف رعاية طفلي.",

            "يؤثر الإنفاق على طفلي على باقي احتياجات أسرتي.",

            "أضطر لتقليل مصاريفي الشخصية لتلبية احتياجات طفلي.",

            "اضطررت إلى ترك عملي أو تخفيض ساعاته بسبب طفلي.",

            "أحتاج إلى موارد مالية إضافية لرعاية طفلي.",

            "أعجز عن توفير كل ما يحتاجه طفلي.",

            "أتحمل تكاليف مواصلات مرتفعة للذهاب إلى المراكز العلاجية.",

            "أواجه صعوبة في الادخار بسبب مصاريف طفلي.",

            "أشعر أن الالتزامات المالية الخاصة بطفلي تفوق قدرتي."

        ]
    },


    {
        number: "رابعاً",
        title: "الضغوط الأسرية",

        questions: [

            "يؤثر اهتمامي بطفلي على علاقتي ببقية أبنائي.",

            "تزداد الخلافات بيني وبين زوجي بسبب متطلبات الطفل.",

            "يستهلك طفلي معظم وقتي وطاقتي.",

            "يقل تواصلي مع أفراد الأسرة بسبب انشغالي بطفلي.",

            "أجد صعوبة في تخصيص وقت لنفسي داخل المنزل.",

            "أشعر أن أفراد الأسرة لا يقدمون لي الدعم الكافي.",

            "أشعر بالوحدة رغم وجود الأسرة حولي.",

            "تتأثر حياتنا الأسرية بسبب الخوف من سلوكيات الطفل غير المتوقعة.",

            "تقل الأنشطة الأسرية المشتركة بسبب ظروف طفلي.",

            "أشعر أن حياة الأسرة تدور بالكامل حول احتياجات طفلي."

        ]
    }

];


/* =========================================================
   Convert Sections To One Question Array
========================================================= */

const allQuestions = [];

sections.forEach((section, sectionIndex) => {

    section.questions.forEach(
        (question, questionIndex) => {

            allQuestions.push({

                text: question,

                sectionIndex,

                questionIndex

            });

        }
    );

});


/* =========================================================
   DOM Elements
========================================================= */

const introPage =
    document.getElementById("introPage");

const questionsPage =
    document.getElementById("questionsPage");

const resultPage =
    document.getElementById("resultPage");


const userInfoForm =
    document.getElementById("userInfoForm");

const ageInput =
    document.getElementById("age");

const socialStatusInput =
    document.getElementById("socialStatus");

const educationInput =
    document.getElementById("education");

const startBtn =
    document.getElementById("startBtn");


const sectionNumber =
    document.getElementById("sectionNumber");

const sectionTitle =
    document.getElementById("sectionTitle");

const questionNumber =
    document.getElementById("questionNumber");

const questionText =
    document.getElementById("questionText");

const questionContent =
    document.getElementById("questionContent");


const answerOptions =
    document.querySelectorAll(".answer-option");


const progressText =
    document.getElementById("progressText");

const progressBar =
    document.getElementById("progressBar");

const progressPercentage =
    document.getElementById("progressPercentage");


const prevBtn =
    document.getElementById("prevBtn");

const nextBtn =
    document.getElementById("nextBtn");

const nextBtnText =
    document.getElementById("nextBtnText");


const finalScore =
    document.getElementById("finalScore");

const resultStatus =
    document.getElementById("resultStatus");

const resultDescription =
    document.getElementById("resultDescription");


const summaryAge =
    document.getElementById("summaryAge");

const summarySocial =
    document.getElementById("summarySocial");

const summaryEducation =
    document.getElementById("summaryEducation");


const restartBtn =
    document.getElementById("restartBtn");

const printBtn =
    document.getElementById("printBtn");


/* =========================================================
   Application State
========================================================= */

let currentQuestionIndex = 0;

let answers =
    new Array(allQuestions.length).fill(null);

let userData = {

    age: "",

    socialStatus: "",

    education: ""

};


/* =========================================================
   Intro Validation
========================================================= */

function validateIntroForm() {

    const age =
        ageInput.value.trim();

    const socialStatus =
        socialStatusInput.value.trim();

    const education =
        educationInput.value.trim();


    const ageNumber =
        Number(age);


    const validAge =
        age !== "" &&
        Number.isFinite(ageNumber) &&
        ageNumber >= 1 &&
        ageNumber <= 120;


    const isValid =
        validAge &&
        socialStatus !== "" &&
        education !== "";


    startBtn.disabled =
        !isValid;
}


ageInput.addEventListener(
    "input",
    validateIntroForm
);


socialStatusInput.addEventListener(
    "input",
    validateIntroForm
);


educationInput.addEventListener(
    "input",
    validateIntroForm
);


/* =========================================================
   Start Test
========================================================= */

userInfoForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        validateIntroForm();


        if (startBtn.disabled) {
            return;
        }


        userData = {

            age:
                ageInput.value.trim(),

            socialStatus:
                socialStatusInput.value.trim(),

            education:
                educationInput.value.trim()

        };


        currentQuestionIndex = 0;


        showPage(questionsPage);

        renderQuestion();

    }
);


/* =========================================================
   Page Switch
========================================================= */

function showPage(pageToShow) {

    const pages =
        document.querySelectorAll(".page");


    pages.forEach((page) => {

        page.classList.remove("active");

    });


    pageToShow.classList.add("active");


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* =========================================================
   Render Question
========================================================= */

function renderQuestion() {

    const currentQuestion =
        allQuestions[currentQuestionIndex];


    if (!currentQuestion) {
        return;
    }


    const currentSection =
        sections[currentQuestion.sectionIndex];


    /* Section */

    sectionNumber.textContent =
        currentSection.number;

    sectionTitle.textContent =
        currentSection.title;


    /* Question */

    questionNumber.textContent =
        currentQuestion.questionIndex + 1;

    questionText.textContent =
        currentQuestion.text;


    /* Progress */

    const questionPosition =
        currentQuestionIndex + 1;


    progressText.textContent =
        `${questionPosition} / ${allQuestions.length}`;


    const progress =
        Math.round(
            (
                questionPosition /
                allQuestions.length
            ) * 100
        );


    progressBar.style.width =
        `${progress}%`;


    progressPercentage.textContent =
        `${progress}%`;


    /* Clear selection */

    answerOptions.forEach((option) => {

        option.classList.remove(
            "selected"
        );

    });


    /* Restore previous answer */

    const selectedAnswer =
        answers[currentQuestionIndex];


    if (selectedAnswer !== null) {

        const selectedOption =
            document.querySelector(
                `.answer-option[data-value="${selectedAnswer}"]`
            );


        if (selectedOption) {

            selectedOption.classList.add(
                "selected"
            );

        }

    }


    /* Next Button */

    nextBtn.disabled =
        selectedAnswer === null;


    /* Previous */

    if (currentQuestionIndex === 0) {

        prevBtn.style.visibility =
            "hidden";

    } else {

        prevBtn.style.visibility =
            "visible";

    }


    /* Last Question */

    if (
        currentQuestionIndex ===
        allQuestions.length - 1
    ) {

        nextBtnText.textContent =
            "نتيجة الاختبار";

    } else {

        nextBtnText.textContent =
            "التالي";

    }


    /* Animation */

    questionContent.classList.remove(
        "animate-in"
    );


    void questionContent.offsetWidth;


    questionContent.classList.add(
        "animate-in"
    );

}


/* =========================================================
   Select Answer
========================================================= */

answerOptions.forEach((option) => {

    option.addEventListener(
        "click",
        function () {

            const value =
                Number(
                    this.dataset.value
                );


            answerOptions.forEach(
                (item) => {

                    item.classList.remove(
                        "selected"
                    );

                }
            );


            this.classList.add(
                "selected"
            );


            answers[currentQuestionIndex] =
                value;


            nextBtn.disabled =
                false;

        }
    );

});


/* =========================================================
   Next Question
========================================================= */

nextBtn.addEventListener(
    "click",
    function () {

        if (
            answers[currentQuestionIndex] ===
            null
        ) {

            return;

        }


        if (
            currentQuestionIndex ===
            allQuestions.length - 1
        ) {

            showResult();

            return;

        }


        currentQuestionIndex++;

        renderQuestion();

    }
);


/* =========================================================
   Previous Question
========================================================= */

prevBtn.addEventListener(
    "click",
    function () {

        if (
            currentQuestionIndex > 0
        ) {

            currentQuestionIndex--;

            renderQuestion();

        }

    }
);


/* =========================================================
   Calculate Score
========================================================= */

function calculateScore() {

    return answers.reduce(
        (total, answer) => {

            return total + (answer || 0);

        },
        0
    );

}


/* =========================================================
   Show Result
========================================================= */

function showResult() {

    const unansweredQuestion =
        answers.findIndex(
            answer =>
                answer === null
        );


    if (
        unansweredQuestion !== -1
    ) {

        currentQuestionIndex =
            unansweredQuestion;

        showPage(questionsPage);

        renderQuestion();

        return;

    }


    const score =
        calculateScore();


    showPage(resultPage);


    animateScore(score);


    /* User Information */

    summaryAge.textContent =
        userData.age;

    summarySocial.textContent =
        userData.socialStatus;

    summaryEducation.textContent =
        userData.education;


    /* Remove Old States */

    resultStatus.classList.remove(
        "low",
        "medium",
        "high"
    );


    /*
        40 - 66  => Low
        67 - 93  => Medium
        94 - 120 => High
    */


    if (
        score >= 40 &&
        score <= 66
    ) {

        resultStatus.textContent =
            "ضغوط منخفضة";

        resultStatus.classList.add(
            "low"
        );

        resultDescription.textContent =
            "تشير النتيجة وفقاً لطريقة تصحيح المقياس إلى مستوى منخفض من الضغوط النفسية.";

    }


    else if (
        score >= 67 &&
        score <= 93
    ) {

        resultStatus.textContent =
            "ضغوط متوسطة";

        resultStatus.classList.add(
            "medium"
        );

        resultDescription.textContent =
            "تشير النتيجة وفقاً لطريقة تصحيح المقياس إلى مستوى متوسط من الضغوط النفسية.";

    }


    else if (
        score >= 94 &&
        score <= 120
    ) {

        resultStatus.textContent =
            "ضغوط مرتفعة";

        resultStatus.classList.add(
            "high"
        );

        resultDescription.textContent =
            "تشير النتيجة وفقاً لطريقة تصحيح المقياس إلى مستوى مرتفع من الضغوط النفسية.";

    }

}


/* =========================================================
   Score Counter Animation
========================================================= */

function animateScore(targetScore) {

    finalScore.textContent =
        "0";


    let currentScore = 0;


    const duration = 900;

    const frameRate = 16;


    const steps =
        Math.ceil(
            duration /
            frameRate
        );


    const increment =
        targetScore /
        steps;


    const counter =
        setInterval(
            () => {

                currentScore +=
                    increment;


                if (
                    currentScore >=
                    targetScore
                ) {

                    finalScore.textContent =
                        targetScore;

                    clearInterval(
                        counter
                    );

                    return;

                }


                finalScore.textContent =
                    Math.floor(
                        currentScore
                    );

            },
            frameRate
        );

}


/* =========================================================
   Print Result
========================================================= */

if (printBtn) {

    printBtn.addEventListener(
        "click",
        function () {

            /*
             * التأكد من تحديث النتيجة قبل الطباعة
             */

            window.print();

        }
    );

}


/* =========================================================
   Restart Test
========================================================= */

restartBtn.addEventListener(
    "click",
    function () {

        const shouldRestart =
            confirm(
                "هل تريدين إعادة الاختبار من البداية؟"
            );


        if (!shouldRestart) {
            return;
        }


        /* Reset Answers */

        answers =
            new Array(
                allQuestions.length
            ).fill(null);


        currentQuestionIndex =
            0;


        /* Clear Inputs */

        ageInput.value = "";

        socialStatusInput.value = "";

        educationInput.value = "";


        /* Reset User Data */

        userData = {

            age: "",

            socialStatus: "",

            education: ""

        };


        /* Reset Button */

        startBtn.disabled =
            true;


        /* Reset Result */

        finalScore.textContent =
            "0";

        resultStatus.textContent =
            "ضغوط منخفضة";

        resultStatus.classList.remove(
            "low",
            "medium",
            "high"
        );

        resultDescription.textContent =
            "";


        /* Return */

        showPage(introPage);

    }
);


/* =========================================================
   Keyboard Accessibility
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            !questionsPage.classList.contains(
                "active"
            )
        ) {

            return;

        }


        /*
            1 = نادراً
            2 = أحياناً
            3 = دائماً
        */

        const allowedKeys =
            ["1", "2", "3"];


        if (
            allowedKeys.includes(
                event.key
            )
        ) {

            const option =
                document.querySelector(
                    `.answer-option[data-value="${event.key}"]`
                );


            if (option) {

                option.click();

            }

        }


        /* Enter = Next */

        if (
            event.key === "Enter" &&
            !nextBtn.disabled
        ) {

            nextBtn.click();

        }

    }
);


/* =========================================================
   Initial State
========================================================= */

validateIntroForm();