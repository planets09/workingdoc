var dateandTimes = [	
	{
		day: 'Monday',
		time: '9:00 a.m. - 6:00 p.m.'
	},
	{
		day: 'Tuesday',
		time: 'CLOSED'
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
		time: 'CLOSED'
	},
	{
		day: 'Sunday',
		time: 'CLOSED'
	}
];

document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        text = target.textContent || target.innerText;  
    if(target.className === 'btn'){
		var hours = document.getElementById("hours");
		var store = document.getElementById("store");
		switch (text) {
			case "MON":
				hours.textContent = dateandTimes[0].time;
				store.textContent = 'OPEN NOW';
				break;
			case "TUES":
				hours.textContent = dateandTimes[1].time;
				store.textContent = '';
				break;
			case "WED":
				hours.textContent = dateandTimes[2].time;
				store.textContent = 'OPEN NOW';
				break;
			case "THURS":
				hours.textContent = dateandTimes[3].time;
				store.textContent = 'OPEN NOW';
				break;
			case "FRI":
				hours.textContent = dateandTimes[4].time;
				store.textContent = 'OPEN NOW';
				break;
			case "SAT":
				hours.textContent = dateandTimes[5].time
				store.textContent = '';
				break;
			case "SUN":
				hours.textContent = dateandTimes[6].time
				store.textContent = '';
				break;
		}
	}
}, false);





