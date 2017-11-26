// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
   apiKey: 'AIzaSyBNoAEvuXAxOZifeyli1Zr3udKNWuTZHTA',
    authDomain: 'proplistings-4f1b3.firebaseapp.com',
    databaseURL: 'https://proplistings-4f1b3.firebaseio.com',
    projectId: 'proplistings-4f1b3',
    storageBucket: 'proplistings-4f1b3.appspot.com',
    messagingSenderId: '492550191692'
  }
};