/*
On Has To Run On Something That Exists FIRST Before It Can Run On The Future Elements

We call it on 'ul' because that'll exist when the page loads, then call it on 'li'
as they come in.
*/
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

/*Click On X To Delete To-Do*/
$("ul").on("click", "span",function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

/*Remember, when using the OBJECT notation for adding properties, use Camel Case*/
$("input[type='text'").keypress(function(event){
    if(event.which === 13) {
        var toDoText = $(this).val();
        $(this).val(""); // Clear Out The Text
        // Create A New 'li' And Add It To The 'ul'
        
        /*
        We See A Problem: If We Use The 'click Method To Add Event Listeners We
        Don't Get Them Here. Why?
        
        Because 'click' only add listeners to existing elements.
        This is why 'on' is so good - it lets us add event listeners to FUTURE elements.
        
        */
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + toDoText + "</li>");
    }
});

$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
});
