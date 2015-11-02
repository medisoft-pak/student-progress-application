/**
 * Created by kamran on 10/20/2015.
 */
angular.module('starter')

  .controller('logInController', function ($scope, dataService) {

    $scope.loginData = {};

    $scope.doLogin = function(loginData){
      dataService.doLogin(loginData);
    }


  });
