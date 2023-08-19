

$('.first').click(function(){
    $(".team").slideToggle();
})


$("two").click(function(){
    $("")
})

$('.Duration h3').click(function(){
    $(this).next().slideToggle();
    $(".sec").not($(this).next()).slideUp();
  
})




$(".open").click(function(){
$("ul").show(1000);
    
})

$(".fa-bars").click(function(){
    $(".open").animate({left:"0"},1000);
    $(".fa-circle-xmark").animate({left:"0"},1000);
    
})

$(".fa-circle-xmark").click(function () {
    $(".open").animate({left:"-200"},1000);
})



function makeTimer() {
		var endTime = new Date("29 April 2020 9:56:00 GMT+01:00");			
			endTime = (Date.parse(endTime) / 1000);

			var now = new Date();
			now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$("#days").html(days + "<span>Days</span>");
			$("#hours").html(hours + "<span>Hours</span>");
			$("#minutes").html(minutes + "<span>Minutes</span>");
			$("#seconds").html(seconds + "<span>Seconds</span>");		

	}

	setInterval(function() { makeTimer(); }, 1000);

