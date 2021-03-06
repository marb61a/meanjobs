'use strict';

angular.module('users').controller('AuthenticationController', [
  '$scope', '$http', '$location', 'Authentication', function($scope, $http, $location, Authentication){
    $scope.authentication = Authentication;
    
    // If the user has signed in redirect redirect home
    if ($scope.authentication.user) $location.path('/');
    
    $scope.signup = function(){
      $http.post('/auth/signup', $scope.credentials).success(
        function(response){
          // If successful assign the response to the global user model
          $scope.authentication.user = response;          
          // Redirect to the index page
          $location.path('/');
          }).error(function(response) {
          $scope.error = response.message;
          });
    };
    
    $scope.signin = function(){
      $http.post('/auth/signin', $scope.credentials).success(
        function(response){
          // If successful assign the response to the global user model
          $scope.authentication.user = response;          
          // Redirect to the index page
          $location.path('/');
          }).error(function(response) {
          $scope.error = response.message;
      });
    };
  } 
]);