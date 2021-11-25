class TimeoutError extends Error {}
class OfflineError extends Error {}

class NetworkClient {
  tryConnect(): void {
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
