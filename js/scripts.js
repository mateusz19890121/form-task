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
  let surrnameVal = $('#surname').val();

  let birthVal = $('#birth').val();
  if(birthVal != ''){
    birthVal = new Date(birthVal);
    let today = new Date();
    let age = Math.floor((today - birthVal) / (365.25 *24 * 60 * 60 * 1000));
    $('#resultAge').html(age+' years old');
  }

  let birthDate = $('#birth').val();
  let ageVal = $('#age').val();
  let heightVal = $('#height').val();
  let weightVal = $('#weight').val();
  let genderVal = $('#male').val();
  let genderVal2 = $('#female').val();
  let countryVal = $('#country').val();
  let agreeVal = $('#weight').val();
  // let actualDate = getTime();
  $('#resultName').text(nameVal);
  $('#resultSurname').text(surrnameVal);
  $('#resultBirth').text(birthDate);
  // $('#resultAge').text(getAge());
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


  $('#resultCountry').text(countryVal.toUpperCase());
  if($('#agree').is(":checked")){
    $('#resultAgree').text('Yes');
  } else{
    $('#resultAgree').text('No');
  }
//WALIDACJA
  $(".error").remove();
  if (nameVal.length < 1) {
    $('#first_name').after('<span class="error">This field is required</span>');
  }
  if (surrnameVal.length < 1) {
    $('#last_name').after('<span class="error">This field is required</span>');
  }
  if (birthDate.length < 1) {
    $('#last_name').after('<span class="error">This field is required</span>');
  }
  if (email.length < 1) {
    $('#email').after('<span class="error">This field is required</span>');
  } else {
    var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
    var validEmail = regEx.test(email);
    if (!validEmail) {
      $('#email').after('<span class="error">Enter a valid email</span>');
    }
  }
  if (password.length < 8) {
    $('#password').after('<span class="error">Password must be at least 8 characters long</span>');
  }
});

})


// });
//     $('.tekst1').on('click', function(e){
//       console.log($(this))
//       $(this).find('.input1').val("checked");
      
//     })

// $(".tekst1").on('click', function() {
//   $('#agree').is(":checked");
