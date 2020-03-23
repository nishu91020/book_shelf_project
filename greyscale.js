window.onload=function()
{
	var can=document.getElementById("grey");
	var ctx = can.getContext("2d");
	var button=document.getElementById("change");
	var img=document.getElementById("img");

	ctx.drawImage(img,10,10);
	button.onclick=function()
	{
		for(var pixel of can.values())
		{
			console.log(pixel)
		}
		
	}

}