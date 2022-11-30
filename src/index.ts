import { RemoveClassedElements } from './Logic/RemoveClassedElements';

import { Logger } from './Logger';
const logger = new Logger();

(() => {
  const fileButton = document.getElementById('fileButton');

  const byteArray: number[] = [];

  if (fileButton === null) {
    logger.Error("'fileButton' is null");
    return;
  }

  fileButton.addEventListener("change", function() {
    const files = (this as HTMLInputElement).files;
    if (files === null) {
      logger.Error("'files' is null");
      return;
    }
    if (files.length === 0) {
      logger.Error("'files' is empty");
      return;
    }
    const file = files[0];
    const reader = new FileReader();
    reader.onload = function() {
      RemoveClassedElements('cell');
      byteArray.splice(0);
      const arrayBuffer = this.result;
      if (arrayBuffer === null) {
        logger.Error("'arrayBuffer' is null");
        return;
      }
      const dataView = new DataView((arrayBuffer as ArrayBuffer));
      for (let i = 0; i < dataView.byteLength; i++) {
        byteArray.push(dataView.getUint8(i));
      }
      logger.Info(`Loaded ${byteArray.length} bytes`);
    };
    reader.readAsArrayBuffer(file);
  });

})();
