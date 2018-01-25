// ---- JAVASCRIPT CODE ---- //

//FIRST ACCORDION
var showAccordionOne = function(){
  var textIdOne = document.getElementById('textIdOne');
  if(textIdOne.className == "textOne"){
    textIdOne.className = "textOne openAccordion";
  }else{
    textIdOne.className = "textOne";
  }

  var btnAccordionOne = document.getElementById('btnAccordionOne');
  if(btnAccordionOne.className == "btn-style"){
    btnAccordionOne.className = "btnAccordionColor";
  }else{
    btnAccordionOne.className = "btn-style";
  }   
} 
//FIRST ACCORDION

//SECOND ACCORDION
var showAccordionTwo = function(){
  var textIdTwo = document.getElementById('textIdTwo');
  if(textIdTwo.className == "textTwo"){
    textIdTwo.className = "textTwo openAccordion";
  }else{
    textIdTwo.className = "textTwo";
  }

  var btnAccordionTwo = document.getElementById('btnAccordionTwo');
  if(btnAccordionTwo.className == "btn-style"){
    btnAccordionTwo.className = "btnAccordionColor";
  }else{
    btnAccordionTwo.className = "btn-style";
  }
}
//SECOND ACCORDION

//THIRD ACCORDION
var showAccordionThree = function(){
  var textIdThree = document.getElementById('textIdThree');
  if(textIdThree.className == "textThree"){
    textIdThree.className = "textThree openAccordion";
  }else{
    textIdThree.className = "textThree";
  }

  var btnAccordionThree = document.getElementById('btnAccordionThree');
  if(btnAccordionThree.className == "btn-style"){
    btnAccordionThree.className = "btnAccordionColor";
  }else{
    btnAccordionThree.className = "btn-style";
  }
}
//THIRD ACCORDION

// ---- END JAVASCRIPT CODE ---- //
