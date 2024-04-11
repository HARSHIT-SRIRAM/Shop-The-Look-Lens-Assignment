function FindingWhiteBox(Matrix) {
  // intializing values for box of required
  let Top = null;
  let Left = null;
  let BoxWidth = 0;
  let BoxHeight = 0;

  // for knowing length of matrix and single array
  let MatrixLength = Matrix.length;
  let LengthOfSingleArray = Matrix[0].length;

  // to know the first white box point to mark top and left values
  for (let i = 0; i < MatrixLength; i++) {
    for (let j = 0; j < LengthOfSingleArray; j++) {
      if (Matrix[i][j] === "w") {
        Left = j;
        Top = i;
        break;
      }
    }
    if (Top !== null) break;
  }

  // if box point is not found then we return null
  if (Top === null || Left === null) {
    return null;
  }

  // used for calculating box width
  for (let k = Left; k < LengthOfSingleArray && Matrix[Top][k] === "w"; k++) {
    BoxWidth = BoxWidth + 1;
  }

  // used for calculating box height
  for (let k = Top; k < MatrixLength && Matrix[k][Left] === "w"; k++) {
    BoxHeight = BoxHeight + 1;
  }

  // Returning the values of box if found
  return { top: Top, left: Left, boxheight: BoxHeight, boxwidth: BoxWidth };
}

const Matrix = [
  ["b", "b", "b", "b", "b"],
  ["b", "w", "w", "w", "b"],
  ["b", "w", "w", "w", "b"],
  ["b", "w", "w", "w", "b"],
  ["b", "b", "b", "b", "b"],
];

const result = FindingWhiteBox(Matrix);
if (result !== null) {
  console.log("TOP:", result["top"]);
  console.log("LEFT:", result["left"]);
  console.log("HEIGHT:", result["boxheight"]);
  console.log("WIDTH:", result["boxwidth"]);
} else {
  console.log("No white box found.");
}
