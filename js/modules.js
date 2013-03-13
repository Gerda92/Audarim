var modules = {}
var sandbox = {}
/**
* Module initializing
*/
modules.collect = (function(){
	var Idata = [];
	var Iheap = [];
	Idata.push("collect");
	for(var i in modules){
		var st = false;
		for(var j = 0; j < Idata.length; j++)
			if(Idata[j] == i){
				st = true;
				break;
			}
		if(!st)
			Iheap.push(modules[i]);
	}
	for(var i = 0; i < Iheap.length; i++){
		Iheap[i].call();
		console.log("Start work --> function " + (i+1));
	}
});

/**
* Starting modules
*/
modules["typehead-module"] = (function(){

});
modules["modal-bg-module"] = (function(){
	var self = window;
	var sandbox = self.sandbox;
	var _modal_controller = {
		modal_bg : function(){
			var those = $(".modal-back");
			return those;
		},
		open : function(){
			var md = this.modal_bg();
			md.show();
		},	
		close : function(){
			var md = this.modal_bg();
			md.hide();
		}
	}
	sandbox["modalBack"] = _modal_controller;
});