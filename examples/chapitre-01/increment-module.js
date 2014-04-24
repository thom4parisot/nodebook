var privateValue = 0;

module.exports = function incrementValue(){
  privateValue++;

  return privateValue;
};
