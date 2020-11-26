function check() {
    
    var check = document.getElementsByTagName("input");
    var count =  0;
   
    let myPromise = new Promise(function(myResolve, myReject) {
    
    for (var i = 0; i < check.length; i++) {
      
        if (check[i].checked) {
            count++;
            if(count ==5){
                alert(" Congrats !!\n5 Tasks have been successfully completed.");
                 myResolve("Successfully completed 5 tasks");
                 console.log("entered if statement");
                $(".list").toggle(this.disabled);
            }
             
            else {
                console.log("entered else condition")
              myReject("Error");
           }
        }
       
    }
   });
  }
