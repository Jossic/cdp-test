export class Processor {
    constructor(data) {
        this.data = data;
    }

    filterByPattern(pattern) {
        if (!pattern) return this.data;

        if (typeof pattern !== 'string' || !pattern.trim()) return null;

        const filteredCountries = this.data.reduce((accumulatedCountries, currentCountry) => {
            const filteredPeople = currentCountry.people.reduce((accumulatedPeople, currentPerson) => {
                const filteredAnimals = currentPerson.animals.filter(animal => animal.name.includes(pattern));

                return filteredAnimals.length > 0
                    ? [...accumulatedPeople, { ...currentPerson, animals: filteredAnimals }]
                    : accumulatedPeople;
            }, []);

            return filteredPeople.length > 0
                ? [...accumulatedCountries, { ...currentCountry, people: filteredPeople }]
                : accumulatedCountries;
        }, []);

        return filteredCountries.length === 0 ? null : filteredCountries;
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