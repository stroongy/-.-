var btn = document.querySelector(".assistant-btn");
var assistantPage = document.querySelector(".assistant-page");
var assistantPageh3 = document.querySelector(".assistant-page h3");
var assistantPageToggle = false;
var QsYes = ["Было открыто N ссылок. Желаете ли вы пройти регистрацию?", "Выберите нужные пункты в настройках", "Персонализация на основе выборов", ""]
var QsNo = ["Вы школьник?", "Вы студент?", "Уже работаете в какой-то сфере?"];
var As2 = ["проф.ориентация","курсы","вебинары","новсти и мероприятия" ];
var yesCounter = 0, noCounter = 0;
var isFirst = true, isSecond = false;
var isSchoolBoy = false, isStudent = fasle, isEmployee = false;

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
    if (isFirst) {
        assistantPageh3.innerHTML = QsYes[yesCounter];
        yesCounter++;
        if (yesCounter >= QsYes.length)
            showAssistant();
    }
    if (isSecond) {
        if (noCounter == 0) {
            isSchoolBoy = true;
            assistantPageh3.innerHTML = As2[0];
        }
        else if (noCounter == 1) {
            isStudent = true;
            assistantPageh3.innerHTML = As2[1] + ", " + As2[2] + ", " + As2[3];
        }
        else if (noCounter == 2) {
            isEmployee = true;
            assistantPageh3.innerHTML = As2[2] + ", " + As2[3];
        }
    }
}

function noAnswer() {
    assistantPageh3.innerHTML = QsNo[noCounter];
    noCounter++;
    if (isFirst) {
            isFirst = !isFirst;
            isSecond = true;
    }

    if (noCounter >= QsNo.length)
        showAssistant();
}
