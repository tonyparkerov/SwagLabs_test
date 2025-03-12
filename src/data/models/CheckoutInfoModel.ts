export default class CheckoutInfoModel {
  public firstName: string | null;
  public lastName: string | null;
  public zipCode: string | null;

  constructor(
    firstName: string | null,
    lastName: string | null,
    zipCode: string | null,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.zipCode = zipCode;
  }
}
