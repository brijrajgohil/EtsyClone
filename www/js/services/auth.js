'use strict';

app.factory('Auth', function(FURL, $firebaseAuth) {
    var ref = new Firebase(FURL);
    var auth = $firebaseAuth(ref);

    var Auth = {

        user: {},

        login: function(user) {
            console.log("We got login function");
            return auth.$authWithPassword({
                email: user.email,
                password: user.password
            });
        },

        register: function(user) {
            console.log("Register function");
            return auth.$createUser({
                email: user.email,
                password: user.password
            }).then(function() {
                console.log("user is saving");
                return Auth.login(user);
            });
        }
    }
    return Auth;
});
