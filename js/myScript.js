let shopData = [];
let shopIdCounter = 1;

let men_clothes = [];
let women_clothes = [];
let children_clothes = [];
currentUser = null;
var current_money = "";

instruction_id = document.getElementById("instruction");
checkform_id = document.getElementById("checkform");
instruction_question_delivery_id = document.getElementById("instruction_question_delivery");
faq_tips_id = document.getElementById("faq_tips");
question_show_id = document.getElementById("question_show");

const shopList = document.getElementById("Shop-List");
content_Alibaba_id = document.getElementById("content_Alibaba");
content_WeChat_id = document.getElementById("content_WeChat");
content_Tmail_id = document.getElementById("content_Tmail");
content_Tmail_footer_first_id = document.getElementById("content_Tmail_footer_first");
content_Tmail_footer_second_id = document.getElementById("content_Tmail_footer_second");
content_Aliexpress_id = document.getElementById("content_Aliexpress");
question_show_menu_id = document.getElementById("question_show_menu");
// content_Tmail_faq_id = document.getElementById("content_Tmail_faq");
content_Alibaba_footer_id = document.getElementById("content_Alibaba_footer");
content_WeChat_footer_id = document.getElementById("content_WeChat_footer");
content_Aliexpress_footer_id = document.getElementById("content_Aliexpress_footer");
content_Alibaba_header_id = document.getElementById("content_Alibaba_header");
content_Wechat_header_id = document.getElementById("content_Wechat_header");
content_Tmail_header_id = document.getElementById("content_Tmail_header");
services_faq_instructions_id = document.getElementById("services_faq_instructions");
content_Tmail_faq_id = document.getElementById("content_Tmail_faq");
question_delivery_faq_id = document.getElementById("question_delivery_faq");
loginForm_id = document.getElementById("loginForm");
question_delivery_id = document.getElementById("question_delivery");
question_delivery_menu_id = document.getElementById("question_delivery_menu");
tips_id = document.getElementById("tips");
tips_menu_id = document.getElementById("tips_menu");
faq_tips_id = document.getElementById("faq_tips");
instruction_show_id = document.getElementById("instruction_show");
instructions_menu = document.getElementById("instructions_menu");
content_Alibaba_id.addEventListener("click", () => getContentAnswer("one"));
content_WeChat_id.addEventListener("click", () => getContentAnswer("two"));
content_Tmail_id.addEventListener("click", () => getContentAnswer("three"));
content_Tmail_faq_id.addEventListener("click", () => getContentAnswer("three"));
content_Tmail_footer_first_id.addEventListener("click", () => getContentAnswer("three"));
content_Tmail_footer_second_id.addEventListener("click", () => getContentAnswer("three"));
// content_Tmail_faq_id.addEventListener("click", () => getContentAnswer("three"));
content_Aliexpress_id.addEventListener("click", () => getContentAnswer("four"));
content_Alibaba_footer_id.addEventListener("click", () => getContentAnswer("one"));
content_WeChat_footer_id.addEventListener("click", () => getContentAnswer("two"));
content_Aliexpress_footer_id.addEventListener("click", () => getContentAnswer("four"));
content_Alibaba_header_id.addEventListener("click", () => getContentAnswer("one"));
content_Wechat_header_id.addEventListener("click", () => getContentAnswer("two"));
content_Tmail_header_id.addEventListener("click", () => getContentAnswer("three"));
tips_id.addEventListener("click", () => getContentAnswer("seven"));
tips_menu_id.addEventListener("click", () => getContentAnswer("seven"));
question_delivery_id.addEventListener("click", () => getContentAnswer("ten"));
question_delivery_menu_id.addEventListener("click", () => getContentAnswer("ten"));
question_delivery_faq_id.addEventListener("click", () => getContentAnswer("ten"));
instructions_menu.addEventListener("click", () => getContentAnswer("eleven"));
document.getElementById("instruction_create_order_footer").addEventListener("click", () => getContentAnswer("twelve"));
document.getElementById("shop_content").addEventListener("click", () => getContentAnswer("thirteen"));
document.getElementById("cart-shop").addEventListener("click", () => getContentAnswer("fourteen"));
document.getElementById("favourite-shop").addEventListener("click", () => getContentAnswer("fifteen"));
document.getElementById("services_click").addEventListener("click", () => getContentAnswer("six"));
document.getElementById("services_faq_instructions").addEventListener("click", () => getContentAnswer("six"));
document.getElementById("tariffs_navbar").addEventListener("click", () => getContentAnswer("five"));
document.getElementById("info_delivery_click").addEventListener("click", () => getContentAnswer("sixteen"));
document.getElementById("China_content_show").style.display = "none";
document.getElementById("Ukraine_content_show").style.display = "none";
document.getElementById("International_content_show").style.display = "none";
document.getElementById("Save_content_show").style.display = "none";
document.getElementById("info_delivery_show").style.display = "none";
document.getElementById("tariffs").style.display = "none";

const signInButton = document.getElementById("signInButton");
const registerButton = document.getElementById("registerButton");
const loginButton = document.getElementById("loginButton");
signInButton.addEventListener("click", signIn);
registerButton.addEventListener("click", register);
loginButton.addEventListener("click", showLoginFormEnter);

document.getElementById("ship_img").style.display = "none";
document.getElementById("plane_img").style.display = "none";
document.getElementById("train_img").style.display = "none";
document.getElementById("Shop-products").style.display = "none";
document.getElementById("service_content").style.display = "none";

instruction_show_id.style.display = "none";
instruction_question_delivery_id.style.display = "none";
faq_tips_id.style.display = "none";
question_show_id.style.display = "none";
instruction_show_id.style.display = "none";
document.getElementById("instruction_create_order").style.display = "none";
document.getElementById("cartShop").style.display = "none";
document.getElementById("currentShop").style.display = "none";
document.getElementById("favouriteShop").style.display = "none";
loginForm_id.style.display = "none";
document.getElementById("China_content_show").style.display = "none";
document.getElementById("International_content_show").style.display = "none";
document.getElementById("Save_content_show").style.display = "none";

function mainPage(){
    loginForm_id.style.display = "none";
    instruction_id.style.display = "block";
    checkform_id.style.display = "block";
    faq_tips_id.style.display = "none";
    instruction_show_id.style.display = "none";
    question_show_id.style.display = "none";
    instruction_show_id.style.display = "none";
    instruction_question_delivery_id.style.display = "none";
    question_show_menu_id.style.display = "block";
    document.getElementById("instruction_create_order").style.display = "none";
    document.getElementById("cartShop").style.display = "none";
    document.getElementById("currentShop").style.display = "none";
    document.getElementById("title").text = "KDG China";
    document.getElementById("Shop-products").style.display = "none";
    document.getElementById("service_content").style.display = "none";
    document.getElementById("China_content_show").style.display = "none";
    document.getElementById("International_content_show").style.display = "none";
    document.getElementById("Save_content_show").style.display = "none";
    document.getElementById("Ukraine_content_show").style.display = "none";
    document.getElementById("info_delivery_show").style.display = "none";
    document.getElementById("favouriteShop").style.display = "none";
    document.getElementById("tariffs").style.display = "none";
}
function getContentAnswer(number){
    loginForm_id.style.display = "none";
    instruction_id.style.display = "none";
    checkform_id.style.display = "none";
    faq_tips_id.style.display = "none";
    instruction_show_id.style.display = "none";
    document.getElementById("instruction_create_order").style.display = "none";
    document.getElementById("instruction_create_order").style.display = "none";
    document.getElementById("Shop-products").style.display = "none";
    document.getElementById("cartShop").style.display = "none";
    document.getElementById("currentShop").style.display = "none";
    document.getElementById("Ukraine_content_show").style.display = "none";
    document.getElementById("China_content_show").style.display = "none";
    document.getElementById("International_content_show").style.display = "none";
    document.getElementById("Save_content_show").style.display = "none";
    document.getElementById("tariffs").style.display = "none";
    question_show_id.style.display = "block";
    question_show_menu_id.style.display = "none";
    document.getElementById("service_content").style.display = "none";
    instruction_question_delivery_id.style.display = "none";
    document.getElementById("favouriteShop").style.display = "none";
    document.getElementById("info_delivery_show").style.display = "none";
    if (number == "one"){
        question_show_id.innerHTML = "<p align='justify' style='color: #000001; margin-left: 20px; margin-right: 20px; font-size: 20px; margin-top: 10px;'>На сайті Alibaba проводяться угоди між постачальниками – експортерами і покупцями – клієнтами, імпортерами продукції. Так, перша категорія користувачів продає товари. При цьому компанія-експортер надає опис своєї діяльності, розповідає про свою продукцію, підтверджуючи інформацію додатковими фотографіями товарів, сертифікатами якості та іншими відомостями. Крім цього, кожен постачальник пропонує власні умови доставки. Тому перед тим, як купувати на Alibaba, варто уважно вивчити інформацію про експортера.<br>Покупці шукають необхідні їм товари на сайті торговельного майданчика і надійних постачальників. Маркетплейс характеризується зручним функціоналом, що дозволяє клієнту вести переговори з імпортером прямо на сайті. Важливо, завжди звертатися до постачальника для уточнення інформації про продукцію. Також, під час листування з ним клієнт може вирішити цінові питання, варіанти доставки. Ще покупець має можливість запросити, надати йому одну одиницю товару, для визначення якості, безпосередньо перед тим, як зробити замовлення на Alibaba і укласти більшу угоду з постачальником.</p>";
        document.getElementById("title").text = "Замовлення на Alibaba | KDG China";
    }
    else if (number == "two"){
        question_show_id.innerHTML = "<p align='justify' style='color: #000001; margin-left: 20px; margin-right: 20px; font-size: 20px; margin-top: 10px;'>Після запуску та реєстрації у програмі необхідно:<br>1. Додати у контакти продавця;<br>2. Зайти в особисті дані продавця;<br>3. Перейти до розділу «Моменти»;<br>4. Вибрати потрібний товар;<br>5. Переслати товар, що цікавить, з описом (фото, колір, розмір, доп. характеристики) менеджеру на прорахунок;<br>6. Після погодження замовлення внести передоплату та чекати на посилку.<br>Додатково можна замовити перевірку та фотозвіт товару при отриманні на склад у Китаї.<br>Розрахунок за доставку з Китаю, тариф, комісія та інші платежі будуть вказані у Вашому замовленні.</p>";
        document.getElementById("title").text = "Замовлення на WeChat | KDG China";
    }
    else if (number == "three"){
        question_show_id.innerHTML = "<p align='justify' style='color: #000001; margin-left: 20px; margin-right: 20px; font-size: 20px; margin-top: 10px;'>Оформити відправку з Китаю можна з сервісом KDG China. Перед замовленням необхідно пройти авторизацію на сайті форвардингу. Вам стануть доступні китайські адреси складів, з яких посилку надішлють в Україну.<br>Для замовлення на сайті Tmall вибрані позиції потрібно помістити у кошик. Оформляючи покупку, введіть отримані контакти відділення. Для перекладу сторінки можна використовувати автоматичну функцію в браузері Chrome, натиснувши на іконку поряд з адресним рядком.<br>Після оплати товарів та міжнародного перевезення посилка буде доступна в Україні. Відстежити всі переміщення можна у власному кабінеті, ввівши трек-номер. KDG China дає можливість робити покупки на китайських маркетплейсах із швидкою доставкою до України.<br>Ми радимо вам купувати тільки у перевірених продавців з гарним рейтингом і довгим терміном діяльності.</p>";
        document.getElementById("title").text = "Замовлення на Tmail | KDG China";
    }
    else if (number == "four"){
        question_show_id.innerHTML = "<p align='justify' style='color: #000001; margin-left: 20px; margin-right: 20px; font-size: 20px; margin-top: 10px;'>Aliexpress працює на базі сторінок магазинів, де кожен розміщує свою продукцію. У пошуку покупці бачать окремі товари, але завжди є змога перейти в магазин і переглянути пропозиції саме від цього постачальника. Це зручно, якщо ви хочете придбати товар перевіреного продавця чи оригінальну продукцію китайського бренду – на Aliexpress є офіційні сторінки магазинів Xiomi, Redmi, Boya та інших компаній. Крім цього, магазини можуть розміщувати свої купони товарів.<br>На Aliexpress завжди є змога задати продавцю питання про товар, відправлення, доставку, додаткову інформацію. В листуванні можна обговорити умови про додаткові знижки.<br>Оплата здійснюється незалежно від валюти, яку ви обрали лише в доларах (USD). Ціна в гривні лише приблизна і відповідає курсу обміну фінансової системи, з якою працює Aliexpress. Водночас при оплаті з рахунку можливе зняття комісії у відсотках в залежності від суми та курсу обміну платіжної системи (Visa або MasterCard) чи вашого банку.</p>";
        document.getElementById("title").text = "Замовлення на Aliexpress | KDG China";
    }
    else if (number == "five"){
        question_show_id.style.display = "none";
        document.getElementById("tariffs").style.display = "block";
        document.getElementById("title").text = "Тарифи | KDG China";
    }
    else if (number == "six"){
        question_show_id.innerHTML = "<p></p>";
        document.getElementById("service_content").style.display = "block";
        document.getElementById("title").text = "Послуги | KDG China";
    }
    else if (number == "seven"){
        faq_tips_id.style.display = "flex";
        question_show_id.innerHTML = "<p align='center' style='color: #000001; margin-left: 20px; margin-right: 20px; font-size: 20px; margin-top: 10px; margin-bottom: 50px;'>Якщо у вас є питання, ми з радістю допоможемо вам.</p>";
        document.getElementById("title").text = "FAQ та поради | KDG China";
    }
    else if (number == "ten"){
        instruction_question_delivery_id.style.display = "flex";
        question_show_id.innerHTML = "<p align='center' style='color: #000001; margin-left: 20px; margin-right: 20px; font-size: 20px; margin-top: 10px; margin-bottom: 50px;'></p>";
        document.getElementById("title").text = "Оформлення доставки | KDG China";
    }
    else if (number == "eleven"){
        instruction_show_id.style.display = "block";
        question_show_id.innerHTML = "<p align='center' style='color: #000001; margin-left: 20px; margin-right: 20px; font-size: 20px; margin-top: 10px; margin-bottom: 50px;'>Оформлення доставки з Китаю здійснюється в особистому кабінеті KDG China або через додаток KDG China</p>";
        document.getElementById("title").text = "Інструкція | KDG China";
    }
    else if (number == "twelve"){
        document.getElementById("instruction_create_order").style.display = "block";
        question_show_id.innerHTML = "<p align='center' style='color: #000001; margin-left: 20px; margin-right: 20px; font-size: 20px; margin-top: 10px; margin-bottom: 50px;'>Реєструйтеся і купуйте товари з Taobao, Alibaba і Tmall без вивчення тонкощів роботи з Китаєм</p>";
        document.getElementById("title").text = "Як створити замовлення | KDG China";
    }
    else if (number == "thirteen"){
        question_show_id.style.display = "none";
        document.getElementById("Shop-products").style.display = "block";
        document.getElementById("currentShop").style.display = "block";
        document.getElementById("title").text = "Магазин | KDG China";
    }
    else if (number == "fourteen"){
        question_show_id.style.display = "none";
        document.getElementById("cartShop").style.display = "block";
        document.getElementById("title").text = "Кошик | KDG China";
    }
    else if (number == "fifteen"){
        checkLogin();
        if (checkLogin()){
            question_show_id.style.display = "none";
            document.getElementById("favouriteShop").style.display = "block";
            document.getElementById("title").text = "Обране | KDG China";
        }
    }
    else if (number == "sixteen"){
        question_show_id.style.display = "none";
        document.getElementById("info_delivery_show").style.display = "block";
        document.getElementById("title").text = "Інформація про доставку | KDG China";
    }
}
function signIn() {
  const username = document.getElementById("usernameInput").value;
  const password = document.getElementById("passwordInput").value;

  if (localStorage.getItem(username) === password) {
    loggedIn = true;
    currentUser = username;
    // saveLogin();
    document.getElementById("loginForm").style.display = "none";
  } else {
    alert("Неправильне ім'я користувача або пароль");
  }
}

function register() {
  const username = document.getElementById("usernameInput").value;
  const password = document.getElementById("passwordInput").value;

  if (localStorage.getItem(username)) {
    alert("Ім'я даного користувача вже існує");
  } else {
    // localStorage.setItem(username, password);
    alert("Реєстрація успішна. Тепер ви можете увійти за допомогою свого нового облікового запису.");
  }
}
function logout() {
  loggedIn = false;
  currentUser = null;
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("currentUser");
  showLoginForm();
}
function checkLogin() {
  if (currentUser !== null) {
    loggedIn = true;
    currentUser = localStorage.getItem("currentUser");
    document.getElementById("loginForm").style.display = "none";
    loginForm_id.style.display = "none";
    instruction_id.style.display = "block";
    checkform_id.style.display = "block";
    faq_tips_id.style.display = "none";
    instruction_show_id.style.display = "none";
    question_show_id.style.display = "none";
    instruction_show_id.style.display = "none";
    instruction_question_delivery_id.style.display = "none";
    question_show_menu_id.style.display = "block";
    document.getElementById("instruction_create_order").style.display = "none";
    document.getElementById("cartShop").style.display = "none";
    document.getElementById("currentShop").style.display = "none";
    document.getElementById("title").text = "KDG China";
    document.getElementById("Shop-products").style.display = "none";
    document.getElementById("service_content").style.display = "none";
    document.getElementById("China_content_show").style.display = "none";
    document.getElementById("International_content_show").style.display = "none";
    document.getElementById("Save_content_show").style.display = "none";
    document.getElementById("Ukraine_content_show").style.display = "none";
    document.getElementById("info_delivery_show").style.display = "none";
    document.getElementById("favouriteShop").style.display = "none";
    document.getElementById("tariffs").style.display = "none";
  } else {
    showLoginForm();
  }
}
function showLoginForm() {
    loginForm_id.style.display = "block";
    document.getElementById("Shop-products").style.display = "none";
    document.getElementById("currentShop").style.display = "none";
    document.getElementById("cartShop").style.display = "none";
    document.getElementById("service_content").style.display = "none";
    document.getElementById("favouriteShop").style.display = "none";
    document.getElementById("instruction_create_order").style.display = "none";
    document.getElementById("instruction_create_order").style.display = "none";
    document.getElementById("Shop-products").style.display = "none";
    document.getElementById("cartShop").style.display = "none";
    document.getElementById("currentShop").style.display = "none";
    document.getElementById("Ukraine_content_show").style.display = "none";
    document.getElementById("China_content_show").style.display = "none";
    document.getElementById("International_content_show").style.display = "none";
    document.getElementById("Save_content_show").style.display = "none";
    document.getElementById("tariffs").style.display = "none";
    instruction_id.style.display = "none";
    checkform_id.style.display = "none";
    faq_tips_id.style.display = "none";
    instruction_show_id.style.display = "none";
    question_show_id.style.display = "none";
    instruction_show_id.style.display = "none";
    instruction_question_delivery_id.style.display = "none";
    question_show_menu_id.style.display = "none";
    document.getElementById("instruction_create_order").style.display = "none";
    document.getElementById("info_delivery_show").style.display = "none";
    document.getElementById("title").text = "Вхід | KDG China";
}
function showLoginFormEnter() {
    loginForm_id.style.display = "block";
    document.getElementById("Shop-products").style.display = "none";
    document.getElementById("currentShop").style.display = "none";
    document.getElementById("cartShop").style.display = "none";
    document.getElementById("service_content").style.display = "none";
    document.getElementById("favouriteShop").style.display = "none";
    document.getElementById("instruction_create_order").style.display = "none";
    document.getElementById("instruction_create_order").style.display = "none";
    document.getElementById("Shop-products").style.display = "none";
    document.getElementById("cartShop").style.display = "none";
    document.getElementById("currentShop").style.display = "none";
    document.getElementById("Ukraine_content_show").style.display = "none";
    document.getElementById("China_content_show").style.display = "none";
    document.getElementById("International_content_show").style.display = "none";
    document.getElementById("Save_content_show").style.display = "none";
    document.getElementById("tariffs").style.display = "none";
    instruction_id.style.display = "none";
    checkform_id.style.display = "none";
    faq_tips_id.style.display = "none";
    instruction_show_id.style.display = "none";
    question_show_id.style.display = "none";
    instruction_show_id.style.display = "none";
    instruction_question_delivery_id.style.display = "none";
    question_show_menu_id.style.display = "none";
    document.getElementById("instruction_create_order").style.display = "none";
    document.getElementById("info_delivery_show").style.display = "none";
    document.getElementById("title").text = "Вхід | KDG China";
}

const options_dollar = { style: 'currency', currency: "USD" };
const options_euro = { style: 'currency', currency: "EUR" };
const us_dollar = new Intl.NumberFormat("en-US", options_dollar).format(1);
var total_money = us_dollar;
const us_euro = new Intl.NumberFormat("en-US", options_euro).format(1);
const options_uah = { style: 'currency', currency: "UAH" };
const ua_uah_dollar = new Intl.NumberFormat("ua-UA", options_uah).format(37);
const ua_uah_euro = new Intl.NumberFormat("ua-UA", options_uah).format(39);
var current_money = "";
const airdelivery_value = document.getElementById("airdelivery");
const seadelivery_value = document.getElementById("seadelivery");
const vehicledelivery_value = document.getElementById("vehicledelivery");
const deliverytoUkraine_value = document.getElementById("courier");
const Ukrmail_value = document.getElementById("Ukrmail");
const oneclick_value = document.getElementById("oneclick");
const association_value = document.getElementById("association");
const association_check_value = document.getElementById("association_check");
const weight_check_value = document.getElementById("weight");

document.getElementById("weight").addEventListener("change", function() {
  let v = parseInt(this.value);
  if (v < 1) this.value = 1;
  if (v > 40) this.value = 40;
});

var transport_category_total = 0;
var delivery_category_total = 0;
var service_category_total = 0;
var weight_total = 0;
var transport_category_total_uk = 0;
var delivery_category_total_uk = 0;
var service_category_total_uk = 0;
var weight_total_uk = 0;

services_input_id = document.getElementById("services_input");
var current_service = "";
function service_select()
{
    current_service = services_input_id.options[services_input_id.selectedIndex].text;
}
services_input_id.addEventListener("change", service_select);

vehicle_input_id = document.getElementById("type_vehicle");
var current_vehicle = "";

function vehicle_select()
{
    current_vehicle = vehicle_input_id.options[vehicle_input_id.selectedIndex].text;
    document.getElementById("result_img").style.display = "none";
    document.getElementById("ship_img").style.display = "none";
    document.getElementById("plane_img").style.display = "none";
    document.getElementById("train_img").style.display = "none";
    if (vehicle_input_id.value == "airdelivery"){
        document.getElementById("plane_img").style.display = "inline-block";
        document.getElementById("info_vehicle").innerHTML = "<p>від 14 днів</p>";
    }
    else if (vehicle_input_id.value == "seadelivery"){
        document.getElementById("ship_img").style.display = "inline-block";
        document.getElementById("info_vehicle").innerHTML = "<p>від 50 днів</p>";
    }
    else if (vehicle_input_id.value == "vehicledelivery"){
        document.getElementById("train_img").style.display = "inline-block";
        document.getElementById("info_vehicle").innerHTML = "<p>від 20 днів</p>";
    }
}
vehicle_input_id.addEventListener("change", vehicle_select);
submit_delivery_id = document.getElementById("submit_delivery");
submit_delivery_id.addEventListener("click", submit_form_delivery);

function submit_form_delivery()
{
    checkWeightTotal();
    if (current_money == "$")
    {
        if (vehicle_input_id.value == "airdelivery"){
            transport_category_total = 4;
            document.getElementById("plane_img").style.display = "inline-block";
            if (parseInt(document.getElementById("weight").value) > 0)
            {
                transport_category_total = 14;
            }
            else{
                transport_category_total = 7;
            }
            document.getElementById("info_vehicle").innerHTML = "<p>від 14 днів</p>";
        }
        else if (vehicle_input_id.value == "seadelivery"){
            transport_category_total = 4.4;
            document.getElementById("ship_img").style.display = "inline-block";
            document.getElementById("info_vehicle").innerHTML = "<p>від 50 днів</p>";
        }
        else if (vehicle_input_id.value == "vehicledelivery"){
            document.getElementById("train_img").style.display = "inline-block";
            transport_category_total = 5;
            document.getElementById("info_vehicle").innerHTML = "<p>від 20 днів</p>";
        }
        if (services_input_id.value == "redemption"){
            service_category_total = 5;
        }
        else if (services_input_id.value == "inspection"){
            service_category_total = 5.60;
        }
        else if (services_input_id.value == "insurance"){
            service_category_total = 6;
        }
        total_money = transport_category_total + delivery_category_total + service_category_total + weight_total;
        document.getElementById("total").innerHTML = total_money.toFixed(2) + " <i class='fa-solid fa-dollar-sign fa-xs'></i>";
    }
    else if (current_money == "₴")
    {
        if (vehicle_input_id.value == "airdelivery"){
            transport_category_total_uk = 143.90;
            document.getElementById("plane_img").style.display = "inline-block";
            if (parseInt(document.getElementById("weight").value) > 0)
            {
                transport_category_total_uk = 513.93;
            }
            else{
                transport_category_total_uk = 256.96;
            }
            document.getElementById("info_vehicle").innerHTML = "<p>8-14 днів</p>";
        }
        else if (vehicle_input_id.value == "seadelivery"){
            transport_category_total_uk = 161.52;
            document.getElementById("ship_img").style.display = "inline-block";
            document.getElementById("info_vehicle").innerHTML = "<p>50-70 днів</p>";
        }
        else if (vehicle_input_id.value == "vehicledelivery"){
            transport_category_total_uk = 179.88;
            document.getElementById("train_img").style.display = "inline-block";
            document.getElementById("info_vehicle").innerHTML = "<p>20-40 днів</p>";
        }
        if (services_input_id.value == "redemption"){
            service_category_total_uk = 179.88;
        }
        else if (services_input_id.value == "inspection"){
            service_category_total_uk = 182.50;
        }
        else if (services_input_id.value == "insurance"){
            service_category_total_uk = 215.85;
        }
        total_money = transport_category_total_uk + delivery_category_total_uk + service_category_total_uk + weight_total_uk;
        document.getElementById("total").innerHTML = total_money.toFixed(2) + " грн";
    }
    else {
        if (vehicle_input_id.value == "airdelivery"){
            transport_category_total = 4;
            document.getElementById("plane_img").style.display = "inline-block";
            if (parseInt(document.getElementById("weight").value) > 0)
            {
                transport_category_total = 14;
            }
            else{
                transport_category_total = 7;
            }
            document.getElementById("info_vehicle").innerHTML = "<p>від 14 днів</p>";
        }
        else if (vehicle_input_id.value == "seadelivery"){
            transport_category_total = 4.4;
            document.getElementById("ship_img").style.display = "inline-block";
            document.getElementById("info_vehicle").innerHTML = "<p>від 50 днів</p>";
        }
        else if (vehicle_input_id.value == "vehicledelivery"){
            document.getElementById("train_img").style.display = "inline-block";
            transport_category_total = 5;
            document.getElementById("info_vehicle").innerHTML = "<p>від 20 днів</p>";
        }
        if (services_input_id.value == "redemption"){
            service_category_total = 5;
        }
        else if (services_input_id.value == "inspection"){
            service_category_total = 5.60;
        }
        else if (services_input_id.value == "insurance"){
            service_category_total = 6;
        }
        total_money = transport_category_total + delivery_category_total + service_category_total + weight_total;
        document.getElementById("total").innerHTML = total_money.toFixed(2) + " <i class='fa-solid fa-dollar-sign fa-xs'></i>";
    }
}

function checkWeightTotal(){
    if (current_money == "$")
    {
        if (parseInt(document.getElementById("weight").value) > 0)
        {
            weight_total = parseInt(document.getElementById("weight").value) + 7;
        }
        else{
            weight_total = 0;
        }
        total_money = transport_category_total + delivery_category_total + service_category_total + weight_total;
        document.getElementById("total").innerHTML = total_money.toFixed(2) + " <i class='fa-solid fa-dollar-sign fa-xs'></i>";
    }
    else if (current_money == "₴")
    {
        if (parseInt(document.getElementById("weight").value) > 0)
        {
            weight_total_uk = parseInt(document.getElementById("weight").value) + 251.83;
        }
        else{
            weight_total_uk = 0;
        }
        total_money = transport_category_total_uk + delivery_category_total_uk + service_category_total_uk + weight_total_uk;
        document.getElementById("total").innerHTML = total_money.toFixed(2) + " грн";
    }
    else{
        if (parseInt(document.getElementById("weight").value) > 0)
        {
            weight_total = parseInt(document.getElementById("weight").value) + 7;
        }
        else{
            weight_total = 0;
        }
        total_money = transport_category_total + delivery_category_total + service_category_total + weight_total;
        document.getElementById("total").innerHTML = total_money.toFixed(2) + " <i class='fa-solid fa-dollar-sign fa-xs'></i>";
    }
}

document.getElementById("China_click_footer").addEventListener("click", () => contentShow("China"));
document.getElementById("international_click_footer").addEventListener("click", () => contentShow("International"));
document.getElementById("content_China_domestic").addEventListener("click", () => contentShow("China"));
document.getElementById("content_International").addEventListener("click", () => contentShow("International"));
document.getElementById("content_Save").addEventListener("click", () => contentShow("Save"));
document.getElementById("content_Ukraine_domestic").addEventListener("click", () => contentShow("Ukraine"));

function contentShow(name){
    loginForm_id.style.display = "none";
    instruction_id.style.display = "none";
    checkform_id.style.display = "none";
    faq_tips_id.style.display = "none";
    instruction_show_id.style.display = "none";
    document.getElementById("instruction_create_order").style.display = "none";
    document.getElementById("instruction_create_order").style.display = "none";
    document.getElementById("Shop-products").style.display = "none";
    document.getElementById("cartShop").style.display = "none";
    document.getElementById("currentShop").style.display = "none";
    document.getElementById("Ukraine_content_show").style.display = "none";
    document.getElementById("China_content_show").style.display = "none";
    document.getElementById("International_content_show").style.display = "none";
    document.getElementById("Save_content_show").style.display = "none";
    question_show_id.style.display = "block";
    question_show_menu_id.style.display = "none";
    instruction_question_delivery_id.style.display = "none";
    document.getElementById("service_content").style.display = "none";
    document.getElementById("favouriteShop").style.display = "none";
    document.getElementById("info_delivery_show").style.display = "none";
    if (name == "China"){
        document.getElementById("China_content_show").style.display = "block";
        document.getElementById("Ukraine_content_show").style.display = "none";
        document.getElementById("International_content_show").style.display = "none";
        document.getElementById("Save_content_show").style.display = "none";
        question_show_id.innerHTML = "";
        document.getElementById("title").text = "Доставка з Китая в Україну | KDG China";
    }
    else if (name == "Ukraine"){
        document.getElementById("China_content_show").style.display = "none";
        document.getElementById("Ukraine_content_show").style.display = "block";
        document.getElementById("International_content_show").style.display = "none";
        document.getElementById("Save_content_show").style.display = "none";
        question_show_id.innerHTML = "";
        document.getElementById("title").text = "Доставка по Україні | KDG China";
    }
    else if (name == "International"){
        document.getElementById("China_content_show").style.display = "none";
        document.getElementById("Ukraine_content_show").style.display = "none";
        document.getElementById("International_content_show").style.display = "block";
        document.getElementById("Save_content_show").style.display = "none";
        question_show_id.innerHTML = "";
        document.getElementById("title").text = "Експрес-міжнародна доставка | KDG China";
    }
    else if (name == "Save"){
        document.getElementById("China_content_show").style.display = "none";
        document.getElementById("Ukraine_content_show").style.display = "none";
        document.getElementById("International_content_show").style.display = "none";
        document.getElementById("Save_content_show").style.display = "flex";
        question_show_id.innerHTML = "";
        document.getElementById("title").text = "Складські послуги | KDG China";
    }
}

document.getElementById("logo").removeEventListener("click", mainPage);
document.getElementById("logo").addEventListener("click", mainPage);

var addCart = document.getElementsByClassName("add-cart");
for (var i = 0; i < addCart.length; i++)
{
    var button = addCart[i];
    button.addEventListener("click",addCartClicked);
}
function buyButtonClicked(){
    alert("Your order is placed");
    var cartContent = document.getElementsByClassName("cart-content")[0];
    while (cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild);
    }
    updatetotal();
}
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}
function quantityChanged(event){
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updatetotal();
}
function updatetotal(){
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("₴",""));
        var quantity = quantityElement.value;
        total = total + price * quantity;
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName("total-price")[0].innerText = total + " ₴";
}
function addCartClicked(event){
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, price, productImg);
    updatetotal();
}

function addProductToCart(title, price, productImg){
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for (var i = 0; i < cartItemsNames.length; i++){
        if (cartItemsNames[i].innerText == title){
            alert("Ви вже додали цей товар до кошика!");
            return;
        }
    }
    var cartBoxContent = `<img src="${productImg}" alt="" class="cart-img"/>
                            <div class="detail-box">
                                <div class="cart-product-title">${title}</div>
                                <div class="cart-price">${price}</div>
                                <input type="number" value="1" class="cart-quantity">
                            </div>
                            <i class="bx bxs-trash-alt cart-remove"></i>`;
    document.getElementById("favouriteShop").innerHTML = cartBoxContent;
    cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener("click", removeCartItem);
    cartItems.append(cartShopBox);
}
// Cart
let cart = document.querySelector(".cart");

if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function displayShop(shopArray = shopData) {
  //shopList.innerHTML = "";
  if (shopArray.length === 0) {
    shopList.innerHTML = "<p>Немає доступних товарів</p>";
    return;
  }

  shopArray.forEach(shop => {
    //shopList.innerHTML = "5555";
    const shopItem = document.createElement("div");
    shopItem.classList.add('product-box');
    shopItem.innerHTML = `
      <img src="${shop.image}" alt="" class="product-img" id="product-img"/>
                <h2 class="product-title" id="shop-text">${shop.title}</h2>
                <span class="price" id="shop-price">${shop.price} ₴</span>
                <p>${shop.date_of_public}</p>
                <p>${currentUser}</p>
                <i class="bx bx-shopping-bag add-cart" id="add-to-cart"></i>
    `;
    const addToCartButton = shopItem.querySelector(".add-cart");
    addToCartButton.addEventListener("click", () => {
        const title = shop.title;
        const price = shop.price + " ₴";
        const productImg = shop.image;
        addProductToCart(title, price, productImg);
        updatetotal();
    });
    shopList.appendChild(shopItem);
  });
}
function ready(){
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    console.log(removeCartButtons);
    for (var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener("change",quantityChanged);
    }
    var addCart = document.getElementsByClassName("add-cart");
    for (var i = 0; i < addCart.length; i++)
    {
        var button = addCart[i];
        button.addEventListener("click",addCartClicked);
    }
    document.getElementById("btnbuy").addEventListener("click",buyButtonClicked);
}
function buyButtonClicked(){
    alert("Ваше замовлення розміщено");
    var cartContent = document.getElementsByClassName("cart-content")[0];
    while (cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild);
    }
    updatetotal();
}
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}
function quantityChanged(event){
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updatetotal();
}

function addCartClicked(event){
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, price, productImg);
    updatetotal();
}

function addProductToCart(title, price, productImg){
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for (var i = 0; i < cartItemsNames.length; i++){
        if (cartItemsNames[i].innerText == title){
            alert("Ви вже додали цей товар до кошика!");
            return;
        }
    }
    var cartBoxContent = `<img src="${productImg}" alt="" class="cart-img"/>
                            <div class="detail-box">
                                <div class="cart-product-title">${title}</div>
                                <div class="cart-price">${price}</div>
                                <input type="number" value="1" class="cart-quantity">
                            </div>
                            <i class="bx bxs-trash-alt cart-remove"></i>`;
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener("click", removeCartItem);
    cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change", quantityChanged);
}

function updatetotal(){
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("₴",""));
        var quantity = quantityElement.value;
        total = total + price * quantity;
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName("total-price")[0].innerText = total + " ₴";
}

function handleSearch() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const shopList = document.getElementById("Shop-List");
  shopList.innerHTML = ""; // Очистити існуючі елементи магазину

  if (searchTerm === "") {
    // Якщо пошуковий запит порожній, відображається весь магазин
    displayShop(shopData);
    return;
  }

  // Фільтр shopData на основі пошукового терміну.
  const filteredShop = shopData.filter((shop) => {
    const title = shop.title.toLowerCase();
    const price = shop.price.toLowerCase();
    return title.includes(searchTerm) || price.includes(searchTerm);
  });

  // Показати фільтрований магазин.
  displaySearchShop(filteredShop);
}
function displaySearchShop(shopArray) {
  document.getElementById("currentShop").style.display = "none";
  document.getElementById("Shop-List").style.display = "grid";
  const shopList = document.getElementById("Shop-List");
  shopList.innerHTML = ""; // Очистити існуючі елементи магазину

  // Прокласти через shopArray і створити HTML елементи для їх відображення
  shopArray.forEach((shop) => {
    const shopItem = document.createElement("div");
    shopItem.classList.add('product-box');
    shopItem.innerHTML = `
      <img src="${shop.image}" alt="" class="product-img" id="product-img"/>
                <h2 class="product-title" id="shop-text">${shop.title}</h2>
                <span class="price" id="shop-price">${shop.price} ₴</span>
                <p>${shop.date_of_public}</p>
                <i class="bx bx-shopping-bag add-cart" id="add-to-cart"></i>
    `;
    const addToCartButton = shopItem.querySelector(".add-cart");
    addToCartButton.addEventListener("click", () => {
        const title = shop.title;
        const price = shop.price + " ₴";
        const productImg = shop.image;
        addProductToCart(title, price, productImg);
        updatetotal();
    });
    shopList.appendChild(shopItem);
  });
}
// displayShop();