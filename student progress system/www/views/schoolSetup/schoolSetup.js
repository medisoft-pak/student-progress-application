/**
 * Created by kamran on 10/20/2015.
 */
angular.module('starter')

  .controller('schoolSetupController', function ($scope, dataService) {

    $scope.newSchool = {};

    $scope.addNewSchool = function (newSchool) {
      dataService.addNewSchool(newSchool);
    };
  });
