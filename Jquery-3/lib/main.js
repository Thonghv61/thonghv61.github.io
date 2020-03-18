//function create leaves when open website
$(document).ready(function () {
	var sumLeaf = 5;
	for( var i=0; i<=50; i++){
		//random leaves (1 -> 5)
		var random = 1 + Math.floor(Math.random() * sumLeaf); 
		var leaf = 'leaves' + random;
		var myImage = $('<img>');
		myImage.attr({class: 'leaves', id: 'L' + i, src: 'image/' +leaf +'.png'});
		$('#container').append(myImage);
		leavesFall('#L'+i);
	}
});

//function set effects for leaves
function leavesFall(leaves) {
	TweenMax.set($(leaves), {attr:{class:'leaves'},x:50,y:-10});
	TweenMax.to($(leaves), 6* Math.random() + 6,{y:900,ease:Linear.easeNone,repeat:-1,delay:-15});
	TweenMax.to($(leaves), 5*Math.random() + 5,{x:'+=50',rotationZ:180*Math.random()});
	TweenMax.to($(leaves), 4*Math.random() + 4,{rotationX:360*Math.random(),rotationY:360*Math.random()});
}





