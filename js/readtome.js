require(['jquery'], function($) { $(document).ready(function(){
	$('p, h1, h2, h3, h4, h5, span, a, label').hover(
	    function() {
    	    $(this).addClass('currentlySpeaking');
    	    if(typeof speakTimer !== 'undefined') {
    	        clearTimeout(speakTimer);
    	    }
    	    window.speechSynthesis.cancel();
    	    var speakText = $(this).text();
    	    speakTimer = setTimeout( function() {
        		var msg = new SpeechSynthesisUtterance(speakText);
            	msg.rate = 0.8;
            	msg.lang = 'en-scottish';
        		window.speechSynthesis.speak(msg);
        		$(this).removeClass('currentlySpeaking');
            }, 1500);
        },
        function() {
            window.speechSynthesis.cancel();
            $(this).removeClass('currentlySpeaking');
        }
    );
})});