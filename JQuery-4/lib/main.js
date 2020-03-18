$(document).ready(function() {
    var preX; 
    var move_layer23 = 0; 
    var move_layer4 = 0; 
    $(".layer").mousemove(function() {
        $("#layer-2, #layer-3").css("left", move_layer23);
        $("#layer-4").css("left", move_layer4);
        //adjust move distance
        ((preX-1) > event.clientX) ? (move_layer23 -=1, move_layer4 -=2) : (move_layer23 +=1, move_layer4 +=2);
        preX = event.clientX;
    });
    
});
