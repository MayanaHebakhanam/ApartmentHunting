function apartmentHunting(blocks,reqs){
   let count=0;
   let array1=[];
   let carray=[];
   let b;
    for(let i=0;i<blocks.length;i++){
      b=blocks[i];
        for(let j=0;j<reqs.length;j++){
          if(b[reqs[j]]==true){
            count+=1;
          }
          else{
            continue;
          }
        }
        array1[i]=count;
        for(let l=0;l<array1.length;l++){
          if(l==0){
            carray[l]=array1[l];
          }
          else{
            carray[l]=array1[l]-array1[l-1];
          }
        }
    }
for(let m=0;blocks.length;m++){
  if(carray[m]>=2 && ((blocks[m].gym==true && blocks[m].school==true) ||
   (blocks[m].school==true && blocks[m].store==true))){
   return m+1;
   }
   else{
     continue;
   }
}
}

const block = [
    {
    "gym": true,
    "school": false,
    "store": false,
    },
    {
    "gym": true,
    "school": false,
    "store": false,
    },
    {
    "gym": true,
    "school": true,
    "store": false,
    },
    {
    "gym": false,
    "school": true,
    "store": false,
    },
    {
    "gym": false,
    "school": true,
    "store": true,
    },
    ]
let reqs=["gym","school","store"] ;  
let index=apartmentHunting(block,reqs);
console.log(index);