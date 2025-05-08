// this module  provide utilities for working with file and directory paths.

import path from 'path';


// 1. ============================= resolve ==============================
// returns absolute path of file

const abs_path = path.resolve('path-module.js')
console.log('1) ▶▶▶',abs_path)

// 2. ============================= extname ==============================
// return file extension
const file_ext_name = path.extname('../Path Module/MyNewFile.py')
console.log('2) 🔶🔶🔶',file_ext_name)

// 3. ============================= basename ==============================
// extract and return only the file name
const file_name = path.basename('./fs Module/myBio.txt');
console.log('3)', file_name);

// 4. ============================= dirname ==============================
// extract and return only the directory name 
const directory_name = path.dirname('./fs Module/myBio.txt');
console.log('4)', directory_name);


// 5. ============================= join(...path) ==============================
// joins multiple paths and return a string of  directory from it
const join_path = path.join('public', 'main', 'src', 'component');
console.log('5)', join_path);


// 6. ============================= parse(...path) ==============================
// return inforamtion about file directory like root, dir, base, ext, name
const parse_data = path.parse('./fs Module/myBio.txt');
console.log('6)', parse_data);

