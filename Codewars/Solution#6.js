//Transfrom rgb to hex
//Look for hex transform algorithm
//Check for values
//Update invalid values
//Transform to hex
function rgb(r, g, b) {
  let values = [...arguments];
  let newValues = values.map(x => {
    if (x < 0) {
      return (x = 0);
    } else if (x > 255) {
      return (x = 255);
    } else {
      return x;
    }
  });
  return ((1 << 24) + (newValues[0] << 16) + (newValues[1] << 8) + newValues[2])
    .toString(16)
    .slice(1)
    .toUpperCase();
}

rgb(0, 0, -20);
rgb(300, 255, 255);
