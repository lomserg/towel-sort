
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix) {
    return []
  }

  const result = matrix.reduce((acc, cur, i) => {
    if(i% 2 == 0) {
      return [...acc, ...cur]
    } else{
      cur = cur.sort((a, b) => b - a)
      return [...acc, ...cur]
    }
    return acc;
  }, [])
return result
}
