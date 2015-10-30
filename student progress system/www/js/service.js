/**
 * Created by kamran on 10/26/2015.
 */
angular.module('starter')

  .service("dataService", function ($firebaseArray, $firebaseObject) {


    var ref = new Firebase("https://student-progress.firebaseio.com");

    //alanRef = ref.child("users").child("alanisawesome");
    //this.schoolName="my school";


    this.addNewSchool = function (newSchool) {

      var schoolNode = $firebaseArray(ref.child(newSchool.schoolName));

      schoolNode.$add(newSchool);
    };


    this.addNewStudent = function (newStudent) {
      var studentNode = $firebaseArray(ref.child(this.schoolName + "/studentRegestration/" + newStudent.studentid));
      studentNode.$add(newStudent);
    };

    this.addNewUsers = function (newUser) {
      var userNode = $firebaseArray(ref.child(newUser.schoolName + "/users/" + newUser.group + "/" + newUser.username));
      userNode.$add(newUser);
    };

  });
