{
  // 예측할 수 없는 에러를 try & catch로 의미 있게 handling을 할 수 있는 것이 아니라면 차라리 사용하지 않는게 나을 수도 있다.
  // 왜냐하면 어느 부분에서 에러가 발생하였고, 어느 부분을 수정해야하는 지 알기 힘들기 때문이다.

  class TimeoutError extends Error {}
  class OfflineError extends Error {}

  class NetworkClient {
    tryConnect(): void {
      throw new OfflineError("No network");
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
