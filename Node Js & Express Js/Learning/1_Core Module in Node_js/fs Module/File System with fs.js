// here we learning the file System module of node js that is 'fs'

// first we import the fs module in Es Module way






import { appendFile, mkdir, readdir, readFile , rename, stat, unlink, writeFile } from 'fs/promises'

// 1. ===================== readFile ==================================
// we use async arrow function

const read_file = async (fileName) => {
    // creating varaible to store data of the file that we want to read
    const data = await readFile(fileName, 'utf-8');
    console.log(data)
}

// now we passing file name as parameter to function
    read_file('myBio.txt')


// 2. ============================= writeFile ==============================

const create_file = async (fileName, fileContent) => {
    // we have to create a file for that we need file-name and file-content
    await writeFile(fileName, fileContent);
    console.log('You Successfully Created New File 😎!!!!!') 
}

create_file('MyNewFile.py', "print('here i created a new file . and this is my python code for this new created file')")
create_file('NewFile2.txt', "this going to delete with unlink method")


// 3. ============================= appendFile ==============================
// here we adding new data or content to existing file

const append_content = async (fileName, fileNewContent) => {
    // we need a file name were we want to add new content
    await appendFile(fileName, fileNewContent);
    console.log('New content ✅ appeded to existing file')
}
append_content('myBio.txt', '🎈🎈New Content added with appendFile Method🎈🎈')



// 4. ============================= unlink -> deleting file ==============================

const delete_file = async (fileName) => {
    await unlink(fileName);
    console.log(`Deleted the ${fileName} file`);
}
// delete_file("NewFile2.txt")


// 5. ============================= rename(oldPath, newPath) ==============================
// we rename the existing file
const rename_file = async (oldPathName, newPathName) => {
    await rename(oldPathName, newPathName);
    console.log(`${oldPathName} ====>>>>> ${newPathName} `);
}
// rename_file('./myBio.txt', './RenameBio.txt')




// 6. ============================= readdir(path) ==============================
// read contents of a directory

const read_dir = async (dir) => {
    const dirData = await readdir(dir);
    console.log('Directory Details Printed', dirData);
}

// read_dir('../../../')

// 7. ============================= stat(path) ==============================
// give information about the file like size etc

const info_file = async (fileName) => {
    const info = await stat(fileName);
    console.log('Directory Details Printed', info);
}

// info_file('MyNewFile.py')


// 8. ============================= mkdir ==============================
// it create folders 

const create_dir = async (dirName) => {
    await mkdir(dirName,{recursive: true})
    console.log('Directory created');
}

// create_dir('New Folder')

// we create multiple embedded directory in one another :-> for that we have to pass mkdir( ,{recursive:true})

// create_dir('New Folder/sub Folder/xyz')

