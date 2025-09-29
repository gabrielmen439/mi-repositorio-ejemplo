import path, { dirname } from 'path';

// Definir una ruta de archivo de ejemplo

const filePath = '.data/example.txt';

// Obtener el directorio base

const dirName = path.dirname(filePath);
console.log(`Directorio base:`, dirname);

// Obtener el nombre del archivo sin extensión

const baseName = path.basename(filePath, '.txt');

// Obtener la extensión del archivo

const extName = path.extname(filePath);
console.log(`Extensión del archivo:`, extName);

// Crear una ruta unida

const newPath = path.join('/user', 'docs', 'newfile.txt');
console.log(`Nueva ruta`, newPath);