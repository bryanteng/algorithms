function rotate_right(array){
    let ret =[]
      for(let i = 0; i<array.length; i++){
        let temp = []
        for(let j = 0; j<array.length; j++){
          temp.push(array[j][i])
        }
      ret.push(temp.reverse())
      }
    return ret
  }