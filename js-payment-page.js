


function numberValidationFunc() {
    var input1 = document.getElementById("Number");
    var input2 = document.getElementById("Number2");
    var input3 = document.getElementById("Number3");
    var input4 = document.getElementById("Number4");
    var fulname = document.getElementById("Fulname");
    var pattern = /^[0-9]+$/;
    if (input1.value.match(pattern)) {
        document.getElementById("error-1").innerHTML = "";
        input1.style.border = "1px solid #C8C8C8";
        input2.style.border = "1px solid #FF0000";
        input3.style.border = "1px solid #FF0000";
        input4.style.border = "1px solid #FF0000";
        fulname.style.border = "1px solid #FF0000";
          if(input2.value.match(pattern)){
            input2.style.border = "1px solid #C8C8C8";
          };
          if(input3.value.match(pattern)){
            input3.style.border = "1px solid #C8C8C8";
          };
          if(input4.value.match(pattern)){
            input4.style.border = "1px solid #C8C8C8";
          };
          if(fulname.value.length > 0){
            fulname.style.border = "1px solid #C8C8C8";
          };
          

        return true;
    }else if(fulname.value.length > 0){
      document.getElementById("error-1").innerHTML = "Woops! wrong format, numbers only.";
      document.getElementById("error-1").style.color = "red";
      input1.style.border = "1px solid #FF0000";
      input2.style.border = "1px solid #FF0000";
      input3.style.border = "1px solid #FF0000";
      input4.style.border = "1px solid #FF0000";
      if(input1.value.match(pattern)){
        input1.style.border = "1px solid #C8C8C8";
      };
      if(input2.value.match(pattern)){
        input2.style.border = "1px solid #C8C8C8";
      };
      if(input3.value.match(pattern)){
        input3.style.border = "1px solid #C8C8C8";
      };
      if(input4.value.match(pattern)){
        input4.style.border = "1px solid #C8C8C8";
      };

      fulname.style.border = "1px solid #C8C8C8";
      return true;
    
    }else if (input2.value.match(pattern)){
        document.getElementById("error-1").innerHTML = "Woops! wrong format, numbers only.";
        document.getElementById("error-1").style.color = "red";
        input1.style.border = "1px solid #FF0000";
        input3.style.border = "1px solid #FF0000";
        input4.style.border = "1px solid #FF0000";
        if(input1.value.match(pattern)){
            input1.style.border = "1px solid #C8C8C8";
          };
        if(input3.value.match(pattern)){
            input3.style.border = "1px solid #C8C8C8";
          };
          if(input4.value.match(pattern)){
            input4.style.border = "1px solid #C8C8C8";
          };
        if(input3.value.match(pattern)){
            input3.style.border = "1px solid #C8C8C8";
          };
          if(fulname.value.length > 0){
            fulname.style.border = "1px solid #C8C8C8";
          };
          
          input2.style.border = "1px solid #C8C8C8";
        return true;
    } else if (input3.value.match(pattern)) {
        document.getElementById("error-1").innerHTML = "Woops! wrong format, numbers only.";
        document.getElementById("error-1").style.color = "red";
        input1.style.border = "1px solid #FF0000";
        input2.style.border = "1px solid #FF0000";
        input4.style.border = "1px solid #FF0000";
        if(input1.value.match(pattern)){
            input1.style.border = "1px solid #C8C8C8";
          };
        if(input2.value.match(pattern)){
            input2.style.border = "1px solid #C8C8C8";
          };
          if(input4.value.match(pattern)){
            input4.style.border = "1px solid #C8C8C8";
          };
          if(fulname.value.length > 0){
            fulname.style.border = "1px solid #C8C8C8";
          };
          input3.style.border = "1px solid #C8C8C8";
        return true;
    } else if(input4.value.match(pattern)){

        document.getElementById("error-1").innerHTML = "Woops! wrong format, numbers only.";
        document.getElementById("error-1").style.color = "red";
        input1.style.border = "1px solid #FF0000";
        input2.style.border = "1px solid #FF0000";
        input3.style.border = "1px solid #FF0000";
        if(input1.value.match(pattern)){
            input1.style.border = "1px solid #C8C8C8";
          };
        if(input2.value.match(pattern)){
            input2.style.border = "1px solid #C8C8C8";
          };
          if(input3.value.match(pattern)){
            input3.style.border = "1px solid #C8C8C8";
          };
          if(fulname.value.length > 0){
            fulname.style.border = "1px solid #C8C8C8";
          };
        input4.style.border = "1px solid #C8C8C8";
    }
    else{
        
        document.getElementById("error-1").innerHTML = "Woops! wrong format, numbers only.";
        document.getElementById("error-1").style.color = "red";
        input1.style.border = "1px solid #FF0000";
        input2.style.border = "1px solid #FF0000";
        input3.style.border = "1px solid #FF0000";
        input4.style.border = "1px solid #FF0000";
        fulname.style.border = "1px solid #FF0000";
        return false;
    }

    
}

  

