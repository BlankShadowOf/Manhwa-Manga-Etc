$(document).ready(function() {
	/* MENU RESPONSIBE */
	$('.barra-menu-span').on('click',function(){
		$('.barra-menu-ul').slideToggle();
	});
	
	/**
	 * @author: Alexis López Espinoza
	 */

	var search = document.getElementById("buscar"),
		food = document.getElementsByClassName("p-manhwa-manga"),
		forEach = Array.prototype.forEach;

	search.addEventListener("keyup", function(e){
		var choice = this.value;
	  
		forEach.call(food, function(f){
			if (f.innerHTML.toLowerCase().search(choice.toLowerCase()) == -1)
				f.parentNode.style.display = "none";        
			else
				f.parentNode.style.display = "block";        
		});
	}, false);
	
});