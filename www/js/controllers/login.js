'use strict';

app.controller('LoginCtrl', function($scope, $state, $ionicPopup, Auth) {
    $scope.emailLogin = function() {
            $scope.user = {};

            var myPopup = $ionicPopup.show({
                templateUrl: 'templates/partials/login.html',
                title: 'Sign In',
                scope: $scope,
                buttons: [
                  {
                      text: '<b>Signin</b>',
                      type: 'button-energized',
                      onTap: function(user) {
                        user = $scope.user;
                        Auth.login(user).then(function() {
                            $state.go('tab.dash');
                        });
                        console.log(user);
                      }
                  },
                  {
                    text: '<b>Register</b>',
                    type: 'button-calm',
                    onTap: function(user) {
                      user = $scope.user;
                      console.log(user);
                      Auth.register(user).then(function() {
                          console.log("User was registered successfully");
                          $state.go('tab.dash');
                      });
                    }
                  }
                ]
            });
        };
});
