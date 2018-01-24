(function() {
	'use strict';

	function DetailCtrl() {
		var vm = this;
		vm.visible=true;
		vm.showHide = showHide;

		function showHide(){
			if(vm.visible === true){
				vm.visible = false;}
			else{
				vm.visible=true;}
		}
	}

	DetailCtrl.$inject = [];

	angular.module('daproject')
		.controller('DetailCtrl', DetailCtrl);



})();
