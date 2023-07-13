import {describe, expect, it} from "vitest"
import {data} from "./data";
import {filterByPattern} from "./app";


describe('app', () => {
    describe('filter', () => {
        it('should return true', () => {
            expect(true).toBe(true);
        });

        it('should return the whole object if there is no filter', () => {
            const filteredData = filterByPattern(null);

            expect(filteredData).toEqual(data);
        })

        it('should return the the filtered object with pattern "tailed"', () => {
            const filteredData = filterByPattern("tailed");

            expect(filteredData).toEqual(expectedDataWithPatternTailed);
        })

        it('should return null for a miss capitalize pattern object with pattern "taILed"', () => {
            const filteredData = filterByPattern("taILed");

            expect(filteredData).toBeNull();
        })

        it('should return null if there is no matching pattern "taiiiled"', () => {
            const filteredData = filterByPattern("taiiiled");

            expect(filteredData).toBeNull();
        })

        it('should return the the filtered object with pattern "easel"', () => {
            const filteredData = filterByPattern("easel");

            expect(filteredData).toEqual(expectedDataWithPatternEasel);
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
]

const expectedDataWithPatternEasel = [
    {
        name: 'Satanwi',
        people: [
            {
                name: 'Elmer Kinoshita' ,
                animals: [
                    {name: 'Weasel'},
                ]
            }
        ]
    }
]