// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:4200',
  firebase: {
    apiKey: "AIzaSyCZ9sAMa96Oiv-DevXvPjucVcAwK1a2TOw",
    authDomain: "fir-angular-db24a.firebaseapp.com",
    databaseURL: "https://fir-angular-db24a-default-rtdb.firebaseio.com/",
    projectId: "fir-angular-db24a",
    storageBucket: "fir-angular-db24a.appspot.com",
    messagingSenderId: "929957161334",
    appId: "1:929957161334:web:a9917093f732e14d47b257",
    measurementId: "G-TXD2SQVBVN"
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
