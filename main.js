$(document).ready(function() {

    // select all question divs
    $(".question").click(function() {

        // select next content div
        var content = $(this).next(".content");

        // toggle display
        content.toggle();

        // optional: change icon or text of question div

    });

});
