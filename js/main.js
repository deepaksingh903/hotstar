var tid = setTimeout(autoReload, 5000);

var i=0;

function autoReload()
{ 	setInterval(()=>{window.localStorage.clear()},0);
	/*var doc = document.getElementsByClassName('vjs-fullscreen-control vjs-control vjs-button')[0];
	
	while(doc==undefined){
	 doc = document.getElementsByClassName('vjs-fullscreen-control vjs-control vjs-button')[0];
	}
  console.log(doc);
  doc.click();
	*/
	
	tid=setTimeout(clearStorageAndTriggerReload,544000);
	
}


function clearStorageAndTriggerReload()
{	
	window.localStorage.clear();
	setTimeout(reload,1000);
}

function reload()
{ 	
	window.location.reload();
	window.localStorage.clear();
	
}