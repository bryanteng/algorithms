function calc(expr) {
    operators=["+","-","/","*"]
    expr=expr.split(" ")
    index = 0
    while(index < expr.length){
      if(operators.includes(expr[index])){
        expr[index-2] = eval(`${expr[index-2]} ${expr[index]} ${expr[index-1]}`)
        expr.splice(index-1,2)
        index-=3
      }
      index++
    }
    ret = expr[0] ? parseFloat(expr[0]) : 0;
    return ret
  }