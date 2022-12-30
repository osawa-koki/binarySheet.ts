import { RemoveClassedElements } from './Logic/RemoveClassedElements';

import { Logger } from './Logger';
const logger = new Logger();

const BIN = 2;
const OCT = 8;
const DEC = 10;
const HEX = 16;

(() => {
  const fileButton = document.getElementById('fileButton');
  const cellContainer = document.getElementById('cellContainer');
  const importImg = document.getElementById('importImg');
  const loaderContainer = document.getElementById('loaderContainer');

  if (fileButton === null) {
    logger.Error("'fileButton' is null");
    return;
  }
  if (cellContainer === null) {
    logger.Error("'cellContainer' is null");
    return;
  }
  if (importImg === null) {
    logger.Error("'importImg' is null");
    return;
  }
  if (loaderContainer === null) {
    logger.Error("'loaderContainer' is null");
    return;
  }

  const byteArray: number[] = [];
  // let uint8Array: Uint8Array = new Uint8Array();

  fileButton.addEventListener("change", function() {
    loaderContainer.classList.add('loading');
    setTimeout(() => {
      const files = (this as HTMLInputElement).files;
      if (files === null) {
        logger.Error("'files' is null");
        loaderContainer.classList.remove('loading');
        return;
      }
      if (files.length === 0) {
        logger.Error("'files' is empty");
        loaderContainer.classList.remove('loading');
        return;
      }
      const file = files[0];
      const reader = new FileReader();
      reader.onload = function() {
        RemoveClassedElements('cell');
        RemoveClassedElements('row_index');
        byteArray.splice(0);
        const arrayBuffer = this.result;
        if (arrayBuffer === null) {
          logger.Error("'arrayBuffer' is null");
          loaderContainer.classList.remove('loading');
          return;
        }
        const dataView = new DataView((arrayBuffer as ArrayBuffer));
        // uint8Array = new Uint8Array((arrayBuffer as ArrayBuffer));
        for (let i = 0; i < dataView.byteLength; i++) {
          byteArray.push(dataView.getUint8(i));
        }
        logger.Info(`Loaded ${byteArray.length} bytes`);
        // logger.Info(`Loaded ${uint8Array.length} bytes`);

        for (let i = 0; i < byteArray.length; i++) {
          if (i % 10 === 0) {
            const row_index = document.createElement('div');
            row_index.classList.add('row_index');
            row_index.textContent = (i / 10).toString();
            cellContainer.appendChild(row_index);
          }
          const cell = document.createElement('div');
          cell.classList.add('cell');
          cell.textContent = byteArray[i].toString(HEX).toUpperCase().padStart(2, "0");
          cell.title = `Byte [index: ${i+1}] [value: ${byteArray[i]}]`;
          cellContainer.appendChild(cell);
        }
        loaderContainer.classList.remove('loading');
      };
      reader.readAsArrayBuffer(file);
    }, 300);
  });

  importImg.addEventListener("click", function() {
    fileButton.click();
  });

})();
