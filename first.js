window.onload = function()
{
	console.log("RUN");
	var button=document.getElementById("change");

	button.onclick = function ()
	{
			var col = document.body.style.backgroundColor;

			if(col === "green")
			{
				document.body.style.backgroundColor="grey";
			}
			else
			{
				document.body.style.backgroundColor="green";
			}
	}
}