// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
//sets up enviornment to use google firebase
export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBZo_ZgQnfSsBfgMNbYcJxBqpXyVRGqUZ0',
    authDomain: 'hoodiedigital-530c8.firebaseapp.com',
    databaseURL: 'https://hoodiedigital-530c8.firebaseio.com',
    projectId: 'hoodiedigital-530c8',
    storageBucket: 'hoodiedigital-530c8.appspot.com',
    messagingSenderId: '231249521118'
  }
};
