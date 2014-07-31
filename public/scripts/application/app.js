var crowdharmaApp = angular.module('Crowdharma', ['ngCookies', 'ngResource', 'ngRoute']);

function rootApplication(path) {
    return '/scripts/application/' + path;
}

crowdharmaApp.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/', {
      templateUrl: rootApplication('views/home/index.html'),
      controller: 'HomeCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

}]);