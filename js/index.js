$(function(){
	// handler for .ready() called

	$("#submit-btn").click(backgroundSwitch);

	function backgroundSwitch() {
		event.preventDefault();

		// read city value entered in
		var enteredCity = $("#city-type").val();
		// change all letters to uppercase to control for capitalization differences
		var city = enteredCity.toUpperCase();

		// identify if city matches one of the provided cities, if true, add class to change background to match city
		if(city == "NEW YORK" || city == "NEW YORK CITY" || city == "NYC"){
			$("body").attr("class","nyc");
		// if not true, identify if city matches other provided cities, and change class accordingly
		} else if (city == "SAN FRANCISCO" || city == "SF" || city == "BAY AREA"){
			$("body").attr("class","sf");
		}	else if (city == "LOS ANGELES" || city == "LA" || city == "LAX"){
			$("body").attr("class","la");
		} else if (city == "AUSTIN" || city == "ATX"){
			$("body").attr("class","austin");
		} else if (city == "SYDNEY" || city == "SYD"){
			$("body").attr("class","sydney");
		}
		// if no cities match, remove any additional class to assign default background 
		else {
			$("body").attr("class","");
		}

		// clear user entry field after any entry
		$("#city-type").val("");

	}

});