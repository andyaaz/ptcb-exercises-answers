for (var i = 1; i < 31; i = i + 1) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('Hong Kong');
  } else if (i % 3 === 0) {
    console.log('Hong');
  } else if (i % 5 === 0) {
    console.log('Kong');
  } else {
    console.log(i);
  }
}
