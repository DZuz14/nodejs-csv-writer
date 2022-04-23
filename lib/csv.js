const writeFile = require('fs').writeFile;

module.exports = class CSV {
  constructor(path, header, delimiter = ',') {
    this.path = path;
    this.header = header.join(this.delimiter) + '\n';
    this.delimiter = delimiter;
    this.mode = '';
  }

  create(data, mode = 'w') {
    this.mode = mode;

    const stringified =
      this.mode === 'a'
        ? data.join('\n') + '\n'
        : this.header + data.join('\n') + '\n';

    return this.write(stringified);
  }

  write(str) {
    return new Promise((resolve, reject) => {
      writeFile(this.path, str, { flag: this.mode }, (err) => {
        if (err) {
          reject(err);
        }
        resolve();
      });
    });
  }
};
