{
    function move(direction) {
        console.log(direction);
    }
    move("down");
    var tile = 16;
    function login() {
        return {
            response: {
                body: "logged in!",
            },
        };
    }
    // printLoginState(state: LoginState)
    // success -> success body
    // fail -> sad reason
    function printLoginState(state) {
        if ("response" in state) {
            console.log("success " + state.response.body);
        }
        else {
            console.log("sad " + state.reason);
        }
    }
    // 별로 좋지 않아
}
