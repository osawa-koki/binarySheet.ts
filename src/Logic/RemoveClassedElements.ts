
function RemoveClassedElements(className: string) {
  const cells = document.getElementsByClassName(className);
  const cellsArray = Array.prototype.slice.call(cells);
  cellsArray.forEach(function(cell) {
    cell.remove();
  });
}

export { RemoveClassedElements };
