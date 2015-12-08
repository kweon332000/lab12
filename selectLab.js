"use strict";
var coursename;
var count=0;

document.observe("dom:loaded", function() {
	/* Make necessary elements Dragabble / Droppables (Hint: use $$ function to get all images).
	 * All Droppables should call 'labSelect' function on 'onDrop' event. (Hint: set revert option appropriately!)
	 * 필요한 모든 element들을 Dragabble 혹은 Droppables로 만드시오 (힌트 $$ 함수를 사용하여 모든 image들을 찾으시오).
	 * 모든 Droppables는 'onDrop' 이벤트 발생시 'labSelect' function을 부르도록 작성 하시오. (힌트: revert옵션을 적절히 지정하시오!)
	 */


 	var imgs=$$("div#labs > img");
	for(var i=0; i<imgs.length;i++){
 		new Draggable(imgs[i], {revert: true});
 	}

 	Droppables.add("selectpad", {onDrop: labSelect});
 	Droppables.add("labs", {onDrop: labSelect});
 	

	
});

function labSelect(drag, drop, event) {
	/* Complete this event-handler function 
	 * 이 event-handler function을 작성하시오.
	 */
	
	if(drag.parentNode == drop){
		return;
	}else if(count < 3 && drop == $("selectpad")){

		drag.parentNode.removeChild(drag);
		drop.appendChild(drag);

		coursename=drag.alt;
		var ol=document.getElementById("selection");
		ol.innerHTML += "<li id=\""+coursename+"\">"+coursename+"</li>";

		var tmp=document.getElementById(coursename);
		tmp.pulsate({
			delay : 0.5,
			duration : 1.0
		});

		count += 1;
	}else if(drop == $("labs")){
		drag.parentNode.removeChild(drag);
		drop.appendChild(drag);
		coursename=drag.alt;
		var li=document.getElementById(coursename);
		li.outerHTML = " ";
		
		count -= 1;
	}
	
}

