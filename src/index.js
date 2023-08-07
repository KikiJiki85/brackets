module.exports = function check(str, bracketsConfig) {
  let flag = true;
  let strTempLength = 0;
  
  while(flag) {
    strTempLength = str.length;
    for (let i = 0; i < bracketsConfig.length; i++) {
      while(str.length !== 0) {
        if (str === str.replace(bracketsConfig[i][0] + bracketsConfig[i][1],'')) break;
        str = str.replace(bracketsConfig[i][0] + bracketsConfig[i][1],'');
      }
    }
    strTempLength === str.length ? flag = false : null;
  }
  
  return str.length === 0;
}
