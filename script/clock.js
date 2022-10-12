//Setting an interval
setInterval(() => {
  //Declaring variables to give value to HTML elements
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let ampm = document.getElementById("am-pm");

  //Declaring animation variable
  let hh = document.getElementById("hh");
  let mm = document.getElementById("mm");
  let ss = document.getElementById("ss");

  //Declaring rotating variables
  let hr_dot = document.querySelector(".hr_dot");
  let min_dot = document.querySelector(".min_dot");
  let sec_dot = document.querySelector(".sec_dot");

  //Declaring variables to hold time
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getUTCSeconds();
  let am_pm;

  //Setting "AM" and "PM"
  if (h >= 12) {
    am_pm = "PM";
  } else {
    am_pm = "AM";
  }

  //Converting 24 hour to 12 hour clock
  if (h > 12) {
    h = h - 12;
  }

  //Adding two digits
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  //Setting hold time to HTML elements
  hours.innerHTML = h + "<br><span>Hours</span>";
  minutes.innerHTML = m + "<br><span>Mimutes</span>";
  seconds.innerHTML = s + "<br><span>Seconds</span>";
  ampm.innerHTML = am_pm;

  //Styling animation

  //12 hrs clock
  hh.style.strokeDashoffset = 440 - (440 * h) / 12;
  //60 minute
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  //60 seconds
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;

  //Styling rotating dot
  hr_dot.style.transform = `rotate(${h * 30}deg)`; // 360/12 = 30
  min_dot.style.transform = `rotate(${m * 6}deg)`; // 360/60 = 6
  sec_dot.style.transform = `rotate(${s * 6}deg)`; // 360/60 = 6
});
