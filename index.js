const CSV = require('./lib/csv');
const header = ['First', 'Second', 'Third'];

const csv = new CSV('./data.csv', header);

const data = [
  ['Hello', 'Hola', 'Bonjour'],
  ['Lake', 'River', 'Canyon'],
  ['Cheeseburger', 'Fries', 'Coke'],
];

csv
  .create(data)
  .then(() => {
    console.log('hooray!');
  })
  .catch((err) => {
    console.log(err);
  });
