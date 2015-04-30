$(document).ready(function(){
//On submitting a search term, retrieve request and show results
	$(".search-term").submit(function(){
		event.preventDefault();
		var searchTerm = $(".query").val();
		getRequest(searchTerm);
	});

// Define how to retrieve request, and show results
	function getRequest(searchTerm){
		var params = {
			part: "snippet",
			key: "AIzaSyAofcBqXTDPfIIQYAE0UPXLCCVySyEVmko",
			q: searchTerm
		};
		url = "https://www.googleapis.com/youtube/v3/search"
		$.getJSON(url, params, function(data){
			console.log(data);

		});
	}

// Show results
	
});