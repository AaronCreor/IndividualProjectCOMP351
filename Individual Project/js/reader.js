function getKey(){
	return localStorage.length;
};
function loadQuote(){
		loadQuote.disabled = true;
		var element = document.getElementById("div1");
		for(x = 0; x < getKey(); x++){
			
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
		};
	};