
export const expectedDataWithPatternTailed = [
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


export const expectedDataWithPatternEasel = [
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

export const expectedGivenResult = [
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

export const simpleDataToCount = [
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

export const expectedDataCounted =  [
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
