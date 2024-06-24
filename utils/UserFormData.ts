import { faker } from "@faker-js/faker";

export class UserFormData {
  readonly fullName: string;
  readonly email: string;
  readonly friendEmail: string;
  readonly firstName: string;
  readonly message: string;
  readonly lastName: string;
  readonly oldPassword: number;
  readonly newPassword: number;
  readonly address: string;
  readonly city: string;
  readonly postalCode: number;
  readonly phoneNumber: string;

  constructor() {
    this.fullName = faker.person.fullName();
    this.email = faker.internet.email();
    this.friendEmail = faker.internet.email();
    this.firstName = faker.person.firstName();
    this.message = faker.lorem.text();
    this.lastName = faker.person.lastName();
    this.oldPassword = faker.number.int(1000000000);
    this.newPassword = faker.number.int(1000000000);
    this.address = faker.address.streetAddress();
    this.city = faker.address.city();
    this.postalCode = faker.number.int(99999);
    this.phoneNumber = faker.phone.number();
  }

  async getFullName() {
    return this.fullName;
  }

  async getFirstName() {
    return faker.person.firstName();
  }

  async getLastName() {
    return this.lastName;
  }

  async getOldPassword() {
    return this.oldPassword;
  }

  async getNewPassword() {
    return this.newPassword;
  }

  async getEmail() {
    return this.email;
  }

  async getFriendEmail() {
    return this.friendEmail;
  }

  async getMessage() {
    return this.message;
  }

  async getAddress() {
    return this.address;
  }

  async getCity() {
    return this.city;
  }

  async getPostalCode() {
    return this.postalCode;
  }

  async getPhoneNumber() {
    return this.phoneNumber;
  }
}
