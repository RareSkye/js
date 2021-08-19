function descendingOrder(n){
  let convertN = n.toString();
  let newArr = convertN.split('');
  let sortArr = newArr.sort();
  let reverseArr = sortArr.reverse();
  let joinArr = reverseArr.join('');
  let newN = Number(joinArr);
  return newN;
}