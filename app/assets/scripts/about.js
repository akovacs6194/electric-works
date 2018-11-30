function openTab(e, tabId) {
	var i, tabcontent, tablink;

	// hide all tabcontent content when user clicks a button
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	} 

	//Remove active for the tablink if it's active
	tablink = document.getElementsByClassName("tablink");
	for (i = 0; i < tablink.length; i++) {
		tablink[i].className = tablink[i].className.replace(" active-title", "");
	}

	document.getElementById(tabId).style.display = "block";
	e.currentTarget.className += " active-title";

}

	// Get the element with id="defaultOpen" and click on it
	document.getElementById("defaultOpen").click();