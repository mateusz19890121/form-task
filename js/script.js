// document.addEventListener('DOMcontetntLoaded', function(){
//   const btn = document.querySelector("button");
//   const result = document.getElementById("result");

//   btn.addEventListener('submit', function(e){
    
//     result.style.display = 'inline-block';
//   })

// })
$(function() {
  
const btn = $('form');
btn.on('submit', function (e) {
  e.preventDefault();
  $(this).next('#result').css("display","inline-block");

  let nameVal = $('#name').val();
  console.log(nameVal);
  let surrnameVal = $('#surname').val();
  let birthVal = $('#birth').val();
  let ageVal = $('#age').val();
  let heightVal = $('#height').val();
  let weightVal = $('#weight').val();
  let genderVal = $('#male').val();
  let genderVal2 = $('#female').val();
  let countryVal = $('#country').val();
  let agreeVal = $('#weight').val();
  let actualDate = getTime();
  $('#resultName').text(nameVal);
  $('#resultSurname').text(surrnameVal);
  $('#resultBirth').text(birthVal);
  $('#resultAge').text(getAge());
  $('#resultHeight').text(heightVal);
  $('#resultWeight').text(weightVal);
  $('#resultGender').text(genderVal);
  
  if  ($('#male').is(":checked")){
    $('#resultGender').text('Male');
  }
  else {
    $('#resultGender').text('');
  }

  if  ($('#female').is(":checked")){
    $('#resultGender').text('Female');
  }
  // else {
  //   $('#resultGender').text('');
  // }

  $('#resultCountry').text(countryVal.toUpperCase());
  if($('#agree').is(":checked")){
    $('#resultAgree').text('Yes');
  } else{
    $('#resultAgree').text('No');
  }

  function getAge(){
    let age = birthVal - actualDate;
    return Math.floor(age/(1000 * 60 * 60 * 24 * 365.25))
  }
  getAge();
})


// });
//     $('.tekst1').on('click', function(e){
//       console.log($(this))
//       $(this).find('.input1').val("checked");
      
//     })

// $(".tekst1").on('click', function() {
//   $('#agree').is(":checked");
})