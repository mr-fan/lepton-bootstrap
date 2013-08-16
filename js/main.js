$(function() {

	/* for bootstrap scripts */	
	$(".alert").alert();
	$('a[rel=tooltip]').tooltip();
	$('.popOver').popover();
	$('#settingsTab a:first').tab('show');
	$('#settingsTab a').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
    });
    /*----------- BEGIN modal CODE -------------------------*/
	$('#helpModal').modal({
    show: false
    });
	$('#addonsModal').modal();
	/*----------- END modal CODE -------------------------*/
	
	
	/* correct menu handling top dropdownmenu */
	$("li.current").removeClass("current").addClass("active");
	
	/* hide "admintools" output in group_form */
	$("label[for='m_']").addClass("all-hidden");
	
	/* correct hard coded CSS classes and id's in pages overview */
	$("div#search_page_form input[type='text']").addClass("no-margin");	
	$("div#search_page_form input.search").addClass("btn btn-info");
	$("div.content-box div.container").removeClass("container");	
	
});