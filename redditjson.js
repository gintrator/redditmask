$(document).ready(function() {
	$.getJSON("http://reddit.com/.json?jsonp=?", function (json) {
	    $.each(json.data.children, function (i, object) {
	    	var post = "<h4><a href =\"" + object.data.url + "\">" + object.data.title + "</a></h4>";
	    	$("#cnn_maint1lftf").append(post);
	        //document.write(post);
	    });
	});
});
