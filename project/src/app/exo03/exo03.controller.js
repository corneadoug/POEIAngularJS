(function() {
  'use strict';

  function Exo03Ctrl() {
    var vm = this;
    vm.msg = 'exo 03!';
	vm.films = [
		{name: 'Fast and Furious', image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/AkSMd8AXSpA1L1SbBPc2AfVJfmE.jpg', year: 2001},
		{name: '2 Fast 2 Furious', image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/u1Snfl40rXmAJNiMyZUczUyFVuf.jpg', year: 2003},
		{name: 'Fast & Furious: Tokyo Drift', image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/4ceW7kWPAc2uFG5WzYDbP8Od3gw.jpg', year: 2006}
	];
	vm.select = select;

	function select(film){
		vm.selected = film;
		console.log(film.name);
	}

  }




  Exo03Ctrl.$inject = [];

  angular.module('daproject')
    .controller('Exo03Ctrl', Exo03Ctrl);



})();
