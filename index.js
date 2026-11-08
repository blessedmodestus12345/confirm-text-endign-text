function strEndingTool(strToCheck, strToCheckAgainst){
if(strToCheck.slice(-strToCheckAgainst.length) === strToCheckAgainst){
    return true;
}else{
    return false;
}
}
console.log(strEndingTool("Blessed", "ed"))
console.log(strEndingTool("Blessed", "e"))
console.log(strEndingTool("Blessed", "ss"))
console.log(strEndingTool("Blessed", "d"))