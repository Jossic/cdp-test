import {describe, expect, it} from "vitest"
import {data} from "../data.js";
import {Processor} from '../Processor.js';
import {
    expectedDataCounted,
    expectedDataWithPatternEasel,
    expectedDataWithPatternTailed,
    expectedGivenResult,
    simpleDataToCount
} from "./testing-data.js";


describe('app', () => {
    describe('filter', () => {
        const processor = new Processor(data);

        it.each([
            [null, data],
            ["", data],
            ["tailed", expectedDataWithPatternTailed],
            ["easel", expectedDataWithPatternEasel],
            ["ry", expectedGivenResult],
        ])('should correctly filter data by the pattern %s', (pattern, expected) => {
            const filteredData = processor.filterByPattern(pattern);

            expect(filteredData).toEqual(expected);
        })

        it.each([
            ["taILed", null],
            ["taiiiled", null],
            [" ", null],
        ])('should return null for the pattern %s', (pattern, expected) => {
            const filteredData = processor.filterByPattern(pattern);

            expect(filteredData).toEqual(expected);
        })
    })

    describe('count', () => {
        it('should return the expected result with a lighted object', () => {
            const simpleProcessor = new Processor(simpleDataToCount);
            const countedData = simpleProcessor.countElements();

            expect(countedData).toEqual(expectedDataCounted);
        })
    })
})
