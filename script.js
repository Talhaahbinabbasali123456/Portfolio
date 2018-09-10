let backgroundImg = ["img/imgs/news-app.PNG","img/imgs/weather-app.PNG","img/imgs/assignments.PNG","img/imgs/dancing-circle.PNG","img/imgs/facebook-desktop.PNG","img/imgs/first-template.PNG","img/imgs/mix-project.PNG","img/imgs/whatsapp.PNG"]
let innerHTMLContent = ["News App","Weather App","Assignments","Dancing circle","Facebook Desktop","First Template","Mix Projects","WhatsApp"];
let backCclass = ["assignment","dancing-circle","facebook-desktop","first-template","mix-project","news-app","weather","whatsapp"];
let classs = ["b1","b2","b3","b4","b5","b6","b7","b8"];
let description = 
["It have Almost 90 News of different catagories. and make this App using 'HTML', 'CSS', 'JavaScript', 'ajax()', 'JQuery', 'API key', 'Loop' and 'Functions' and also focusing on responsiveness",
"It's a simple looking weather App it tell current and forecast weather update of world. and make this App using 'HTML', 'CSS', 'JavaScript', 'ajax()', 'JQuery', 'API key', 'Loop' and 'Functions' and also focusing on responsiveness",
"It's a mixture of assignments and make this site using 'HTML', 'CSS' no bootstrap no responsive design just it have some Hackathon assignments",
"It's a simple moving circles with the practice focus on 'javascript' also responsive",
"It's facebook desktop version only. when i just focusing of 'Flex'",
"It is my first template ever. no more comment",
"It's a mixture of projects. It have many projects including my old assignments almost. also game projects in it like 'Quizes', 'guess the number' etc",
"It is a whatsapp when i was practicing about changing innerhtml through javascript then i make this app and also focus on 'flex', 'responsivenes'"
];
function onloadFunc() {
	document.querySelector(".rating-html").innerHTML = `<div class='ratehtml'>HTML 95%</div>`;
	document.querySelector(".rating-css").innerHTML = `<div class='ratecss'>CSS 95%</div>`;
	document.querySelector(".rating-javascript").innerHTML = `<div class='ratescript'>JavaScript 85%</div>`;
	document.querySelector(".ratehtml").style.transition = `1s`;
	document.querySelector(".ratecss").style.transition = `1s`;
	document.querySelector(".ratescript").style.transition = `1s`;
	document.querySelector(".ratehtml").style.width = `95%`;
	document.querySelector(".ratecss").style.width = `95%`;
	document.querySelector(".ratescript").style.width = `85%`;
	for (let i=0; i<8; i++) {
		document.querySelector(".projects-div").innerHTML +=
		`<div class='container' style="background-image: url(${backgroundImg[i]})">
			<div class='container-layout'>
				<h1 class='skill-heading'>${innerHTMLContent[i]}</h1>
				<p class='description'>${description[i]}</p>
				<div class='buttons'>
					<button onclick='imgView()'>View Image</button>
					<button><a class='a-btn' href=''>Visit URL</a></button>
					<button><a class='a-btn' href=''>Read More</a></button>
			</div>
		</div>`;
	}
}
function imgView() {
	
}