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
		time: 0,
		modal_bg : function(){
			var those = $(".modal-back");
			return those;
		},
		open : function(){
			var md = this.modal_bg();
			md.fadeIn(this.time);
		},	
		close : function(){
			var md = this.modal_bg();
			md.fadeOut(this.time);
		},
		setTimeout: function(time){
			this.time = time;
		}
	}
	sandbox["modalBack"] = _modal_controller;
});
modules["modal-module"] = (function(){
	var api = {
		modalBackOpen: function(){
			window.sandbox.modalBack.open();
		},
		modalBackClose: function(){
			window.sandbox.modalBack.close();
		},
		setModalBackTimeout: function(time){
			var time = time || 0;
			window.sandbox.modalBack.setTimeout(time);
		},
		open: function(id){
			var modal = $("#" + id);
			modal.show();
			this.modalBackOpen();
			this.addCloseButtonAction(modal);
		},
		close: function(id){
			var modal = $("#" + id);
			modal.fadeOut(300);
			this.setModalBackTimeout(500);
			this.modalBackClose();
		}, 
		addCloseButtonAction: function(modal){
			var self = this;
			modal.find(".close-button").bind("click", function(){
				self.close(modal.attr("id"));
			});
		}
	}
	var _contstructor_ = (function(){
		var open = $(".modal-open");
		open.bind("click", function(){
			var dataId = $(this).attr("data-modal");
			if(dataId){
				api.open(dataId);
			}else{
				console.log("Cannot find data-modal attribute on modal caller");
			}
		});
	});
	_contstructor_(); 
});