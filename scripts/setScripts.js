var jsonfile = require('jsonfile')
const filePath = './frontend/package.json'


  try {
    var packaged = jsonfile.readFileSync(filePath)
    
    if (!packaged.scripts) packaged.scripts = {}
    packaged.scripts = {
      'build:tailwind': 'tailwindcss build src/css/tailwind.css -o src/css/tailwind.output.css',
      'watch:tailwind': "chokidar 'src/css/**/*.css' 'src/css/**/*.scss' --ignore src/css/tailwind.output.css -c 'npm run build:tailwind'",
      prestart: 'npm run build:tailwind',
      prebuild: 'npm run build:tailwind',
      'start:react': 'react-scripts start',
      start: 'npm-run-all build:tailwind --parallel watch:tailwind start:react',
      build: 'react-scripts build',
      test: 'react-scripts test',
      eject: 'react-scripts eject'
    }
    console.log(packaged.scripts)
    //packaged.scripts[script.key] = script.value
    jsonfile.writeFileSync(filePath, packaged, {spaces: 2})
  } catch (e) {
    if (e.message === 'ENOENT, no such file or directory \'package.json\'') {

    } else {
      throw e
    }
  }
