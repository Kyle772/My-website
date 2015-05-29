$(function () {
    "use strict";
	var python = "#PythonButton", vb = "#VBButton", cpp = "#CppButton", isaac = "#IsaacButton";
	
	$("#PythonButton").append('<div class=portBoxAfter></div>');
    $('#contentBox').load('python_schedule.html');
    $('#selectionBox').load('python_map.html');
    $('#previewBox').addClass("fallin");

//PYTHON BUTTON
	$(python).click(function () {
        //Clear out green fade
		$("#PythonButton > div").remove();
		$("#VBButton > div").remove();
		$("#CppButton > div").remove();
		$("#IsaacButton > div").remove();
        //Add new green fade
        $(this).append('<div class=portBoxAfter></div>');
        
        //Remove animation so it can restart
        $('#previewBox').removeClass("fallin");

        //load new content
        $('#contentBox').html("");
        $('#selectionBox').html("");
        $('#contentBox').load('python_schedule.html');
        $('#selectionBox').load('python_map.html');
        
        //add animation
        $('#previewBox').addClass("fallin");
//VB BUTTON
	$(vb).click(function () {
		$("#PythonButton > div").remove();
		$("#VBButton > div").remove();
		$("#CppButton > div").remove();
		$("#IsaacButton > div").remove();
        $(this).append('<div class=portBoxAfter></div>');
        
        $('#previewBox').removeClass("fallin");
        
        $('#contentBox').html("");
        $('#selectionBox').html("");
        $('#contentBox').load('vb.html');
        
        $('#previewBox').addClass("fallin");
	});
    
//C++ BUTTON
	$(cpp).click(function () {
		$("#PythonButton > div").remove();
		$("#VBButton > div").remove();
		$("#CppButton > div").remove();
		$("#IsaacButton > div").remove();
        $(this).append('<div class=portBoxAfter></div>');

        $('#previewBox').removeClass("fallin");
        
        $('#contentBox').html("");
        $('#selectionBox').html("");
        $('#contentBox').load('cpp.html');
        
        $('#previewBox').addClass("fallin");
	});
    
//ISAAC PROJECT BUTTON
	$(isaac).click(function () {
		$("#PythonButton > div").remove();
		$("#VBButton > div").remove();
		$("#CppButton > div").remove();
		$("#IsaacButton > div").remove();
        $(this).append('<div class=portBoxAfter></div>');
        
        $('#previewBox').removeClass("fallin");
        
        $('#contentBox').html("");
        $('#selectionBox').html("");
        $('#contentBox').load('isaac.html');
        
        $('#previewBox').addClass("fallin");
	});
});