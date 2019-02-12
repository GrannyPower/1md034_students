function menuItem(name, kCal, lactose, gluten, img) {
    this.name = name; 
    this.kCal = kCal;
    this.lactose = lactose;
    this.gluten = gluten;
    this.img= img;
    this.showName = function() {
        var node = document.createElement("P");
  	    var value = document.createTextNode(this.name);
        node.appendChild(value);
        return node;
    };
    this.showIMG = function() {
  	    var node = document.createElement("IMG");
  	    node.setAttribute("src", this.img);
  	    node.setAttribute("width", "300");
		    return node;
	  };
    this.showInfo = function() {
        var node = document.createElement("UL");
        var listItem = document.createElement("LI");
 	 			var listValue = document.createTextNode(this.kCal);
 		 		listItem.appendChild(listValue);
        node.appendChild(listItem);

        if (this.lactose == true) {
            listItem = document.createElement("LI");
  	        listValue = document.createTextNode("Contains ");
            listItem.appendChild(listValue);
            
            var listSpan = document.createElement("SPAN");
            listSpan.setAttribute("id", "allergies");
 	 			    var spanValue = document.createTextNode("lactose");
            listSpan.appendChild(spanValue);
 		 		    listItem.appendChild(listSpan);
            node.appendChild(listItem);
        }
        if (this.gluten == true) {
            listItem = document.createElement("LI");
  	        listValue = document.createTextNode("Contains ");
            listItem.appendChild(listValue);
            
            var listSpan = document.createElement("SPAN");
            listSpan.setAttribute("id", "allergies");
 	 			    var spanValue = document.createTextNode("gluten");
            listSpan.appendChild(spanValue);
 		 		    listItem.appendChild(listSpan);
            node.appendChild(listItem);
        }
        return node;
    }
    this.checkbox = function() {
        var node = document.createElement("P");
        var box = document.createElement("INPUT");
        box.setAttribute("type", "checkbox");
        box.setAttribute("id", this.name);
        box.setAttribute("name", "burgerOrders");
        var text = document.createTextNode("Add to order:");
        node.appendChild(text);
        node.appendChild(box);
        return node;
    }
    this.display = function() {
  	    var node = document.createElement("DIV");
		    node.appendChild(this.showName());
        node.appendChild(this.showIMG());
        node.appendChild(this.showInfo());
        node.appendChild(this.checkbox());
        return node;
	  };
}

function addBurgerToArray() {
    var burgerArray = [];
    for (i=0; i<food.length; i++) {
        var burger = new menuItem(food[i].name, food[i].kCal, food[i].lactose, food[i].gluten, food[i].img);
        burgerArray[i] = burger;
    }
    return burgerArray;
}
function showBurgers() {
    var burgerArray = addBurgerToArray();
    for (i=0; i<burgerArray.length; i++) {
        document.getElementById("burgersGridJS").appendChild(burgerArray[i].display());
    }
}
showBurgers();



function customerInfo() {
    var name   = document.getElementById("name").value;
    var email  = document.getElementById("email").value;
    var payment = document.getElementById("payment").value;
    
    var radios = document.getElementsByName("sex");
    var sex;
    for (i=0; i<radios.length; i++) {
        if (radios[i].checked) {
            sex = radios[i].value;
            break;
        }
    }
    
    var burgerOrdersArray = document.getElementsByName("burgerOrders");
    var burgersOrderd = [];
    for (i=0; i<burgerOrdersArray.length; i++) {
        if (burgerOrdersArray[i].checked) {
            burgersOrderd.push(burgerOrdersArray[i].id);
        }
    }
    return new Array(name,email,payment,sex,burgersOrderd);
}


function showOrderJS() {

    // clear info
    document.getElementById("orderConf").innerHTML = "";
    
    var node = document.getElementById("orderConf");

    // Headline 1
    var subNode = document.createElement("H1");
    var value = document.createTextNode("Order Confirmation");
    subNode.appendChild(value);
    node.appendChild(subNode);
    
    // Headline 2
    subNode = document.createElement("H3");
    value = document.createTextNode("Customer details");
    subNode.appendChild(value);
    node.appendChild(subNode);
    
    var array = customerInfo();

    subNode = document.createElement("DIV");
    value = document.createTextNode("Name: "+array[0]);
    subNode.appendChild(value);
    node.appendChild(subNode);

    subNode = document.createElement("DIV");
    value = document.createTextNode("Email: "+array[1]);
    subNode.appendChild(value);
    node.appendChild(subNode);

    subNode = document.createElement("DIV");
    value = document.createTextNode("Deliver to: "+ "TODO");
    subNode.appendChild(value);
    node.appendChild(subNode);

    subNode = document.createElement("DIV");
    value = document.createTextNode("Payment: "+array[2]);
    subNode.appendChild(value);
    node.appendChild(subNode);

    subNode = document.createElement("DIV");
    value = document.createTextNode("Gender: "+array[3]);
    subNode.appendChild(value);
    node.appendChild(subNode);

    // Headline 3
    subNode = document.createElement("H3");
    value = document.createTextNode("Order summary");
    subNode.appendChild(value);
    node.appendChild(subNode);

    subNode = document.createElement("DIV");
    for(i=0; i<array[4].length; i++) {
        subNode = document.createElement("LI");
 	 			value = document.createTextNode(array[4][i]);
 		 		subNode.appendChild(value);
        node.appendChild(subNode);
    }
}
