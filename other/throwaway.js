// const course = require('./factory');

// async function mockAPI(name, courseCode, average, teacher) {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(new course(name, courseCode, average, teacher));
//     }, 1000);
//   });
//   let result = await promise;
//   result.name += ' Fung';
//   return result;
// };

// const display = async() => {
//   return mockAPI('jackson', 'BIO23', 72, ['santos', 'barbara', 'miso']);
// };

// display()
//   .then(data => console.log(data))
// ;

// ========================================================================
// ex ['A', 'B', 'C', 'D', 'E']

const { objectSchemaA, objectSchemaB, objectSchemaC, objectSchemaD, objectSchemaE } = require('./consts');

class Field {
  constructor(rawDevices, field) {
    this.rawDevices = rawDevices;
    this.field = field;
    this.alteredDevices = null;
  }

  _checkCategory(rawDevice) {
    switch(rawDevice) {
      case "A": return this._buildDevice(rawDevice, objectSchemaA);
      case "B": return this._buildDevice(rawDevice, objectSchemaB);
      case "C": return this._buildDevice(rawDevice, objectSchemaC);
      case "D": return this._buildDevice(rawDevice, objectSchemaD);
      case "E": return this._buildDevice(rawDevice, objectSchemaE);
      default: return rawDevice;
    }
  };

  _buildDevice(deviceInput, deviceSchema) {
    const basicObject = {
      title: deviceInput,
      field: this.field,
      details: {
        description: deviceSchema.description,
        category: deviceSchema.category,
        chain: deviceSchema.chain
      }
    };
    return basicObject; 
  }

  buildCategories() {
    this.alteredDevices = this.rawDevices.map(rawDevice => this._checkCategory(rawDevice));
  };

};

const datasetOne = ['A','D','E','A','E','A','B','B','C'];

const fieldSetOne = new Field(datasetOne, 'Network Connections AZ');
fieldSetOne.buildCategories();

console.log(fieldSetOne.rawDevices);
console.log(fieldSetOne.alteredDevices);
