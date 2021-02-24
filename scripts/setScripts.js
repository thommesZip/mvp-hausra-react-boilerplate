var jsonfile = require('jsonfile')
const filePath = './frontend/package.json'


  try {
    var packaged = jsonfile.readFileSync(filePath)
    
    if (!packaged.scripts) packaged.scripts = {}
    packaged.scripts = {
      start: 'react-scripts start',
      build: 'react-scripts build',
      test: 'react-scripts test',
      eject: 'react-scripts eject'
    }
    //packaged.scripts[script.key] = script.value
    jsonfile.writeFileSync(filePath, packaged, {spaces: 2})
  } catch (e) {
    if (e.message === 'ENOENT, no such file or directory \'package.json\'') {

    } else {
      throw e
    }
  }
