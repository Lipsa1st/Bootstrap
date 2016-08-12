/*

My Custom JS
============

Author:  Brad Hussey
Updated: August 2013
Notes:	 Hand coded for Udemy.com

*/

$(document).ready(function()
{
    $('#alertMe').click(function()
        {
            $('#successAlert').show();
            console.log("clicked");
        });
});


$(function()
{
    $("[data-hide]").on("click",function()
    {
        $(this).closest("."+$(this).attr("data-hide")).hide();
    });
});
