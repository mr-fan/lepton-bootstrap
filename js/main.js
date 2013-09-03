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
	$("select.init_page_select").addClass("form-control")
	
	/* hide "admintools" output in group_form */
	$("label[for='m_']").addClass("all-hidden");
	
	/* replace button class with bootstrap classes */
	$("a.button").removeClass("button").addClass("btn btn-primary");

	/* add to submit and cancel inputs with bootstrap button classes */
	$("input[type='submit']").addClass("btn btn-success");
	$("input[type='reset']").addClass("btn btn-danger");
	$("input[type='cancel']").addClass("btn btn-danger");
	$("input.reset[type='button']").addClass("btn btn-danger");
	$("input.cancel[type='button']").addClass("btn btn-danger");
	$("input[name='cancel']").removeClass("btn btn-success").addClass("btn btn-danger");
	
	/* correct hard coded CSS classes and id's in pages overview */
	$("div#search_page_form input[type='text']").addClass("no-margin");	
	$("div#search_page_form input.search").addClass("btn btn-info");
	$("div.content-box div.container").removeClass("container");	

var maxHeight = 0;

$("div.equal").each(function(){
   if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
});

$("div.equal").height(maxHeight);
	
});

