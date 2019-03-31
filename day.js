function dayName(date){
  const dayOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  return dayOfTheWeek[date.getDay()];
}
function greeting(date) {
  return  `Hello, world! Happy ${dayName(now)}`;
}
