const player = {
    name: 'Lebron James',
    club: 'LA Lakers',
    address: {
        city: 'Los Angeles'
    }
};

const { name, club, address: { city } } = player;

console.log(`${name} plays in ${club}`);
console.log(`${name} lives in ${city}`)