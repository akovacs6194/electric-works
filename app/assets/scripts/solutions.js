function openTab(e, tabId) {
	var i, tabContent, tabLink;

	// hide all tabContent when user clicks a button
	tabContent = document.getElementsByClassName("tabContent");
	for (i = 0; i < tabContent.length; i++) {
		tabContent[i].style.display = "none";
	} 

	//Remove active class for the tablink if it is currently active
	tabLink = document.getElementsByClassName("tabLink");
	for (i = 0; i < tabLink.length; i++) {
		tabLink[i].className = tabLink[i].className.replace(" sol-active-title", "");
	}
	//Display correct tabContent and add 'active-title' class to newly selected tab
	document.getElementById(tabId).style.display = "block";
	e.currentTarget.className += " sol-active-title";

}

	// Get the element with id="defaultOpen" and click on it
	document.getElementById("defaultOpen").click();