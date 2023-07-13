import {describe, expect, it} from "vitest"
import {data} from "./data";
import {Processor} from './Processor.js';


describe('app', () => {
    describe('filter', () => {
        const processor = new Processor(data);

        it.each([
            [null, data],
            ["tailed", expectedDataWithPatternTailed],
            ["easel", expectedDataWithPatternEasel],
            ["ry", expectedGivenResult],
        ])('should return the expected result for the pattern %s', (pattern, expected) => {
            const filteredData = processor.filterByPattern(pattern);

            expect(filteredData).toEqual(expected);
        })

        it.each([
            ["taILed", null],
            ["taiiiled", null],
            ["", data],
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

const expectedDataWithPatternTailed = [
    {
        name: 'Tohabdal',
        people:
            [{
                name: 'Effie Houghton',
                animals:
                    [{name: 'Ring-tailed Lemur'}]

            }]
    },
    {
        name: 'Uzuzozne',
        people:
            [
                {
                    name: 'Lillie Abbott',
                    animals:
                        [{name: 'Henkel\'s Leaf-tailed Gecko'}]
                },
            ]
    },
];


const expectedDataWithPatternEasel = [
    {
        name: 'Satanwi',
        people: [
            {
                name: 'Elmer Kinoshita',
                animals: [
                    {name: 'Weasel'},
                ]
            }
        ]
    }
];

const expectedGivenResult = [
    {
        name: 'Uzuzozne',
        people: [
            {
                name: 'Lillie Abbott',
                animals: [
                    {
                        name: 'John Dory'
                    }
                ]
            }
        ]
    },
    {
        name: 'Satanwi',
        people: [
            {
                name: 'Anthony Bruno',
                animals: [
                    {
                        name: 'Oryx'
                    }
                ]
            }
        ]
    }
];

const simpleDataToCount = [
    {
        name: 'Tohabdal',
        people:
            [{
                name: 'Effie Houghton',
                animals:
                    [{name: 'Ring-tailed Lemur'},
                        {name: 'Fly'},]
            }]
    },
    {
        name: 'Uzuzozne',
        people:
            [
                {
                    name: 'Lillie Abbott',
                    animals:
                        [{name: 'Henkel\'s Leaf-tailed Gecko'},
                            {name: 'Fly'},
                            {name: 'Mouse'},]
                },
                {
                    name: 'Lillie Abbott',
                    animals:
                        [{name: 'Henkel\'s Leaf-tailed Gecko'},]
                },
            ]
    },
];

const expectedDataCounted =  [
    {
        name: 'Tohabdal [1]',
        people:
            [{
                name: 'Effie Houghton [2]',
                animals:
                    [{name: 'Ring-tailed Lemur'},
                        {name: 'Fly'},]
            }]
    },
    {
        name: 'Uzuzozne [2]',
        people:
            [
                {
                    name: 'Lillie Abbott [3]',
                    animals:
                        [{name: 'Henkel\'s Leaf-tailed Gecko'},
                            {name: 'Fly'},
                            {name: 'Mouse'},]
                },
                {
                    name: 'Lillie Abbott [1]',
                    animals:
                        [{name: 'Henkel\'s Leaf-tailed Gecko'},]
                },
            ]
    },
];
