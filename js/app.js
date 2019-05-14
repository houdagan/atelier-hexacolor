(function(){


	var hexcolor =document.getElementById('hex-value');
	var btn=document.getElementById('btn');
	btn.addEventListener('click',colorH);
	function colorH(){
		var hexcolors =[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
		var hexa='#';
		 for(var i=0;i<6;i++){
		 	var random= Math.floor(Math.random() * hexcolors.length);
			hexa +=hexcolors[random];

	 }
	 document.body.style.backgroundColor=hexa;
	 hexcolor.textContent=hexa;
	 var vid = document.getElementById("audioPlayer"); 
	  vid.play();
	  var  myVar;
	  myVar = setInterval(time, 1000);
	}
	function time(){
		colorH();
	}
	
	})();



