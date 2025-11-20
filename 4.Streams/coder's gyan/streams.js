// 🏞️ STREAM ek "Nadi" (river) ki tarah hota hai.
// Jo data ko ek jagah se dusri jagah TAKREEBAN REAL-TIME me bahati hai 
// chhote-chhote tukdo (chunks) me flow karwata hai.

// Readable stream = Nadi ka SOURCE (jaha se paani nikalta hai)

import { Readable, Writable } from 'stream';

// Ham ek Readable stream (nadi ka source) bana rahe hain.
// 'read()' ek internal method hota hai jo batata hai ki
// jab nadi ko paani bhejna ho to kya karna hai.
const readableStream = new Readable({
    read() {}
});

// console.log("Before pushing data: ", readableStream);
console.log("==================================");


// 🟢 EVENT: 'data'
// Jab koi vyakti (consumer/receiver) bole: "Nadi ka paani bahav (read karo)",
// tab stream apne aap chhote-chhote data chunks bhejti hai reciever ko.
// Ye bilkul waise hai jaise koi nadi ka paani bucket me bhar raha ho.

readableStream.on("data", (smallChunk) => {
    writeableStream.write(smallChunk)
    console.log("Nadi se aaya chhota chunk:SENDER:-", smallChunk);
});


// 🔹 'push()' = Nadi me paani(data) chhorna
// Jab hum 'push()' karte hain, to hum Nadi ke source me paani dal rahe hote hain.
// Tab nadi apne consumers ko woh paani flowing chunks me deti hai.

readableStream.push("hello abhi");


// console.log("\nAfter pushing data:\n", readableStream);
console.log("==================================");


//  Debugging: read method kya hai?
// console.log("The internal read method:", readableStream._read);








// ********************************************************************************************8
console.log("==================================");
// Writable = Talab/Receiver (Paani jama ho raha hai) 

const writeableStream  = new Writable({
    write(dataChunk){
        // wahat we write on receiver end
        console.log('This is Data Chunk on RECEIVER:-',dataChunk)
    }
})
// seperately writing on reciver but in real way this not happen.
// when our reiver flow data in chunk by chunk ; instantly on Receiver Side(Writable side) Our data Write on Client machine
// writeableStream.write('this is data that we pass from here')

// console.log("Writeable properties :-",writeableStream);





// ***************************************************************************************************
// ✅ Duplex stream = "Do taraf behne wali nadi" analogy