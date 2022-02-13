function checkResult(result){
    if(isNaN(result)){
      return alert('Not a Number');
    }else{
      return alert("Total : "+ result)
    }
  }
  
  function calcul(){
    event.preventDefault();
  
    let result;
  
    let saisie1 = parseInt(document.formulaire.saisie1.value);
    let saisie2 = parseInt(document.formulaire.saisie2.value);
    
    if(document.formulaire.operateur.value  == '+')
    {
      result = saisie1 + saisie2;
      checkResult(result);
    }
    else if(document.formulaire.operateur.value  == '-')
    {
      result = saisie1 - saisie2;
      checkResult(result);
    }
    else if(document.formulaire.operateur.value  == '/')
    {
      result = saisie1 / saisie2;
      checkResult(result);
    }
    else if(document.formulaire.operateur.value  == '*')
    {
      result = saisie1 * saisie2;
      checkResult(result);
    }
    else
    {
      alert('Veuillez saisir un operateur !');
    }
  
  }