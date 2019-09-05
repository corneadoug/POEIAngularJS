(function() {
    'use strict';

    function Exo04Ctrl($location){
        var vm = this;
        vm.text = 'Text';
        vm.afficherText = afficherText;
        
        function afficherText(){
            console.log(vm.text)
        }
                
    }
    
     Exo04Ctrl.$inject = [];
     setting.service.settingService.$inject = [];

    angular.module('daproject')
        .controller('Exo04Ctrl', Exo04Ctrl);
})();