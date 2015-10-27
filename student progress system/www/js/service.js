/**
 * Created by kamran on 10/26/2015.
 */
angular.module('starter')

  .service("dataService", function ($firebaseArray) {


    var ref = new Firebase("https://student-progress.firebaseio.com/studentRegestration");


    //alanRef = ref.child("users").child("alanisawesome");

    this.addNewStudent = function (newStudent) {

      var data = $firebaseArray(ref.child(newStudent.studentid));

      data.$add(newStudent);


      // var usersRef = ref.child("StudentRegistration")

      /*  var obj=

       {
       studentid: $scope.studentid,
       grno: $scope.grno,
       studentname: $scope.studentname,
       fathername: $scope.fathername,
       address: $scope.address

       };*/

      /*  var newusersRef =ref.push({

       "studentid": $scope.studentid,
       "grno": $scope.grno,
       "studentname": $scope.studentname,
       "fathername": $scope.fathername,
       "address": $scope.address

       });*/
      // newusersRef.set(obj);

      /* if(newusersRef) {
       alert('saved successfully');
       } else {
       alert('something went wrong');
       }*/
    }

  });
