 // status of spa selected
 let spaNameStatus = document.getElementById("chooseSpa");
 let addOnsStatus = document.getElementById("chooseAddons");

 // Location NAME variables in text
 let locationNameArray = document.getElementsByClassName("varLocationName");
 let upDatedSpaName = "SELECT SPA"
 // Location ADDRESS variables in text
 let locationAddressArray = document.getElementsByClassName("varLocationAddress");
 let upDatedSpaAddress = "SELECT SPA FOR LOCATION "
 // Location LINK variables in text
 let locationALinkArray = document.getElementsByClassName("varLocationFormLink");
 let upDatedSpaLINK = "SELECT SPA FOR FORM LINK" 
 // NNN Location PHONE variables in text
 let locationPhoneArray = document.getElementsByClassName("varLocationPhone");
 let upDatedSpaPhone = "SELECT SPA FOR Location Phone" 

// Actual Location PHONE variables in text
let acutalLocationPhoneArray = document.getElementsByClassName("varLocationActualPhone");
let upDatedActualSpaPhone = "SELECT SPA FOR Location Phone" 

 // Location WEB LINK variables in text
 let locationWebLinkArray = document.getElementsByClassName("varWebLink");
 let upDatedSpaWebLINK = "SELECT SPA FOR FORM WEB LINK" 

  // Duration Total variables in text
 let DurationTotalArray = document.getElementsByClassName("varDurationTotal");
 let upDatedDurationTotal    = "Please select spa"

 // Duration One variables in text
 let DurationOneArray = document.getElementsByClassName("varDurationOne");
 let upDatedDurationOne    = " "

 // Duration Two variables in text
 let DurationTwoArray = document.getElementsByClassName("varDurationTwo");
 let upDatedDurationTwo    = " "

 // Addons variables in text
 let addOnsArray = document.getElementsByClassName("varAddons");
 let upDatedAddons = "No Addons Selected"
 


 function updateForm(){
     //LOCATION NAME FORLOOP
     for (let i = 0; i < locationNameArray.length; i++) {
             locationNameArray[0].innerHTML = upDatedSpaName;
             locationNameArray[i].innerHTML = upDatedSpaName;      
             }
 
     //LOCATION ADDRESS FORLOOP
     for (let i = 0; i < locationAddressArray.length; i++) {
             locationAddressArray[0].innerHTML = upDatedSpaAddress;
             locationAddressArray[i].innerHTML = upDatedSpaAddress;      
             }

     //LOCATION LINK FORLOOP
     for (let i = 0; i < locationALinkArray.length; i++) {
         locationALinkArray[0].innerHTML = upDatedSpaLINK;
         locationALinkArray[i].innerHTML = upDatedSpaLINK; 
             }

             //LOCATION Phone FORLOOP
     for (let i = 0; i < locationPhoneArray.length; i++) {
        locationPhoneArray[0].innerHTML = upDatedSpaPhone;
        locationPhoneArray[i].innerHTML = upDatedSpaPhone; 
            }

             //LOCATION Actual Phone FORLOOP
     for (let i = 0; i < acutalLocationPhoneArray.length; i++) {
        acutalLocationPhoneArray[0].innerHTML = upDatedActualSpaPhone;
        acutalLocationPhoneArray[i].innerHTML = upDatedActualSpaPhone; 
            }


     //LOCATION WEB LINK FORLOOP
     for (let i = 0; i < locationWebLinkArray.length; i++) {
        locationWebLinkArray[0].innerHTML = upDatedSpaWebLINK;
        locationWebLinkArray[i].innerHTML = upDatedSpaWebLINK; 
            }

        
     //Duration Total FORLOOP
     for (let i = 0; i < DurationTotalArray.length; i++) {
        DurationTotalArray[0].innerHTML = upDatedDurationTotal;
        DurationTotalArray[i].innerHTML = upDatedDurationTotal; 
            }

             //Duration One FORLOOP
     for (let i = 0; i < DurationOneArray.length; i++) {
        DurationOneArray[0].innerHTML = upDatedDurationOne;
        DurationOneArray[i].innerHTML = upDatedDurationOne; 
            }

            //Duration Two FORLOOP
     for (let i = 0; i < DurationTwoArray.length; i++) {
        DurationTwoArray[0].innerHTML = upDatedDurationTwo;
        DurationTwoArray[i].innerHTML = upDatedDurationTwo;
     }
            

     //Addons FORLOOP
     for (let i = 0; i < addOnsArray.length; i++) {
         addOnsArray[0].innerHTML = upDatedAddons;
         addOnsArray[i].innerHTML = upDatedAddons; 
             }
             upDatedAddons = addOnsStatus.value;


     // SWITCH FOR LOCATIONS INFORMATION
     switch (spaNameStatus.value) {
        case "Select Spa":
            upDatedSpaName = "Please Select Spa Spa";
            upDatedSpaAddress = "No Spa Selected";
            upDatedSpaLINK = "No Spa Selected";
            upDatedSpaWebLINK = "No Spa Selected";
            upDatedSpaPhone = "No Spa Selected";
            upDatedDurationTotal = "No Spa Selected";
            upDatedDurationOne = "No Spa Selected";
            upDatedDurationTwo = "No Spa Selected";
            promoPrice = "No Spa Selected"
            break;

            case "Bellisima C&F":
                upDatedSpaName = "Bellisima C&F Spa";
               upDatedSpaAddress = "525 Franklin D. Roosevelt San Juan, PR 00918"+"<br>"+"(Entre JCPenny y Macy's - PRIMER NIVEL JUSTO FRENTE A CHICOS Y SOMA)";
               upDatedSpaLINK = "https://forms.gle/jZo1pD4sBcM41gMU9";
               upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/bellisima-cf-ledpromo";
               upDatedSpaPhone = "(939) 206-5465";
               upDatedDurationTotal = "60 Minutos";
               upDatedDurationOne = "- 25 Minutos Limpieza Profunda de la Piel";
               upDatedDurationTwo = "- 35 Minutos Sesión de Luz LED y Consulta";
               promoPrice = "79.95"
               upDatedActualSpaPhone = "¿No encuentras nuestro spa? Llámenos al (787) 751-6695";
               break; 

               case "Hermetise Ponce":
                upDatedSpaName = "Hermetise Bellisima C&F Spa";
               upDatedSpaAddress = "2050 Ponce By Pass, Ponce, PR 00716"+"<br>"+"(Plaza Del Caribe, Primer Nivel al lado a Pandora)";
               upDatedSpaLINK = "https://forms.gle/a9FC9FzgrDvpvLZg9";
               upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/hermetise-clinica-ledpromo";
               upDatedSpaPhone = "(939) 303-2305";
               upDatedDurationTotal = "60 Minutos";
               upDatedDurationOne = "- 25 Minutos Limpieza Profunda de la Piel";
               upDatedDurationTwo = "- 35 Minutos Sesión de Luz LED y Consulta";
               promoPrice = "79.95"
               upDatedActualSpaPhone = "¿No encuentras nuestro spa? Llámenos al (787) 840-8882";
               break; 
                                
         default:
             break;
     }


     if (spaNameStatus.value === "The Bay Aesthetics Tampa") {
        let hideOne = document.getElementById("hideOne")
        let hideTwo = document.getElementById("hideTwo")
        let hideThree = document.getElementById("hideThree")
        let hideFour = document.getElementById("hideFour")
        let hideFive = document.getElementById("hideFive")


        hideOne.classList.add("hide");
        hideTwo.classList.add("hide");
        hideThree.classList.add("hide");
        hideFour.classList.add("hide");
        hideFive.classList.add("hide");


     } else {
        hideOne.classList.remove("hide");
        hideTwo.classList.remove("hide");
        hideThree.classList.remove("hide");
        hideFour.classList.remove("hide");
        hideFive.classList.remove("hide");


     }

     // Variables in text
     let custNameArray = document.getElementsByClassName("varCustName");
     let repNameArray = document.getElementsByClassName("varRepName");
     let promoPriceArray = document.getElementsByClassName("varPromoPrice");
     let aptDateDayArray = document.getElementsByClassName("varAptDateDay");
     let aptDateMonthArray = document.getElementsByClassName("varAptDateMonth");
     let aptTimeArray = document.getElementsByClassName("varAptTime");
     let aptTimeAmPmArray = document.getElementsByClassName("varAptTimeAmPm");
     let aptTimeMinutesArray = document.getElementsByClassName("varMinutesOfTime");
     let treatmentSelectedArray = document.getElementsByClassName("varTreatmentSelected");

     // USER DATA ENTRY
     let customerName = document.getElementById("custName").value;
     let repName = document.getElementById("empName").value;
    //  let promoPrice = document.getElementById("promoPrice").value;
     let aptDateDay = document.getElementById("aptDateDay").value;
     let aptDateMonth = document.getElementById("aptDateMonth").value;
     let aptMinutesTime = document.getElementById("minutesOfTime").value;
     let aptTime = document.getElementById("aptTime").value;
     let aptTimeAmPm = document.getElementById("aptTimeAmPm").value;
     let treatmentSelected = document.getElementById("chooseTreatment").value;

     // CUSTOMER NAME LOOP
     for(var i = 0; i < custNameArray.length; i++){
     custNameArray[0].innerHTML = customerName;
     custNameArray[i].innerHTML = customerName;
  }
    // REP NAME LOOP
    for(var i = 0; i < repNameArray.length; i++){
     repNameArray[0].innerHTML = repName;
     repNameArray[i].innerHTML = repName;
  }
     // PROMO PRICE LOOP
     for(var i = 0; i < promoPriceArray.length; i++){
     promoPriceArray[0].innerHTML = promoPrice;
     promoPriceArray[i].innerHTML = promoPrice;
  }
      // APT DATE Day LOOP
      for(var i = 0; i < aptDateDayArray.length; i++){
         aptDateDayArray[0].innerHTML = aptDateDay;
         aptDateDayArray[i].innerHTML = aptDateDay;
  }
   // APT DATE Month LOOP
    for(var i = 0; i < aptDateMonthArray.length; i++){
    aptDateMonthArray[0].innerHTML = aptDateMonth;
    aptDateMonthArray[i].innerHTML = aptDateMonth;
}
      // APT TIME LOOP
      for(var i = 0; i < aptTimeArray.length; i++){
         aptTimeArray[0].innerHTML = aptTime;
         aptTimeArray[i].innerHTML = aptTime;
  }

  // APT TIME AMPM LOOP
  for(var i = 0; i < aptTimeAmPmArray.length; i++){
    aptTimeAmPmArray[0].innerHTML = aptTimeAmPm;
    aptTimeAmPmArray[i].innerHTML = aptTimeAmPm;
}

      // APT TIME Minutes LOOP
      for(var i = 0; i < aptTimeMinutesArray.length; i++){
        aptTimeMinutesArray[0].innerHTML = aptMinutesTime;
        aptTimeMinutesArray[i].innerHTML = aptMinutesTime;
 }



  // Selected Treatment LOOP
  for(var i = 0; i < treatmentSelectedArray.length; i++){
    treatmentSelectedArray[0].innerHTML = treatmentSelected;
    treatmentSelectedArray[i].innerHTML = treatmentSelected;
}

let newLink = document.getElementById("newSpaLink");
newLink.setAttribute('href', upDatedSpaWebLINK);


}

//  COPY BOTTON
function copyEvent(id)
{
    var str = document.getElementById(id);
    window.getSelection().selectAllChildren(str);
    document.execCommand("Copy")
}
