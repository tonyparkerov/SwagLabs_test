import CheckoutInfoModel from "./models/CheckoutInfoModel"
import { faker } from '@faker-js/faker';

export const validCheckoutInfo = new CheckoutInfoModel(
    faker.person.firstName(),
    faker.person.lastName(),
    faker.location.zipCode());