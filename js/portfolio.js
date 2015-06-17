$(function () {
    "use strict";
	var python = "#PythonButton", vb = "#VBButton", cpp = "#CppButton", isaac = "#IsaacButton";
	
	$("#PythonButton").append('<div class=portBoxAfter></div>');
    $('#contentBox').load('python_schedule.html');
    $('#selectionBox').load('python_map.html');
    $('#previewBox').addClass("fallin");

    $("#menuButton").hover(function () {
        $('#menuButton').toggleClass("spin");
        $("#dropdownDiv").addClass("dropFallin");
    });
    $(".main").hover(function () {
        $("#dropdownDiv").removeClass("dropFallin");
    });
});
