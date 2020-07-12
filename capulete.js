function whatIsInAName(collection, source) {
    let keys = Object.keys(source)
    return collection.filter(el=>{
        let matches = 0;
        for(let i=0; i<keys.length; i++){
                console.log(keys[i])
            if(el[keys[i]] == source[keys[i]]){
                matches++
            }
        }
        return matches == keys.length;
    })
  }
  
  console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }))
