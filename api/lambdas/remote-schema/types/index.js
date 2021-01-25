const fs = require('fs');

const types = fs.readdirSync('./lambdas/remote-schema/types')
  .reduce((p, f) => {
    console.log(f,p)
    if (f === 'index.js') return p;
   
    p += require(`./${f}`).default;
    return p;
  },
  ''
  );

exports.types = types;