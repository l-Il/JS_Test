function Clock()
{
  var date = new Date();
  var time = [date.getHours(),date.getMinutes(),date.getSeconds()];
  var week = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"]
  var days = date.getDay();
  var current_time = [time[0],time[1],time[2]].join(':');
  var clock = document.getElementById("clock");
  var day = document.getElementById("week");

  clock.innerHTML = current_time;
  day.innerHTML = week[days];

  setTimeout("Clock()", 1000);
}