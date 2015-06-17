$(document).ready(function () {
    "use strict";

    $("#menuButton").hover(function () {
        $('#menuButton').toggleClass("spin");
        $("#dropdownDiv").addClass("fallin");
    });
    $(".main").hover(function () {
        $("#dropdownDiv").removeClass("fallin");
    });
});