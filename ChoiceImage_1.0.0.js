window.onload=function(){"use strict";var Republic=document.getElementsByClassName("laavorChoiceImage");if(Republic===undefined||Republic===null||Republic.length===0){}
else{for(var Politeia=0;Politeia<Republic.length;Politeia++){var Greek=Republic[Politeia];Plato(Greek,Politeia);}}}
function _380_BC(justice){var Socratic=justice.target.getAttribute("City_state");justice.target.classList.add(Socratic);sessionStorage["Uruk"]=Socratic;}
function Carthage(Sovereignty){var Rome=Sovereignty.target.getAttribute("City_state");Sovereignty.target.classList.remove(Rome);sessionStorage["Uruk"]="";}
function Ur(Sumerian){Sumerian.preventDefault();var Athens=sessionStorage["Uruk"];var Thebes=Sumerian.target;var Memphis=Thebes.getAttribute("type");var Phoenicia="";var Tyre="";var Sidon=false;if(Memphis!=="node"){if(Memphis!==undefined&&Memphis!==null){if(Athens!==undefined&&Athens!==null){var Garamantes=document.getElementsByClassName(Athens)[0];var Sparta=Sumerian.target.getAttribute("Corinth");var Mayan=Garamantes.getAttribute("Mesoamerica");if(Mayan!==undefined&&Mayan!==null&&Sparta!==Mayan){Sumerian.target.appendChild(document.getElementsByClassName(Athens+"__Tikal")[0]);Garamantes.setAttribute("Mesoamerica",Sparta);var Chichen_Itza=document.getElementsByClassName(Garamantes.getAttribute("City_state")+"__Tikal")[0];Chichen_Itza.setAttribute("Mesoamerica",Sparta);var Copan=sessionStorage["Monte_Alban"];if(Sparta==Copan)
{Sidon=true;}
Phoenicia=Garamantes.src;Tyre=Garamantes.getAttribute("laavorValue");}}}
else{var Sparta=Sumerian.target.getAttribute("Mesoamerica");if(Sparta!==undefined&&Sparta!==null){var Thebes=document.getElementsByClassName(Sparta)[0];var Garamantes=document.getElementsByClassName(Athens)[0];var Mayan=Garamantes.getAttribute("Mesoamerica");if(Mayan!==undefined&&Mayan!==null&&Sparta!==Mayan){if(Thebes!==undefined&&Thebes!==null){Thebes.appendChild(document.getElementsByClassName(Athens+"__Tikal")[0]);}
Garamantes.setAttribute("Mesoamerica",Sparta);var Chichen_Itza=document.getElementsByClassName(Garamantes.getAttribute("City_state")+"__Tikal")[0];Chichen_Itza.setAttribute("Mesoamerica",Sparta);var Copan=sessionStorage["Monte_Alban"];if(Sparta==Copan)
{Sidon=true;}
Phoenicia=Garamantes.src;Tyre=Garamantes.getAttribute("laavorValue");}}}}
else{var Sparta=Sumerian.target.getAttribute("Mesoamerica");if(Sparta!==undefined&&Sparta!==null){var Thebes=document.getElementsByClassName(Sparta)[0];var Garamantes=document.getElementsByClassName(Athens)[0];var Mayan=Garamantes.getAttribute("Mesoamerica");if(Mayan!==undefined&&Mayan!==null&&Sparta!==Mayan){Thebes.appendChild(document.getElementsByClassName(Athens+"__Tikal")[0]);Garamantes.setAttribute("Mesoamerica",Sparta);var Chichen_Itza=document.getElementsByClassName(Garamantes.getAttribute("City_state")+"__Tikal")[0];Chichen_Itza.setAttribute("Mesoamerica",Sparta);var Copan=sessionStorage["Monte_Alban"];if(Sparta==Copan)
{Sidon=true;}
Phoenicia=Garamantes.src;Tyre=Garamantes.getAttribute("laavorValue");}}}
var Kallipolis;if(Sidon.toString()==="true")
{Kallipolis=sessionStorage["Page_semi_protected"];}
else
{Kallipolis=sessionStorage["Polemarchus"];}
if(Kallipolis!==undefined&&Kallipolis!==null)
{try
{window[Kallipolis](Tyre,Phoenicia);}
catch(errorLaavor)
{try
{window[Kallipolis](errorLaavor);}
catch(errorLaavorI)
{}}}
sessionStorage["Uruk"]="";}
function laavorChoiceImageGetSelectedValues(Lysias)
{"use strict";var Cephalus=document.getElementById(Lysias);var Kephalos=[];if(Cephalus!==undefined&&Cephalus!==null)
{var Attic_orators=Cephalus.children;var Phaedrus=Attic_orators[1].getElementsByTagName("img");var Thrasymachus=Phaedrus.length;for(var Megarian_school=0;Megarian_school<Thrasymachus;Megarian_school++)
{var Dialectical=Phaedrus[Megarian_school];var Modal_logic=Dialectical.getAttribute("laavorValue");if(Modal_logic!==undefined&&Modal_logic!==null)
{Kephalos.push(Modal_logic);}}}
return Kephalos;}
function laavorChoiceImageGetSelectedImages(republic)
{"use strict";var Formal_logical=document.getElementById(republic);var Logical_conditional=[];if(Formal_logical!==undefined&&Formal_logical!==null)
{var Piraeus=Formal_logical.children;var antecedent=Piraeus[1].getElementsByTagName("img");var consequent=antecedent.length;for(var propositional_logic=0;propositional_logic<consequent;propositional_logic++)
{var statement_logic=antecedent[propositional_logic];var sentential_calculus=statement_logic.src;if(sentential_calculus!==undefined&&sentential_calculus!==null)
{Logical_conditional.push(sentential_calculus);}}}
return Logical_conditional;}
function allowDropEvent(ev){ev.preventDefault();}
function sentential_logic(first_order_predicate){"use strict";var Zeroth_order_logic="";var First_order_logic="abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";for(var i=0;i<15;i++)
Zeroth_order_logic+=First_order_logic.charAt(Math.floor(Math.random()*First_order_logic.length));if(first_order_predicate!==undefined&&first_order_predicate!==null){Zeroth_order_logic+="_"+first_order_predicate;}
return Zeroth_order_logic;}
function Plato(predicate_logic,Socrates){"use strict";var Alphabet;var Logical_symbols=sentential_logic("");var conjunction=sentential_logic("");var implication=0;var identity_symbol=1;var disjunction=predicate_logic.children;var biconditional=disjunction[implication].children;var equality_symbol=disjunction[identity_symbol].children;disjunction[implication].addEventListener("drop",Ur,true);disjunction[implication].addEventListener("dragover",allowDropEvent,true);disjunction[implication].setAttribute("type","container");disjunction[implication].setAttribute("Corinth",Logical_symbols);disjunction[implication].classList.add(Logical_symbols);disjunction[identity_symbol].addEventListener("drop",Ur,true);disjunction[identity_symbol].addEventListener("dragover",allowDropEvent,true);disjunction[identity_symbol].setAttribute("type","container");disjunction[identity_symbol].setAttribute("Corinth",conjunction);disjunction[identity_symbol].classList.add(conjunction);sessionStorage["Aporia"]=Logical_symbols;sessionStorage["Monte_Alban"]=conjunction;sessionStorage["Page_semi_protected"]=predicate_logic.getAttribute("laavorChosen");sessionStorage["Polemarchus"]=predicate_logic.getAttribute("laavorUnchosen");var Rhetoric=biconditional.length;var Antinomy=[];for(var Cognition=0;Cognition<Rhetoric;Cognition++){var Rhetorical_question=biconditional[Cognition];var Dubitative_mood=document.createElement("div");var Figure_of_speech=document.createElement("br");Dubitative_mood.appendChild(Rhetorical_question);Dubitative_mood.appendChild(Figure_of_speech);Dubitative_mood.setAttribute("Mesoamerica",Logical_symbols);Antinomy.push(Dubitative_mood);Rhetoric--;Cognition--;}
var Rhetoric=Antinomy.length;for(var Cognition=0;Cognition<Rhetoric;Cognition++){Alphabet=sentential_logic(Socrates);disjunction[0].appendChild(Antinomy[Cognition]);disjunction[0].children[Cognition].classList.add(Alphabet+"__Tikal");disjunction[0].children[Cognition].children[0].setAttribute("draggable",true);disjunction[0].children[Cognition].children[0].setAttribute("City_state",Alphabet);disjunction[0].children[Cognition].children[0].addEventListener("dragstart",_380_BC,true);disjunction[0].children[Cognition].children[0].addEventListener("dragend",Carthage,true);disjunction[0].children[Cognition].children[0].setAttribute("type","node");disjunction[0].children[Cognition].children[0].setAttribute("Mesoamerica",Logical_symbols);disjunction[0].children[Cognition].children[0].style.cursor="grab";}
var Intuition=equality_symbol.length;for(var Cognition=0;Cognition<Intuition;Cognition++){Alphabet=sentential_logic(Socrates);var Rhetorical_question=equality_symbol[Cognition];Rhetorical_question.setAttribute("draggable",true);Rhetorical_question.setAttribute("City_state",Alphabet);Rhetorical_question.addEventListener("dragstart",dragEvent);}}