$(document).ready(function () {
    "use strict";

    $("#menuButton").hover(function () {
        $('#menuButton').toggleClass("spin");
        $("#dropdownDiv").addClass("dropFallin");
    });
    $(".main").hover(function () {
        $("#dropdownDiv").removeClass("dropFallin");
    });
});