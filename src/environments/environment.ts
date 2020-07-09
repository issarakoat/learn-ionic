// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: {
    url: "http://newsapi.org/v2/",
    key: "0db65eacb9504543a83fe63adf9ac6d2",
  },
  firebase: {
    apiKey: "AIzaSyDeArSIYcb8Bdqt1mlB37gnj_SM9_e2Th4",
    authDomain: "asp-firebase-okta.firebaseapp.com",
    databaseURL: "https://asp-firebase-okta.firebaseio.com",
    projectId: "asp-firebase-okta",
    storageBucket: "asp-firebase-okta.appspot.com",
    messagingSenderId: "113071257511",
    appId: "1:113071257511:web:1735b3dd5570b884a7e882",
    measurementId: "G-E353PGR6VF",
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
