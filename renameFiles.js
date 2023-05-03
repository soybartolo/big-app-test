const fs = require('fs');
const path = require('path');

function renameFilesInDirectory(directoryPath) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error(`Error reading directory: ${directoryPath}`);
      return;
    }

    files.forEach(file => {
      const filePath = path.join(directoryPath, file);
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error(`Error reading file: ${filePath}`);
          return;
        }

        if (stats.isDirectory()) {
          renameFilesInDirectory(filePath);
        } else if (stats.isFile() && path.extname(file) === '.png' && file.includes('@3x')) {
          const newFileName = file.replace('@3x', '');
          const newFilePath = path.join(directoryPath, newFileName);
          fs.rename(filePath, newFilePath, err => {
            if (err) {
              console.error(`Error renaming file: ${filePath}`);
            } else {
              console.log(`Renamed: ${filePath} -> ${newFilePath}`);
            }
          });
        }
      });
    });
  });
}

// Use the actual relative path to your assets folder from the location of the renameFiles.js script
const assetsFolderPath = path.resolve(__dirname, './assets');
renameFilesInDirectory(assetsFolderPath);
