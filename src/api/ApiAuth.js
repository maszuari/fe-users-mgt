const ApiAuth = {
    isAuthenticated: false,
    signin(username, password) {
        ApiAuth.isAuthenticated = true;
        setTimeout(function(){console.log('SignIn '+username+'-'+password)}, 100); // fake async
    },
    signout() {
        ApiAuth.isAuthenticated = false;
        setTimeout(function(){console.log('SignOut')}, 100);
    }
};

export { ApiAuth };