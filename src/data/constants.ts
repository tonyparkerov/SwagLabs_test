export const BASE_URL = 'https://www.saucedemo.com/';

export const USERS: { [key: string]: { username: string; password: string } } = {
    STANDARD: {
        username: 'standard_user',
        password: 'secret_sauce'
    },
    LOCKED: {
        username: 'locked_out_user',
        password: 'secret_sauce'
    },
    PROBLEM: {
        username: 'problem_user',
        password: 'secret_sauce'
    }
};

export const SORTING_OPTIONS = {
    az: 'Name (A to Z)',
    za: 'Name (Z to A)',
    lohi: 'Price (low to high)',
    hilo: 'Price (high to low)'
}

export const ITEMS: { [key: string]: { name: string; dataTestValue: string } } = {
    backpack: { name: 'Sauce Labs Backpack', dataTestValue: 'sauce-labs-backpack' },
    bike: { name: 'Sauce Labs Bike Light', dataTestValue: 'sauce-labs-bike-light' },
    boltTShirt: { name: 'Sauce Labs Bolt T-Shirt', dataTestValue: 'sauce-labs-bolt-t-shirt' },
    jacket: { name: 'Sauce Labs Fleece Jacket', dataTestValue: 'sauce-labs-fleece-jacket' },
    onesie: { name: 'Sauce Labs Onesie', dataTestValue: 'sauce-labs-onesie' },
    redTShirt: { name: 'Test.allTheThings() T-Shirt (Red)', dataTestValue: 'test.allthethings()-t-shirt-(red)' },
};