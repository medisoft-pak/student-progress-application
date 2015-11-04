/**
 * Created by kamran on 10/20/2015.
 */
angular.module('starter')

  .controller('logInController', function ($scope, $rootScope, $firebaseObject, $state, $firebaseArray, dataService) {

    $scope.loginData = {};

    $scope.doLogin = function () {

      var username = $scope.loginData.username;
      var checkpwd = $scope.loginData.pwd;
      var ref = new Firebase("https://student-progress.firebaseio.com/users");

      // $rootScope.userNode = $firebaseArray(ref.child("/" + $scope.loginData.username));

      /*/posts/$post_id/...
       /my_posts/$user_id/$post_id/true

       var fb = new Firebase('https://INSTANCE.firebaseio.com');
       fb.child('/my_posts/'+userId).on('child_added', function(indexSnap) {
       fb.child('posts/'+indexSnap.name()).once('value', function(dataSnap) {
       console.log('fetched post', indexSnap.name(), dataSnap.val());
       });
       });
       */


      $scope.loginData = $firebaseObject(ref.orderByChild("username"));


      ref.orderByChild('username').equalTo(username).on('child_added', function (snapshot) {
        //GET DATA
        var data = snapshot.val();
        var uname = data.username;
        var pwd = data.password;
        var grp = data.group;

        console.log(uname, checkpwd, pwd);

        if (checkpwd == pwd) {

          if (grp == "Administrator") {
            //redirect to admin page
            console.log("valid username or password");

            $state.go('dashboard');
          }

          else if (grp == "Admin School") {
            $state.go('dashboard');

          }

          else if (grp == "Teacher") {
            //redirect to
          }
          else if (grp == "Student") {
            //redirect to
          }

        }

        else {
          console.log("invalid username or password");

        }

      });
      /*   this.addNewUsers = function (newUser) {
       var userNode = ref.child(newUser.username).set(newUser);
       console.log("save");
       */
    };


  });
