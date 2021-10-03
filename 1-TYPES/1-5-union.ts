{
  // Union Types: OR
  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  move("down");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function: login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      response: {
        body: "logged in!",
      },
    };
  }
  // printLoginState(state: LoginState)
  // success -> success body
  // fail -> sad reason
  function printLoginState(state: LoginState) {
    if ("response" in state) {
      console.log(`success ${state.response.body}`);
    } else {
      console.log(`sad ${state.reason}`);
    }
  }
  // 별로 좋지 않아
}
