/**
 * Created by kamran on 10/20/2015.
 */
angular.module('starter')

/// Scound Control
  .controller('StudentRegistrationController', function ($scope, dataService) {


    $scope.newStudent = {};

    $scope.addNewStudent = function (newStudent) {
      dataService.addNewStudent(newStudent);

    }

    $scope.getStudentId = function () {

      $scope.newStudent.studentid = dataService.getStudentId();

      console.log("Recived:", $scope.newStudent.studentId);


    }

  });


