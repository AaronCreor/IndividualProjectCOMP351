function addQ(){
	let tempQ = { quote: document.getElementById('quote').value
	};
	let stringQ = JSON.stringify(tempQ);
	var q_key = getKey();
	localStorage.setItem(q_key, stringQ);
	document.getElementById('addQuote').disabled = true;
	document.getElementById('quote').disabled = true;
	alert("Saved!");

	
};
function getKey(){
	return localStorage.length;
};
function loadQ(){
		loadQuote.disabled = true;
		var element = document.getElementById("div1");
		for(x = 0; x < getKey(); x++){
			if(localStorage.getItem(x) == null){
				continue;
			}				
			var hr = document.createElement("HR");
			var para = document.createElement("p");
			var node = document.createElement("textarea");
			var qCount = document.createTextNode("test");
			var retrievedObject = localStorage.getItem(x);
			console.log('retrievedObject: ', JSON.parse(retrievedObject));
			var tempQ = JSON.parse(retrievedObject);
			var keynum = document.createTextNode("temp");
			keynum.nodeValue = ("ID: " + x);
			node.value = tempQ.quote;
			node.rows = ("5");
			node.cols = ("40");
			node.setAttribute("text", "text");
			node.disabled = true;
			para.appendChild(node);
			element.appendChild(para);
			para.appendChild(keynum);
			
			
		};
	};
	


function loadeditQ(){
	var element = document.getElementById("div2");	
	var hr = document.createElement("HR");
	var para = document.createElement("p");
	var node = document.createElement("textarea");
	var qCount = document.createTextNode("test");
	var x = document.getElementById('loadeditquotefield').value;
	var retrievedObject = localStorage.getItem(x);
	console.log('retrievedObject: ', JSON.parse(retrievedObject));
	var tempQ = JSON.parse(retrievedObject);
	var keynum = document.createTextNode("temp");
	keynum.nodeValue = ("ID: " + x);
	node.value = tempQ.quote;
	document.getElementById('editquotefield').value = tempQ.quote;
	document.getElementById('loadeditQuote').disabled = true;
	document.getElementById('loadeditquotefield').disabled = true;
	document.getElementById('editquotefield').disabled = false;
	document.getElementById('saveeditQuote').disabled = false;
	document.getElementById('deleteQuote').disabled = false;
};
	
function saveeditQuote(){
	document.getElementById('editquotefield').disabled = true;
	var x = document.getElementById('loadeditquotefield').value
	let tempQ = { quote: document.getElementById('editquotefield').value
	};
	let stringQ = JSON.stringify(tempQ);
	localStorage.setItem(x, stringQ);
};

function deleteQuote(){
	document.getElementById('editquotefield').disabled = true;
	var y = document.getElementById('loadeditquotefield').value
	if(y > getKey() || y < 0){
		alert("ERROR");
		return;
	}
	localStorage.removeItem(y);
	location.reload();
};