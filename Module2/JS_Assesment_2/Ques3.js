const items =["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"]
const counts=items.reduce((acc,category)=>{ 
  if (!acc[category]){
    acc[category]=0;
  }
  acc[category]++;
  return acc;
}, {}); 
console.log(counts);  // { electronics: 2, clothing: 2, toys: 3 }