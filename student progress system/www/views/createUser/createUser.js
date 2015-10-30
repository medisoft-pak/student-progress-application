/**
 * Created by kamran on 10/20/2015.
 */
angular.module('starter')

/// Scound Control
  .controller('createUserController', function ($scope, dataService) {

    $scope.newUser = {};

    $scope.addNewUser = function (newUser) {
      dataService.addNewUsers(newUser);
    };
  });
