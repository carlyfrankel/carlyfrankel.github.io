$(document).ready(function(){	
	/* Home Page */
	/*Login Modal*/
	$("#login").click(function(){
		$("#modal-container").fadeIn();
	});

	$("#submit").click(function(){
		$("#modal-container").hide();
	});

	$("#cancel").click(function(){
		$("#modal-container").fadeOut();
	});
	
	$("#modal-overlay").click(function(){
		$("#modal-container").fadeOut();
	});
	/*Signup Modal */
	$("#signup").click(function(){
		$("#modal-container2").fadeIn();
	});

	$("#submit2").click(function(){
		$("#modal-container2").hide();
	});

	$("#cancel2").click(function(){
		$("#modal-container2").fadeOut();
	});
	
	$("#modal-overlay2").click(function(){
		$("#modal-container2").fadeOut();
	});
	/* Featured Container */
	$("#nextarrowright").click(function(){
		$(".lil-jeffrey-container").hide();
		$(".snickers-container").show();
	});
	
	$("#nextarrowleft").click(function(){
		$(".snickers-container").hide();
		$(".lil-jeffrey-container").show();
	});
/*User Modal*/
$('#welcome, #user-container, #usermodalarrow').hover(function(){
        if ($('#user-container').css('display') == 'none') {
            $('#user-container').show();
        } else {
            $('#user-container').hide();
        }
    });

/*Profile Pictures */
$("#thumb1").click(function(){
		$("#cookie-pic1").show();
		$("#cookie-pic2").hide();
		$("#cookie-pic3").hide();
	});
$("#thumb2").click(function(){
		$("#cookie-pic1").hide();
		$("#cookie-pic2").show();
		$("#cookie-pic3").hide();
	});
$("#thumb3").click(function(){
		$("#cookie-pic1").hide();
		$("#cookie-pic2").hide();
		$("#cookie-pic3").show();
	});
 /*Rating Modal*/
 $("#cookie-button-rate").click(function(){
		$("#rating-modal-container").fadeIn();
		$("body").addClass("no-scroll");
	});
 $("#rating-modal-overlay").click(function(){
		$("#rating-modal-container").fadeOut();
		$("body").removeClass("no-scroll");
	});
 $("#rating-modal-button").click(function(){
		$("#rating-modal-container").fadeOut();
		$("body").removeClass("no-scroll");
	});
});