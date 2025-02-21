import test from "node:test";
import { SORTING_OPTIONS } from "./data/constants";
import { Item } from "./types";

export const isSortedBy = (sortingOption: string, testArray: Item[]): boolean => {
    switch (sortingOption) {
        case SORTING_OPTIONS.az:
            return checkSortingByAZ(testArray);
        case SORTING_OPTIONS.za:
            return checkSortingByZA(testArray);
        case SORTING_OPTIONS.lohi:
            return checkSortingByPriceLowToHigh(testArray);
        case SORTING_OPTIONS.hilo:
            return checkSortingByPriceHighToLow(testArray);
        default:
            return false;
    }
};

function checkSortingByAZ(testArray: Item[]): boolean {
    const sortedArray = testArray.slice().sort((a, b) => a.name.localeCompare(b.name));
    return JSON.stringify(testArray) === JSON.stringify(sortedArray);
};

function checkSortingByZA(testArray: Item[]): boolean {
    const sortedArray = testArray.slice().sort((a, b) => b.name.localeCompare(a.name));
    return JSON.stringify(testArray) === JSON.stringify(sortedArray);
};

function checkSortingByPriceLowToHigh(testArray: Item[]): boolean {
    const sortedArray = testArray.slice().sort((a, b) => Number(a.price.replace('$', '')) - Number(b.price.replace('$', '')));
    return JSON.stringify(testArray) === JSON.stringify(sortedArray);
};

function checkSortingByPriceHighToLow(testArray: Item[]): boolean {
    const sortedArray = testArray.slice().sort((a, b) => Number(b.price.replace('$', '')) - Number(a.price.replace('$', '')));
    return JSON.stringify(testArray) === JSON.stringify(sortedArray);
};