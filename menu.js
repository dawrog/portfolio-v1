$(document).ready(function(){

$("header nav li").mouseenter(function(){

$(this).effect("bounce", { times:2 }, 900);

});
    
$(".burger-nav").on("click", function(){
        
    $("header nav ul").toggleClass("open");
    
    
    });
    
});

