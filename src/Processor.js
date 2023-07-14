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
        return this.data.map(country => {
            const peopleCounts = country.people.map(person => ({
                name: `${person.name} [${person.animals.length}]`,
                animals: person.animals.map(animal => ({ name: animal.name })),
            }));

            return {
                name: `${country.name} [${peopleCounts.length}]`,
                people: peopleCounts
            };
        });
    }
}