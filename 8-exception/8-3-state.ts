{
  // 프로그래밍을 할 때 성공 상태와 실패 상태를 type으로 설정해서
  // 좀 더 예상가능하게 프로그래밍을 할 수 있다.
  type NetworkErrorState = {
    result: "fail";
    reason: "offline" | "down" | "timeout";
  };
  type SuccessState = {
    result: "success";
  };
  type ResultState = SuccessState | NetworkErrorState;
  class NetworkClient {
    tryConnect(): ResultState {
      throw new Error("no network!");
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}
    login() {
      this.client.tryConnect();
      // login...
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      // 처리할 수 있는 곳에서 처리하는 것이 좋다.
      // 가장 우아하게 처리할 수 있는 곳에서 처리하는 것이 좋다.
      try {
        this.userService.login();
      } catch (error) {
        // show dialog to user
        if (error instanceof OfflineError) {
        }
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
