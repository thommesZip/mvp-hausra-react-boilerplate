var spawnSync = require('child_process').spawnSync

var FAILURE = 'failure'
var SUCCESS = 'success'

var styles = {
  // got these from playing around with what I found from:
  // https://github.com/istanbuljs/istanbuljs/blob/0f328fd0896417ccb2085f4b7888dd8e167ba3fa/packages/istanbul-lib-report/lib/file-writer.js#L84-L96
  // they're the best I could find that works well for light or dark terminals
  success: {open: '\u001b[32;1m', close: '\u001b[0m'},
  danger: {open: '\u001b[31;1m', close: '\u001b[0m'},
  info: {open: '\u001b[36;1m', close: '\u001b[0m'},
  subtitle: {open: '\u001b[2;1m', close: '\u001b[0m'},
}

function color(modifier, string) {
  return styles[modifier].open + string + styles[modifier].close
}

function run(title, subtitle, command, options) {
  options = options || {}

  console.log(color('info', '    ▶️  Starting: ' + title))
  console.log(color('subtitle', '          ' + subtitle))
  console.log(color('subtitle', '          Running the following command: ' + command))

  var result = spawnSync(command, {stdio: 'inherit', shell: true})

  if (result.status !== 0 && !options.ignoreFailure) {
    console.error(
      color(
        'danger',
        '    🚨  Failure: ' +
          title +
          '. Please review the messages above for information on how to troubleshoot and resolve this issue.',
      ),
    )
    process.exit(result.status)
    return FAILURE
  }

  console.log(color('success', '    ✅  Success: ' + title + '\n\n'))
  return SUCCESS
}


function main() {
  var result

/*
  result = run(
    'Installing Dev Mode',
    'Stting up Hasura & installing dependencies for custom actions',
    `pwd && npm install`,
  )
  if (result === FAILURE) return

  result = run(
    'Creating React App',
    'Stting up Hasura & installing dependencies for custom actions',
    `npx create-react-app frontend`,
  )
  if (result === FAILURE) return

  result = run(
    'Install React Stuff',
    'Stting up Hasura & installing dependencies for custom actions',
    `cd frontend \
    && npm i -S graphql-request \
    && npm install -D tailwindcss postcss postcss-loader chokidar-cli npm-run-all react-router-dom graphql-request graphql react-query aws-amplify`,
  )
  if (result === FAILURE) return
*/

  result = run(
    'Copy React Boilerplate',
    '...',
    `cp ./scripts/react-boilerplate/tailwind.config.js ./frontend \
    && cp ./scripts/react-boilerplate/postcss.config.js ./frontend \
    && cp -r ./scripts/react-boilerplate/src/styles ./frontend/src \
    && cp -r ./scripts/react-boilerplate/src/context ./frontend/src \
    && cp -r ./scripts/react-boilerplate/src/utils ./frontend/src \
    && cp -r ./scripts/react-boilerplate/src/assets ./frontend/src \
    && cp -f ./scripts/react-boilerplate/src/App.js ./frontend/src/App.js \
    && cp -r ./scripts/react-boilerplate/src/components ./frontend/src \
    && cp -r ./scripts/react-boilerplate/src/hooks ./frontend/src \
    && cp -r ./scripts/react-boilerplate/src/screens ./frontend/src \
    && rm -f  ./frontend/src/App.css \
    && node ./scripts/setScripts.js \
    `,
  )
  if (result === FAILURE) return

  result = run(
    'Installing API stuff',
    'Setting up Hasura & installing dependencies for custom actions',
    `cd api \
    && npm install \
    && docker-compose up -d \
    && echo "😴 Waiting a few seconds for hasura to become available" \
    && sleep 5 \
    && cd hasura \
    && hasura metadata apply --admin-secret myadminsecretkey`,
  )
  if (result === FAILURE) return

}

main()