let userName = document.getElementById("userName");
let userPost = document.getElementById("userPost");
let profilePic = document.getElementById("profilePic");
let userPhone = document.getElementById("userPhone");
let userEmail = document.getElementById("userEmail");
let userAddress = document.getElementById("userAddress");
let userPortfolio = document.getElementById("userPortfolio");
let linkedinUser = document.getElementById("linkedinUser");
let objectives = document.getElementById("objectives");

let firstYearstart = document.getElementById("firstYearstart");
let firstYearend = document.getElementById("firstYearend");
let Universityname = document.getElementById("Universityname");
let bechlordegree = document.getElementById("bechlordegree");

let secondYearstart = document.getElementById("secondYearstart");
let secondYearend = document.getElementById("secondYearend");
let Interdegree = document.getElementById("Interdegree");
let collegename = document.getElementById("collegename");

let thirdYearstart = document.getElementById("thirdYearstart");
let thirdYearend = document.getElementById("thirdYearend");
let schoolname = document.getElementById("schoolname");
let Matricdegree = document.getElementById("Matricdegree");

let first_job = document.getElementById("first_job");
let second_job = document.getElementById("second_job");
let third_job = document.getElementById("third_job");
let forth_job = document.getElementById("forth_job");
let fifth_job = document.getElementById("fifth_job");

let jobExpDate1 = document.getElementById("jobExpDate1");
let company1 = document.getElementById("company1");
let jobPost1 = document.getElementById("jobPost1");
let jobDescription1 = document.getElementById("jobDescription1");

let jobExpDate2 = document.getElementById("jobExpDate2");
let company2 = document.getElementById("company2");
let jobPost2 = document.getElementById("jobPost2");
let jobDescription2 = document.getElementById("jobDescription2");

let jobExpDate3 = document.getElementById("jobExpDate3");
let company3 = document.getElementById("company3");
let jobPost3 = document.getElementById("jobPost3");
let jobDescription3 = document.getElementById("jobDescription3");

let jobExpDate4 = document.getElementById("jobExpDate4");
let company4 = document.getElementById("company4");
let jobPost4 = document.getElementById("jobPost4");
let jobDescription4 = document.getElementById("jobDescription4");

let jobExpDate5 = document.getElementById("jobExpDate5");
let company5 = document.getElementById("company5");
let jobPost5 = document.getElementById("jobPost5");
let jobDescription5 = document.getElementById("jobDescription5");

let FirstLanguage = document.getElementById("FirstLanguage");
let FirstLanguagePercent = document.getElementById("FirstLanguagePercent");

let SecondLanguage = document.getElementById("SecondLanguage");
let SecondLanguagePercent = document.getElementById("SecondLanguagePercent");

let ThirdLanguage = document.getElementById("ThirdLanguage");
let ThirdLanguagePercent = document.getElementById("ThirdLanguagePercent");

let ForthLanguage = document.getElementById("ForthLanguage");
let ForthLanguagePercent = document.getElementById("ForthLanguagePercent");

let FirstSkill = document.getElementById("FirstSkill");
let FirstSkillPercent = document.getElementById("FirstSkillPercent");

let SecondSkill = document.getElementById("SecondSkill");
let SecondSkillPercent = document.getElementById("SecondSkillPercent");

let ThirdSkill = document.getElementById("ThirdSkill");
let ThirdSkillPercent = document.getElementById("ThirdSkillPercent");

let ForthSkill = document.getElementById("ForthSkill");
let ForthSkillPercent = document.getElementById("ForthSkillPercent");

let FifthSkill = document.getElementById("FifthSkill");
let FifthSkillPercent = document.getElementById("FifthSkillPercent");

let SixthSkill = document.getElementById("SixthSkill");
let SixthSkillPercent = document.getElementById("SixthSkillPercent");

let SeventhSkill = document.getElementById("SeventhSkill");
let SeventhSkillPercent = document.getElementById("SeventhSkillPercent");

let EightSkill = document.getElementById("EightSkill");
let EightSkillPercent = document.getElementById("EightSkillPercent");

let first_hobby = document.getElementById("first_hobby");
let second_hobby = document.getElementById("second_hobby");
let third_hobby = document.getElementById("third_hobby");
let forth_hobby = document.getElementById("forth_hobby");

let certifications = document.getElementById("certifications");
let first_certification = document.getElementById("first_certification");
let second_certification = document.getElementById("second_certification");
let third_certification = document.getElementById("third_certification");
let forth_certification = document.getElementById("forth_certification");

let profileImg = document.getElementById("profileImg");
let fa_phone = document.getElementById("fa-phone");
let fa_map_marker = document.getElementById("fa-map-marker");
let fa_envelope = document.getElementById("fa-envelope");
let fa_globe = document.getElementById("fa-globe");
let fa__linkedin = document.getElementById("fa-linkedin-in");

let University = document.getElementById("University");
let college = document.getElementById("University");
let school = document.getElementById("school");

let FirstLang = document.getElementById("FirstLang");
let SecondLang = document.getElementById("SecondLang");
let ThirdLang = document.getElementById("ThirdLang");
let ForthLang = document.getElementById("ForthLang");

let interests = document.getElementById("interests");
let first_interest = document.getElementById("first_interest");
let second_interest = document.getElementById("second_interest");
let third_interest = document.getElementById("third_interest");
let forth_interest = document.getElementById("forth_interest");

let first_certify = document.getElementById("first_certify");
let second_certify = document.getElementById("second_certify");
let third_certify = document.getElementById("third_certify");
let forth_certify = document.getElementById("forth_certify");

let Skill1 = document.getElementById("Skill1");
let Skill2 = document.getElementById("Skill2");
let Skill3 = document.getElementById("Skill3");
let Skill4 = document.getElementById("Skill4");
let Skill5 = document.getElementById("Skill5");
let Skill6 = document.getElementById("Skill6");
let Skill7 = document.getElementById("Skill7");
let Skill8 = document.getElementById("Skill8");


let editResume = document.getElementById("editResume");

editResume.addEventListener("click",()=>{
    setTimeout(() => {
        if (true) {

            window.location.href = "./editableForm.html"
        }
    }, 500);
})


function getData() {
    let saveUsers = {};
    let users = localStorage.getItem("users");

    if (users) {
        users = JSON.parse(users)
    } else {
        users = [];
    }

    for (let i = 0; i < users.length; i++) {
        saveUsers = users[i]
    }
    console.log(typeof saveUsers.profileImage);

    if (saveUsers.firstName == undefined || saveUsers.firstName == "" && saveUsers.lastName == undefined || saveUsers.lastName == "") {
        userName.style.display = "none"

    } else {
        userName.innerText = `${saveUsers.firstName} ${saveUsers.lastName}`

    }

    if (saveUsers.profileImage == " " || saveUsers.profileImage == undefined) {
        profileImg.style.display = "none"
    }
    else {
        profilePic.src = `${saveUsers.profileImage}`
    }

    if (saveUsers.objectives == undefined || saveUsers.objectives == "") {
        objectives.style.display = "none"
    } else {
        objectives.innerText = `${saveUsers.objectives}`
    }

    if (saveUsers.post == undefined || saveUsers.post == "") {
        userPost.style.display = "none"
    } else {
        userPost.innerText = `${saveUsers.post}`
    }

    if (saveUsers.phone == undefined || saveUsers.phone == "") {
        fa_phone.style.display = "none"
    } else {
        userPhone.innerText = `${saveUsers.phone}`
    }

    if (saveUsers.email == undefined || saveUsers.email == "") {
        fa_envelope.style.display = "none"
    } else {
        userEmail.innerText = `${saveUsers.email}`
    }

    if (saveUsers.profileUrl == undefined || saveUsers.profileUrl == "") {
        fa_globe.style.display = "none"
    } else {
        userPortfolio.innerText = `${saveUsers.profileUrl}`
    }

    if (saveUsers.address == undefined || saveUsers.address == "") {
        fa_map_marker.style.display = "none"
    } else {
        userAddress.innerText = `${saveUsers.address}`
    }

    if (saveUsers.linkedinUrl == undefined || saveUsers.linkedinUrl == "") {
        fa__linkedin.style.display = "none"
    }
    else {
        linkedinUser.innerText = `${saveUsers.linkedinUrl}`
    }



    /////////////////////////////////////// Education data ////////////////////////////////////////////////

    if (saveUsers.firstYearStart == undefined || saveUsers.firstYearStart == "" && saveUsers.firstYearEnd == undefined || saveUsers.firstYearEnd == "") {
        firstYearstart.style.display = "none"
    }
    else {
        firstYearstart.textContent = `${saveUsers.firstYearStart} - ${saveUsers.firstYearEnd}`
    }

    if (saveUsers.secondYearStart == undefined || saveUsers.secondYearStart == "" && saveUsers.secondYearEnd == undefined || saveUsers.secondYearEnd == "") {
        secondYearstart.style.display = "none"
    } else {
        secondYearstart.textContent = `${saveUsers.secondYearStart} - ${saveUsers.secondYearEnd}`

    }

    if (saveUsers.thirdYearStart == undefined || saveUsers.thirdYearStart == "" && saveUsers.thirdYearEnd == undefined || saveUsers.thirdYearEnd == "") {
        thirdYearstart.style.display = "none"
    } else {
        thirdYearstart.textContent = `${saveUsers.thirdYearStart} - ${saveUsers.thirdYearEnd}`

    }

    if (
        saveUsers.bechlorDegree == undefined || saveUsers.bechlorDegree == "" &&
        saveUsers.UniversityName == undefined || saveUsers.UniversityName == "" &&

        saveUsers.InterDegree == undefined || saveUsers.InterDegree == "" &&
        saveUsers.collegeName == undefined || saveUsers.collegeName == "" &&

        saveUsers.MatricDegree == undefined || saveUsers.MatricDegree == "" &&
        saveUsers.schoolName == undefined || saveUsers.schoolName == ""
    ) {
        bechlordegree.style.display = "none";
        Universityname.style.display = "none";
        Interdegree.style.display = "none";
        collegename.style.display = "none";
        Matricdegree.style.display = "none";
        schoolname.style.display = "none";
    } else {
        bechlordegree.textContent = `${saveUsers.bechlorDegree}`
        Universityname.textContent = `${saveUsers.UniversityName}`
        Interdegree.textContent = `${saveUsers.InterDegree}`
        collegename.textContent = `${saveUsers.collegeName}`
        Matricdegree.textContent = `${saveUsers.MatricDegree}`
        schoolname.textContent = `${saveUsers.schoolName}`
    }

    ////////////////////////////////// Languages data ///////////////////////////////
    if (
        saveUsers.FirstLanguage == undefined || saveUsers.FirstLanguage == ""
        && saveUsers.FirstLanguagePercent == undefined || saveUsers.FirstLanguagePercent == ""
    ) {
        FirstLang.style.display = "none";
    } else {
        FirstLanguage.textContent = `${saveUsers.FirstLanguage}`;
        FirstLanguagePercent.style.width = `${saveUsers.FirstLanguagePercent}%`;
    }

    if (
        saveUsers.SecondLanguage == undefined || saveUsers.SecondLanguage == ""
        && saveUsers.SecondLanguagePercent == undefined || saveUsers.SecondLanguagePercent == ""
    ) {
        SecondLang.style.display = "none";
    } else {
        SecondLanguage.textContent = `${saveUsers.SecondLanguage}`;
        SecondLanguagePercent.style.width = `${saveUsers.SecondLanguagePercent}%`;
    }

    if (
        saveUsers.ThirdLanguage == undefined || saveUsers.ThirdLanguage == ""
        && saveUsers.ThirdLanguagePercent == undefined || saveUsers.ThirdLanguagePercent == ""
    ) {
        ThirdLang.style.display = "none";
    } else {
        ThirdLanguage.textContent = `${saveUsers.ThirdLanguage}`;
        ThirdLanguagePercent.style.width = `${saveUsers.ThirdLanguagePercent}%`;

    }

    if (
        saveUsers.ForthLanguage == undefined || saveUsers.ForthLanguage == ""
        && saveUsers.ForthLanguagePercent == undefined || saveUsers.ForthLanguagePercent == ""
    ) {
        ForthLang.style.display = "none";
    }
    else {
        ForthLanguage.textContent = `${saveUsers.ForthLanguage}`;
        ForthLanguagePercent.style.width = `${saveUsers.ForthLanguagePercent}%`;
    }



    /////////////////////////////////////// hobby data ///////////////////////////////

    if(
        saveUsers.first_hobby !== undefined || saveUsers.first_hobby !== ""
        && saveUsers.second_hobby !== undefined || saveUsers.second_hobby !== ""
        && saveUsers.third_hobby !== undefined || saveUsers.third_hobby == !"" 
        && saveUsers.forth_hobby !== undefined || saveUsers.forth_hobby == !"" 
    ){
        interests.style.display = "block"
    }
    else {
        interests.style.display = "none"
    }
    

    if (saveUsers.first_hobby == undefined || saveUsers.first_hobby == "") {
        first_interest.style.display = "none"
    }
    else {
        first_hobby.textContent = `${saveUsers.first_hobby}`;
    }

    if (saveUsers.second_hobby == undefined || saveUsers.second_hobby == "") {
        second_interest.style.display = "none"
    }
    else {
        second_hobby.textContent = `${saveUsers.second_hobby}`;
    }

    if (saveUsers.third_hobby == undefined || saveUsers.third_hobby == "") {
        third_interest.style.display = "none"
    }
    else {
        third_hobby.textContent = `${saveUsers.third_hobby}`;
    }

    if (saveUsers.forth_hobby == undefined || saveUsers.forth_hobby == "") {
        forth_interest.style.display = "none"
    }
    else {
        forth_hobby.textContent = `${saveUsers.forth_hobby}`;
    }

   

    /////////////////////////////////////// certification data ///////////////////////////////

    if(
        saveUsers.first_certification !== undefined  || saveUsers.first_certification !== ""
        && saveUsers.second_certification !== undefined  || saveUsers.second_certification !== "" 
        && saveUsers.third_certification !== undefined  || saveUsers.third_certification !== "" 
        && saveUsers.forth_certification !== undefined || saveUsers.forth_certification !== "" 
    ){
        certifications.style.display = "block"
    }
    else{
        certifications.style.display ="none"
    }


    if (saveUsers.first_certification == undefined || saveUsers.first_certification == "") {
        first_certify.style.display = "none"
    }
    else {
        first_certification.textContent = `${saveUsers.first_certification}`;
    }

    if (saveUsers.second_certification == undefined || saveUsers.second_certification == "") {
        second_certify.style.display = "none"
    }
    else {
        second_certification.textContent = `${saveUsers.second_certification}`;
    }

    if (saveUsers.third_certification == undefined || saveUsers.third_certification == "") {
        third_certify.style.display = "none"
    }
    else {
        third_certification.textContent = `${saveUsers.third_certification}`;
    }

    if (saveUsers.forth_certification == undefined || saveUsers.forth_certification == "") {
        forth_certify.style.display = "none"
    }
    else {
        forth_certification.textContent = `${saveUsers.forth_certification}`;
    }


    if (
        saveUsers.StartYear1 == undefined || saveUsers.StartYear1 == ""
        && saveUsers.StartYear2 == undefined || saveUsers.StartYear2 == ""
        && saveUsers.fisrtCompany == undefined || saveUsers.fisrtCompany == ""
        && saveUsers.jobPost1 == undefined || saveUsers.jobPost1 == ""
        && saveUsers.Description1 == undefined || saveUsers.Description1 == ""
    ) {
        first_job.style.display = "none"
    }
    else {
        first_job.style.display = "flex"

    }

    if (
        saveUsers.StartYear3 == undefined || saveUsers.StartYear3 == ""
        && saveUsers.StartYear3 == undefined || saveUsers.StartYear3 == ""

        && saveUsers.secondCompany == undefined || saveUsers.secondCompany == ""
        && saveUsers.jobPost2 == undefined || saveUsers.jobPost2 == ""
        && saveUsers.Description2 == undefined || saveUsers.Description2 == ""

    ) {
        second_job.style.display = "none"
    }
    else {
        second_job.style.display = "flex"

    }

    if (
        saveUsers.StartYear5 == undefined || saveUsers.StartYear5 == ""
        && saveUsers.StartYear6 == undefined || saveUsers.StartYear6 == ""

        && saveUsers.thirdCompany == undefined || saveUsers.thirdCompany == ""
        && saveUsers.jobPost3 == undefined || saveUsers.jjobPost3obPost1 == ""
        && saveUsers.Description3 == undefined || saveUsers.Description3 == ""

    ) {
        third_job.style.display = "none"
    }
    else {
        third_job.style.display = "flex"

    }

    if (
        saveUsers.StartYear7 == undefined || saveUsers.StartYear7 == ""
        && saveUsers.StartYear8 == undefined || saveUsers.StartYear8 == ""

        && saveUsers.forthCompany == undefined || saveUsers.forthCompany == ""
        && saveUsers.jobPost4 == undefined || saveUsers.jobPost4 == ""
        && saveUsers.Description4 == undefined || saveUsers.Description4 == ""
    ) {
        forth_job.style.display = "none"
    }
    else {
        forth_job.style.display = "flrex"

    }

    if (
        saveUsers.StartYear9 == undefined || saveUsers.StartYear9 == ""
        && saveUsers.StartYear0 == undefined || saveUsers.StartYear0 == ""

        && saveUsers.fifthCompany == undefined || saveUsers.fifthCompany == ""
        && saveUsers.jobPost5 == undefined || saveUsers.jobPost5 == ""
        && saveUsers.Description5 == undefined || saveUsers.Description5 == ""

    ) {
        fifth_job.style.display = "none"
    }
    else {
        fifth_job.style.display = "flex"

    }


    if (
        saveUsers.fisrtCompany == undefined ||
        saveUsers.jobPost1 == undefined ||
        saveUsers.Description1 == undefined ||

        saveUsers.secondCompany == undefined ||
        saveUsers.jobPost2 == undefined ||
        saveUsers.Description2 == undefined ||

        saveUsers.thirdCompany == undefined ||
        saveUsers.jobPost3 == undefined ||
        saveUsers.Description3 == undefined ||

        saveUsers.forthCompany == undefined ||
        saveUsers.jobPost4 == undefined ||
        saveUsers.Description4 == undefined ||

        saveUsers.fifthCompany == undefined ||
        saveUsers.jobPost5 == undefined ||
        saveUsers.Description5 == undefined
    ) {
        company1.style.display = "none"
        jobPost1.style.display = "none"
        jobDescription1.style.display = "none"

        company2.style.display = "none"
        jobPost2.style.display = "none"
        jobDescription2.style.display = "none"

        company3.style.display = "none"
        jobPost3.style.display = "none"
        jobDescription3.style.display = "none"

        company4.style.display = "none"
        jobPost4.style.display = "none"
        jobDescription4.style.display = "none"

        company5.style.display = "none"
        jobPost5.style.display = "none"
        jobDescription5.style.display = "none"

    }
    else {
        company1.textContent = `${saveUsers.fisrtCompany}`
        jobPost1.textContent = `${saveUsers.jobPost1}`
        jobDescription1.textContent = `${saveUsers.Description1}`

        company2.textContent = `${saveUsers.secondCompany}`
        jobPost2.textContent = `${saveUsers.jobPost2}`
        jobDescription2.textContent = `${saveUsers.Description2}`

        company3.textContent = `${saveUsers.thirdCompany}`
        jobPost3.textContent = `${saveUsers.jobPost3}`
        jobDescription3.textContent = `${saveUsers.Description3}`

        company4.textContent = `${saveUsers.forthCompany}`
        jobPost4.textContent = `${saveUsers.jobPost4}`
        jobDescription4.textContent = `${saveUsers.Description4}`

        company5.textContent = `${saveUsers.fifthCompany}`
        jobPost5.textContent = `${saveUsers.jobPost5}`
        jobDescription5.textContent = `${saveUsers.Description5}`

    }




    if (saveUsers.StartYear1 == undefined || saveUsers.StartYear1 == "" && saveUsers.StartYear2 == undefined || saveUsers.StartYear2 == "") {
        jobExpDate1.style.display = "none"
    }
    else {
        jobExpDate1.textContent = `${saveUsers.StartYear1} - ${saveUsers.StartYear2}`
    }

    if (saveUsers.StartYear3 == undefined || saveUsers.StartYear3 == "" && saveUsers.StartYear3 == undefined || saveUsers.StartYear3 == "") {
        jobExpDate2.style.display = "none"
    } else {
        jobExpDate2.textContent = `${saveUsers.StartYear3} - ${saveUsers.StartYear3}`

    }

    if (saveUsers.StartYear5 == undefined || saveUsers.StartYear5 == "" && saveUsers.StartYear6 == undefined || saveUsers.StartYear6 == "") {
        jobExpDate3.style.display = "none"
    } else {
        jobExpDate3.textContent = `${saveUsers.StartYear5} - ${saveUsers.StartYear6}`

    }

    if (saveUsers.StartYear7 == undefined || saveUsers.StartYear7 == "" && saveUsers.StartYear8 == undefined || saveUsers.StartYear8 == "") {
        jobExpDate4.style.display = "none"
    } else {
        jobExpDate4.textContent = `${saveUsers.StartYear7} - ${saveUsers.StartYear8}`

    }

    if (saveUsers.StartYear9 == undefined || saveUsers.StartYear9 == "" && saveUsers.StartYear0 == undefined || saveUsers.StartYear0 == "") {
        jobExpDate5.style.display = "none"
    } else {
        jobExpDate5.textContent = `${saveUsers.StartYear9} - ${saveUsers.StartYear0}`

    }



    if (
        saveUsers.FirstSkill == undefined || saveUsers.FirstSkill == ""
        && saveUsers.FirstSkillPercent == undefined || saveUsers.FirstSkillPercent == ""
    ) {
        Skill1.style.display = "none";
    } else {
        FirstSkill.textContent = `${saveUsers.FirstSkill}`;
        FirstSkillPercent.style.width = `${saveUsers.FirstSkillPercent}%`;
    }

    if (
        saveUsers.SecondSkill == undefined || saveUsers.SecondSkill == ""
        && saveUsers.SecondSkillPercent == undefined || saveUsers.SecondSkillPercent == ""
    ) {
        Skill2.style.display = "none";
    } else {
        SecondSkill.textContent = `${saveUsers.SecondSkill}`;
        SecondSkillPercent.style.width = `${saveUsers.SecondSkillPercent}%`;;
    }

    if (
        saveUsers.ThirdSkill == undefined || saveUsers.ThirdSkill == ""
        && saveUsers.ThirdSkillPercent == undefined || saveUsers.ThirdSkillPercent == ""
    ) {
        Skill3.style.display = "none";
    } else {
        ThirdSkill.textContent = `${saveUsers.ThirdSkill}`;
        ThirdSkillPercent.style.width = `${saveUsers.ThirdSkillPercent}%`;

    }

    if (
        saveUsers.ForthSkill == undefined || saveUsers.ForthSkill == ""
        && saveUsers.ForthSkillPercent == undefined || saveUsers.ForthSkillPercent == ""
    ) {
        Skill4.style.display = "none";
    } else {
        ForthSkill.textContent = `${saveUsers.ForthSkill}`;
        ForthSkillPercent.style.width = `${saveUsers.ForthSkillPercent}%`;
    }

    if (
        saveUsers.FifthSkill == undefined || saveUsers.FifthSkill == ""
        && saveUsers.FifthSkillPercent == undefined || saveUsers.FifthSkillPercent == ""
    ) {
        Skill5.style.display = "none";
    } else {
        FifthSkill.textContent = `${saveUsers.FifthSkill}`;
        FifthSkillPercent.style.width = `${saveUsers.FifthSkillPercent}%`;
    }

    if (
        saveUsers.SixthSkill == undefined || saveUsers.SixthSkill == ""
        && saveUsers.SixthSkillPercent == undefined || saveUsers.SixthSkillPercent == ""
    ) {
        Skill6.style.display = "none";
    } else {
        SixthSkill.textContent = `${saveUsers.SixthSkill}`;
        SixthSkillPercent.style.width = `${saveUsers.SixthSkillPercent}%`;
    }

    if (
        saveUsers.SeventhSkill == undefined || saveUsers.SeventhSkill == ""
        && saveUsers.SeventhSkillPercent == undefined || saveUsers.SeventhSkillPercent == ""
    ) {
        Skill7.style.display = "none";
    } else {
        SeventhSkill.textContent = `${saveUsers.SeventhSkill}`;
        SeventhSkillPercent.style.width = `${saveUsers.SeventhSkillPercent}%`;

    }

    if (
        saveUsers.EightSkill == undefined || saveUsers.EightSkill == ""
        && saveUsers.EightSkillPercent == undefined || saveUsers.EightSkillPercent == ""
    ) {
        Skill8.style.display = "none";
    } else {

        EightSkill.textContent = `${saveUsers.EightSkill}`;
        EightSkillPercent.style.width = `${saveUsers.EightSkillPercent}%`;
    }


}

getData()
