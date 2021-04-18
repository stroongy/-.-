class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.passing = null;
    }
}

var btn = document.querySelector(".assistant-btn");
var assistantPage = document.querySelector(".assistant-page");
var assistantPageh3 = document.querySelector(".assistant-page h3");
var assistantPageToggle = false;
var yesBtn = document.getElementById("yes");
var noBtn = document.getElementById("no");
var okBtn = document.getElementById("ok");
var isPassing = false;

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

//start
const root = new TreeNode("Привет, я помощник по навигации на этом сайте. Площадка РСВ объединяет кадровые, социальные и образовательные проекты со всей России. Хочешь проведу тебе экскурсию?");

//tour
const tour1 = new TreeNode("Было открыто N ссылок. Желаете ли вы пройти регистрацию?");
const tour2 = new TreeNode("Выберите нужные пункты в настройках");
const tour3 = new TreeNode("Персонализация на основе выборов");

//choose schoolboy, student or employee
const schoolboy = new TreeNode("Для того, чтобы я смог выдать полезный для тебя контент, мне нужно узнать, кто ты.\nВы школьник?");
const student = new TreeNode("Вы студент?");
const employee = new TreeNode("Вы работник?");

//schoolboy
const profOrient = new TreeNode("У нас есть такая штука, как трек развития. В нем ты сможешь пройти различные тесты, а так же проследить как ты развиваешься. Показать, как попасть на него?");
const profOrientI = new TreeNode("Для того, чтобы попасать на трек развития, тебе нужно пройти регистрацию. Затем, перейди на главную страницу данного сайта. Видишь круг? Это круг навигации. На нем можно выбрать ТРЕК РАЗВИТИЯ. Если не нашел, то <a href='https://rsv.ru/portal/track'>жми сюда</a>");
const coursessb = new TreeNode("Если хочешь чему-то научиться, то у нас есть различные онлайн-курсы! Показать?");
const coursesILsb = new TreeNode("Перейди на главную страницу. В левой части можно увидеть круг навигации. Выбери на нем ОБУЧЕНИЕ, а затем нажми на ОНЛАЙН-КУРСЫ. Если не нашел, то <a href='https://rsv.ru/edu/courses/'>вот тебе ссылка</a>");

//student (courses included) or employee (learn)
const coursesst = new TreeNode("Курсы");
const coursesILst = new TreeNode("Курсы (информация. изучение)");
const webinarst = new TreeNode("Вебинар");
const webinarILst = new TreeNode("Вебинар (информация. изучение)");
const eventsst = new TreeNode("Мероприятия");
const eventsILst = new TreeNode("Мероприятия (информация. посещение)");

const coursese = new TreeNode("Курсы");
const coursesILe = new TreeNode("Курсы (информация. изучение)");
const webinare = new TreeNode("Вебинар");
const webinarILe = new TreeNode("Вебинар (информация. изучение)");
const eventse = new TreeNode("Мероприятия");
const eventsILe = new TreeNode("Мероприятия (информация. посещение)");

//employee (teach or organize) (webinars and events)
const webinarTe = new TreeNode("Вебинар");
const webinarITe = new TreeNode("Вебинар (информация. преподавание)");
const eventsTe = new TreeNode("Мероприятия");
const eventsITe = new TreeNode("Мероприятия (информация. организация");

//news and recommendations
const newsInfo = new TreeNode("Новости и рекомендации");


//branches
root.left = tour1;
root.right = schoolboy;

tour1.left = tour2;
tour1.right = schoolboy;

tour2.left = tour3;
tour2.right = schoolboy;

tour3.passing = newsInfo;

schoolboy.left = profOrient;
schoolboy.right = student;

profOrient.left = profOrientI;
profOrient.right = coursessb;

profOrientI.passing = coursessb;

coursessb.left = coursesILsb;
coursessb.right = newsInfo;

coursesILsb.passing = newsInfo;

student.left = coursesst;
student.right = employee;

coursesst.left = coursesILst;
coursesst.right = webinarst;

coursesILst.passing = webinarst;

webinarst.left = webinarILst;
webinarst.right = eventsst;

webinarILst.passing = eventsst;

eventsst.left = eventsILst;
eventsst.right = newsInfo;

eventsILst.passing = newsInfo;

employee.left = coursese;
employee.right = newsInfo;

coursese.left = coursesILe;
coursese.right = webinare;

coursesILe.passing = webinare;

webinare.left = webinarILe;
webinare.right = eventse;

webinarILe.passing = eventse;

eventse.left = eventsILe;
eventse.right = newsInfo;

webinarTe.left = webinarITe;
webinarTe.right = eventsTe;

webinarITe.passing = eventsTe;

eventsTe.left = eventsITe;
eventsTe.right = newsInfo;

eventsITe.passing = newsInfo;

function hideButtons() {
    if (current == newsInfo) {
        okBtn.style.display = "none";
        yesBtn.style.display = "none";
        noBtn.style.display = "none";
    }
}

function yesAnswer() {
    okBtn.style.display = "none";
    yesBtn.style.display = "block";
    noBtn.style.display = "block";
    current = current.left;
    if (current.passing) {
        isPassing = true;
        okBtn.style.display = "block";
        yesBtn.style.display = "none";
        noBtn.style.display = "none";
    }
    else
        isPassing = false;
    assistantPageh3.innerHTML = current.value;
    hideButtons();
}

function okAnswer() {
    analytics.push(current.value);
    current = current.passing;
    assistantPageh3.innerHTML = current.value;
    okBtn.style.display = "none";
    yesBtn.style.display = "block";
    noBtn.style.display = "block";
    hideButtons();
}

function noAnswer() {
    current = current.right;
    assistantPageh3.innerHTML = current.value;
    hideButtons();
}

function showAnalytics() {
    alert(analytics);
}

current = root;
assistantPageh3.innerHTML = current.value;

analytics = [];
