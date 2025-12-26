    // status of spa selected
    let spaNameStatus = document.querySelector(".selected");
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
    // Location MAP LINK variables in text
    let locationMapLinkArray = document.getElementsByClassName("varLocationMapLink");
    let upDatedSpaMapLINK = "SELECT SPA FOR MAP LINK"; // New variable for map link
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

        // LOCATION MAP LINK FORLOOP        
        for (let i = 0; i < locationMapLinkArray.length; i++) {
            locationMapLinkArray[0].innerHTML = upDatedSpaMapLINK;
            locationMapLinkArray[i].innerHTML = upDatedSpaMapLINK; // Update map link
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
        switch (spaNameStatus.innerHTML) {
            case "Select Spa":
                upDatedSpaName = "Please Select Spa Spa";
                upDatedSpaAddress = "No Spa Selected";
                upDatedSpaLINK = "No Spa Selected";
                upDatedSpaMapLINK = "No Spa Selected";
                upDatedSpaWebLINK = "No Spa Selected";
                upDatedSpaPhone = "No Spa Selected";
                upDatedDurationTotal = "No Spa Selected";
                upDatedDurationOne = "No Spa Selected";
                upDatedDurationTwo = "No Spa Selected";
                promoPrice = "No Spa Selected";
                newSpaPhoneNumberSelected = "No Spa Selected";
                insteadOfSpa = "No Spa Selected";
                break;

                                            case "Beyond The Soap Natural Facelift $69.95":
                                            upDatedSpaName = "Beyond The Soap";
                                            upDatedSpaAddress = "702 E Las Olas Blvd. Fort Lauderdale, FL 33301"+"<br>"+"(Next to riverside hotel)";
                                            upDatedSpaLINK = "https://forms.gle/t4o7uxcTFUZ6vqY79";
                                            upDatedSpaMapLINK = "https://maps.app.goo.gl/8p1iKXkDdWEKwZDn7";
                                            upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/beyond-the-soap-natural-facelift";
                                            upDatedSpaPhone = "(954) 526-8934";
                                            upDatedDurationTotal = "60 Minutes";
                                            upDatedDurationOne = "- 15 minutes light cleansing";
                                            upDatedDurationTwo = "- 30 minutes Natural Facelift Treatment and 15 minutes Post Care and Consultation"
                                            promoPrice = "69.95";
                                            upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (786) 317-6182";
                                            treatmentSelected = "Natural Facelift Treatment";
                                            newSpaPhoneNumberSelected = "(786) 317-6182";
                                            insteadOfSpa = "$377";
                                            break;

                                            case "Beyond The Soap 3 in 1 Skin Tightening $59.95":
                                            upDatedSpaName = "Beyond The Soap";
                                            upDatedSpaAddress = "702 E Las Olas Blvd. Fort Lauderdale, FL 33301"+"<br>"+"(Next to riverside hotel)";
                                            upDatedSpaLINK = "https://forms.gle/t4o7uxcTFUZ6vqY79";
                                            upDatedSpaMapLINK = "https://maps.app.goo.gl/8p1iKXkDdWEKwZDn7";
                                            upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/beyond-las-olas-3-in-1-skin-tightening-promo";
                                            upDatedSpaPhone = "(954) 526-8934";
                                            upDatedDurationTotal = "60 Minutes";
                                            upDatedDurationOne = "- 15 minutes light cleansing";
                                            upDatedDurationTwo = "- 30 minutes 3 in 1 Skin Tightening Treatment and 15 minutes Post Care and Consultation"
                                            promoPrice = "59.95";
                                            upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (786) 317-6182";
                                            treatmentSelected = "3 in 1 Skin Skin Tightening Treatment";
                                            newSpaPhoneNumberSelected = "(786) 317-6182";
                                            insteadOfSpa = "$377";
                                            break;

                                            case "Beyond The Soap LED Non-Surgical Facelift $69.95":
                                            upDatedSpaName = "Beyond The Soap";
                                            upDatedSpaAddress = "702 E Las Olas Blvd. Fort Lauderdale, FL 33301"+"<br>"+"(Next to riverside hotel)";
                                            upDatedSpaLINK = "https://forms.gle/t4o7uxcTFUZ6vqY79";
                                            upDatedSpaMapLINK = "https://maps.app.goo.gl/8p1iKXkDdWEKwZDn7";
                                            upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/beyond-the-soap-led-non-surgical-facelift-promo";
                                            upDatedSpaPhone = "(954) 526-8934";
                                            upDatedDurationTotal = "60 Minutes";
                                            upDatedDurationOne = "- 15 minutes light cleansing";
                                            upDatedDurationTwo = "- 30 minutes LED Non-Surgical Facelift Treatment and 15 minutes Post Care and Consultation"
                                            promoPrice = "69.95";
                                            upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (786) 317-6182";
                                            treatmentSelected = "LED Non-Surgical Facelift Treatment";
                                            newSpaPhoneNumberSelected = "(786) 317-6182";
                                            insteadOfSpa = "$377";
                                            break;

                                            case "Beyond The Soap Neck and Jawline $69.95":
                                            upDatedSpaName = "Beyond The Soap";
                                            upDatedSpaAddress = "702 E Las Olas Blvd. Fort Lauderdale, FL 33301"+"<br>"+"(Next to riverside hotel)";
                                            upDatedSpaLINK = "https://forms.gle/t4o7uxcTFUZ6vqY79";
                                            upDatedSpaMapLINK = "https://maps.app.goo.gl/8p1iKXkDdWEKwZDn7";
                                            upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/beyond-the-soap-neck-amp-jawline-promo";
                                            upDatedSpaPhone = "(954) 526-8934";
                                            upDatedDurationTotal = "60 Minutes";
                                            upDatedDurationOne = "- 15 minutes light cleansing";
                                            upDatedDurationTwo = "- 30 minutes Neck and Jawline Tightening Treatment and 15 minutes Post Care and Consultation"
                                            promoPrice = "69.95";
                                            upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (786) 317-6182";
                                            treatmentSelected = "Neck and Jawline Tightening Treatment";
                                            newSpaPhoneNumberSelected = "(786) 317-6182";
                                            insteadOfSpa = "$377";
                                            break;

                                            case "Liv Med Spa Skin Tightening $79.95":
                                    upDatedSpaName = "Liv Med Spa";
                                    upDatedSpaAddress = "16742 Champion Forest Dr. Spring TX, 77379"+"<br>"+"(Champion Forest Shopping Center, next to Marco’s Pizza)";
                                    upDatedSpaLINK = "https://forms.gle/efHYwBrU4fm9QC2c9";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/J7jaRoWTUmvcGJxR7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/liv-med-spa-promo-page";
                                    upDatedSpaPhone = "(281) 410-2798";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 10 minutes Cleansing";
                                    upDatedDurationTwo = "- 35 minutes Skin Tightening Treatment and 15 minutes post-care and consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (346) 395-8095";
                                    treatmentSelected = "Skin Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(346) 395-8095";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Liv Med Spa Natural Facelift $79.95":
                                    upDatedSpaName = "Liv Med Spa";
                                    upDatedSpaAddress = "16742 Champion Forest Dr. Spring TX, 77379"+"<br>"+"(Champion Forest Shopping Center, next to Marco’s Pizza)";
                                    upDatedSpaLINK = "https://forms.gle/efHYwBrU4fm9QC2c9";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/J7jaRoWTUmvcGJxR7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/liv-med-spa-natural-facelift-promo-79-95";
                                    upDatedSpaPhone = "(281) 410-2798";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 10 minutes Cleansing";
                                    upDatedDurationTwo = "- 35 minutes Natural Facelift Treatment and 15 minutes post-care and consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (346) 395-8095";
                                    treatmentSelected = "Skin Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(346) 395-8095";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Liv Med Spa Natural Facelift $59.95":
                                    upDatedSpaName = "Liv Med Spa";
                                    upDatedSpaAddress = "16742 Champion Forest Dr. Spring TX, 77379"+"<br>"+"(Champion Forest Shopping Center, next to Marco’s Pizza)";
                                    upDatedSpaLINK = "https://forms.gle/efHYwBrU4fm9QC2c9";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/J7jaRoWTUmvcGJxR7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/liv-med-spa-natural-facelift-promo-59-95";
                                    upDatedSpaPhone = "(281) 410-2798";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 10 minutes Cleansing";
                                    upDatedDurationTwo = "- 35 minutes Natural Facelift Treatment and 15 minutes post-care and consultation";
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (346) 395-8095";
                                    treatmentSelected = "Skin Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(346) 395-8095";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Liv Med Spa Neck and Jawline $59.95":
                                    upDatedSpaName = "Liv Med Spa";
                                    upDatedSpaAddress = "16742 Champion Forest Dr. Spring TX, 77379"+"<br>"+"(Champion Forest Shopping Center, next to Marco’s Pizza)";
                                    upDatedSpaLINK = "https://forms.gle/efHYwBrU4fm9QC2c9";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/J7jaRoWTUmvcGJxR7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/liv-med-spa-neck-amp-jawline-promo-59-95";
                                    upDatedSpaPhone = "(281) 410-2798";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 10 minutes Cleansing";
                                    upDatedDurationTwo = "- 35 minutes Neck and Jawline Treatment and 15 minutes post-care and consultation";
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (346) 395-8095";
                                    treatmentSelected = "Neck and Jawline Treatment";
                                    newSpaPhoneNumberSelected = "(346) 395-8095";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Liv Med Spa Skin Tightening $89.95":
                                    upDatedSpaName = "Liv Med Spa";
                                    upDatedSpaAddress = "16742 Champion Forest Dr. Spring TX, 77379"+"<br>"+"(Champion Forest Shopping Center, next to Marco’s Pizza)";
                                    upDatedSpaLINK = "https://forms.gle/efHYwBrU4fm9QC2c9";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/J7jaRoWTUmvcGJxR7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/liv-med-spa-skin-tightening-promo-89-95 ";
                                    upDatedSpaPhone = "(281) 410-2798";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 10 minutes Cleansing";
                                    upDatedDurationTwo = "- 35 minutes Skin Tightening Treatment and 15 minutes post-care and consultation";
                                    promoPrice = "89.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (346) 395-8095";
                                    treatmentSelected = "Skin Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(346) 395-8095";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Liv Med Spa Natural Facelift $89.95":
                                    upDatedSpaName = "Liv Med Spa";
                                    upDatedSpaAddress = "16742 Champion Forest Dr. Spring TX, 77379"+"<br>"+"(Champion Forest Shopping Center, next to Marco’s Pizza)";
                                    upDatedSpaLINK = "https://forms.gle/efHYwBrU4fm9QC2c9";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/J7jaRoWTUmvcGJxR7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/liv-med-spa-natural-facelift-promo";
                                    upDatedSpaPhone = "(281) 410-2798";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 10 minutes Cleansing";
                                    upDatedDurationTwo = "- 35 minutes Natural Facelift Treatment and 15 minutes post-care and consultation";
                                    promoPrice = "89.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (346) 395-8095";
                                    treatmentSelected = "Skin Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(346) 395-8095";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Liv Med Spa Skin Tightening $69.95":
                                    upDatedSpaName = "Liv Med Spa";
                                    upDatedSpaAddress = "16742 Champion Forest Dr. Spring TX, 77379"+"<br>"+"(Champion Forest Shopping Center, next to Marco’s Pizza)";
                                    upDatedSpaLINK = "https://forms.gle/efHYwBrU4fm9QC2c9";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/J7jaRoWTUmvcGJxR7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/liv-med-spa-skin-tightening-promo";
                                    upDatedSpaPhone = "(281) 410-2798";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 10 minutes Cleansing";
                                    upDatedDurationTwo = "- 35 minutes Skin Tightening Treatment and 15 minutes post-care and consultation";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (346) 395-8095";
                                    treatmentSelected = "Skin Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(346) 395-8095";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Liv Med Spa Men's Skin Tightening $89.95":
                                    upDatedSpaName = "Liv Med Spa";
                                    upDatedSpaAddress = "16742 Champion Forest Dr. Spring TX, 77379"+"<br>"+"(Champion Forest Shopping Center, next to Marco’s Pizza)";
                                    upDatedSpaLINK = "https://forms.gle/efHYwBrU4fm9QC2c9";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/J7jaRoWTUmvcGJxR7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/liv-med-spa-mens-skin-tightening-promo";
                                    upDatedSpaPhone = "(281) 410-2798";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 10 minutes Cleansing";
                                    upDatedDurationTwo = "- 35 minutes Skin Tightening Treatment and 15 minutes post-care and consultation";
                                    promoPrice = "89.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (346) 395-8095";
                                    treatmentSelected = "Skin Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(346) 395-8095";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Soap Tree Grapevine Natural Facelift $79.95":
                                    upDatedSpaName = "Soap Tree";
                                    upDatedSpaAddress = "Grapevine Mills,"+"<br>"+"3000 Grapevine Mills Pkwy. Grapevine, TX 76051"+"<br>"+"(Unit 302B, Inside the mall, Located across from Meow Wolf, Next to Peppa Pig World of Play)"+"<br>"+"(Park near ENTRANCE 3, it's the closest entrance to the spa.)";
                                    upDatedSpaLINK = "https://forms.gle/Q9TV432wjtbToHKW9";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/5DnJ7a5f1ydRe5x49";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/soap-tree-grapevine-natural-facelift-promo-79" ;
                                    upDatedSpaPhone = "(214) 831-9397";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing";
                                    upDatedDurationTwo = "- 30 minutes Natural Facelift Treatment and 15 minutes post-care and consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (214) 713-8689";
                                    treatmentSelected = "Natural Facelift Treatment";
                                    newSpaPhoneNumberSelected = "(214) 713-8689";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Soap Tree Grapevine Natural Facelift $59.95":
                                    upDatedSpaName = "Soap Tree";
                                    upDatedSpaAddress = "Grapevine Mills,"+"<br>"+"3000 Grapevine Mills Pkwy. Grapevine, TX 76051"+"<br>"+"(Unit 302B, Inside the mall, Located across from Meow Wolf, Next to Peppa Pig World of Play)"+"<br>"+"(Park near ENTRANCE 3, it's the closest entrance to the spa.)";
                                    upDatedSpaLINK = "https://forms.gle/Q9TV432wjtbToHKW9";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/5DnJ7a5f1ydRe5x49";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/grapevine-naturalfacelift-59" ;
                                    upDatedSpaPhone = "(214) 831-9397";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing";
                                    upDatedDurationTwo = "- 30 minutes Natural Facelift Treatment and 15 minutes post-care and consultation";
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (214) 713-8689";
                                    treatmentSelected = "Natural Facelift Treatment";
                                    newSpaPhoneNumberSelected = "(214) 713-8689";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Soap Tree Grapevine Skin Tightening $69.95":
                                    upDatedSpaName = "Soap Tree";
                                    upDatedSpaAddress = "Grapevine Mills,"+"<br>"+"3000 Grapevine Mills Pkwy. Grapevine, TX 76051"+"<br>"+"(Unit 302B, Inside the mall, Located across from Meow Wolf, Next to Peppa Pig World of Play)"+"<br>"+"(Park near ENTRANCE 3, it's the closest entrance to the spa.)";;
                                    upDatedSpaLINK = "https://forms.gle/Q9TV432wjtbToHKW9";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/5DnJ7a5f1ydRe5x49";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/soap-tree-grapevine-skin-tightening-promo" ;
                                    upDatedSpaPhone = "(214) 831-9397";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing";
                                    upDatedDurationTwo = "- 30 minutes Skin Tightening Treatment and 15 minutes post-care and consultation";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (214) 713-8689";
                                    treatmentSelected = "Skin Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(214) 713-8689";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Soap Tree Grapevine Skin Tightening $59.95":
                                    upDatedSpaName = "Soap Tree";
                                    upDatedSpaAddress = "Grapevine Mills,"+"<br>"+"3000 Grapevine Mills Pkwy. Grapevine, TX 76051"+"<br>"+"(Unit 302B, Inside the mall, Located across from Meow Wolf, Next to Peppa Pig World of Play)"+"<br>"+"(Park near ENTRANCE 3, it's the closest entrance to the spa.)";;
                                    upDatedSpaLINK = "https://forms.gle/Q9TV432wjtbToHKW9";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/5DnJ7a5f1ydRe5x49";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/soap-tree-grapevine-skin-tightening-treatment" ;
                                    upDatedSpaPhone = "(214) 831-9397";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing";
                                    upDatedDurationTwo = "- 30 minutes Skin Tightening Treatment and 15 minutes post-care and consultation";
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (214) 713-8689";
                                    treatmentSelected = "Skin Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(214) 713-8689";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Soap Tree Grapevine 3 in 1 Skin Tightening $89.95":
                                    upDatedSpaName = "Soap Tree";
                                    upDatedSpaAddress = "Grapevine Mills,"+"<br>"+"3000 Grapevine Mills Pkwy. Grapevine, TX 76051"+"<br>"+"(Unit 302B, Inside the mall, Located across from Meow Wolf, Next to Peppa Pig World of Play)"+"<br>"+"(Park near ENTRANCE 3, it's the closest entrance to the spa.)";;
                                    upDatedSpaLINK = "https://forms.gle/Q9TV432wjtbToHKW9";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/5DnJ7a5f1ydRe5x49";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/soap-tree-grapevine-3-in-1-skin-tightening-promo" ;
                                    upDatedSpaPhone = "(214) 831-9397";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing";
                                    upDatedDurationTwo = "- 45 minutes 3 in 1 Skin Tightening Treatment and post-care and consultation";
                                    promoPrice = "89.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (214) 713-8689";
                                    treatmentSelected = "3 in 1 Skin Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(214) 713-8689";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Soap Tree Grapevine Men Anti-Aging Treatment $89.95":
                                    upDatedSpaName = "Soap Tree";
                                    upDatedSpaAddress = "Grapevine Mills,"+"<br>"+"3000 Grapevine Mills Pkwy. Grapevine, TX 76051"+"<br>"+"(Unit 302B, Inside the mall, Located across from Meow Wolf, Next to Peppa Pig World of Play)"+"<br>"+"(Park near ENTRANCE 3, it's the closest entrance to the spa.)";;
                                    upDatedSpaLINK = "https://forms.gle/Q9TV432wjtbToHKW9";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/5DnJ7a5f1ydRe5x49";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/soap-tree-grapevine-men-anti-aging-treatment" ;
                                    upDatedSpaPhone = "(214) 831-9397";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing";
                                    upDatedDurationTwo = "- 45 minutes Anti-Aging Treatment and post-care and consultation";
                                    promoPrice = "89.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (214) 713-8689";
                                    treatmentSelected = "Anti-Aging Treatment";
                                    newSpaPhoneNumberSelected = "(214) 713-8689";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Soap Tree Grapevine Neck and Jawline Treatment $69.99":
                                    upDatedSpaName = "Soap Tree";
                                    upDatedSpaAddress = "Grapevine Mills,"+"<br>"+"3000 Grapevine Mills Pkwy. Grapevine, TX 76051"+"<br>"+"(Unit 302B, Inside the mall, Located across from Meow Wolf, Next to Peppa Pig World of Play)"+"<br>"+"(Park near ENTRANCE 3, it's the closest entrance to the spa.)";;
                                    upDatedSpaLINK = "https://forms.gle/Q9TV432wjtbToHKW9";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/5DnJ7a5f1ydRe5x49";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/soap-tree-grapevine-neck-amp-jawline-treatment-69-99" ;
                                    upDatedSpaPhone = "(214) 831-9397";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing";
                                    upDatedDurationTwo = "- 30 minutes Neck & Jawline Treatment and 15 minutes post-care and consultation";
                                    promoPrice = "69.99";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (214) 713-8689";
                                    treatmentSelected = "Neck and Jawline Treatment";
                                    newSpaPhoneNumberSelected = "(214) 713-8689";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Pearl De Flore Augusta":
                                        upDatedSpaName = "Pearl De Flore Spa";
                                    upDatedSpaAddress = "Augusta Mall," + "<br>" + "3450 Wrightsboro Rd, Augusta, GA 30909"+"<br>"+"(Please use the north entrance of Macy’s, 2nd floor, beside Lovisa and near the elevator in the middle of the mall)";
                                    upDatedSpaLINK = "https://forms.gle/ea7Mes4ARmJjo9fy7";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/E8c2G5bgbVf5J7Gr9";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/pearldeflore-augusta-led-promo";
                                    upDatedSpaPhone = "(706) 524-8251";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing";
                                    upDatedDurationTwo = "- 30 minutes LED Anti-aging treatment" + "<br>" + "- 15 minutes of Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (762) 383-5302";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(762) 383-5302";
                                    insteadOfSpa = "$350";
                                    break; 

                                    case "Pearl De Flore Augusta Natural Facelift":
                                        upDatedSpaName = "Pearl De Flore Spa";
                                    upDatedSpaAddress = "Augusta Mall," + "<br>" + "3450 Wrightsboro Rd, Augusta, GA 30909"+"<br>"+"(Please use the north entrance of Macy’s, 2nd floor, beside Lovisa and near the elevator in the middle of the mall)";
                                    upDatedSpaLINK = "https://forms.gle/ea7Mes4ARmJjo9fy7";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/E8c2G5bgbVf5J7Gr9";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/pearl-de-flore-natural-facelift-treatment-79-95";
                                    upDatedSpaPhone = "(706) 524-8251";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing";
                                    upDatedDurationTwo = "- 30 minutes Natural Facelift Treatment" + "<br>" + "- 15 minutes of Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (762) 383-5302";
                                    treatmentSelected = "Natural Facelift Treatment";
                                    newSpaPhoneNumberSelected = "(762) 383-5302";
                                    insteadOfSpa = "$377";
                                    break; 

                                    case "Pearl De Flore Augusta Natural Skin Tightening $79.95":
                                        upDatedSpaName = "Pearl De Flore Spa";
                                    upDatedSpaAddress = "Augusta Mall," + "<br>" + "3450 Wrightsboro Rd, Augusta, GA 30909"+"<br>"+"(Please use the north entrance of Macy’s, 2nd floor, beside Lovisa and near the elevator in the middle of the mall)";
                                    upDatedSpaLINK = "https://forms.gle/ea7Mes4ARmJjo9fy7";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/E8c2G5bgbVf5J7Gr9";
                                    upDatedSpaWebLINK = "https://www.advancedbeautytreatments.com/pages/pearl-de-flore-natural-skin-tightening-79-95";
                                    upDatedSpaPhone = "(706) 524-8251";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing";
                                    upDatedDurationTwo = "- 30 minutes Natural Skin Tightening Treatment" + "<br>" + "- 15 minutes of Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (762) 383-5302";
                                    treatmentSelected = "Natural Skin Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(762) 383-5302";
                                    insteadOfSpa = "$377";
                                    break; 

                                    case "GreenBiotics Ross Park Mall Natural Facelift $79.95":
                                    upDatedSpaName = "GreenBiotics";
                                    upDatedSpaAddress = "Ross Park Mall,"+"<br>"+"1000 Ross Park Mall Dr. Pittsburgh PA 15237"+"<br>"+"(Unit K14, Second floor near Macy’s, right across Auntie Anne's)";
                                    upDatedSpaLINK = " ";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/PA56BDhD9Kogmfk77";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/greenbiotics-ross-park-mall-natural-facelift-treatment";
                                    upDatedSpaPhone = "(412) 212-3520";
                                    upDatedDurationTotal = "45 Minutes";
                                    upDatedDurationOne = "- 15 minutes light cleansing";
                                    upDatedDurationTwo = "- 30 minutes Natural Facelift Treatment and Post Care and Consultation"
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (661) 516-0618";
                                    treatmentSelected = "Natural Facelift Treatment";
                                    newSpaPhoneNumberSelected = "(661) 516-0618";
                                    insteadOfSpa = "$377";
                                    break;

                                    case "Elevatione Spa Davie Natural Skin Tightening $59.95":
                                    upDatedSpaName = "Elevatione Spa Davie";
                                    upDatedSpaAddress = "3728 Davie Road Davie, FL 33314"+"<br>"+"(Varsity Square, Next to Blend Beauty Lounge)";
                                    upDatedSpaLINK = "https://forms.gle/ozE4ecnYeJ7z5uXt6";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/AVMgo5hmvWDxtk6GA";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/elevatione-davie-natural-skin-tightening-59-95" ;
                                    upDatedSpaPhone = "(954) 694-6452";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing";
                                    upDatedDurationTwo = "- 30 minutes Natural Skin Tightening Treatment and 15 minutes post-care and consultation";
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (954) 765-6091";
                                    treatmentSelected = "Natural Skin Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(954) 765-6091";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Elevatione Spa Davie Skin Tightening $69.95":
                                    upDatedSpaName = "Elevatione Spa Davie";
                                    upDatedSpaAddress = "3728 Davie Road Davie, FL 33314"+"<br>"+"(Varsity Square, Next to Blend Beauty Lounge)";
                                    upDatedSpaLINK = "https://forms.gle/ozE4ecnYeJ7z5uXt6";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/AVMgo5hmvWDxtk6GA";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/elevatione-davie-skin-tightening-69-95" ;
                                    upDatedSpaPhone = "(954) 694-6452";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing";
                                    upDatedDurationTwo = "- 30 minutes Skin Tightening Treatment and 15 minutes post-care and consultation";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (954) 765-6091";
                                    treatmentSelected = "Skin Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(954) 765-6091";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Elevatione Spa Davie Men's Skin Tightening $79.95":
                                    upDatedSpaName = "Elevatione Spa Davie";
                                    upDatedSpaAddress = "3728 Davie Road Davie, FL 33314"+"<br>"+"(Varsity Square, Next to Blend Beauty Lounge)";
                                    upDatedSpaLINK = "https://forms.gle/ozE4ecnYeJ7z5uXt6";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/AVMgo5hmvWDxtk6GA";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/elevatione-davie-mens-skin-tightening-promo" ;
                                    upDatedSpaPhone = "(954) 694-6452";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing";
                                    upDatedDurationTwo = "- 30 minutes Skin Tightening Treatment and 15 minutes post-care and consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (954) 765-6091";
                                    treatmentSelected = "Skin Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(954) 765-6091";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Elevatione Spa Davie Body Sculpting $79.95":
                                    upDatedSpaName = "Elevatione Spa Davie";
                                    upDatedSpaAddress = "3728 Davie Road Davie, FL 33314"+"<br>"+"(Varsity Square, Next to Blend Beauty Lounge)";
                                    upDatedSpaLINK = "https://forms.gle/ozE4ecnYeJ7z5uXt6";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/AVMgo5hmvWDxtk6GA";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/elevatione-davie-body-sculpting-promo" ;
                                    upDatedSpaPhone = "(954) 694-6452";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 45 minutes Body Sculpting Treatment";
                                    upDatedDurationTwo = "- 15 minutes post-care and consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (954) 765-6091";
                                    treatmentSelected = "Body Sculpting Treatment";
                                    newSpaPhoneNumberSelected = "(954) 765-6091";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Elevatione Spa Davie 3 in 1 Skin Lifting $89.95":
                                    upDatedSpaName = "Elevatione Spa Davie";
                                    upDatedSpaAddress = "3728 Davie Road Davie, FL 33314"+"<br>"+"(Varsity Square, Next to Blend Beauty Lounge)";
                                    upDatedSpaLINK = "https://forms.gle/ozE4ecnYeJ7z5uXt6";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/AVMgo5hmvWDxtk6GA";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/elevatione-davie-3-in-1-skin-lifting-promo" ;
                                    upDatedSpaPhone = "(954) 694-6452";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing";
                                    upDatedDurationTwo = "- 30 minutes 3 in 1 Skin Lifting Treatment and 15 minutes post-care and consultation";
                                    promoPrice = "89.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (954) 765-6091";
                                    treatmentSelected = "3 in 1 Skin Lifting Treatment";
                                    newSpaPhoneNumberSelected = "(954) 765-6091";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Elevatione Spa Davie 3 in 1 Skin Lifting $79.95":
                                    upDatedSpaName = "Elevatione Spa Davie";
                                    upDatedSpaAddress = "3728 Davie Road Davie, FL 33314"+"<br>"+"(Varsity Square, Next to Blend Beauty Lounge)";
                                    upDatedSpaLINK = "https://forms.gle/ozE4ecnYeJ7z5uXt6";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/AVMgo5hmvWDxtk6GA";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/elevatione-davie-3-in-1-skin-lifting-treatment" ;
                                    upDatedSpaPhone = "(954) 694-6452";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing";
                                    upDatedDurationTwo = "- 30 minutes 3 in 1 Skin Lifting Treatment and 15 minutes post-care and consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (954) 765-6091";
                                    treatmentSelected = "3 in 1 Skin Lifting Treatment";
                                    newSpaPhoneNumberSelected = "(954) 765-6091";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Elevatione Spa Davie 3 in 1 Skin Lifting $89.95":
                                    upDatedSpaName = "Elevatione Spa Davie";
                                    upDatedSpaAddress = "3728 Davie Road Davie, FL 33314"+"<br>"+"(Varsity Square, Next to Blend Beauty Lounge)";
                                    upDatedSpaLINK = "https://forms.gle/ozE4ecnYeJ7z5uXt6";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/AVMgo5hmvWDxtk6GA";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/elevatione-davie-3-in-1-skin-lifting-promo-89" ;
                                    upDatedSpaPhone = "(954) 694-6452";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing";
                                    upDatedDurationTwo = "- 30 minutes 3 in 1 Skin Lifting Treatment and 15 minutes post-care and consultation";
                                    promoPrice = "89.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (954) 765-6091";
                                    treatmentSelected = "3 in 1 Skin Lifting Treatment";
                                    newSpaPhoneNumberSelected = "(954) 765-6091";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Elevatione Spa Davie Hydraglow $79.95":
                                    upDatedSpaName = "Elevatione Spa Davie";
                                    upDatedSpaAddress = "3728 Davie Road Davie, FL 33314"+"<br>"+"(Varsity Square, Next to Blend Beauty Lounge)";
                                    upDatedSpaLINK = "https://forms.gle/ozE4ecnYeJ7z5uXt6";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/AVMgo5hmvWDxtk6GA";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/elevatione-davie-hydraglow-treatment" ;
                                    upDatedSpaPhone = "(954) 694-6452";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing";
                                    upDatedDurationTwo = "- 30 minutes Hydraglow Treatment and 15 minutes post-care and consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (954) 765-6091";
                                    treatmentSelected = "Hydraglow Treatment";
                                    newSpaPhoneNumberSelected = "(954) 765-6091";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Elevatione Spa Davie Natural Facelift $69.95":
                                    upDatedSpaName = "Elevatione Spa Davie";
                                    upDatedSpaAddress = "3728 Davie Road Davie, FL 33314"+"<br>"+"(Varsity Square, Next to Blend Beauty Lounge)";
                                    upDatedSpaLINK = "https://forms.gle/ozE4ecnYeJ7z5uXt6";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/AVMgo5hmvWDxtk6GA";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/elevatione-davie-natural-facelift-69-95" ;
                                    upDatedSpaPhone = "(954) 694-6452";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing";
                                    upDatedDurationTwo = "- 30 minutes Natural Facelift Treatment and 15 minutes post-care and consultation";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (954) 765-6091";
                                    treatmentSelected = "Natural Facelift Treatment";
                                    newSpaPhoneNumberSelected = "(954) 765-6091";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Elevatione Spa Beauty Skin Tightening":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/dEeZzuiPSDNhjzhs8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-spa-amp-beauty-skin-tightening-promo-page" ;
                                    upDatedSpaPhone = "(561) 406-4933";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = " ";
                                    upDatedDurationTwo = " ";
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (561) 469-6135";
                                    treatmentSelected = "Skin Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$350"
                                    break; 

                                    case "Elevatione Spa Beauty Collagen Lifting":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/dEeZzuiPSDNhjzhs8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-spa-amp-collagen-lifting-experience-promo-page";
                                    upDatedSpaPhone = "(561) 406-4933";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = " ";
                                    upDatedDurationTwo = " ";
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (561) 469-6135 ";
                                    treatmentSelected = "Collagen Lifting Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$350"
                                    break; 

                                    case "Elevatione Spa Beauty Non-surgical Face Lift":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/dEeZzuiPSDNhjzhs8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-spa-non-surgical-face-lift-promo-page";
                                    upDatedSpaPhone = "(561) 406-4933";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = " ";
                                    upDatedDurationTwo = " ";
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (561) 469-6135 ";
                                    treatmentSelected = "Non-surgical Face Lift Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$350"
                                    break; 

                                    case "Elevatione Spa Beauty LED":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/dEeZzuiPSDNhjzhs8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-spa-amp-beauty-anti-aging-led-promo-page";
                                    upDatedSpaPhone = "(561) 406-4933";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = " ";
                                    upDatedDurationTwo = " ";
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (561) 469-6135 ";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$350"
                                    break; 

                                    case "Elevatione Spa Beauty Collagen Enhancing 79.95":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/dEeZzuiPSDNhjzhs8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-spa-collagen-enhancing-promo";
                                    upDatedSpaPhone = "(561) 406-4933";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = " ";
                                    upDatedDurationTwo = " ";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (561) 469-6135 ";
                                    treatmentSelected = "Collagen Enhancing Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$350"
                                    break; 

                                    case "Elevatione Spa Beauty Body Sculpting 99.95":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/dEeZzuiPSDNhjzhs8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevetione-bodysculpting-promo";
                                    upDatedSpaPhone = "(561) 406-4933";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = " ";
                                    upDatedDurationTwo = " ";
                                    promoPrice = "99.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (561) 469-6135 ";
                                    treatmentSelected = "Body Sculpting Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$500"
                                    break; 

                                    case "Elevatione Spa Beauty Non-surgical Face Lift And Microdermabrasion":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/dEeZzuiPSDNhjzhs8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-spa-amp-non-surgical-face-lift-experience-promo-page";
                                    upDatedSpaPhone = "(561) 406-4933";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = " ";
                                    upDatedDurationTwo = " ";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (561) 469-6135";
                                    treatmentSelected = "Non-surgical Face Lift & Microdermabrasion Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$350"
                                    break; 

                                    case "Elevatione Spa Beauty Microdermabrasion":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/dEeZzuiPSDNhjzhs8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevationespa-microdermabrasion-promo";
                                    upDatedSpaPhone = "(561) 406-4933";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = " ";
                                    upDatedDurationTwo = " ";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (561) 469-6135";
                                    treatmentSelected = "Microdermabrasion Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$350"
                                    break; 

                                    case "Elevatione Spa Beauty RF Treatment":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/dEeZzuiPSDNhjzhs8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-rf-facial-promo";
                                    upDatedSpaPhone = "(561) 406-4933";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = " ";
                                    upDatedDurationTwo = " ";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (561) 469-6135";
                                    treatmentSelected = "RF Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$350"
                                    break; 

                                    case "Elevatione Spa Beauty Non-Surgical Lifting With Mesotherapy Treatment":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/dEeZzuiPSDNhjzhs8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-antiaging-mesotherapy-promo";
                                    upDatedSpaPhone = "(561) 406-4933";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = " ";
                                    upDatedDurationTwo = " ";
                                    promoPrice = "80";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (561) 469-6135";
                                    treatmentSelected = "Non-Surgical Lifting With Mesotherapy Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$350"
                                    break; 

                                    case "Elevatione Spa Beauty HYDRAGLOW":
                                    upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/dEeZzuiPSDNhjzhs8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevationespa-hydraglow-promo";
                                    upDatedSpaPhone = "(561) 406-4933";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = " ";
                                    upDatedDurationTwo = " ";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (561) 469-6135";
                                    treatmentSelected = "HYDRAGLOW Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$350"
                                    break; 
                                    
                                    case "Elevatione Spa Beauty Collagen Boosting 69.95":
                                    upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/dEeZzuiPSDNhjzhs8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-spa-collagen-boosting-promo";
                                    upDatedSpaPhone = "(561) 406-4933";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "45 minutes of Cleansing and Collagen Boosting Treatment";
                                    upDatedDurationTwo = "15 minutes Consultation";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (561) 469-6135 ";
                                    treatmentSelected = "Collagen Boosting Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$350"
                                    break;

                                    case "Elevatione Spa Beauty Collagen Enhancing Treatment":
                                    upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/dEeZzuiPSDNhjzhs8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-spa-collagen-enhancing-promo";
                                    upDatedSpaPhone = "(561) 406-4933";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "45 minutes of Cleansing and Collagen Boosting Treatment";
                                    upDatedDurationTwo = "15 minutes Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (561) 469-6135 ";
                                    treatmentSelected = "Collagen Enhancing Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$350"
                                    break;

                                    case "Elevatione Spa Beauty Gold Collagen Treatment":
                                    upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/dEeZzuiPSDNhjzhs8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-gold-collagen-facial-page";
                                    upDatedSpaPhone = "(561) 406-4933";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "15 minutes of Cleansing and 30 minutes of Gold Collagen Treatment";
                                    upDatedDurationTwo = "15 minutes Consultation";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (561) 469-6135 ";
                                    treatmentSelected = "Collagen Enhancing Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$250"
                                    break;

                                    case "Elevatione Spa Beauty Microneedling":
                                    upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/dEeZzuiPSDNhjzhs8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-spa-microneedling-treatment-promo-page";
                                    upDatedSpaPhone = "(561) 406-4933";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "45 minutes of Microneedling Treatment";
                                    upDatedDurationTwo = "15 minutes Consultation";
                                    promoPrice = "99";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (561) 469-6135 ";
                                    treatmentSelected = "Collagen Enhancing Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$299"
                                    break;

                                    case "Elevatione Spa Beauty Body Sculpting 79.95":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/dEeZzuiPSDNhjzhs8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-body-sculpting";
                                    upDatedSpaPhone = "(561) 406-4933";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = " ";
                                    upDatedDurationTwo = " ";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (561) 469-6135 ";
                                    treatmentSelected = "Body Sculpting Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$399"
                                    break; 

                                    case "Elevatione Spa Beauty Body Sculpting 69.95":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/dEeZzuiPSDNhjzhs8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/new-elevatione-body-sculpting-promo";
                                    upDatedSpaPhone = "(561) 406-4933";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = " ";
                                    upDatedDurationTwo = " ";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (561) 469-6135 ";
                                    treatmentSelected = "Body Sculpting Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$399"
                                    break;

                                    case "Elevatione Spa Beauty H2O Oxygen Treatment 69":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/dEeZzuiPSDNhjzhs8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-spa-h2o-oxygen-facial-promo-page";
                                    upDatedSpaPhone = "(561) 406-4933";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "45-minutes of Cleansing and H2O Oxygen Treatment";
                                    upDatedDurationTwo = "15-minutes of Consultation";
                                    promoPrice = "69";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (561) 469-6135 ";
                                    treatmentSelected = "Oxygen Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$250"
                                    break;

                                    case "Elevatione Spa Beauty Collagen Mesotherapy Treatment":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/dEeZzuiPSDNhjzhs8";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/elevatione-mesotherapy-facial-promo-page";
                                    upDatedSpaPhone = "(561) 406-4933";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "45-minutes of Cleansing and Collagen Mesotherapy Treatment";
                                    upDatedDurationTwo = "15-minutes Consultation ";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (561) 469-6135 ";
                                    treatmentSelected = "Collagen Boosting Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$299"
                                    break;

                                    case "Elevatione Spa LED 59.95":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/dEeZzuiPSDNhjzhs8";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/new-elevatione-spa-led-promo";
                                    upDatedSpaPhone = "(561) 406-4933";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "15-minutes of Cleansing";
                                    upDatedDurationTwo = "30-minutes LED Treatment and 15 minutes consultation";
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (561) 469-6135 ";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$350"
                                    break;

                                    case "Elevatione Spa Men's LED 69.95":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/dEeZzuiPSDNhjzhs8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-spa-mens-led-treatment-promo-page";
                                    upDatedSpaPhone = "(561) 406-4933";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "15-minutes of Cleansing";
                                    upDatedDurationTwo = "45-minutes LED Treatment and Consultation";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (561) 469-6135 ";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$350"
                                    break;

                                    case "Elevatione Spa Men's LED 89.95":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/dEeZzuiPSDNhjzhs8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-spa-mens-led-treatment-new-promo-page";
                                    upDatedSpaPhone = "(561) 406-4933";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "15-minutes of Cleansing";
                                    upDatedDurationTwo = "45-minutes LED Treatment and Consultation";
                                    promoPrice = "89.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (561) 469-6135 ";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$299"
                                    break;

                                    case "Elevatione Spa Men's Body Sculpting 69.95":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/dEeZzuiPSDNhjzhs8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-mens-body-sculpting-promo";
                                    upDatedSpaPhone = "(561) 406-4933";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = " ";
                                    upDatedDurationTwo = " ";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (561) 469-6135 ";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$350"
                                    break;

                                    case "Elevatione Neck and Jawline Tightening":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/dEeZzuiPSDNhjzhs8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-neck-and-jawline-treatment-69-95";
                                    upDatedSpaPhone = "(561) 406-4933";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes of Consultation";
                                    upDatedDurationTwo = "- 45 minutes of Neck & Jawline Treatment";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (561) 469-6135 ";
                                    treatmentSelected = "Neck and Jawline Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Elevatione Turkey Neck Tightening $79.95":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/dEeZzuiPSDNhjzhs8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-turkey-neck-tightening-treatment-promo";
                                    upDatedSpaPhone = "(561) 406-4933";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes of Consultation";
                                    upDatedDurationTwo = "- 45 minutes of Turkey Neck Tightening Treatment";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (561) 469-6135 ";
                                    treatmentSelected = "Turkey Neck Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Elevatione Sagging Neck Rescue $79.95":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/dEeZzuiPSDNhjzhs8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-sagging-neck-rescue-treatment-promo";
                                    upDatedSpaPhone = "(561) 406-4933";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes of Consultation";
                                    upDatedDurationTwo = "- 45 minutes of Sagging Neck Rescue Treatment";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (561) 469-6135 ";
                                    treatmentSelected = "Sagging Neck Rescue Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Elevatione Pumpkin Mask Treatment $79.95":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/dEeZzuiPSDNhjzhs8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-pumpkin-mask-treatment";
                                    upDatedSpaPhone = "(561) 406-4933";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes of Cleansing";
                                    upDatedDurationTwo = "- 45 minutes of Pumpkin Mask Treatment and Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (561) 469-6135 ";
                                    treatmentSelected = "Pumpkin Mask Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Elevatione Natural Facelifting Treatment $69.95":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/dEeZzuiPSDNhjzhs8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-natural-facelift-treatment-promo";
                                    upDatedSpaPhone = "(561) 406-4933";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes of Consultation";
                                    upDatedDurationTwo = "- 45 minutes of Natural Facelift Treatment";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (561) 469-6135 ";
                                    treatmentSelected = "Natural Facelift Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "FTB Elevatione Natural Facelifting Treatment $69.95":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/dEeZzuiPSDNhjzhs8";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/elevatione-natural-facelift-69-95";
                                    upDatedSpaPhone = "(561) 406-4933";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes of Consultation";
                                    upDatedDurationTwo = "- 45 minutes of Natural Facelift Treatment";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (561) 469-6135 ";
                                    treatmentSelected = "Natural Facelift Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "DTB Elevatione Natural Facelifting Treatment $59.95":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/dEeZzuiPSDNhjzhs8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-natural-facelift-treatment-59-95";
                                    upDatedSpaPhone = "(561) 406-4933";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes of Consultation";
                                    upDatedDurationTwo = "- 45 minutes of Natural Facelift Treatment";
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (561) 469-6135 ";
                                    treatmentSelected = "Natural Facelift Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Elevatione Collagen Restoration Treatment $59.95":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/dEeZzuiPSDNhjzhs8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-collagen-restoration-promo-page";
                                    upDatedSpaPhone = "(561) 406-4933";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 45 minutes of Collagen Restoration Treatment";
                                    upDatedDurationTwo = "- 15 minutes of Consultation";
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (561) 469-6135 ";
                                    treatmentSelected = "Collagen Restoration Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Elevatione Skin Tightening Treatment $69.95":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/dEeZzuiPSDNhjzhs8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-skin-tightening-treatment-69-95";
                                    upDatedSpaPhone = "(561) 406-4933";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 45 minutes of Skin Tightening Treatment";
                                    upDatedDurationTwo = "- 15 minutes of Consultation";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (561) 469-6135 ";
                                    treatmentSelected = "Skin Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "FTB Elevatione Skin Tightening Treatment $69.95":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/dEeZzuiPSDNhjzhs8";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/elevatione-skin-tightening-69-95";
                                    upDatedSpaPhone = "(561) 406-4933";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 45 minutes of Skin Tightening Treatment";
                                    upDatedDurationTwo = "- 15 minutes of Consultation";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (561) 469-6135 ";
                                    treatmentSelected = "Skin Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Elevatione 3 in 1 Skin Lifting Treatment $59.95":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/dEeZzuiPSDNhjzhs8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-3in1-skin-lifting-59";
                                    upDatedSpaPhone = "(561) 406-4933";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 45 minutes of 3 in 1 Skin Lifting Treatment";
                                    upDatedDurationTwo = "- 15 minutes of Consultation";
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (561) 469-6135 ";
                                    treatmentSelected = "Skin Lifting Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Elevatione 3 in 1 Skin Lifting Treatment $69.95":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/dEeZzuiPSDNhjzhs8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-3-in-1-skin-lifting-treatment-69-95";
                                    upDatedSpaPhone = "(561) 406-4933";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 45 minutes of 3 in 1 Skin Lifting Treatment";
                                    upDatedDurationTwo = "- 15 minutes of Consultation";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (561) 469-6135 ";
                                    treatmentSelected = "Skin Lifting Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Elevatione 3 in 1 Skin Lifting Treatment $79.95":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/dEeZzuiPSDNhjzhs8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-3-in-1-skin-lifting-treatment-79-95";
                                    upDatedSpaPhone = "(561) 406-4933";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 45 minutes of 3 in 1 Skin Lifting Treatment";
                                    upDatedDurationTwo = "- 15 minutes of Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (561) 469-6135 ";
                                    treatmentSelected = "Skin Lifting Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Beauty Frizz Ocala LED 79.95":
                        upDatedSpaName = "BeautyFrizz Spa";
                        upDatedSpaAddress = "Paddock Mall,"+"<br>"+"3100 SW College Rd Ocala FL 34474"+"<br>"+"(Unit 402, next to Belk Store)";
                        upDatedSpaLINK = "https://forms.gle/82TrFg5vLcFZQ4A37";
                        upDatedSpaMapLINK = "https://maps.app.goo.gl/hUhGocFRpELioqDh9";
                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/beauty-frizz-ocala-promo-page";
                        upDatedSpaPhone = "(352) 577-9216";
                        upDatedDurationTotal = "60 Minutes";
                        upDatedDurationOne = "- 15 Minutes Cleansing and Facial Massage";
                        upDatedDurationTwo = "- 30 Minutes LED Anti-Aging Treatment & 15 minutes Consultation";
                        promoPrice = "79.95"
                        upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (352) 216-4557";
                        treatmentSelected = "LED Treatment";
                        newSpaPhoneNumberSelected = "(352) 216-4557";
                        insteadOfSpa = "$377"
                        break;     

                        case "Beauty Frizz Ocala Natural Facelift 79.95":
                        upDatedSpaName = "BeautyFrizz Spa";
                        upDatedSpaAddress = "Paddock Mall,"+"<br>"+"3100 SW College Rd Ocala FL 34474"+"<br>"+"(Unit 402, next to Belk Store)";
                        upDatedSpaLINK = "https://forms.gle/82TrFg5vLcFZQ4A37";
                        upDatedSpaMapLINK = "https://maps.app.goo.gl/hUhGocFRpELioqDh9";
                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/beautyfrizz-ocala-facelift-treatment-79-95";
                        upDatedSpaPhone = "(352) 577-9216";
                        upDatedDurationTotal = "60 Minutes";
                        upDatedDurationOne = "- 15 Minutes Cleansing and Facial Massage";
                        upDatedDurationTwo = "- 30 Minutes Natural Facelift Treatment & 15 minutes Consultation";
                        promoPrice = "79.95"
                        upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (352) 216-4557";
                        treatmentSelected = "Natural Facelift Treatment";
                        newSpaPhoneNumberSelected = "(352) 216-4557";
                        insteadOfSpa = "$377"
                        break;  
                        
                        case "Beauty Frizz Ocala Hydraglow + LED Treatment 89.95":
                        upDatedSpaName = "BeautyFrizz Spa";
                        upDatedSpaAddress = "Paddock Mall,"+"<br>"+"3100 SW College Rd Ocala FL 34474"+"<br>"+"(Unit 402, next to Belk Store)";
                        upDatedSpaLINK = "https://forms.gle/82TrFg5vLcFZQ4A37";
                        upDatedSpaMapLINK = "https://maps.app.goo.gl/hUhGocFRpELioqDh9";
                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/beautyfrizz-ocala-hydraglow-led-promo";
                        upDatedSpaPhone = "(352) 577-9216";
                        upDatedDurationTotal = "60 Minutes";
                        upDatedDurationOne = "- 15 Minutes Cleansing and Facial Massage";
                        upDatedDurationTwo = "- 30 Minutes Hydraglow + LED Treatment & 15 minutes Consultation";
                        promoPrice = "89.95"
                        upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (352) 216-4557";
                        treatmentSelected = "Hydraglow + LED Treatment";
                        newSpaPhoneNumberSelected = "(352) 216-4557";
                        insteadOfSpa = "$377"
                        break;

                        case "Beauty Frizz Ocala 3 in 1 Skin Tightening 79.95":
                        upDatedSpaName = "BeautyFrizz Spa";
                        upDatedSpaAddress = "Paddock Mall,"+"<br>"+"3100 SW College Rd Ocala FL 34474"+"<br>"+"(Unit 402, next to Belk Store)";
                        upDatedSpaLINK = "https://forms.gle/82TrFg5vLcFZQ4A37";
                        upDatedSpaMapLINK = "https://maps.app.goo.gl/hUhGocFRpELioqDh9";
                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/beautyfrizz-ocala-3-in-1-skin-tightening-promo";
                        upDatedSpaPhone = "(352) 577-9216";
                        upDatedDurationTotal = "60 Minutes";
                        upDatedDurationOne = "- 15 Minutes Cleansing";
                        upDatedDurationTwo = "- 45 Minutes 3 in 1 Skin Tightening Treatment & Consultation";
                        promoPrice = "79.95"
                        upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (352) 216-4557";
                        treatmentSelected = "3 in 1 Skin Tightening Treatment";
                        newSpaPhoneNumberSelected = "(352) 216-4557";
                        insteadOfSpa = "$377"
                        break;   

                        case "Beauty Frizz Ocala Neck and Jawline 79.95":
                        upDatedSpaName = "BeautyFrizz Spa";
                        upDatedSpaAddress = "Paddock Mall,"+"<br>"+"3100 SW College Rd Ocala FL 34474"+"<br>"+"(Unit 402, next to Belk Store)";
                        upDatedSpaLINK = "https://forms.gle/82TrFg5vLcFZQ4A37";
                        upDatedSpaMapLINK = "https://maps.app.goo.gl/hUhGocFRpELioqDh9";
                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/beautyfrizz-ocala-neck-amp-jawline-promo";
                        upDatedSpaPhone = "(352) 577-9216";
                        upDatedDurationTotal = "60 Minutes";
                        upDatedDurationOne = "- 15 Minutes Cleansing";
                        upDatedDurationTwo = "- 45 Minutes Neck and Jawline Tightening Treatment & Consultation";
                        promoPrice = "79.95"
                        upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (352) 216-4557";
                        treatmentSelected = "Neck and Jawline Tightening Treatment";
                        newSpaPhoneNumberSelected = "(352) 216-4557";
                        insteadOfSpa = "$377"
                        break;

                        case "Gentle Touch Beauty":
                                    upDatedSpaName = "Gentle Touch Beauty";
                                    upDatedSpaAddress = "Historic Downtown Venice FL Shops,"+"<br>"+"241 W Venice Ave, Venice, FL 34285"+"<br>"+"(Between Captain's Landing & St Marco Boutique)";
                                    upDatedSpaLINK = "https://forms.gle/PVLf5eCmvnyUHL1i6";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/RNDibJBb8mMaDftN7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/gentle-touch-beauty-promo-page" ;
                                    upDatedSpaPhone = "(941) 280-0407";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "30 minute Cleansing";
                                    upDatedDurationTwo = "30 minute LED Experience and Consultation";
                                    promoPrice = "79.95"
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (941) 244-0044";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(941) 244-0044";
                                    insteadOfSpa = "$350";
                                    break; 

                                    case "Gentle Touch Beauty LED 99.95":
                                    upDatedSpaName = "Gentle Touch Beauty";
                                    upDatedSpaAddress = "Historic Downtown Venice FL Shops,"+"<br>"+"241 W Venice Ave, Venice, FL 34285"+"<br>"+"(Between Captain's Landing & St Marco Boutique)";
                                    upDatedSpaLINK = "https://forms.gle/PVLf5eCmvnyUHL1i6";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/RNDibJBb8mMaDftN7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/gentle-touch-beauty-new-promo-page" ;
                                    upDatedSpaPhone = "(941) 280-0407";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "30 minute Cleansing";
                                    upDatedDurationTwo = "30 minute LED Experience and Consultation";
                                    promoPrice = "99.95"
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (941) 244-0044";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(941) 244-0044";
                                    insteadOfSpa = "$350";
                                    break;

                                    case "Gentle Touch Beauty Natural Facelift Treatment":
                                    upDatedSpaName = "Gentle Touch Beauty";
                                    upDatedSpaAddress = "Historic Downtown Venice FL Shops,"+"<br>"+"241 W Venice Ave, Venice, FL 34285"+"<br>"+"(Between Captain's Landing & St Marco Boutique)";
                                    upDatedSpaLINK = "https://forms.gle/PVLf5eCmvnyUHL1i6";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/RNDibJBb8mMaDftN7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/gentle-touch-beauty-natural-facelift-treatment-promo" ;
                                    upDatedSpaPhone = "(941) 280-0407";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "15 minute Cleansing";
                                    upDatedDurationTwo = "45 minute Natural Facelift Treatment";
                                    promoPrice = "79.95"
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (941) 244-0044";
                                    treatmentSelected = "Natural Facelift Treatment";
                                    newSpaPhoneNumberSelected = "(941) 244-0044";
                                    insteadOfSpa = "$377";
                                    break;

                                    case "Gentle Touch Beauty Natural Facelift $99.95":
                                    upDatedSpaName = "Gentle Touch Beauty";
                                    upDatedSpaAddress = "Historic Downtown Venice FL Shops,"+"<br>"+"241 W Venice Ave, Venice, FL 34285"+"<br>"+"(Between Captain's Landing & St Marco Boutique)";
                                    upDatedSpaLINK = "https://forms.gle/PVLf5eCmvnyUHL1i6";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/RNDibJBb8mMaDftN7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/gentle-touch-beauty-natural-facelift-treatment-99-95" ;
                                    upDatedSpaPhone = "(941) 280-0407";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "15 minute Cleansing";
                                    upDatedDurationTwo = "45 minute Natural Facelift Treatment";
                                    promoPrice = "99.95"
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (941) 244-0044";
                                    treatmentSelected = "Natural Facelift Treatment";
                                    newSpaPhoneNumberSelected = "(941) 244-0044";
                                    insteadOfSpa = "$377";
                                    break;

                                    case "Ora Med Spa Natural Facelift $79.95":
                                    upDatedSpaName = "Ora Medical Spa";
                                    upDatedSpaAddress = "4400 Bayou Blvd, Pensacola FL 32504"+"<br>"+"(In Cordova Square Plaza, Suite #29A)";
                                    upDatedSpaLINK = "https://forms.gle/2cGVHU6ahcHVQCYM9";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/hzhtj8tyjfZwwM2F7";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/ora-med-spa-natural-facelift-promo";
                                    upDatedSpaPhone = "(850) 988-9735";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing";
                                    upDatedDurationTwo = "- 30 minutes Natural Facelift Treatment and 15 minutes post-care and consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (850) 501-3350";
                                    treatmentSelected = "Natural Facelift Treatment";
                                    newSpaPhoneNumberSelected = "(850) 501-3350";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Ora Med Spa Neck and Jawline $79.95":
                                    upDatedSpaName = "Ora Medical Spa";
                                    upDatedSpaAddress = "4400 Bayou Blvd, Pensacola FL 32504"+"<br>"+"(In Cordova Square Plaza, Suite #29A)";
                                    upDatedSpaLINK = "https://forms.gle/2cGVHU6ahcHVQCYM9";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/hzhtj8tyjfZwwM2F7";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/ora-med-spa-neck-amp-jawline-promo-79-95";
                                    upDatedSpaPhone = "(850) 988-9735";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing";
                                    upDatedDurationTwo = "- 30 minutes Neck and Jawline Treatment and 15 minutes post-care and consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (850) 501-3350";
                                    treatmentSelected = "Neck and Jawline Treatment";
                                    newSpaPhoneNumberSelected = "(850) 501-3350";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Ora Med Spa Hydraglow $79.95":
                                    upDatedSpaName = "Ora Medical Spa";
                                    upDatedSpaAddress = "4400 Bayou Blvd, Pensacola FL 32504"+"<br>"+"(In Cordova Square Plaza, Suite #29A)";
                                    upDatedSpaLINK = "https://forms.gle/2cGVHU6ahcHVQCYM9";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/hzhtj8tyjfZwwM2F7";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/ora-med-spa-hydraglow-promo";
                                    upDatedSpaPhone = "(850) 988-9735";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing";
                                    upDatedDurationTwo = "- 30 minutes Hydraglow Treatment and 15 minutes post-care and consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (850) 501-3350";
                                    treatmentSelected = "Hydraglow Treatment";
                                    newSpaPhoneNumberSelected = "(850) 501-3350";
                                    insteadOfSpa = "$399"
                                    break;

                                    case "Ora Med Spa Hydraglow $69.95":
                                    upDatedSpaName = "Ora Medical Spa";
                                    upDatedSpaAddress = "4400 Bayou Blvd, Pensacola FL 32504"+"<br>"+"(In Cordova Square Plaza, Suite #29A)";
                                    upDatedSpaLINK = "https://forms.gle/2cGVHU6ahcHVQCYM9";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/hzhtj8tyjfZwwM2F7";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/ora-med-spa-hydraglow-promo-69-95";
                                    upDatedSpaPhone = "(850) 988-9735";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing";
                                    upDatedDurationTwo = "- 30 minutes Hydraglow Treatment and 15 minutes post-care and consultation";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (850) 501-3350";
                                    treatmentSelected = "Hydraglow Treatment";
                                    newSpaPhoneNumberSelected = "(850) 501-3350";
                                    insteadOfSpa = "$399"
                                    break;

                                    case "Ora Med Spa Skin Tightening $69.95":
                                    upDatedSpaName = "Ora Medical Spa";
                                    upDatedSpaAddress = "4400 Bayou Blvd, Pensacola FL 32504"+"<br>"+"(In Cordova Square Plaza, Suite #29A)";
                                    upDatedSpaLINK = "https://forms.gle/2cGVHU6ahcHVQCYM9";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/hzhtj8tyjfZwwM2F7";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/ora-med-spa-skin-tightening";
                                    upDatedSpaPhone = "(850) 988-9735";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing";
                                    upDatedDurationTwo = "- 30 minutes Natural Facelift Treatment and 15 minutes post-care and consultation";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (850) 501-3350";
                                    treatmentSelected = "Natural Facelift Treatment";
                                    newSpaPhoneNumberSelected = "(850) 501-3350";
                                    insteadOfSpa = "$377"
                                    break;
                                    
                                    case "Ora Med Spa 3 in 1 Skin Tightening $79.95":
                                    upDatedSpaName = "Ora Medical Spa";
                                    upDatedSpaAddress = "4400 Bayou Blvd, Pensacola FL 32504"+"<br>"+"(In Cordova Square Plaza, Suite #29A)";
                                    upDatedSpaLINK = "https://forms.gle/2cGVHU6ahcHVQCYM9";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/hzhtj8tyjfZwwM2F7";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/ora-med-spa-3-in-1-skin-tightening";
                                    upDatedSpaPhone = "(850) 988-9735";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing";
                                    upDatedDurationTwo = "- 30 minutes 3 in 1 Skin Tightening Treatment and 15 minutes post-care and consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (850) 501-3350";
                                    treatmentSelected = "3 in 1 Skin Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(850) 501-3350";
                                    insteadOfSpa = "$399"
                                    break;

                                    case "Ora Med Spa Natural Skin Tightening $79.95":
                                    upDatedSpaName = "Ora Medical Spa";
                                    upDatedSpaAddress = "4400 Bayou Blvd, Pensacola FL 32504"+"<br>"+"(In Cordova Square Plaza, Suite #29A)";
                                    upDatedSpaLINK = "https://forms.gle/2cGVHU6ahcHVQCYM9";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/hzhtj8tyjfZwwM2F7";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/ora-med-spa-natural-skin-tightening-promo";
                                    upDatedSpaPhone = "(850) 988-9735";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing";
                                    upDatedDurationTwo = "- 30 minutes Natural Skin Tightening Treatment and 15 minutes post-care and consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (850) 501-3350";
                                    treatmentSelected = "Natural Skin Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(850) 501-3350";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Ora Med Spa Men Skin Tightening $89.95":
                                    upDatedSpaName = "Ora Medical Spa";
                                    upDatedSpaAddress = "4400 Bayou Blvd, Pensacola FL 32504"+"<br>"+"(In Cordova Square Plaza, Suite #29A)";
                                    upDatedSpaLINK = "https://forms.gle/2cGVHU6ahcHVQCYM9";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/hzhtj8tyjfZwwM2F7";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/ora-med-spa-men-skin-tightening-promo";
                                    upDatedSpaPhone = "(850) 988-9735";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing";
                                    upDatedDurationTwo = "- 30 minutes Skin Tightening Treatment and 15 minutes post-care and consultation";
                                    promoPrice = "89.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (850) 501-3350";
                                    treatmentSelected = "Skin Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(850) 501-3350";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Ora Med Spa Men Skin Tightening $79.95":
                                    upDatedSpaName = "Ora Medical Spa";
                                    upDatedSpaAddress = "4400 Bayou Blvd, Pensacola FL 32504"+"<br>"+"(In Cordova Square Plaza, Suite #29A)";
                                    upDatedSpaLINK = "https://forms.gle/2cGVHU6ahcHVQCYM9";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/hzhtj8tyjfZwwM2F7";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/ora-med-spa-men-skin-tightening-promo-79-95";
                                    upDatedSpaPhone = "(850) 988-9735";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing";
                                    upDatedDurationTwo = "- 30 minutes Skin Tightening Treatment and 15 minutes post-care and consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (850) 501-3350";
                                    treatmentSelected = "Skin Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(850) 501-3350";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Good Life Spa LED 79.95":
                                    upDatedSpaName = "Good Life Spa";
                                    upDatedSpaAddress = "Volusia Mall,"+"<br>"+"1700 W International Speedway Blvd, Daytona Beach, FL 32114"+"<br>"+"(Across From T-Mobile)";
                                    upDatedSpaLINK = "https://forms.gle/UGhfQHRkfdPqvcdU7";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/good-life-spa-led-promo";
                                    upDatedSpaPhone = "(386) 319-1236";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minutes of Cleansing"+"<br>"+" 25 minutes of the LED Anti-aging Experience ";
                                    upDatedDurationTwo = "- 10 minute Upper Body Massage & 10 minutes of Anti-aging serum application and Consultation"
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (386) 267-5157";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(386) 267-5157";
                                    insteadOfSpa = "$350";
                                    break;

                                    case "Good Life Spa LED 59.95":
                                    upDatedSpaName = "Good Life Spa";
                                    upDatedSpaAddress = "Volusia Mall,"+"<br>"+"1700 W International Speedway Blvd, Daytona Beach, FL 32114"+"<br>"+"(Across From T-Mobile)";
                                    upDatedSpaLINK = "https://forms.gle/UGhfQHRkfdPqvcdU7";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/good-life-spa-new-led-promo";
                                    upDatedSpaPhone = "(386) 319-1236";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minutes of Cleansing"+"<br>"+" 25 minutes of the LED Anti-aging Experience ";
                                    upDatedDurationTwo = "- 10 minute Upper Body Massage & 10 minutes of Anti-aging serum application and Consultation"
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (386) 267-5157";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(386) 267-5157";
                                    insteadOfSpa = "$350";
                                    break;

                                    case "Good Life Spa Men's LED 79.95":
                                    upDatedSpaName = "Good Life Spa";
                                    upDatedSpaAddress = "Volusia Mall,"+"<br>"+"1700 W International Speedway Blvd, Daytona Beach, FL 32114"+"<br>"+"(Across From T-Mobile)";
                                    upDatedSpaLINK = "https://forms.gle/UGhfQHRkfdPqvcdU7";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/good-life-spa-mens-led-promo";
                                    upDatedSpaPhone = "(386) 319-1236";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minutes of Cleansing";
                                    upDatedDurationTwo = "- 45 minutes of the LED Anti-aging Experience & Consultation"
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (386) 267-5157";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(386) 267-5157";
                                    insteadOfSpa = "$299";
                                    break;

                                    case "Good Life Spa Collagen Enhancing 69.95":
                                    upDatedSpaName = "Good Life Spa";
                                    upDatedSpaAddress = "Volusia Mall,"+"<br>"+"1700 W International Speedway Blvd, Daytona Beach, FL 32114"+"<br>"+"(Across From T-Mobile)";
                                    upDatedSpaLINK = "https://forms.gle/UGhfQHRkfdPqvcdU7";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/good-life-spa-collagen-enhancing-promo";
                                    upDatedSpaPhone = "(386) 319-1236";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minutes of Cleansing";
                                    upDatedDurationTwo = "- 30 minutes of the Collagen Enhancing Treatment & 15 minutes Consultation"
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (386) 267-5157";
                                    treatmentSelected = "Collagen Enhancing";
                                    newSpaPhoneNumberSelected = "(386) 267-5157";
                                    insteadOfSpa = "$377";
                                    break;

                                    case "Good Life Spa Neck and Jawline 69.95":
                                    upDatedSpaName = "Good Life Spa";
                                    upDatedSpaAddress = "Volusia Mall,"+"<br>"+"1700 W International Speedway Blvd, Daytona Beach, FL 32114"+"<br>"+"(Across From T-Mobile)";
                                    upDatedSpaLINK = "https://forms.gle/UGhfQHRkfdPqvcdU7";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/good-life-spa-neck-and-jawline-treatment-page";
                                    upDatedSpaPhone = "(386) 319-1236";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minutes of Consultation";
                                    upDatedDurationTwo = "- 45 minutes of the Neck & Jawline Treatment"
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (386) 267-5157";
                                    treatmentSelected = "Neck and Jawline Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(386) 267-5157";
                                    insteadOfSpa = "$377";
                                    break;

                                    case "Good Life Spa Skin Tightening 79.95":
                                    upDatedSpaName = "Good Life Spa";
                                    upDatedSpaAddress = "Volusia Mall,"+"<br>"+"1700 W International Speedway Blvd, Daytona Beach, FL 32114"+"<br>"+"(Across From T-Mobile)";
                                    upDatedSpaLINK = "https://forms.gle/UGhfQHRkfdPqvcdU7";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/U3D5qhvffFRXSVAd9";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/good-life-spa-skin-tightening-79-95";
                                    upDatedSpaPhone = "(386) 319-1236";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minutes of light cleansing";
                                    upDatedDurationTwo = "- 30 minutes of the Skin Tightening Treatment and 15 minutes Consultation"
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (386) 888-0765";
                                    treatmentSelected = "Skin Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(386) 888-0765";
                                    insteadOfSpa = "$377";
                                    break;

                                    case "Good Life Spa Hydraglow 79.95":
                                    upDatedSpaName = "Good Life Spa";
                                    upDatedSpaAddress = "Volusia Mall,"+"<br>"+"1700 W International Speedway Blvd, Daytona Beach, FL 32114"+"<br>"+"(Across From T-Mobile)";
                                    upDatedSpaLINK = "https://forms.gle/UGhfQHRkfdPqvcdU7";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/U3D5qhvffFRXSVAd9";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/good-life-spa-hydraglow-promo";
                                    upDatedSpaPhone = "(386) 319-1236";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minutes of light cleansing";
                                    upDatedDurationTwo = "- 30 minutes of the Hydraglow Treatment and 15 minutes Consultation"
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (386) 888-0765";
                                    treatmentSelected = "Hydraglow Treatment";
                                    newSpaPhoneNumberSelected = "(386) 888-0765";
                                    insteadOfSpa = "$399";
                                    break;

                                    case "Good Life Spa Men Skin Tightening 99.95":
                                    upDatedSpaName = "Good Life Spa";
                                    upDatedSpaAddress = "Volusia Mall,"+"<br>"+"1700 W International Speedway Blvd, Daytona Beach, FL 32114"+"<br>"+"(Across From T-Mobile)";
                                    upDatedSpaLINK = "https://forms.gle/UGhfQHRkfdPqvcdU7";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/U3D5qhvffFRXSVAd9";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/good-life-spa-mens-skin-tightening-promo";
                                    upDatedSpaPhone = "(386) 319-1236";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minutes of light cleansing";
                                    upDatedDurationTwo = "- 30 minutes of the Skin Tightening Treatment and 15 minutes Consultation"
                                    promoPrice = "99.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (386) 888-0765";
                                    treatmentSelected = "Skin Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(386) 888-0765";
                                    insteadOfSpa = "$377";
                                    break;

                                    case "Good Life Spa 3 in 1 Skin Tightening 79.95":
                                    upDatedSpaName = "Good Life Spa";
                                    upDatedSpaAddress = "Volusia Mall,"+"<br>"+"1700 W International Speedway Blvd, Daytona Beach, FL 32114"+"<br>"+"(Across From T-Mobile)";
                                    upDatedSpaLINK = "https://forms.gle/UGhfQHRkfdPqvcdU7";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/U3D5qhvffFRXSVAd9";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/good-life-spa-3-in-1-skin-tightening-promo";
                                    upDatedSpaPhone = "(386) 319-1236";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minutes of light cleansing";
                                    upDatedDurationTwo = "- 45 minutes of the 3 in 1 Skin Tightening Treatment and Consultation"
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (386) 888-0765";
                                    treatmentSelected = "3 in 1 Skin Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(386) 888-0765";
                                    insteadOfSpa = "$377";
                                    break;

                                    case "Renova Skin Med Spa Anti-Aging Facial $59.95":
                                    upDatedSpaName = "Renova Skin Med Spa";
                                    upDatedSpaAddress = "561 Cranbury Rd. East Brunswick, NJ 08816 "+"<br>"+"(STE F, Medical Arts and Surgical Center Building on Cranbury Road)";
                                    upDatedSpaLINK = "https://forms.gle/9fQcFgTyx4rk8CXS9";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/bDFb6jQgBHV215YB6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/renova-skin-med-spa-anti-aging-facial-promo";
                                    upDatedSpaPhone = "(732) 523-2168";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = " -15 minutes Cleansing and 30 minutes Anti-Aging Facial";
                                    upDatedDurationTwo = " -15 minutes Consultation";
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (609) 422-9463";
                                    treatmentSelected = "LED Anti-Aging Treatment";
                                    newSpaPhoneNumberSelected = "(609) 422-9463";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Renova Skin Med Spa Anti-Aging Facial $99.95":
                                    upDatedSpaName = "Renova Skin Med Spa";
                                    upDatedSpaAddress = "561 Cranbury Rd. East Brunswick, NJ 08816 "+"<br>"+"(STE F, Medical Arts and Surgical Center Building on Cranbury Road)";
                                    upDatedSpaLINK = "https://forms.gle/9fQcFgTyx4rk8CXS9";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/bDFb6jQgBHV215YB6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/renova-skin-med-spa-anti-aging-facial-promo-99-95";
                                    upDatedSpaPhone = "(732) 523-2168";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = " -15 minutes Cleansing and 30 minutes Anti-Aging Facial";
                                    upDatedDurationTwo = " -15 minutes Consultation";
                                    promoPrice = "99.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (609) 422-9463";
                                    treatmentSelected = "LED Anti-Aging Treatment";
                                    newSpaPhoneNumberSelected = "(609) 422-9463";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Renova Skin Med Spa LED Non-Surgical Facelift $99.95":
                                    upDatedSpaName = "Renova Skin Med Spa";
                                    upDatedSpaAddress = "561 Cranbury Rd. East Brunswick, NJ 08816 "+"<br>"+"(STE F, Medical Arts and Surgical Center Building on Cranbury Road)";
                                    upDatedSpaLINK = "https://forms.gle/9fQcFgTyx4rk8CXS9";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/bDFb6jQgBHV215YB6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/renova-skin-med-spa-led-non-surgical-facelift-promo-99-95";
                                    upDatedSpaPhone = "(732) 523-2168";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = " -15 minutes Cleansing and 30 minutes LED Non-Surgical Facelift";
                                    upDatedDurationTwo = " -15 minutes Consultation";
                                    promoPrice = "99.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (609) 422-9463";
                                    treatmentSelected = "Non-Surgical Facelift Treatment";
                                    newSpaPhoneNumberSelected = "(609) 422-9463";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Renova Skin Med Spa LED Non-Surgical Facelift $59.95":
                                    upDatedSpaName = "Renova Skin Med Spa";
                                    upDatedSpaAddress = "561 Cranbury Rd. East Brunswick, NJ 08816 "+"<br>"+"(STE F, Medical Arts and Surgical Center Building on Cranbury Road)";
                                    upDatedSpaLINK = "https://forms.gle/9fQcFgTyx4rk8CXS9";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/bDFb6jQgBHV215YB6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/renova-skin-med-spa-led-non-surgical-facelift-promo";
                                    upDatedSpaPhone = "(732) 523-2168";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = " -15 minutes Cleansing and 30 minutes LED Non-Surgical Facelift";
                                    upDatedDurationTwo = " -15 minutes Consultation";
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (609) 422-9463";
                                    treatmentSelected = "Non-Surgical Facelift Treatment";
                                    newSpaPhoneNumberSelected = "(609) 422-9463";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Renova Skin Med Spa Non-Surgical Facelift $79.95":
                                    upDatedSpaName = "Renova Skin Med Spa";
                                    upDatedSpaAddress = "561 Cranbury Rd. East Brunswick, NJ 08816 "+"<br>"+"(STE F, Medical Arts and Surgical Center Building on Cranbury Road)";
                                    upDatedSpaLINK = "https://forms.gle/9fQcFgTyx4rk8CXS9";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/bDFb6jQgBHV215YB6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/renova-skin-med-spa-led-non-surgical-facelift-promo-79-95";
                                    upDatedSpaPhone = "(732) 523-2168";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = " -15 minutes Cleansing and 30 minutes LED Non-Surgical Facelift";
                                    upDatedDurationTwo = " -15 minutes Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (609) 422-9463";
                                    treatmentSelected = "Non-Surgical Facelift Treatment";
                                    newSpaPhoneNumberSelected = "(609) 422-9463";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Hermetise Fayetteville Natural Facelift $79.95":
                                            upDatedSpaName = "Hermetise Spa";
                                            upDatedSpaAddress = "Cross Creek Mall, 419 Cross Creek Mall, Fayetteville, NC 28303" + "<br>" + "(Center of the Mall , Across Aldo, Next to Zales)";
                                            upDatedSpaLINK = "https://forms.gle/shfBVwkqTzsskWTH7";
                                            upDatedSpaMapLINK = "https://maps.app.goo.gl/5YarDpsVL7XxrrNL9";
                                            upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/hermetise-fayetteville-natural-facelift-promo";
                                            upDatedSpaPhone = "(910) 321-8797";
                                            upDatedDurationTotal = "60 Minutes";
                                            upDatedDurationOne = "- 15 minutes Cleansing and 30 minutes Natural Facelift Treatment";
                                            upDatedDurationTwo = "- 15 minutes Consultation";
                                            promoPrice = "79.95";
                                            upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (910) 867-4100";
                                            treatmentSelected = "Natural Facelift Treatment";
                                            newSpaPhoneNumberSelected = "(910) 867-4100";
                                            insteadOfSpa = "$377";
                                            break; 

                                            case "Miliv Med Spa Natural Facelift $79.95":
                                    upDatedSpaName = "Miliv Med Spa";
                                    upDatedSpaAddress = "524 Waugh Dr. Houston TX 77019"+"<br>"+"(2nd Floor, Above Bayou Liquor)";
                                    upDatedSpaLINK = "https://forms.gle/qdqKRqaEMCmfn8md9";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/NoWqwHuFVHnmEsMW9";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/miliv-med-spa-natural-facelift-promo";
                                    upDatedSpaPhone = "(713) 347-2676";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing";
                                    upDatedDurationTwo = "- 30 minutes Natural Facelift Treatment and 15 minutes post-care and consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (713) 585-0715";
                                    treatmentSelected = "Natural Facelift Treatment";
                                    newSpaPhoneNumberSelected = "(713) 585-0715";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Miliv Med Spa Natural Facelift $69.95":
                                    upDatedSpaName = "Miliv Med Spa";
                                    upDatedSpaAddress = "524 Waugh Dr. Houston TX 77019"+"<br>"+"(2nd Floor, Above Bayou Liquor)";
                                    upDatedSpaLINK = "https://forms.gle/qdqKRqaEMCmfn8md9";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/NoWqwHuFVHnmEsMW9";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/miliv-med-spa-natural-facelift-promo-69-95";
                                    upDatedSpaPhone = "(713) 347-2676";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing";
                                    upDatedDurationTwo = "- 30 minutes Natural Facelift Treatment and 15 minutes post-care and consultation";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (713) 585-0715";
                                    treatmentSelected = "Natural Facelift Treatment";
                                    newSpaPhoneNumberSelected = "(713) 585-0715";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Miliv Med Spa Natural Facelift $59.95":
                                    upDatedSpaName = "Miliv Med Spa";
                                    upDatedSpaAddress = "524 Waugh Dr. Houston TX 77019"+"<br>"+"(2nd Floor, Above Bayou Liquor)";
                                    upDatedSpaLINK = "https://forms.gle/qdqKRqaEMCmfn8md9";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/NoWqwHuFVHnmEsMW9";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/miliv-med-spa-natural-facelift-promo-59-95";
                                    upDatedSpaPhone = "(713) 347-2676";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing";
                                    upDatedDurationTwo = "- 30 minutes Natural Facelift Treatment and 15 minutes post-care and consultation";
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (713) 585-0715";
                                    treatmentSelected = "Natural Facelift Treatment";
                                    newSpaPhoneNumberSelected = "(713) 585-0715";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Miliv Med Spa Neck and Jawline $59.95":
                                    upDatedSpaName = "Miliv Med Spa";
                                    upDatedSpaAddress = "524 Waugh Dr. Houston TX 77019"+"<br>"+"(2nd Floor, Above Bayou Liquor)";
                                    upDatedSpaLINK = "https://forms.gle/qdqKRqaEMCmfn8md9";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/NoWqwHuFVHnmEsMW9";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/miliv-med-spa-neck-amp-jawline-promo-59-95";
                                    upDatedSpaPhone = "(713) 347-2676";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing";
                                    upDatedDurationTwo = "- 30 minutes Neck & Jawline Treatment and 15 minutes post-care and consultation";
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (713) 585-0715";
                                    treatmentSelected = "Neck & Jawline Treatment";
                                    newSpaPhoneNumberSelected = "(713) 585-0715";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Miliv Med Spa 3 in 1 Skin Tightening $79.95":
                                    upDatedSpaName = "Miliv Med Spa";
                                    upDatedSpaAddress = "524 Waugh Dr. Houston TX 77019"+"<br>"+"(2nd Floor, Above Bayou Liquor)";
                                    upDatedSpaLINK = "https://forms.gle/qdqKRqaEMCmfn8md9";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/NoWqwHuFVHnmEsMW9";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/miliv-med-spa-3-in-1-skin-tightening";
                                    upDatedSpaPhone = "(713) 347-2676";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing";
                                    upDatedDurationTwo = "- 30 minutes 3 in 1 Skin Tightening Treatment and 15 minutes post-care and consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (713) 585-0715";
                                    treatmentSelected = "3 in 1 Skin Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(713) 585-0715";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Miliv Med Spa Men Skin Tightening $89.95":
                                    upDatedSpaName = "Miliv Med Spa";
                                    upDatedSpaAddress = "524 Waugh Dr. Houston TX 77019"+"<br>"+"(2nd Floor, Above Bayou Liquor)";
                                    upDatedSpaLINK = "https://forms.gle/qdqKRqaEMCmfn8md9";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/NoWqwHuFVHnmEsMW9";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/miliv-med-spa-men-skin-tightening-promo";
                                    upDatedSpaPhone = "(713) 347-2676";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing";
                                    upDatedDurationTwo = "- 30 minutes Skin Tightening Treatment and 15 minutes post-care and consultation";
                                    promoPrice = "89.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (713) 585-0715";
                                    treatmentSelected = "Skin Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(713) 585-0715";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Blowout Spa Men Skin Tightening $89.95":
                                    upDatedSpaName = "Blowout Spa";
                                    upDatedSpaAddress = "3393 Peachtree Rd NE, Atlanta, GA 30326"+"<br>"+"(Lenox square Mall, at the corner next to Forever 21 store)";
                                    upDatedSpaLINK = "https://forms.gle/zqgBmUhwJUk8tbMH9";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/FkN3AnaaCpaiXq6F9";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/blowout-spa-men-skin-tightening-promo";
                                    upDatedSpaPhone = "(404) 301-3539";
                                    upDatedDurationTotal = "45 Minutes";
                                    upDatedDurationOne = " - 15 minutes Cleansing";
                                    upDatedDurationTwo = " - 30 minutes Skin Tightening Treatment and Consultation";
                                    promoPrice = "89.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (979) 324-5845";
                                    treatmentSelected = "Skin Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(979) 324-5845";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Blowout Spa Natural Facelift $79.95":
                                    upDatedSpaName = "Blowout Spa";
                                    upDatedSpaAddress = "3393 Peachtree Rd NE, Atlanta, GA 30326"+"<br>"+"(Lenox square Mall, at the corner next to Forever 21 store)";
                                    upDatedSpaLINK = "https://forms.gle/zqgBmUhwJUk8tbMH9";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/FkN3AnaaCpaiXq6F9";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/blowout-spa-natural-facelift-promo";
                                    upDatedSpaPhone = "(404) 301-3539";
                                    upDatedDurationTotal = "45 Minutes";
                                    upDatedDurationOne = " - 15 minutes Cleansing";
                                    upDatedDurationTwo = " - 30 minutes Natural Facelift Treatment and Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (979) 324-5845";
                                    treatmentSelected = "Natural Facelift Treatment";
                                    newSpaPhoneNumberSelected = "(979) 324-5845";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Blowout Spa Natural Facelift $69.95":
                                    upDatedSpaName = "Blowout Spa";
                                    upDatedSpaAddress = "3393 Peachtree Rd NE, Atlanta, GA 30326"+"<br>"+"(Lenox square Mall, at the corner next to Forever 21 store)";
                                    upDatedSpaLINK = "https://forms.gle/zqgBmUhwJUk8tbMH9";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/FkN3AnaaCpaiXq6F9";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/blowout-spa-natural-facelift-promo-69-95";
                                    upDatedSpaPhone = "(404) 301-3539";
                                    upDatedDurationTotal = "45 Minutes";
                                    upDatedDurationOne = " - 15 minutes Cleansing";
                                    upDatedDurationTwo = " - 30 minutes Natural Facelift Treatment and Consultation";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (979) 324-5845";
                                    treatmentSelected = "Natural Facelift Treatment";
                                    newSpaPhoneNumberSelected = "(979) 324-5845";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Equanimity Anti-Aging Facial $59.95":
                                    upDatedSpaName = "Equanimity Wellness";
                                    upDatedSpaAddress = "11661 Preston Rd #170, Dallas, TX 75230"+"<br>"+"(Located on the 2nd floor of the shopping plaza, right above Renny's Restaurant)";
                                    upDatedSpaLINK = "https://forms.gle/AT1eTXYFy4phJGaB8";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/xA4XghVZvdQ5TDiZA";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/equanimity-wellness-anti-aging-facial-promo";
                                    upDatedSpaPhone = "(972) 866-4612";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing and 30 minutes Anti-Aging Treatment";
                                    upDatedDurationTwo = "- 15 minutes Consultation";
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (214) 238-6896";
                                    treatmentSelected = "Anti-Aging Treatment";
                                    newSpaPhoneNumberSelected = "(214) 238-6896";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Equanimity Hydraglow $69.95":
                                    upDatedSpaName = "Equanimity Wellness";
                                    upDatedSpaAddress = "11661 Preston Rd #170, Dallas, TX 75230"+"<br>"+"(Located on the 2nd floor of the shopping plaza, right above Renny's Restaurant)";
                                    upDatedSpaLINK = "https://forms.gle/AT1eTXYFy4phJGaB8";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/xA4XghVZvdQ5TDiZA";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/equaminity-hydraglow-pro69";
                                    upDatedSpaPhone = "(972) 866-4612";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing and 30 minutes Hydraglow Treatment";
                                    upDatedDurationTwo = "- 15 minutes Consultation";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (214) 238-6896";
                                    treatmentSelected = "Hydraglow Treatment";
                                    newSpaPhoneNumberSelected = "(214) 238-6896";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Equanimity Hydraglow $99.95":
                                    upDatedSpaName = "Equanimity Wellness";
                                    upDatedSpaAddress = "11661 Preston Rd #170, Dallas, TX 75230"+"<br>"+"(Located on the 2nd floor of the shopping plaza, right above Renny's Restaurant)";
                                    upDatedSpaLINK = "https://forms.gle/AT1eTXYFy4phJGaB8";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/xA4XghVZvdQ5TDiZA";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/equanimity-wellness-hydraglow-promo-99-95";
                                    upDatedSpaPhone = "(972) 866-4612";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing and 30 minutes Hydraglow Treatment";
                                    upDatedDurationTwo = "- 15 minutes Consultation";
                                    promoPrice = "99.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (214) 238-6896";
                                    treatmentSelected = "Hydraglow Treatment";
                                    newSpaPhoneNumberSelected = "(214) 238-6896";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Equanimity Men Skin Tightening $89.95":
                                    upDatedSpaName = "Equanimity Wellness";
                                    upDatedSpaAddress = "11661 Preston Rd #170, Dallas, TX 75230"+"<br>"+"(Located on the 2nd floor of the shopping plaza, right above Renny's Restaurant)";
                                    upDatedSpaLINK = "https://forms.gle/AT1eTXYFy4phJGaB8";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/xA4XghVZvdQ5TDiZA";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/equanimity-wellness-men-skin-tightening-promo";
                                    upDatedSpaPhone = "(972) 866-4612";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing and 30 minutes Skin Tightening Treatment";
                                    upDatedDurationTwo = "- 15 minutes Consultation";
                                    promoPrice = "89.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (214) 238-6896";
                                    treatmentSelected = "Skin Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(214) 238-6896";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Equanimity Men Skin Tightening $149.95":
                                    upDatedSpaName = "Equanimity Wellness";
                                    upDatedSpaAddress = "11661 Preston Rd #170, Dallas, TX 75230"+"<br>"+"(Located on the 2nd floor of the shopping plaza, right above Renny's Restaurant)";
                                    upDatedSpaLINK = "https://forms.gle/AT1eTXYFy4phJGaB8";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/xA4XghVZvdQ5TDiZA";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/equanimity-wellness-men-skin-tightening-promo-149-95";
                                    upDatedSpaPhone = "(972) 866-4612";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing and 30 minutes Skin Tightening Treatment";
                                    upDatedDurationTwo = "- 15 minutes Consultation";
                                    promoPrice = "149.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (214) 238-6896";
                                    treatmentSelected = "Skin Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(214) 238-6896";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Equanimity Skin Tightening Facial $59.95":
                                    upDatedSpaName = "Equanimity Wellness";
                                    upDatedSpaAddress = "11661 Preston Rd #170, Dallas, TX 75230"+"<br>"+"(Located on the 2nd floor of the shopping plaza, right above Renny's Restaurant)";
                                    upDatedSpaLINK = "https://forms.gle/AT1eTXYFy4phJGaB8";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/xA4XghVZvdQ5TDiZA";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/equanimity-wellness-skin-tightening-facial-promo";
                                    upDatedSpaPhone = "(972) 866-4612";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing and 30 minutes Skin Tightening Treatment";
                                    upDatedDurationTwo = "- 15 minutes Consultation";
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (214) 238-6896";
                                    treatmentSelected = "Skin Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(214) 238-6896";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Equanimity Natural Facelift $99.95":
                                    upDatedSpaName = "Equanimity Wellness";
                                    upDatedSpaAddress = "11661 Preston Rd #170, Dallas, TX 75230"+"<br>"+"(Located on the 2nd floor of the shopping plaza, right above Renny's Restaurant)";
                                    upDatedSpaLINK = "https://forms.gle/AT1eTXYFy4phJGaB8";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/xA4XghVZvdQ5TDiZA";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/equanimity-natural-facelift-book-99-95";
                                    upDatedSpaPhone = "(972) 866-4612";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing and 30 minutes Natural Facelift Treatment";
                                    upDatedDurationTwo = "- 15 minutes Consultation";
                                    promoPrice = "99.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (214) 238-6896";
                                    treatmentSelected = "Natural Facelift Treatment";
                                    newSpaPhoneNumberSelected = "(214) 238-6896";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Equanimity Skin Tightening Treatment $59.95":
                                    upDatedSpaName = "Equanimity Wellness";
                                    upDatedSpaAddress = "11661 Preston Rd #170, Dallas, TX 75230"+"<br>"+"(Located on the 2nd floor of the shopping plaza, right above Renny's Restaurant)";
                                    upDatedSpaLINK = "https://forms.gle/AT1eTXYFy4phJGaB8";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/xA4XghVZvdQ5TDiZA";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/equanimity-skin-tightening-59-95-survey";
                                    upDatedSpaPhone = "(972) 866-4612";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing and 30 minutes Skin Tightening Treatment";
                                    upDatedDurationTwo = "- 15 minutes Consultation";
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (214) 238-6896";
                                    treatmentSelected = "Skin Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(214) 238-6896";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Equanimity 3 in 1 Skin Tightening Treatment $59.95":
                                    upDatedSpaName = "Equanimity Wellness";
                                    upDatedSpaAddress = "11661 Preston Rd #170, Dallas, TX 75230"+"<br>"+"(Located on the 2nd floor of the shopping plaza, right above Renny's Restaurant)";
                                    upDatedSpaLINK = "https://forms.gle/AT1eTXYFy4phJGaB8";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/xA4XghVZvdQ5TDiZA";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/equanimity-3-in-1-skin-tightening-promo-59-95";
                                    upDatedSpaPhone = "(972) 866-4612";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing and 30 minutes 3 in 1 Skin Tightening Treatment";
                                    upDatedDurationTwo = "- 15 minutes Consultation";
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (214) 238-6896";
                                    treatmentSelected = "3 in 1 Skin Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(214) 238-6896";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Equanimity Facelifting Treatment $69.95":
                                    upDatedSpaName = "Equanimity Wellness";
                                    upDatedSpaAddress = "11661 Preston Rd #170, Dallas, TX 75230"+"<br>"+"(Located on the 2nd floor of the shopping plaza, right above Renny's Restaurant)";
                                    upDatedSpaLINK = "https://forms.gle/AT1eTXYFy4phJGaB8";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/xA4XghVZvdQ5TDiZA";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/equanimity-facelifting-treatment-69-95-survey";
                                    upDatedSpaPhone = "(972) 866-4612";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing and 30 minutes Facelifting Treatment";
                                    upDatedDurationTwo = "- 15 minutes Consultation";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (214) 238-6896";
                                    treatmentSelected = "Facelifting Treatment";
                                    newSpaPhoneNumberSelected = "(214) 238-6896";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Equanimity Neck and Jawline $69.95":
                                    upDatedSpaName = "Equanimity Wellness";
                                    upDatedSpaAddress = "11661 Preston Rd #170, Dallas, TX 75230"+"<br>"+"(Located on the 2nd floor of the shopping plaza, right above Renny's Restaurant)";
                                    upDatedSpaLINK = "https://forms.gle/AT1eTXYFy4phJGaB8";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/xA4XghVZvdQ5TDiZA";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/equanimity-neckjawline-pro69";
                                    upDatedSpaPhone = "(972) 866-4612";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing and 30 minutes Neck and Jawline Treatment";
                                    upDatedDurationTwo = "- 15 minutes Consultation";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (214) 238-6896";
                                    treatmentSelected = "Neck and Jawline Treatment";
                                    newSpaPhoneNumberSelected = "(214) 238-6896";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Equanimity Collagen Enhancing $69.95":
                                    upDatedSpaName = "Equanimity Wellness";
                                    upDatedSpaAddress = "11661 Preston Rd #170, Dallas, TX 75230"+"<br>"+"(Located on the 2nd floor of the shopping plaza, right above Renny's Restaurant)";
                                    upDatedSpaLINK = "https://forms.gle/AT1eTXYFy4phJGaB8";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/xA4XghVZvdQ5TDiZA";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/equanimity-collagen-enhancing-promo-69-95";
                                    upDatedSpaPhone = "(972) 866-4612";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing and 30 minutes Collagen Enhancing Treatment";
                                    upDatedDurationTwo = "- 15 minutes Consultation";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (214) 238-6896";
                                    treatmentSelected = "Collagen Enhancing Treatment";
                                    newSpaPhoneNumberSelected = "(214) 238-6896";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Equanimity EMS Body $79.95":
                                    upDatedSpaName = "Equanimity Wellness";
                                    upDatedSpaAddress = "11661 Preston Rd #170, Dallas, TX 75230"+"<br>"+"(Located on the 2nd floor of the shopping plaza, right above Renny's Restaurant)";
                                    upDatedSpaLINK = "https://forms.gle/AT1eTXYFy4phJGaB8";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/xA4XghVZvdQ5TDiZA";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/equanimity-wellness-ems-body-promo";
                                    upDatedSpaPhone = "(972) 866-4612";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 45 minutes EMS Body Treatment";
                                    upDatedDurationTwo = "- 15 minutes Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (214) 238-6896";
                                    treatmentSelected = "EMS Body Treatment";
                                    newSpaPhoneNumberSelected = "(214) 238-6896";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Equanimity Rejuvenecimiento Facial $79.95":
                                    upDatedSpaName = "Equanimity Wellness";
                                    upDatedSpaAddress = "11661 Preston Rd #170, Dallas, TX 75230"+"<br>"+"(Ubicado en el segundo piso de la plaza, justo arriba del restaurante Renny’s)";
                                    upDatedSpaLINK = "https://forms.gle/AT1eTXYFy4phJGaB8";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/xA4XghVZvdQ5TDiZA";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/equanimity-rejuvenecimiento-facial-79-95";
                                    upDatedSpaPhone = "(972) 866-4612";
                                    upDatedDurationTotal = "60 Minutos";
                                    upDatedDurationOne = "- 45 minutos del Tratamiento de Rejuvenecimiento Facial";
                                    upDatedDurationTwo = "- 15 minutos Consulta";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (214) 238-6896";
                                    treatmentSelected = "Tratamiento de Rejuvenecimiento Facial";
                                    newSpaPhoneNumberSelected = "(214) 238-6896";
                                    insteadOfSpa = "$377"
                                    break;


                                    case "Vein Vascular Clinic Goodbye Spider Vein $99.95":
                                    upDatedSpaName = "Vein Vascular Clinic";
                                    upDatedSpaAddress = "561 Cranbury Rd. East Brunswick, NJ 08816 "+"<br>"+"(On Cranbury road look for red sign medical arts and surgery center)";
                                    upDatedSpaLINK = " ";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/yXx12Q8knGdvLgoK9";
                                    upDatedSpaWebLINK = "https://www.advancedbeautytreatments.com/pages/spiderveinpromo";
                                    upDatedSpaPhone = "(732) 523-2168";
                                    upDatedDurationTotal = "30 Minutes";
                                    upDatedDurationOne = " ";
                                    upDatedDurationTwo = " ";
                                    promoPrice = "99.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (732) 651-1300";
                                    treatmentSelected = "Spider Vein Treatment";
                                    newSpaPhoneNumberSelected = "(732) 651-1300";
                                    insteadOfSpa = "$775"
                                    break;

                                    case "Vein Vascular Clinic Goodbye Spider Vein $199.95":
                                    upDatedSpaName = "Vein Vascular Clinic";
                                    upDatedSpaAddress = "561 Cranbury Rd. East Brunswick, NJ 08816 "+"<br>"+"(On Cranbury road look for red sign medical arts and surgery center)";
                                    upDatedSpaLINK = " ";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/yXx12Q8knGdvLgoK9";
                                    upDatedSpaWebLINK = "https://www.advancedbeautytreatments.com/pages/spider-vein-promo-199";
                                    upDatedSpaPhone = "(732) 523-2168";
                                    upDatedDurationTotal = "30 Minutes";
                                    upDatedDurationOne = " ";
                                    upDatedDurationTwo = " ";
                                    promoPrice = "199.95";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (732) 651-1300";
                                    treatmentSelected = "Spider Vein Treatment";
                                    newSpaPhoneNumberSelected = "(732) 651-1300";
                                    insteadOfSpa = "$775"
                                    break;

                                    case "Vein Vascular Clinic Free Vein Screening":
                                    upDatedSpaName = "Vein Vascular Clinic";
                                    upDatedSpaAddress = "561 Cranbury Rd. East Brunswick, NJ 08816 "+"<br>"+"(On Cranbury road look for red sign medical arts and surgery center)";
                                    upDatedSpaLINK = " ";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/yXx12Q8knGdvLgoK9";
                                    upDatedSpaWebLINK = "https://www.advancedbeautytreatments.com/pages/free-vein-screening";
                                    upDatedSpaPhone = "(732) 523-2168";
                                    upDatedDurationTotal = "30 Minutes";
                                    upDatedDurationOne = " ";
                                    upDatedDurationTwo = " ";
                                    promoPrice = "0";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (732) 651-1300";
                                    treatmentSelected = "Spider Vein Treatment";
                                    newSpaPhoneNumberSelected = "(732) 651-1300";
                                    insteadOfSpa = "$375"
                                    break;

                                    case "Vein Vascular Clinic Free Vein Consultation":
                                    upDatedSpaName = "Vein Vascular Clinic";
                                    upDatedSpaAddress = "561 Cranbury Rd. East Brunswick, NJ 08816 "+"<br>"+"(On Cranbury road look for red sign medical arts and surgery center)";
                                    upDatedSpaLINK = " ";
                                    upDatedSpaMapLINK = "https://maps.app.goo.gl/yXx12Q8knGdvLgoK9";
                                    upDatedSpaWebLINK = "https://www.advancedbeautytreatments.com/pages/free-spider-vein-consultation";
                                    upDatedSpaPhone = "(732) 523-2168";
                                    upDatedDurationTotal = "30 Minutes";
                                    upDatedDurationOne = " ";
                                    upDatedDurationTwo = " ";
                                    promoPrice = "0";
                                    upDatedActualSpaPhone = "¿No encuentras el spa? Llámamos al : (732) 651-1300";
                                    treatmentSelected = "Spider Vein Treatment";
                                    newSpaPhoneNumberSelected = "(732) 651-1300";
                                    insteadOfSpa = "$375"
                                    break;

                case "Velora Med Spa Facial Reafirmante $79.95":
                                upDatedSpaName = "Velora Med Spa";
                                upDatedSpaAddress = "108 N State St, Chicago, IL 60602, United States"+"<br>"+"(Block 37, First level)";
                                upDatedSpaLINK = "https://forms.gle/m4QFVnRBasHH7UqS9";
                                upDatedSpaMapLINK = "https://maps.app.goo.gl/dV13uj69NZsR9zXZ9";
                                upDatedSpaWebLINK = "https://www.advancedbeautytreatments.com/pages/spn-velora-med-spa-rearfima-tu-piel-79-95-377";
                                upDatedSpaPhone = "(312) 625-1275";
                                upDatedDurationTotal = "45 Minutos";
                                upDatedDurationOne = " - 15 minutes de Limpieza ";
                                upDatedDurationTwo = " - 30 minutos de Facial Reafirmante & Consulta";
                                promoPrice = "79.95";
                                upDatedActualSpaPhone = "¿No encuentras el spa? Llámanos al (331) 600-2304";
                                treatmentSelected = "Facial Reafirmante";
                                newSpaPhoneNumberSelected = "(331) 600-2304";
                                insteadOfSpa = "$377"
                                break;

                 case "Dermalogy Med Spa Tratamiento Reafirmante $79.95":
                                upDatedSpaName = "Dermalogy Med Spa";
                                upDatedSpaAddress = "9330 W Broadway St #410 Pearland, TX 77584 "+"<br>"+"(Next door to Wild Pear, in the same shopping center on the ground floor by Floor & Living)";
                                upDatedSpaLINK = "https://forms.gle/JktVGKmUCs8eFcqW7";
                                upDatedSpaMapLINK = "https://maps.app.goo.gl/p6jXfdaazG5YKMt59";
                                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/dermalogy-med-spa-reafirmante-de-piel-69-95";
                                upDatedSpaPhone = "(281) 675-2651";
                                upDatedDurationTotal = "60 Minutos";
                                upDatedDurationOne = " - 15 minutos Cleansing";
                                upDatedDurationTwo = " - 30 minutos de tu Tratamiento Reafirmante y 15 minutos de Consulta";
                                promoPrice = "79.95";
                                upDatedActualSpaPhone = "¿No encuentras el spa? Llámanos al (281) 818-2149";
                                treatmentSelected = "Natural Facelift Treatment";
                                newSpaPhoneNumberSelected = "(281) 818-2149";
                                insteadOfSpa = "$377"
                                break;



                                case "Terra Alma Beauty Clinic Rejuvenecimiento Facial $799 MXN":
                                upDatedSpaName = "Terra Alma Beauty Clinic";
                                upDatedSpaAddress = "PUNTO SAO PAULO ,São Paulo 1912, Providencia, 44630 Guadalajara, Jal."+"<br>"+"(Planta baja frente a Monocolo Café)";
                                upDatedSpaLINK = "https://forms.gle/rhiM1BTkhQpHbNNh6";
                                upDatedSpaMapLINK = "https://maps.app.goo.gl/4amkjk5avemYaEw9A";
                                upDatedSpaWebLINK = "https://terraalma.firstouchbeauty.com/Rejuvenecimiento-book";
                                upDatedSpaPhone = "(334) 161 0814";
                                upDatedDurationTotal = "60 Minutos";
                                upDatedDurationOne = " - 15 minutos de Limpieza";
                                upDatedDurationTwo = " - 30 minutos del tratamiento de Rejuvenecimiento Facial y 15 minutos de consulta personalizada.";
                                promoPrice = "799";
                                upDatedActualSpaPhone = "¿No encuentras el spa? Llámanos al (331) 075 0940";
                                treatmentSelected = "Rejuvenecimiento Facial";
                                newSpaPhoneNumberSelected = "(331) 075 0940";
                                insteadOfSpa = "$3770"
                                break;

                                case "Terra Alma Beauty Clinic Rejuvenecimiento Facial $1100 MXN":
                                upDatedSpaName = "Terra Alma Beauty Clinic";
                                upDatedSpaAddress = "PUNTO SAO PAULO ,São Paulo 1912, Providencia, 44630 Guadalajara, Jal."+"<br>"+"(Planta baja frente a Monocolo Café)";
                                upDatedSpaLINK = "https://forms.gle/rhiM1BTkhQpHbNNh6";
                                upDatedSpaMapLINK = "https://maps.app.goo.gl/4amkjk5avemYaEw9A";
                                upDatedSpaWebLINK = "https://terraalma.firstouchbeauty.com/rejuvenecimiento-book-1100";
                                upDatedSpaPhone = "(334) 161 0814";
                                upDatedDurationTotal = "60 Minutos";
                                upDatedDurationOne = " - 15 minutos de Limpieza";
                                upDatedDurationTwo = " - 30 minutos del tratamiento de Rejuvenecimiento Facial y 15 minutos de consulta personalizada.";
                                promoPrice = "1100";
                                upDatedActualSpaPhone = "¿No encuentras el spa? Llámanos al (331) 075 0940";
                                treatmentSelected = "Rejuvenecimiento Facial";
                                newSpaPhoneNumberSelected = "(331) 075 0940";
                                insteadOfSpa = "$3770"
                                break;


                                case "Terra Alma Beauty Clinic Facial Hidro-Iluminante $1000 MXN":
                                upDatedSpaName = "Terra Alma Beauty Clinic";
                                upDatedSpaAddress = "PUNTO SAO PAULO ,São Paulo 1912, Providencia, 44630 Guadalajara, Jal."+"<br>"+"(Planta baja frente a Monocolo Café)";
                                upDatedSpaLINK = "https://forms.gle/rhiM1BTkhQpHbNNh6";
                                upDatedSpaMapLINK = "https://maps.app.goo.gl/4amkjk5avemYaEw9A";
                                upDatedSpaWebLINK = "https://terraalma.firstouchbeauty.com/hidro-iluminante-book";
                                upDatedSpaPhone = "(334) 161 0814";
                                upDatedDurationTotal = "60 Minutos";
                                upDatedDurationOne = " - 15 minutos de Limpieza";
                                upDatedDurationTwo = " - 30 minutos del Facial Hidro-Iluminante y 15 minutos de consulta personalizada.";
                                promoPrice = "1000";
                                upDatedActualSpaPhone = "¿No encuentras el spa? Llámanos al (331) 075 0940";
                                treatmentSelected = "Facial Hidro-Iluminante";
                                newSpaPhoneNumberSelected = "(331) 075 0940";
                                insteadOfSpa = "$3770"
                                break;

                                case "Terra Alma Beauty Clinic Tratamiento Reafirmante de Ojos $1200 MXN":
                                upDatedSpaName = "Terra Alma Beauty Clinic";
                                upDatedSpaAddress = "PUNTO SAO PAULO ,São Paulo 1912, Providencia, 44630 Guadalajara, Jal."+"<br>"+"(Planta baja frente a Monocolo Café)";
                                upDatedSpaLINK = "https://forms.gle/rhiM1BTkhQpHbNNh6";
                                upDatedSpaMapLINK = "https://maps.app.goo.gl/4amkjk5avemYaEw9A";
                                upDatedSpaWebLINK = "https://terraalma.firstouchbeauty.com/form-page-tratamiento-reafirmante-de-ojos-1200";
                                upDatedSpaPhone = "(334) 161 0814";
                                upDatedDurationTotal = "60 Minutos";
                                upDatedDurationOne = " - 15 minutos de Limpieza";
                                upDatedDurationTwo = " - 30 minutos del Tratamiento Reafirmante de Ojos y 15 minutos de consulta personalizada.";
                                promoPrice = "1200";
                                upDatedActualSpaPhone = "¿No encuentras el spa? Llámanos al (331) 075 0940";
                                treatmentSelected = "Tratamiento Reafirmante de Ojos";
                                newSpaPhoneNumberSelected = "(331) 075 0940";
                                insteadOfSpa = "$3770"
                                break;


                
                                case "Parie Med Spa Tratamiento Reafirmante $69.95":
                                upDatedSpaName = "Parie Med Spa";
                                upDatedSpaAddress = "1725 Village Center Cir Las Vegas, NV 89134"+"<br>"+"(STE 150)";
                                upDatedSpaLINK = " ";
                                upDatedSpaMapLINK = "https://maps.app.goo.gl/hAzkHHTaRr9x89GR9";
                                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/parie-med-spa-reafirmante-de-piel-69-95" ;
                                upDatedSpaPhone = "(702) 637-2259";
                                upDatedDurationTotal = "60 Minutes";
                                upDatedDurationOne = "- 15 minutos Limpieza";
                                upDatedDurationTwo = "- 30 minutos de Facial Reafirmante & Consulta and 15 minutes post-care and consutla";
                                promoPrice = "69.95";
                                upDatedActualSpaPhone = "¿No encuentras el spa? Llámanos al (702) 930-6221";
                                treatmentSelected = "Tratamiento Reafirmante";
                                newSpaPhoneNumberSelected = "(702) 930-6221";
                                insteadOfSpa = "$377"
                                break;      

                                        
                                        
                                                                

                                                            
                                                                
    
                                                        
            default:
                break;
        }


        if (spaNameStatus.innerHTML.includes("Elevatione")) {
            let hideOne = document.getElementById("hideOne")
            let hideTwo = document.getElementById("hideTwo")
            let hideThree = document.getElementById("hideThree")
            let hideFour = document.getElementById("hideFour")
            // let hideFive = document.getElementById("hideFive")


            hideOne.classList.add("hide");
            hideTwo.classList.add("hide");
            hideThree.classList.add("hide");
            hideFour.classList.add("hide");
            // hideFive.classList.add("hide");


        } else {
            hideOne.classList.remove("hide");
            hideTwo.classList.remove("hide");
            hideThree.classList.remove("hide");
            hideFour.classList.remove("hide");
            // hideFive.classList.remove("hide");


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
        let insteadOfArray = document.getElementsByClassName("insteadOf");


        // USER DATA ENTRY
        let customerName = document.getElementById("custName").value;
        let repName = document.getElementById("empName").value;
        //  let promoPrice = document.getElementById("promoPrice").value;
        let aptDateDay = document.getElementById("aptDateDay").value;
        let aptDateMonth = document.getElementById("aptDateMonth").value;
        let aptMinutesTime = document.getElementById("minutesOfTime").value;
        let aptTime = document.getElementById("aptTime").value;
        let aptTimeAmPm = document.getElementById("aptTimeAmPm").value;
        //  let treatmentSelected = document.getElementById("chooseTreatment").value;
      
        //GOOGLE MAP LINK
        let mapLinkArray = document.getElementsByClassName("varLocationMapLink");
        for (var i = 0; i < mapLinkArray.length; i++) {
        mapLinkArray[i].innerHTML = `<a href="${upDatedSpaMapLINK}" target="_blank">${upDatedSpaMapLINK}</a>`;
}

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

        // insteadOf Loop
        for(var i = 0; i < insteadOfArray.length; i++){
            insteadOfArray[0].innerHTML = insteadOfSpa;
            insteadOfArray[i].innerHTML = insteadOfSpa;
        }

    let newLink = document.getElementById("newSpaLink");
    newLink.setAttribute('href', upDatedSpaWebLINK);

    let newSpaPhoneNumber = document.getElementById("newSpaPhoneNumber");
    newSpaPhoneNumber.innerHTML = newSpaPhoneNumberSelected;

    }



    //  COPY BOTTON
    function copyEvent(id)
    {
        var str = document.getElementById(id);
        window.getSelection().selectAllChildren(str);
        document.execCommand("Copy")
    }

    // SEARCH BARS

    const selected = document.querySelector(".selected");
    const optionsContainer = document.querySelector(".options-container");
    const searchBox = document.querySelector(".search-box input");

    const optionsList = document.querySelectorAll(".option");

    selected.addEventListener("click", () => {
        optionsContainer.classList.toggle("active");

        searchBox.value = "";
        filterList("");

        if(optionsContainer.classList.contains("active")) {
            searchBox.focus();
        }
    });

    optionsList.forEach( o => {
        o.addEventListener("click", () => {
            selected.innerHTML = o.querySelector("label").innerHTML;
            optionsContainer.classList.remove("active");
        });
    });

    searchBox.addEventListener("keyup", function(e){
    filterList(e.target.value);
    });

    const filterList = searchTerm => {
        searchTerm = searchTerm.toLowerCase();
        optionsList.forEach( option => {
            let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
            if (label.indexOf(searchTerm) != -1 ) {
                option.style.display = "block";
            } else {
                option.style.display = "none";
            }
        });
    };
