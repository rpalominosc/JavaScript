const fs = require('node:fs');

fs.readFile('/home/rodrigo/Descargas/dds/pessanc20240301.sql', 'utf8', (err,data) => {
  if (err) {
    console.error(err);
    return;
    }
    console.log(data)

  // console.log(stats.isFile()); // true
  // console.log (stats.isDirectory()); // false
  // console.log(stats.isSymbolicLink()); // false
  // console.log(stats.size); // 1024000 //= 1MB
  // // we have access to the file stats in `stats`
});

