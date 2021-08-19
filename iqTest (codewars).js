function iqTest(numbers){
  var a=[];
  var e =[];
  var o =[]
  a=numbers.split(" ");
  for(var i=0;i<a.length;i++)
  {
  if(a[i]%2==0){ e.push(i)}
  else
  o.push(i);
  }
  if(e.length>1)
  return o[0]+1;
  
  return e[0]+1;
}