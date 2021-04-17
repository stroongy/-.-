var btn = document.querySelector(".assistant-btn");
var assistantPage = document.querySelector(".assistant-page");
var assistantPageh3 = document.querySelector(".assistant-page h3");
var assistantPageToggle = false;
var QsYes = ["Было открыто N ссылок. Желаете ли вы пройти регистрацию?", "Выберите нужные пункты в настройках", "Персонализация на основе выборов"]
var QsNo = ["Вы школьник?", "Вы студент?", "Уже работаете в какой-то сфере?"];
var As2 = ["проф.ориентация","курсы","вебинары","новсти и мероприятия" ];
var yesCounter = 0;
var noCounter = 0;

function showAssistant() {
    if (!assistantPageToggle) {
        assistantPage.style.display = "block";
        assistantPageToggle = true;
    }
    else if (assistantPageToggle)
    {
        assistantPage.style.display = "none";
        assistantPageToggle = false;
    }
}

function yesAnswer() {
    assistantPageh3.innerHTML = QsYes[yesCounter];
    yesCounter++;
    if (yesCounter >= QsYes.length)
        showAssistant();
}

function noAnswer() {
    assistantPageh3.innerHTML = QsNo[noCounter];
    noCounter++;
    if (noCounter >= QsNo.length)
        showAssistant();
}
