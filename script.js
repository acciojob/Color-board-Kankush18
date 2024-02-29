//your JS code here. If required.
let container=document.querySelector('.container');
function createBoxes(){
	for(let i=0;i<800;i++){
		let box=document.createElement('div');
		box.classList.add('square');
		container.appendChild(box);
		box.addEventListener('mouseover',()=>{
			let randomColor=getRandomColor();
			box.style.backgroundColor=randomColor;
			setTimeout(()=>{
				box.style.backgroundColor='#1C1B1C';
			},1000);
		})
	}
	
}
function getRandomColor(){
	 var chars = "0123456789abcdef";
            var colorLength = 6;
            var color = "";
            for (var i = 0; i < colorLength; i++){
                var randomColor = Math.floor(Math.random() * chars.length);
                color += chars.substring(randomColor,randomColor+1);
            }
            return "#"+color;
        
	
}
createBoxes();
