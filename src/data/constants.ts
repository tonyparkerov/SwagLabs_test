export const BASE_URL = "https://www.saucedemo.com/";

export const USERS: { [key: string]: { username: string; password: string } } =
  {
    STANDARD: {
      username: "standard_user",
      password: "secret_sauce",
    },
    LOCKED: {
      username: "locked_out_user",
      password: "secret_sauce",
    },
    PROBLEM: {
      username: "problem_user",
      password: "secret_sauce",
    },
    VISUAL: {
      username: "visual_user",
      password: "secret_sauce",
    },
  };

export const SORTING_OPTIONS = {
  az: "Name (A to Z)",
  za: "Name (Z to A)",
  lohi: "Price (low to high)",
  hilo: "Price (high to low)",
};

export const LOGIN_ERROR_MESSAGES = {
  withoutUsername: "Epic sadface: Username is required",
  withoutPassword: "Epic sadface: Password is required",
  wrongCredentials:
    "Epic sadface: Username and password do not match any user in this service",
  lockedOut: "Epic sadface: Sorry, this user has been locked out.",
};

export const ALL_ITEMS = [
  {
    name: "Sauce Labs Backpack",
    description:
      "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.",
    price: "$29.99",
    addToCartButtonDataTest: "add-to-cart-sauce-labs-backpack",
    removeButtonDataTest: "remove-sauce-labs-backpack",
  },
  {
    name: "Sauce Labs Bike Light",
    description:
      "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.",
    price: "$9.99",
    addToCartButtonDataTest: "add-to-cart-sauce-labs-bike-light",
    removeButtonDataTest: "remove-sauce-labs-bike-light",
  },
  {
    name: "Sauce Labs Bolt T-Shirt",
    description:
      "Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.",
    price: "$15.99",
    addToCartButtonDataTest: "add-to-cart-sauce-labs-bolt-t-shirt",
    removeButtonDataTest: "remove-sauce-labs-bolt-t-shirt",
  },
  {
    name: "Sauce Labs Fleece Jacket",
    description:
      "It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.",
    price: "$49.99",
    addToCartButtonDataTest: "add-to-cart-sauce-labs-fleece-jacket",
    removeButtonDataTest: "remove-sauce-labs-fleece-jacket",
  },
  {
    name: "Sauce Labs Onesie",
    description:
      "Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.",
    price: "$7.99",
    addToCartButtonDataTest: "add-to-cart-sauce-labs-onesie",
    removeButtonDataTest: "remove-sauce-labs-onesie",
  },
  {
    name: "Test.allTheThings() T-Shirt (Red)",
    description:
      "This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.",
    price: "$15.99",
    addToCartButtonDataTest: "add-to-cart-test.allthethings()-t-shirt-(red)",
    removeButtonDataTest: "remove-test.allthethings()-t-shirt-(red)",
  },
];
