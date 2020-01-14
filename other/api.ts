const course = require('./factory');

async function mockAPI(name, courseCode, average, teacher) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(new course(name, courseCode, average, teacher));
    }, 1000);
  });
  let result = await promise;
  console.log('success')
  return result;
};

module.exports = mockAPI;