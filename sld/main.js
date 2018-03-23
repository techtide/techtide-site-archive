const MONTH_NAMES = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var today = new Date();
var todayString = " Week of " + MONTH_NAMES[today.getMonth()] + " " + (today.getDate()) + ".";

var day;
var period;

document.getElementById('monday').textContent = "Monday, " + getWeekDateByDay(today.getDay()-1);
document.getElementById('tuesday').textContent = "Tuesday, " + getWeekDateByDay(today.getDay()-2);
document.getElementById('wednesday').textContent = "Wednesday, " + getWeekDateByDay(today.getDay()-3);
document.getElementById('thursday').textContent = "Thursday, " + getWeekDateByDay(today.getDay()-4);
document.getElementById('friday').textContent = "Friday, " + getWeekDateByDay(today.getDay()-5);

function handleTimetableClick(elementId, classNumber) {
  console.log("Time that was selcted to do the test: " + "class number " + classNumber + " on day " + elementId.charAt(3));
  period = classNumber;
  day = elementId.charAt(3);
  document.getElementById('selectedTime').placeholder = "Class " + classNumber + ", day " + day + "." + todayString;
}

function getWeekDateByDay(diff) {
  if(today.getDay() == 1) {
    return MONTH_NAMES[today.getMonth()] + " " + (today.getDate());
  } else {
    return MONTH_NAMES[(today.getDate()-(diff) < 30) ? today.getMonth() : today.getMonth()+1] + " " + (today.getDate()-(diff));
  }
}

$(".timebutton").on('click', function() {
  handleTimetableClick(this.id, parseInt(this.id.charAt(1)));
});

$("#submitbutton").click(function() {
  // Push the details to Google Sheets.
});

$("#minusweek").click(function() {
  alert("This feature is currently unimplemented.");
});

$("#plusweek").click(function() {
  alert("This feature is currently unimplemented.");
});
