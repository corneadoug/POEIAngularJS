(function() {
    'use strict';

    function Exo03Ctrl() {
        var vm = this;
        vm.films = [
            {name: 'Fast and Furious', img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/AkSMd8AXSpA1L1SbBPc2AfVJfmE.jpg', year: 2001, selected: false},
            {name: '2 Fast 2 Furious', img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/u1Snfl40rXmAJNiMyZUczUyFVuf.jpg', year: 2003, selected: false},
            {name: 'Fast & Furious: Tokyo Drift', img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/4ceW7kWPAc2uFG5WzYDbP8Od3gw.jpg', year: 2006, selected: false}
        ];
        vm.clickin = clickin;
        vm.saveIndex = -1;
            function clickin(index){
            
            vm.saveIndex = index;
        }
    }

    Exo03Ctrl.$inject = [];

    angular.module('daproject')
        .controller('Exo03Ctrl', Exo03Ctrl);

})();