- Array Buffers accept nearby < 2Gib data only 
- Array Buffers are garbage collected
- we can not write or assing value in Array Buffer



// below is code we read the file of any time and load it into Array Buffer

const fileInput = document.getElementById("fileInput");

fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];

  const reader = new FileReader();
  reader.addEventListener("load", function (e) {
    const arrayBuffer = e.target.result;
    console.log(arrayBuffer);
  });

  reader.readAsArrayBuffer(file);
});
