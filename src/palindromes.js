function palindromes(str) {
  let response = ""
  for( c of str) {
    if(c !== "," && c !== "!" && c !== " "){
      response = response + c
    }
  }
  return [response.toLowerCase()];
}
module.exports = palindromes;
