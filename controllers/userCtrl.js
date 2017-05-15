//login

angular.module('assessment').controller('loginCtrl', loginCtrl);

loginCtrl.inject = ['$location', '$rootScope','$http','$window'];

console.log('user login ctrl');
function loginCtrl($location, $rootScope,$http,$window) {
    var vm = this;
    vm.text = " this is login controller";
    vm.submit = function() {
        $http({
            method: 'POST',
            url: ,
            data: {"username" : vm.username,"password" : vm.password}
        }).then(function success(response) {
        	$rootScope.loggedUser = vm.username;
        	 $window.localStorage['Token'] = response.data.Token;
        	$location.path('/main');
        },function error (response) {
        	vm.error = response.data.error;
        });
    };
}
