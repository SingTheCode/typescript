{
    function login() {
        return {
            result: "success",
            response: {
                body: "logged in!",
            },
        };
    }
    // printLoginState(state: LoginState)
    // success -> success body
    // fail -> sad reason
    function printLoginState(state) {
        if (state.result === "success") {
            console.log("success " + state.response.body);
        }
        else {
            console.log("sad " + state.reason);
        }
    }
}
