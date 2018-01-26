// ---- JAVASCRIPT CODE ---- //

//FIRST ACCORDION
var showAccordionOne = function(){
  var textIdOne = document.getElementById('textIdOne');
  if(textIdOne.className == "textHide"){
    textIdOne.className = "textHide textShow";
  }else{
    textIdOne.className = "textHide";
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
  if(textIdTwo.className == "textHide"){
    textIdTwo.className = "textHide textShow";
  }else{
    textIdTwo.className = "textHide";
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
  if(textIdThree.className == "textHide"){
    textIdThree.className = "textHide textShow";
  }else{
    textIdThree.className = "textHide";
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
