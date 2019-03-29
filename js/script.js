// Solution goes here

$(function(){
  $("#mistake").hide();

  let mistake_name = false;
  let mistake_pass = false;
  let mistake_confirm = false;
  let mistake_email = false;

  $("#display-name").focusout(function(){
      check_name();
  });

  $("#pass").focusout(function(){
      check_pass();
  });

  $("#pass-confirm").focusout(function(){
      check_confirm();
  });


  $("#email").focusout(function(){
      check_email();
  });
  console.log('check begin', mistake)

  function check_name(){
      let name = $("#display-name").val();
      let letterRegex = /^[a-zA-Z]*$/;
      if(!letterRegex.test(name) || name == ''){
        $("#mistake").html("invalid input! Only use letters and at least 5 characters!");
        $("#mistake").show();
        $("#display-name").css('border', '2px solid red');
        mistake_name = true;    
      } else if(name.length < 5){
        $("#mistake").html("invalid input! Only use letters and at least 5 characters!");
        $("#mistake").show();
        $("#display-name").css('border', '2px solid red');
        mistake_name = true; 
      } else {
        $("#mistake").hide();
        $("#display-name").css('border', '2px solid green');
        mistake_name = false;
      };
      console.log('check name', mistake)
  };

  function check_pass(){
      let password = $("#pass").val().length;
      if(password >= 5){
          $("#mistake").hide();
          $("#pass").css('border', '2px solid green');
          mistake_pass = false;
      } else {
          $("#mistake").html("invalid password! Use at least 5 characters!");
          $("#mistake").show();
          $("#pass").css('border', '2px solid red');
          mistake_pass = true;
      };
      console.log('check pass', mistake)
  };

  function check_confirm(){
    let password = $("#pass").val();
    let confirm = $("#pass-confirm").val();
    if(password == confirm && confirm !== ''){
        $("#mistake").hide();
        $("#pass-confirm").css('border', '2px solid green');
        mistake_confirm = false;
    } else {
        $("#mistake").html("does not correspond with password!");
        $("#mistake").show();
        $("#pass-confirm").css('border', '2px solid red');
        mistake_confirm = true;
    };
    console.log('check confirm', mistake)
  };

  function check_email(){
      let mail = $("#email").val();
      let mailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      if(!mailRegex.test(mail) || mail == ''){
        $("#mistake").html("invalid e-mail address!");
        $("#mistake").show();
        $("#email").css('border', '2px solid red');
        mistake_email = true;
      } else {
        $("#mistake").hide();
        $("#email").css('border', '2px solid green');
        mistake_email = false;
         
      };
      console.log('check email', mistake)
  };

  $("#send").click(function(){
   if(mistake_name == true || mistake_pass == true || mistake_confirm == true || mistake_email == true){
        alert("Please fill out the form correctly");    
    } else {
        alert("Registration successfull!");
    };

  });

  $("#reset").click(function(){
      $("input").css('border', '1px solid #ccc');
      $("#mistake").hide();
  })

});  
 






    
