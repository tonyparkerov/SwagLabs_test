export default class User {
  public username: string;
  public password: string;

  constructor(username: string, password: string = "secret_sauce") {
    this.username = username;
    this.password = password;
  }
}
