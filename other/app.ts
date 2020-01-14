const apiResults = require('./api');

type course = {
  name: string;
  courseCode: string | number;
  average: number;
  teacher: string;
};

const app = () => {
  console.log(apiResults('jackson', 'BIO23', 72, ['santos', 'barbara', 'miso']))
};

app();