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
    let emailVal = $('#email').val();
    let heightVal = $('#height').val();
    let weightVal = $('#weight').val();
    let genderVal = $('#male').val();
    let genderVal2 = $('#female').val();
    let countryVal = $('#country').val();
    let agreeVal = $('#weight').val();
    let prefixVal = $('.prefix').val();
    let telephoneVal = $('.telephone').val();
    let resultsGenderField = $('#resultGender').text();
    let resultsAgreeField = $('resultAgree').text();
    let currentDate = formatDate(new Date());
    console.log(currentDate);
    
    
    $('#resultTelephone').text(prefixVal + " " + telephoneVal);
    
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
    if (nameVal.length == 0) {
      $('.name__row').after('<span class="error">This field is required</span>');
    }
    if (nameVal.length < 2 && nameVal.length > 1) {
      $('.name__row').after('<span class="error">Minimum 2 letters required</span>');
    }else{
      $('#resultName').text(nameVal);
    }

    if (surrnameVal.length == 0) {
      $('.surname__row').after('<span class="error">This field is required</span>');
    }
    if (surrnameVal.length < 2 && nameVal.length > 1) {
      $('.surname__row').after('<span class="error">Minimum 2 letters required</span>');
    }else{
      $('#resultSurname').text(surrnameVal);
    }

    if (emailVal.length < 1) {
      $('.email__row').after('<span class="error">This field is required</span>');
    }
    
      let regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      let validEmail = regEx.test(emailVal);
      console.log(validEmail);
      console.log(emailVal);
      if (!validEmail && emailVal.length > 1) {
        $('.email__row').after('<span class="error">Enter a valid email</span>');
      }else{
        $('#resultEmail').text(emailVal);
      }
    
    if (telephoneVal.length < 1) {
      $('.telephone__row').after('<span class="error">This field is required</span>');
    }
    if (telephoneVal.length < 9 && telephoneVal.length > 1) {
      $('.telephone__row').after('<span class="error">Minimum 9 numbers required</span>');
    }

    if (birthDate.length < 1) {
      $('.birth__row').after('<span class="error">This field is required</span>');
    }
    if (birthDate === currentDate ) {
      $('.birth__row').after('<span class="error">Date of birth can not be todays date</span>');
    }else{
      $('#resultBirth').text(birthDate);
    }
    
    if (heightVal.length < 1) {
      $('.height__row').after('<span class="error">This field is required</span>');
    }
    let regex2 = /(1[3-8][0-9]|19[0-9]|2[01][0-9]|220)/;
    let validHeight = regex2.test(heightVal);
    console.log(validHeight);
    if (!validHeight && heightVal.length > 1) {
      $('.height__row').after('<span class="error">Height must be minmum 130 cm and maximum 220cm</span>');
    }
    if (weightVal.length < 8) {
      $('.weight__row').after('<span class="error">This field is required</span>');
    }
    if (resultsGenderField.length < 1) {
      $('.gender__row').after('<span class="error">This field is required</span>');
    }
    if (resultsAgreeField.length <= 2) {
      $('.agree__row').after('<span class="error">This field is required</span>');
    }
  });

    const countrySelect = $('#country');
    countrySelect.change(function () {
      let prefixVal = $('.prefix');

      if($(this).val() == 'pl'){
        prefixVal.val('48');
      }
      if($(this).val() == 'en'){
        prefixVal.val('44');
      }
      if($(this).val() == 'de'){
        prefixVal.val('49');
      }
      if($(this).val() == 'usa'){
        prefixVal.val('1');
      }
      
      

    })
  })
  function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}