import { readFile } from 'fs/promises';
import crypto from 'crypto';

async function main() {
    const fileData = await readFile('file1.txt');
    const contentLength = fileData.length;
    
    // Create Git blob object
    const gitObject = `blob ${contentLength}\0${fileData}`;
    
    // Calculate SHA-1 hash
    const hash = crypto.createHash('sha1');
    hash.update(gitObject);
    const gitHash = hash.digest('hex');
    
    console.log('Calculated Git hash:', gitHash);
    // Example output: 5e1c309e...
}

main();