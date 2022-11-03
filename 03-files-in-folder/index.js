const path = require('path');
const fs = require('fs/promises');


let pathFolder = path.join(__dirname, 'secret-folder');

listFile(pathFolder);

async function listFile(dirPath) {
  let opsion = { withFileTypes: true };
  let fsFiles = await fs.readdir(dirPath, opsion);
  for(let file of fsFiles) {
   let currentFilePath = path.join(dirPath, file.name);
   if(file.isDirectory()) {
      listFile(currentFilePath);
   } 
   else{
      getFileInfo(currentFilePath)
      .then(info => console.log(info));
   }
  }
}
async function getFileInfo(filePath) {
   let fileStat = await fs.stat(filePath);
   let fileSize = `${fileStat.size}b`;
   let fileExt = path.extname(filePath);
   let fileName = path.basename(filePath, fileExt);
   fileExt = fileExt.replace(".", "");
   let fileInfo = [fileName, fileExt, fileSize].join(" - ");
   return fileInfo;
}