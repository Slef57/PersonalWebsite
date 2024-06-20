const imgs = ["images/drama/DramaByzantineWall.jpg","images/drama/agiaNew.jpeg","images/drama/agiaNewHydrama.jpeg"
,"images/drama/plateiaNew.jpeg","images/drama/plateiaNew2.jpeg","images/drama/oneiroypoli.jpg"
,"images/drama/oneiroypoli2.jpg","images/drama/agiaOld.jpg","images/drama/agiaOldHorse.jpg","images/drama/agiaOldRouxa.jpg","images/drama/plateiaOld.jpg"];
var i = 0;	
							
function prev() {				
	i--;
	if (i == -1){
		i = imgs.length-1;
	}				
	document.getElementById("eikona").src = imgs[i];	
}	
					
function next() {				
	i++;
	if (i == imgs.length){
		i = 0;
	}				
	document.getElementById("eikona").src = imgs[i];	
}