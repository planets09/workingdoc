

var dateandTimes = [	
	{
		day: 'Monday',
		time: '9:00 a.m. - 6:00 p.m.'
	},
	{
		day: 'Tuesday',
		time: 'Closed'
	},
	{
		day: 'Wednesday',
		time: '9:30 a.m. - 4:30 p.m.'
	},
	{
		day: 'Thursday',
		time: '10:00 a.m. - 4:30 p.m.'
	},
	{
		day: 'Friday',
		time: '9:00 a.m. - 6:00 p.m.'
	},
	{
		day: 'Saturday',
		time: 'Closed'
	},
	{
		day: 'Sunday',
		time: 'Closed'
	}
];

document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        text = target.textContent || text.innerText;  

        if(target.className === 'btn'){
        // console.log(target);
		var hours = document.getElementById("hours");

		switch (text) {
			case "MON":
				hours = "The date you selected is: " + dateandTimes.day + " and the open times are: " + dateandTimes.time
				break;
			case "TUES":
				hours = "The date you selected is: " + dateandTimes.day + " and the open times are: " + dateandTimes.time
				break;
			case "WED":
				hours = "The date you selected is: " + dateandTimes.day + " and the open times are: " + dateandTimes.time
				break;
			case "THURS":
				hours = "The date you selected is: " + dateandTimes.day + " and the open times are: " + dateandTimes.time
				break;
			case "FRI":
				hours = "The date you selected is: " + dateandTimes.day + " and the open times are: " + dateandTimes.time
				break;
			case "SAT":
				hours = "The date you selected is: " + dateandTimes.day + " and the open times are: " + dateandTimes.time
				break;
			case "SUN":
				hours = "The date you selected is: " + dateandTimes.day + " and the open times are: " + dateandTimes.time
				break;
		}

		if(target.className === 'btn'){

		var store = document.getElementById("store");

		switch (text) {
			case "MON":
			store = "OPEN NOW" 
			break;
			case "WED":
			store = "OPEN NOW"
			break;
			case "THURS":
			store = "OPEN NOW"
			break;
			case "FRI":
			store = "OPEN NOW"
			break;
		}	
	}

}, false);





