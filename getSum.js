      let temp;
      while((a & b) !== 0){
          temp = (a & b) << 1;
          a = a ^ b;
          b = temp;
      }
      return a ^ b;
console.log(getSum())