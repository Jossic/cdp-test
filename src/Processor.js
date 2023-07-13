export class Processor {
    constructor(data) {
        this.data = data;
    }

    filterByPattern(pattern) {
        if (!pattern) {
            return this.data;
        }

        if (typeof pattern !== 'string' || !pattern.trim()) {
            return null;
        }

        const filteredData = this.data
            .map(country => {
                const filteredPeople = country.people
                    .map(person => {
                        const filteredAnimals = person.animals
                            .filter(animal => animal.name.includes(pattern));

                        if (filteredAnimals.length > 0) {
                            return {
                                ...person,
                                animals: filteredAnimals
                            };
                        }
                    })
                    .filter(Boolean);

                if (filteredPeople.length > 0) {
                    return {
                        ...country,
                        people: filteredPeople
                    };
                }
            })
            .filter(Boolean);

        if (filteredData.length === 0) {
            return null;
        }

        return filteredData
    }


    countElements() {
        return this.data
            .map(country => {
                const numberOfPersons = country.people.length;

                const countedPeople = country.people
                    .map(person => {
                        const numberOfAnimals = person.animals.length;
                        const appendedName = `${person.name} [${numberOfAnimals}]`;

                        const countedAnimals = person.animals
                            .map(animal => {
                                return {
                                    name: animal.name
                                };
                            });

                        return {
                            name: appendedName,
                            animals: countedAnimals
                        };
                    });

                return {
                    name: `${country.name} [${numberOfPersons}]`,
                    people: countedPeople
                };
            });
    }
}