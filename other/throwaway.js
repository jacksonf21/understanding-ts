const course = require('./factory');

async function mockAPI(name, courseCode, average, teacher) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(new course(name, courseCode, average, teacher));
    }, 1000);
  });
  let result = await promise;
  result.name += ' Fung';
  return result;
};

const display = async() => {
  return mockAPI('jackson', 'BIO23', 72, ['santos', 'barbara', 'miso']);
};

display()
  .then(data => console.log(data))
;