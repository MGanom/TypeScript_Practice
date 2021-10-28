{
  // 예상할 수 있는 상태와 타입들을 가급적이면 구체적으로 작성하는 것이 좋다.
  type SuccessState = {
    result: "success";
  };
  type NetworkErrorState = {
    result: "fail";
    reason: "offline" | "server down" | "timeout";
  };
  type ResultState = SuccessState | NetworkErrorState;

  class NetworkClient {
    tryConnect(): ResultState {
      return { result: "success" };
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      this.client.tryConnect();
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  // service.login(); // Error: No network

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch (error) {
        // catch로 error를 받는 순간 any타입이 되어 타입에 대한 정보가 사라진다.
        // show dialogue to user
        console.log("Error dialogue");
      }
    }
  }

  const app = new App(service);
  app.run();
}
