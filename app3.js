console.log(module);

// Following app2.js, node has de `module` object, which is indeed the parent component of global variables.
// But, only the global variables of the file, in this case `app3.js`.
// Each file has a `module`, which is a JSON file.

// If you run the file:
// ...Nodejs - Mosh\first-app> node app3.js
// The output is:
// Module {
//     id: '.',
//     path: 'C:\\Users\\enriq\\Documents\\Programación\\Nodejs - Mosh\\first-app',
//     exports: {},
//     filename: 'C:\\Users\\enriq\\Documents\\Programación\\Nodejs - Mosh\\first-app\\app3.js',
//     loaded: false,
//     children: [],
//     paths: [
//       'C:\\Users\\enriq\\Documents\\Programación\\Nodejs - Mosh\\first-app\\node_modules',
//       'C:\\Users\\enriq\\Documents\\Programación\\Nodejs - Mosh\\node_modules',
//       'C:\\Users\\enriq\\Documents\\Programación\\node_modules',
//       'C:\\Users\\enriq\\Documents\\node_modules',
//       'C:\\Users\\enriq\\node_modules',
//       'C:\\Users\\node_modules',
//       'C:\\node_modules'
//     ]
//   }
