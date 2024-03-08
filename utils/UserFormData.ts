import {faker} from '@faker-js/faker';

class UserFormData {
    fullName = faker.person.fullName();
    email = faker.internet.email();
    friendEmail = faker.internet.email();
    firstName = faker.person.firstName();
    message = faker.lorem.text();
    lastName = faker.person.lastName();
    oldPassword = faker.number.int(1000000000);
    newPassword = faker.number.int(1000000000);
    address = faker.address.streetAddress();
    city = faker.address.city();
    postalCode = faker.number.int(99999);
    phoneNumber = faker.phone.number();

  UserFormData() {
  }

  getFullName() {
    return this.fullName;
  }

  getFirstName() {
    return faker.person.firstName();;
  }

  getLastName() {
    return this.lastName;
  }
  getOldPassword() {
    return this.oldPassword;
  }
  getNewPassword() {
    return this.newPassword;
  }

  getEmail() {
    return this.email;
  }
  getFriendEmail() {
    return this.friendEmail;
  }
  getMessage() {
    return this.message;
  }

  getAddress() {
    return this.address;
  }

  getCity() {
    return this.city;
  }
  getPostalCode() {
    return this.postalCode;
  }

  getPhoneNumber() {
    return this.phoneNumber;
  }
}

export default new UserFormData();