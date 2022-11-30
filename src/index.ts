
(() => {
  const fileButton = document.getElementById('fileButton');

  if (fileButton === null) {
    //logger.error("'fileButton' is null");
    return;
  }

  fileButton.addEventListener("change", function() {
    const files = (this as HTMLInputElement).files;
    if (files === null) {
      //logger.error("'files' is null");
      return;
    }
    if (files.length === 0) {
      //logger.error("'files' is empty");
      return;
    }
    const file = files[0];
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = () => {
      console.log(1);

      // byteObjects.splice(0);
      // loading.classList.add("loading");
      // //exportImg.classList.remove("unable");
      // removeChildren(editerX);
      // const dataView = new DataView(reader.result);
      // if (FILE_SIZE_CONFIRM_LIMIT < dataView.byteLength && !window.confirm(`ファイルサイズが「${dataView.byteLength}」バイトあります。\n処理を続行しますか???`)) {
      //   loading.classList.remove("loading");
      //   return;
      // };
      // fileName.textContent = file.name;
      // try {
      //   doNtimes(dataView.byteLength, i => readOutByte(dataView, i));
      // } catch (ex) {
      //   exportImg.classList.add("unable");
      // }
    };
  });

})();
