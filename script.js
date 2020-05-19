// every 10 seconds, change the image

let imgs = [];
let figure = document.getElementById('figure');
let counter = 0;

function start(){
  let myFiles = document.getElementById('input').files;
  for (i = 0; i < myFiles.length; i++) {
    console.log(myFiles[i].name);
    imgs.push(myFiles[i]);
  }
}

function imgChange() {

  let currentFig = imgs[counter];
  console.log(imgs[counter]);

  figure.src = URL.createObjectURL(currentFig);
  figure.onload = function() {
        URL.revokeObjectURL(this.src);
      }

  if (counter < imgs.length - 1) {
    counter++;
  } else {
    counter = 0;
  }

}

// function start()
// get a list of files in the folder
    /// use "the file API"?
