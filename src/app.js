import {data} from './data';


export function filterByPattern(pattern) {
    if (!pattern) {
        return data;
    }
    const filteredData = data
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
    console.log("filteredData =>", filteredData)

    if (filteredData.length === 0) {
        return null;
    }

   return filteredData
}