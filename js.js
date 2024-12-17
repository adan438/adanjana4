const fs = require ('fs');

const dirpath=__dirname;

let textout="";

for(let i=1; i<=10;i++){
  const textIn=fs.readFileSync(`${dirpath}/${i}.txt`,'utf-8');
  const arr=textIn.split('\r\n');
  let a=0;
  
  i>arr.length+1 ? a==arr.length+1:a=i;

  for(let j=0;j<a;j++){
    textout+=arr[j]+'\r';
  }


}
fs.writeFileSync(`${dirpath}/output.txt`,textout);

