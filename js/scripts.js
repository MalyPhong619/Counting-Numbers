function countingNumbers(numbersTo, numbersBy) {
  var newNumbers = [];
  for(var i = numbersBy; i <= numbersTo; i += numbersBy){
    newNumbers.push(i);
  }
  return newNumbers;
}



$(document).ready(function(){
  $(".form-group").submit(function(event){
    event.preventDefault();
    var countToInput = parseInt($("#count-to-input").val());
    var countByInput = parseInt($("#count-by-input").val());

    var result = countingNumbers(countToInput, countByInput);
    if(countToInput >= 0 && countByInput >=0) {
      if (countToInput > countByInput) {
       countingNumbers(countToInput, countByInput);
     } else if (countToInput < countByInput) {
       alert("Make sure Count to Input is Greater than Count by Input.");
     }
    } else {
      alert("Make values are greater than or equal to 0.")
    }

    $("#output").text(result);
  });
});
