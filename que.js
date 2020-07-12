var reconstructQueue = function(people) {
    const compare = ([h1, k1], [h2, k2]) => {
        if (h1 !== h2) return h2 - h1;
        else return k1 - k2;
      };
      people.sort(compare);
      console.log(people)
      const res = [];
      for (const p of people) {
        res.splice(p[1], 0, p); // insert person at index k
        console.log(res)
      }
      return res;
};

reconstructQueue([[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]])
//[[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]