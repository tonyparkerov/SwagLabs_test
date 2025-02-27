import { SORTING_OPTIONS } from "./data/constants";
import { Item } from "./types";

export const getItemByName = (arrayOfAllItems: Item[], name: string): Item => {
    const item = arrayOfAllItems.find(value => value.name === name);
    if(item) {
        return item;
    }
    throw new Error(`Item with name "${name}" not found`);    
};

export const isSortedBy = (sortingOption: typeof SORTING_OPTIONS[keyof typeof SORTING_OPTIONS], testArray: Item[]): boolean => {
    switch (sortingOption) {
        case SORTING_OPTIONS.az:
            return isSortedByAZ(testArray);
        case SORTING_OPTIONS.za:
            return isSortedByZA(testArray);
        case SORTING_OPTIONS.lohi:
            return isSortedByPriceLowToHigh(testArray);
        case SORTING_OPTIONS.hilo:
            return isSortedByPriceHighToLow(testArray);
        default:
            return false;
    }
};

function isSortedByAZ(testArray: Item[]): boolean {
    const sortedArray = testArray.slice().sort((a, b) => a.name.localeCompare(b.name));
    return JSON.stringify(testArray) === JSON.stringify(sortedArray);
};

function isSortedByZA(testArray: Item[]): boolean {
    const sortedArray = testArray.slice().sort((a, b) => b.name.localeCompare(a.name));
    return JSON.stringify(testArray) === JSON.stringify(sortedArray);
};

function isSortedByPriceLowToHigh(testArray: Item[]): boolean {
    const sortedArray = testArray.slice().sort((a, b) => Number(a.price.replace('$', '')) - Number(b.price.replace('$', '')));
    return JSON.stringify(testArray) === JSON.stringify(sortedArray);
};

function isSortedByPriceHighToLow(testArray: Item[]): boolean {
    const sortedArray = testArray.slice().sort((a, b) => Number(b.price.replace('$', '')) - Number(a.price.replace('$', '')));
    return JSON.stringify(testArray) === JSON.stringify(sortedArray);
};