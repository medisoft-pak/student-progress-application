/**
 * Created by kamran on 10/26/2015.
 */
angular.module('starter')

  .service("dataService", function ($firebaseArray, $firebaseObject) {


    var ref = new Firebase("https://student-progress.firebaseio.com");

    //alanRef = ref.child("users").child("alanisawesome");
    //this.schoolName="my school";


    this.doLogin = function(loginData){

      var messagesRef = new Firebase("https://student-progress.firebaseio.com/users");
     // var messagesRef = new Firebase("https://student-progress.firebaseio.com/users/user 1");
      messagesRef.once("value", function(allMessagesSnapshot) {
        allMessagesSnapshot.forEach(function(messageSnapshot) {
          // Will be called with a messageSnapshot for each child under the /messages/ node


          var key = messageSnapshot.key();  // e.g. "-JqpIO567aKezufthrn8"
          var pwd = messageSnapshot.child()("password").val();  // e.g. "barney"
          var uname = messageSnapshot.child("username").val();   // e.g. "Welcome to Bedrock City!"
          //console.log("User Name is : " + uname + "Password is :" + pwd );
          console.log(pwd );

        });


      });


      /*tempref.once("value", function(snapshot) {
        var data = snapshot.val();
        // var data = $firebaseArray(tempref);


        console.log(data.username);
      });*/
/*S
      var currentUserNode = $firebaseArray(ref.child("users").child("abc"));

      console.log(currentUserNode);
*/


    };


    this.addNewSchool = function (newSchool) {

      var schoolNode = $firebaseArray(ref.child(newSchool.schoolName));

      schoolNode.$add(newSchool);
    };


    this.addNewStudent = function (newStudent) {
      var studentNode = $firebaseArray(ref.child(this.schoolName + "/studentRegestration/" + newStudent.studentid));
      studentNode.$add(newStudent);
    };

    this.addNewUsers = function (newUser) {
      var userNode = $firebaseArray(ref.child("users/" + newUser.username));
      userNode.$add(newUser);
    };

  });
