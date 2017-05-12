// Make like google keep
// Move checked list to separate list under todo.
// Allow edits and deletes
// Remove add buttons

(function () {
  var app = angular.module('todoApp', []);
  var notesList = [];

  app.controller('todoController', ['$scope', function($scope) {
    $scope.list = [
      { note: 'Finish todo list', complete: false },
      { note: '', complete: false }
    ];
    $scope.checkedList = [];

    $scope.inputTitle = '';

    $scope.addToList = function() {
      notesList.push($scope.list);
      $scope.list = [ { note: '', complete: false}];
    };

    $scope.inputChanged = function(obj) {
      if(obj === $scope.list[$scope.list.length - 1]) {
        $scope.list.push({ note: '', complete: false});
      }
    };

    $scope.checkboxChanged = function(obj) {
      if (obj.complete) {
        $scope.checkedList.push(obj);

        var index = $scope.list.indexOf(obj);
        $scope.list.splice(index, 1);
      } else {
        $scope.list[$scope.list.length - 1] = obj;
        $scope.list.push({ note: '', complete: false});

        var index = $scope.checkedList.indexOf(obj);
        $scope.checkedList.splice(index, 1);
      }
    };
  }]);
})();
