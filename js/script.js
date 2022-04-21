//-------------------------------------------------Task 1----------------------------------------

/*document.querySelector('.wrapper').innerHTML = `
  <ol id="ol_lst">
    <li>Вивести завдання в документ.</li>
    <li>Модифікуйте код таблиці множення, створеної раніше, так, щоб<br>
        верхній рядок і лівий стовпчик були виведені підкресленим шрифтом,<br>
        тобто щоб вони сприймалися як заголовки. По контуру таблиця<br>
        повинна бути бузковим кольором, фон - коричневий, клітки - червоні.</li>
    <li>Виконати практичне завдання №1, при цьому організувати запит<br>
        необхідного місяця і року.</li>
    <li>Знайти кількість субот у вказаному місяці.</li>
    <li>Виконати практичне завдання №2.</li>
    <li>Протабулювати будь-які три функції для заданого діапазону<br>
        аргументу і вивести у вигляді таблиці, виділити позитивні числа<br>
        зеленим кольором.</li>
  </ol>
`;

//-------------------------------------------------Task 2----------------------------------------

document.write(`<table class="tbl">`);
document.write(`<tr><td></td>`);
for (i = 1; i <=10; i++) document.write(`<td class="t_td"><strong><ins>`+i+`</ins></strong></td>`);
document.write('</tr>');
for (i = 1; i <=10; i++)
{
document.write(`<tr><td class="t_td"><strong><ins>` + i + `</ins></strong></td>`);
for (j = 1; j <= 10; j++)
{
document.write(`<td class="t_td">` + (i*j) + `</td>`);}
document.write(`</tr>`);
}
document.write(`</table>`);*/

//-------------------------------------------------Task 3----------------------------------------

let days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'нд'];

let month = ['січня', 'лютого', 'березня', 'квітня',
'травня', 'червня', 'липня', 'серпня', 'вересня',
'жовтня', 'листопада', 'грудня'];

let month_for_warp = ['січень', 'лютий', 'березень', 'квітень',
'травень', 'червень', 'липень', 'серпень', 'вересень',
'жовтень', 'листопад', 'грудень'];

let fullDays = ['неділя', 'понеділок', 'вівторок',
'середа', 'четвер', "п'ятниця", 'субота'];

  var taken;
  var now;
  var currentMonth;
  var prevMonth;
  var today;
  var dayOfWeek;
  var daysInMonth;
  var daysInPrevMonth;
  var year;
  var yearNow;
  var monthNow;
  var dayNow;
  let clickAble;

  function cal_create(y, m){

    if(y == undefined && m == undefined){
     taken = new Date();
   }else {
     taken = new Date(y, m - 1);
   }

   taken.setDate(1);
   dayOfWeek = taken.getDay();
   if(dayOfWeek == 0){dayOfWeek = 7;}

   currentMonth = taken.getMonth();
   daysInMonth = 28;

   year = taken.getFullYear();

   while(currentMonth == taken.getMonth()){
     taken.setDate(++daysInMonth);
   }
   --daysInMonth;

   prevMonth = new Date(taken.getFullYear(), taken.getMonth() - 1, 0);
   daysInPrevMonth = prevMonth.getDate();

   now = new Date();
   dayNow = now.getDay();
   today = now.getDate();
   monthNow = now.getMonth();
   yearNow = now.getFullYear();

   document.open();

   document.write(`<link rel="stylesheet" href="css/style.css">`);
   document.write(`<div class="wrapper">`);
   document.write(`<div class="calendar_wr">`);
   document.write(`<div class="only_today">${fullDays[dayNow]}, ${today} ${month[monthNow]} ${yearNow} р.</div>`);
   document.write(`<hr class="hori">`);
   document.write(`<div class="m_a_y">${month_for_warp[currentMonth]} ${year} р.</div>`);
   document.write(`<table class="cal"><tbody>`);
   document.write(`<tr>`);

   for (var i = 0; i < 7; i++){
     if(i == 5 || i == 6){document.write(`<td class="st_snd">` + days[i] + `</td>`);}else {
       document.write(`<td>` + days[i] + `</td>`);
     }
   }

   document.write(`</tr>`);

   for (var i = 2 - dayOfWeek; i <= 43 - dayOfWeek; i++){

     if((i - 1 + dayOfWeek) % 7 == 1){document.write(`<tr>`);}

     if((i - 1 + dayOfWeek) % 7 == 0 || (i - 1 + dayOfWeek) % 7 == 6){

       if(i < 1){document.write(`<td class="st_snd"><span class="no_this">` + (daysInPrevMonth + i) + `</span></td>`);}
       else if(i > daysInMonth){document.write(`<td class="st_snd"><span class="no_this">` + (i - daysInMonth) + `</span></td>`);}
       else if(i == today){document.write(`<td class="today st_snd"><strong title="сьогодні">` + i + `</strong></td>`);}
       else {document.write(`<td class="st_snd">` + i + `</td>`);}

     }else {

       if(i < 1){document.write(`<td><span class="no_this">` + (daysInPrevMonth + i) + `</span></td>`);}
       else if(i > daysInMonth){document.write(`<td><span class="no_this">` + (i - daysInMonth) + `</span></td>`);}
       else if(i == today){document.write(`<td class="today"><strong title="сьогодні">` + i + `</strong></td>`);}
       else {document.write(`<td>` + i + `</td>`);}

     }

     if((i - 1 + dayOfWeek) % 7 == 0){
       document.write(`</tr>`);
     }

   }

   document.write(`</tbody></table>`);
   document.write(`<hr class="hori">`);
   document.write(`<div class="search">`);
   document.write(`<input id="year" type="text" name="year" placeholder="рік"><input id="month" type="text"
   name="month" placeholder="місяць"><button class="search_btn" type="button">Знайти</button>`);
   document.write(`</div>`);
   document.write(`</div>`);
   document.write(`</div>`);

   document.close();

   clickAble = document.querySelector(`.search_btn`);
   clickAble.addEventListener("click", function(e){

   let passYear = document.getElementById('year').value;
   let passMonth = document.getElementById('month').value;

   document.body.innerHTML = ``;

   if(passYear == '' && passMonth == ''){
    cal_create();
  }else {
    cal_create(passYear, passMonth);
  }

  });

  }

  cal_create();
