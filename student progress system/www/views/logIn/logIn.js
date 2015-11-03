/**
 * Created by kamran on 10/20/2015.
 */
angular.module('starter')

  .controller('logInController', function ($scope, $rootScope, $firebaseArray, dataService) {

    $scope.loginData = {};

    $scope.doLogin = function () {

      var ref = new Firebase("https://student-progress.firebaseio.com/users");

      $rootScope.userNode = $firebaseArray(ref.child("/" + $scope.loginData.username));

    };


  });
