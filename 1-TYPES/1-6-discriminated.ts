{
  // function: login -> success, fail
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail";
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(): LoginState {
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
  function printLoginState(state: LoginState) {
    if (state.result === "success") {
      console.log(`success ${state.response.body}`);
    } else {
      console.log(`sad ${state.reason}`);
    }
  }
}
