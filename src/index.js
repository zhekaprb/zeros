module.exports = function getZerosCount(number) {
  // your implementation
 let zeros = 0;

 for (let i = 5; i < 100000000; i*=5) {

  let tempNumber = number;

    while(tempNumber/i >= 1) {
      zeros +=Math.floor(tempNumber/i);
      tempNumber=tempNumber%i;
    }
 }

 return zeros;
}
