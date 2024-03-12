function addNewCertificateField(){
    let newNode=document.createElement("input");
    newNode.classList.add("form-control");
    newNode.classList.add("certificateField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","certificate name")

    let certificateDiv = document.getElementById("certificate");
    let certificateAddButtonDiv = document.getElementById("certificateAddButton");

    certificateDiv.insertBefore(newNode, certificateAddButtonDiv);
}

function addNewHobbiesField(){
    let newNode=document.createElement("input");
    newNode.classList.add("form-control");
    newNode.classList.add("HobbiesField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Hobbies name")

    let hobbieseOb = document.getElementById("Hobbies");
    let HobbiesAddButtonOb = document.getElementById("HobbiesAddButton");

    hobbieseOb.insertBefore(newNode,HobbiesAddButtonOb);
}

function addNewSkillsField(){
    let newNode=document.createElement("input");
    newNode.classList.add("form-control");
    newNode.classList.add("SkillsField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Skills name")

    let SkillsOb = document.getElementById("Skills");
    let SkillsAddButtonOb = document.getElementById("SkillssAddButton");

    SkillsOb.insertBefore(newNode,SkillsAddButtonOb);
}

function addNewLangusgeField(){
    let newNode=document.createElement("input");
    newNode.classList.add("form-control");
    newNode.classList.add("LanguageField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Language name")

    let LanguagesOb = document.getElementById("Language");
    let LanguageAddButtonOb = document.getElementById("LanguageAddButton");

    LanguagesOb.insertBefore(newNode,LanguageAddButtonOb);
}






//generating cv

function generateCV(){
    //console.log("helo");

    let nameField=document.getElementById("nameField").value;
    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML = nameField;

    //direct

//name
    document.getElementById("nameT2").innerHTML=nameField;
//contact
    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
//address
    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;
//linkedin
    document.getElementById("linkedT").innerHTML=document.getElementById("linkedinField").value;
//git
    document.getElementById("gitT").innerHTML=document.getElementById("githubField").value;
//web
    document.getElementById("webT").innerHTML=document.getElementById("webField").value;

    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;
//school
    document.getElementById("schoolT").innerHTML=document.getElementById("shhoolnameField").value;

    document.getElementById("schooladdressT").innerHTML=document.getElementById("shhoolboardField").value;

    document.getElementById("marksT").innerHTML=document.getElementById("shhoolmarksField").value;

    document.getElementById("fromT").innerHTML=document.getElementById("shhoolyearfromField").value;
//college
    document.getElementById("CollegeT").innerHTML=document.getElementById("CollegenameField").value;

    document.getElementById("CollegeaddressT").innerHTML=document.getElementById("CollegeboardField").value;

    document.getElementById("CollegemarksT").innerHTML=document.getElementById("CollegemarksField").value;

    document.getElementById("CollegefromT").innerHTML=document.getElementById("CollegeyearfromField").value;

    document.getElementById("CollegetoT").innerHTML=document.getElementById("CollegeyeartoField").value;
//company

    document.getElementById("CompanynameT").innerHTML=document.getElementById("CompanynameField").value;

    document.getElementById("CompanyaddressT").innerHTML=document.getElementById("CompanyroleField").value;

    document.getElementById("CompanyfromT").innerHTML=document.getElementById("CompanyyearfromField").value;

    document.getElementById("CompanytoT").innerHTML=document.getElementById("CompanyyeartoField").value;



//certificate
    let certificate = document.getElementsByClassName("certificateField");
    let str="";
    for(let e of certificate){
        str = str + `<li>${e.value}</li>`;
    }

    document.getElementById("certificateT").innerHTML=str;

//Hobbies
let hobbies= document.getElementsByClassName("HobbiesField");
let str1="";
for(let e of hobbies){
    str1 = str1 + `<li>${e.value}</li>`;
}

document.getElementById("hobbiesT").innerHTML=str1;


let skills= document.getElementsByClassName("SkillsField");
let str2="";
for(let e of skills){
    str2 = str2 + `<li>${e.value}</li>`;
}

document.getElementById("SkillsT").innerHTML=str2;


let Language= document.getElementsByClassName("LanguageField");
let str3="";
for(let e of Language){
    str3 = str3 + `<li>${e.value}</li>`;
}

document.getElementById("LanguageT").innerHTML=str3;

//image

let file=document.getElementById("picField").files[0];
console.log(file);
let reader=new FileReader();
reader.readAsDataURL(file);
console.log(reader.result);

//set image template
reader.onloadend = function(){
document.getElementById("imgT").src=reader.result;
};

//display
document.getElementById("cv-form").style.display="none";
document.getElementById("nav-bar").style.display="none";
document.getElementById("banner").style.display="none";
document.getElementById("cv-footer").style.display="none";
document.getElementById("cv-template").style.display="block";

}


function printCV(){
    window.print();
}