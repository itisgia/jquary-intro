//alert("javascripy is loaded in");
//console.log("javascript is loaded in");


/*
Multi line comments

*/



$(document).ready(function(){


// $("div")
 // 	$(".box")
 // 	$("#box1")
 // 	$("#divbox1")
 // 	$("ul li")

// clickevent
	$("#box1").click(function(){
		console.log("green box is clicked")

	});

	$("#box2").dblclick(function(){
		console.log("green box is clicked")
		// dblclick()-double click

		//common events
		// mouseover()wheen our mouse is over it
		// mouseleave() when our mouse leaves the object
		// hover() a mix of mouseover and mouseleave
		// mousedown() when we click down
		// mouseup() when we life our finger of the click
		// keydown() when you rpe a kwy down 
		// keyup()when you life your finger off the key
		// focus()when you enter into a form element
		// blur() when you leave the foem element
		// -check stuff.nz site searchbar(focus and blur)
		// sybmit() when the form is submitted
		//common effect
		});


		//event effects
		//ebent.preventDefault
		$("#myform").submit(function(){
			event.prevetDefault();
			console.log("do this inside")
		});

		$("#box1").click(function(){
			//$("#box2").hide();
			//$("#box2").show();
			//$("#box2").toggle(1000);
			//$("#box2").fadeOut(1000);
			//$("#box2").addClass("wider");
			//$("#box2").toggleClass("wider");
			//$("#box2").css('background-color','pink');
			$("#box2").css({"background-color":"pink","width":"500px"})

		
		});







});
// we're using jquary.means jquary