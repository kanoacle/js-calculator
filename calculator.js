var calculatorModule = (function(){
  //private
  var memory = 0;
  var total = 0;
  //public
  return {
    load: function(n){
      total = n;
      return n;
    },
    getTotal: function(){
      return total;
    },
    add: function(n){
      total += n;
      return total;
    },
    subtract: function(n){
      total -= n;
      return total;
    },
    multiply: function(n){
      total *= n;
      return total;
    },
    divide: function(n){
      total /= n;
      return total;
    },
    recallMemory: function(){
      return memory;
    },
    saveMemory: function(){
      memory = total;
    }
  };
});


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */


  /**
   * Stores the value of `total` to `memory`
   */


  /**
   * Clear the value stored at `memory`
   */

  /**
   * Validation
   */

