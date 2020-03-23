var Add = document.getElementById('btn_add-js')
var textInput = document.getElementById('name_product-js')
var btnRemove = document.getElementById('btn_remove-js')
Add.addEventListener('click',function(){
	if(textInput.value.length == ""){
		alert('Vùi lòng không để trống');
	}
	else if (textInput.value.length >= 20){
		alert('Vui lòng nhập nhỏ hơn 20 ký tự');
	}
	else{
		var Tagli = document.createElement("li");
		var nodeText = document.createTextNode(textInput.value);
		var btnDelete = document.createElement("input");
		btnDelete.className = "btn_remove btn_remove-js";
		// btnDelete.id ="btn_remove-js";
		btnDelete.type = "button";
		btnDelete.value = "X"
		Tagli.appendChild(nodeText);
		Tagli.appendChild(btnDelete);
		document.getElementsByTagName("input")[0].setAttribute("type", "button");
		console.log(Tagli);
		document.getElementById("list_product").appendChild(Tagli);		
	}
	textInput.type = "text";
	textInput.value = "";
	deleteData();

});
function deleteData() {
	var i;
	var del = document.getElementsByClassName("btn_remove-js");
	for(i=0; i<del.length; i++){
		del[i].onclick = function () {
			var div = this.parentElement
			div.remove();
		}
	}
}


