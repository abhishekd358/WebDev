// this module  provide utilities for working with file and directory paths.

import path from 'path';


// 1. ============================= resolve ==============================
// returns absolute path of file

const abs_path = path.resolve('path-module.js')
console.log('▶▶▶',abs_path)

// 2. ============================= extname ==============================
// return file extension
const file_ext_name = path.extname('../Path Module/MyNewFile.py')
console.log('🔶🔶🔶',file_ext_name)
