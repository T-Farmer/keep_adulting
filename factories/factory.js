angular.module('assessment')
    .factory('Notes', Notes);

Notes.$inject = ['$resource', '$window'];

function Notes($resource, $window) {
    return $resource('', {
        id: 'id',
        type: 'type',
        lbl: 'lbl'
    }, {

        post: {
            method: 'POST',
            headers: {
                'Authorization': 'Token ' + $window.localStorage['Token']
            }
        },
        get: {
            method: 'GET',
            isArray: true,
            headers: { 'Authorization': 'Token ' + $window.localStorage['Token'] }
        },
        remove:{
        	method: 'DELETE',
        	headers: { 'Authorization': 'Token ' + $window.localStorage['Token'] }
        }

    })
}
