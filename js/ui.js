$(".mdc-tab").click(function() {

	console.log("hi");
	$(this).parent().find('a.mdc-tab').removeClass("mdc-tab--active");
	$(this).addClass("mdc-tab--active");

});

 