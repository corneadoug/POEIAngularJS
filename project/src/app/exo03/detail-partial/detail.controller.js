(function() {
	'use strict';

	function DetailCtrl() {
		var vm = this;
		vm.visible = true;	
		vm.showHide = showHide;

		function showHide(){
			if(vm.visible === true){
				vm.visible = false;
				console.log("a");
			}
			else{
				vm.visible = true;
				console.log("b");
			}	
		}
	}

	DetailCtrl.$inject = [];

	angular.module('daproject')
		.controller('DetailCtrl', DetailCtrl);



})();
