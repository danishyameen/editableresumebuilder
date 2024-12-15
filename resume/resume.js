var userName = document.getElementById("userName");
var userPost = document.getElementById("userPost");
var profilePic = document.getElementById("profilePic");
var userPhone = document.getElementById("userPhone");
var userEmail = document.getElementById("userEmail");
var userAddress = document.getElementById("userAddress");
var userPortfolio = document.getElementById("userPortfolio");
var linkedinUser = document.getElementById("linkedinUser");
var objectives = document.getElementById("objectives");
var firstYearstart = document.getElementById("firstYearstart");
var firstYearend = document.getElementById("firstYearend");
var Universityname = document.getElementById("Universityname");
var bechlordegree = document.getElementById("bechlordegree");
var secondYearstart = document.getElementById("secondYearstart");
var secondYearend = document.getElementById("secondYearend");
var Interdegree = document.getElementById("Interdegree");
var collegename = document.getElementById("collegename");
var thirdYearstart = document.getElementById("thirdYearstart");
var thirdYearend = document.getElementById("thirdYearend");
var schoolname = document.getElementById("schoolname");
var Matricdegree = document.getElementById("Matricdegree");
var first_job = document.getElementById("first_job");
var second_job = document.getElementById("second_job");
var third_job = document.getElementById("third_job");
var forth_job = document.getElementById("forth_job");
var fifth_job = document.getElementById("fifth_job");
var jobExpDate1 = document.getElementById("jobExpDate1");
var company1 = document.getElementById("company1");
var jobPost1 = document.getElementById("jobPost1");
var jobDescription1 = document.getElementById("jobDescription1");
var jobExpDate2 = document.getElementById("jobExpDate2");
var company2 = document.getElementById("company2");
var jobPost2 = document.getElementById("jobPost2");
var jobDescription2 = document.getElementById("jobDescription2");
var jobExpDate3 = document.getElementById("jobExpDate3");
var company3 = document.getElementById("company3");
var jobPost3 = document.getElementById("jobPost3");
var jobDescription3 = document.getElementById("jobDescription3");
var jobExpDate4 = document.getElementById("jobExpDate4");
var company4 = document.getElementById("company4");
var jobPost4 = document.getElementById("jobPost4");
var jobDescription4 = document.getElementById("jobDescription4");
var jobExpDate5 = document.getElementById("jobExpDate5");
var company5 = document.getElementById("company5");
var jobPost5 = document.getElementById("jobPost5");
var jobDescription5 = document.getElementById("jobDescription5");
var FirstLanguage = document.getElementById("FirstLanguage");
var FirstLanguagePercent = document.getElementById("FirstLanguagePercent");
var SecondLanguage = document.getElementById("SecondLanguage");
var SecondLanguagePercent = document.getElementById("SecondLanguagePercent");
var ThirdLanguage = document.getElementById("ThirdLanguage");
var ThirdLanguagePercent = document.getElementById("ThirdLanguagePercent");
var ForthLanguage = document.getElementById("ForthLanguage");
var ForthLanguagePercent = document.getElementById("ForthLanguagePercent");
var FirstSkill = document.getElementById("FirstSkill");
var FirstSkillPercent = document.getElementById("FirstSkillPercent");
var SecondSkill = document.getElementById("SecondSkill");
var SecondSkillPercent = document.getElementById("SecondSkillPercent");
var ThirdSkill = document.getElementById("ThirdSkill");
var ThirdSkillPercent = document.getElementById("ThirdSkillPercent");
var ForthSkill = document.getElementById("ForthSkill");
var ForthSkillPercent = document.getElementById("ForthSkillPercent");
var FifthSkill = document.getElementById("FifthSkill");
var FifthSkillPercent = document.getElementById("FifthSkillPercent");
var SixthSkill = document.getElementById("SixthSkill");
var SixthSkillPercent = document.getElementById("SixthSkillPercent");
var SeventhSkill = document.getElementById("SeventhSkill");
var SeventhSkillPercent = document.getElementById("SeventhSkillPercent");
var EightSkill = document.getElementById("EightSkill");
var EightSkillPercent = document.getElementById("EightSkillPercent");
var first_hobby = document.getElementById("first_hobby");
var second_hobby = document.getElementById("second_hobby");
var third_hobby = document.getElementById("third_hobby");
var forth_hobby = document.getElementById("forth_hobby");
var certifications = document.getElementById("certifications");
var first_certification = document.getElementById("first_certification");
var second_certification = document.getElementById("second_certification");
var third_certification = document.getElementById("third_certification");
var forth_certification = document.getElementById("forth_certification");
var profileImg = document.getElementById("profileImg");
var fa_phone = document.getElementById("fa-phone");
var fa_map_marker = document.getElementById("fa-map-marker");
var fa_envelope = document.getElementById("fa-envelope");
var fa_globe = document.getElementById("fa-globe");
var fa__linkedin = document.getElementById("fa-linkedin-in");
var University = document.getElementById("University");
var college = document.getElementById("University");
var school = document.getElementById("school");
var FirstLang = document.getElementById("FirstLang");
var SecondLang = document.getElementById("SecondLang");
var ThirdLang = document.getElementById("ThirdLang");
var ForthLang = document.getElementById("ForthLang");
var interests = document.getElementById("interests");
var first_interest = document.getElementById("first_interest");
var second_interest = document.getElementById("second_interest");
var third_interest = document.getElementById("third_interest");
var forth_interest = document.getElementById("forth_interest");
var first_certify = document.getElementById("first_certify");
var second_certify = document.getElementById("second_certify");
var third_certify = document.getElementById("third_certify");
var forth_certify = document.getElementById("forth_certify");
var Skill1 = document.getElementById("Skill1");
var Skill2 = document.getElementById("Skill2");
var Skill3 = document.getElementById("Skill3");
var Skill4 = document.getElementById("Skill4");
var Skill5 = document.getElementById("Skill5");
var Skill6 = document.getElementById("Skill6");
var Skill7 = document.getElementById("Skill7");
var Skill8 = document.getElementById("Skill8");
var editResume = document.getElementById("editResume");
editResume.addEventListener("click", function () {
    setTimeout(function () {
        if (true) {
            window.location.href = "../editableResume/editableForm.html";
        }
    }, 500);
});
function getData() {
    var saveUsers = {
        firstName: "",
        lastName: "",
        profileImage: "",
        email: "",
        post: "",
        phone: 0,
        address: "",
        profileUrl: "",
        linkedinUrl: "",
        objectives: "",
        firstYearStart: "",
        firstYearEnd: "",
        UniversityName: "",
        bechlorDegree: "",
        secondYearStart: "",
        secondYearEnd: "",
        collegeName: "",
        InterDegree: "",
        thirdYearStart: "",
        thirdYearEnd: "",
        schoolName: "",
        MatricDegree: "",
        StartYear1: "",
        StartYear2: "",
        jobPost1: "",
        fisrtCompany: "",
        Description1: "",
        StartYear3: "",
        StartYear4: "",
        jobPost2: "",
        secondCompany: "",
        Description2: "",
        StartYear5: "",
        StartYear6: "",
        jobPost3: "",
        thirdCompany: "",
        Description3: "",
        StartYear7: "",
        StartYear8: "",
        jobPost4: "",
        forthCompany: "",
        Description4: "",
        StartYear9: "",
        StartYear0: "",
        jobPost5: "",
        fifthCompany: "",
        Description5: "",
        FirstLanguage: "",
        FirstLanguagePercent: "",
        SecondLanguage: "",
        SecondLanguagePercent: "",
        ThirdLanguage: "",
        ThirdLanguagePercent: "",
        ForthLanguage: "",
        ForthLanguagePercent: "",
        FirstSkill: "",
        FirstSkillPercent: "",
        SecondSkill: "",
        SecondSkillPercent: "",
        ThirdSkill: "",
        ThirdSkillPercent: "",
        ForthSkill: "",
        ForthSkillPercent: "",
        FifthSkill: "",
        FifthSkillPercent: "",
        SixthSkill: "",
        SixthSkillPercent: "",
        SeventhSkill: "",
        SeventhSkillPercent: "",
        EightSkill: "",
        EightSkillPercent: "",
        first_hobby: "",
        second_hobby: "",
        third_hobby: "",
        forth_hobby: "",
        first_certification: "",
        second_certification: "",
        third_certification: "",
        forth_certification: ""
    };
    var users = localStorage.getItem("users");
    if (users) {
        users = JSON.parse(users);
    }
    else {
        users = [];
    }
    for (var i = 0; i < users.length; i++) {
        saveUsers = users[i];
    }
    console.log(typeof saveUsers.profileImage);
    if (saveUsers.firstName == undefined || saveUsers.firstName == "" && saveUsers.lastName == undefined || saveUsers.lastName == "") {
        userName.style.display = "none";
    }
    else {
        userName.innerText = "".concat(saveUsers.firstName, " ").concat(saveUsers.lastName);
    }
    if (saveUsers.profileImage == " " || saveUsers.profileImage == undefined) {
        profileImg.style.display = "none";
    }
    else {
        profilePic.src = "".concat(saveUsers.profileImage);
    }
    if (saveUsers.objectives == undefined || saveUsers.objectives == "") {
        objectives.style.display = "none";
    }
    else {
        objectives.innerText = "".concat(saveUsers.objectives);
    }
    if (saveUsers.post == undefined || saveUsers.post == "") {
        userPost.style.display = "none";
    }
    else {
        userPost.innerText = "".concat(saveUsers.post);
    }
    if (saveUsers.phone == undefined || saveUsers.phone == 0) {
        fa_phone.style.display = "none";
    }
    else {
        userPhone.innerText = "".concat(saveUsers.phone);
    }
    if (saveUsers.email == undefined || saveUsers.email == "") {
        fa_envelope.style.display = "none";
    }
    else {
        userEmail.innerText = "".concat(saveUsers.email);
    }
    if (saveUsers.profileUrl == undefined || saveUsers.profileUrl == "") {
        fa_globe.style.display = "none";
    }
    else {
        userPortfolio.innerText = "".concat(saveUsers.profileUrl);
    }
    if (saveUsers.address == undefined || saveUsers.address == "") {
        fa_map_marker.style.display = "none";
    }
    else {
        userAddress.innerText = "".concat(saveUsers.address);
    }
    if (saveUsers.linkedinUrl == undefined || saveUsers.linkedinUrl == "") {
        fa__linkedin.style.display = "none";
    }
    else {
        linkedinUser.innerText = "".concat(saveUsers.linkedinUrl);
    }
    /////////////////////////////////////// Education data ////////////////////////////////////////////////
    if (saveUsers.firstYearStart == undefined || saveUsers.firstYearStart == "" && saveUsers.firstYearEnd == undefined || saveUsers.firstYearEnd == "") {
        firstYearstart.style.display = "none";
    }
    else {
        firstYearstart.textContent = "".concat(saveUsers.firstYearStart, " - ").concat(saveUsers.firstYearEnd);
    }
    if (saveUsers.secondYearStart == undefined || saveUsers.secondYearStart == "" && saveUsers.secondYearEnd == undefined || saveUsers.secondYearEnd == "") {
        secondYearstart.style.display = "none";
    }
    else {
        secondYearstart.textContent = "".concat(saveUsers.secondYearStart, " - ").concat(saveUsers.secondYearEnd);
    }
    if (saveUsers.thirdYearStart == undefined || saveUsers.thirdYearStart == "" && saveUsers.thirdYearEnd == undefined || saveUsers.thirdYearEnd == "") {
        thirdYearstart.style.display = "none";
    }
    else {
        thirdYearstart.textContent = "".concat(saveUsers.thirdYearStart, " - ").concat(saveUsers.thirdYearEnd);
    }
    if (saveUsers.bechlorDegree == undefined || saveUsers.bechlorDegree == "" &&
        saveUsers.UniversityName == undefined || saveUsers.UniversityName == "" &&
        saveUsers.InterDegree == undefined || saveUsers.InterDegree == "" &&
        saveUsers.collegeName == undefined || saveUsers.collegeName == "" &&
        saveUsers.MatricDegree == undefined || saveUsers.MatricDegree == "" &&
        saveUsers.schoolName == undefined || saveUsers.schoolName == "") {
        bechlordegree.style.display = "none";
        Universityname.style.display = "none";
        Interdegree.style.display = "none";
        collegename.style.display = "none";
        Matricdegree.style.display = "none";
        schoolname.style.display = "none";
    }
    else {
        bechlordegree.textContent = "".concat(saveUsers.bechlorDegree);
        Universityname.textContent = "".concat(saveUsers.UniversityName);
        Interdegree.textContent = "".concat(saveUsers.InterDegree);
        collegename.textContent = "".concat(saveUsers.collegeName);
        Matricdegree.textContent = "".concat(saveUsers.MatricDegree);
        schoolname.textContent = "".concat(saveUsers.schoolName);
    }
    ////////////////////////////////// Languages data ///////////////////////////////
    if (saveUsers.FirstLanguage == undefined || saveUsers.FirstLanguage == ""
        && saveUsers.FirstLanguagePercent == undefined || saveUsers.FirstLanguagePercent == "") {
        FirstLang.style.display = "none";
    }
    else {
        FirstLanguage.textContent = "".concat(saveUsers.FirstLanguage);
        FirstLanguagePercent.style.width = "".concat(saveUsers.FirstLanguagePercent, "%");
    }
    if (saveUsers.SecondLanguage == undefined || saveUsers.SecondLanguage == ""
        && saveUsers.SecondLanguagePercent == undefined || saveUsers.SecondLanguagePercent == "") {
        SecondLang.style.display = "none";
    }
    else {
        SecondLanguage.textContent = "".concat(saveUsers.SecondLanguage);
        SecondLanguagePercent.style.width = "".concat(saveUsers.SecondLanguagePercent, "%");
    }
    if (saveUsers.ThirdLanguage == undefined || saveUsers.ThirdLanguage == ""
        && saveUsers.ThirdLanguagePercent == undefined || saveUsers.ThirdLanguagePercent == "") {
        ThirdLang.style.display = "none";
    }
    else {
        ThirdLanguage.textContent = "".concat(saveUsers.ThirdLanguage);
        ThirdLanguagePercent.style.width = "".concat(saveUsers.ThirdLanguagePercent, "%");
    }
    if (saveUsers.ForthLanguage == undefined || saveUsers.ForthLanguage == ""
        && saveUsers.ForthLanguagePercent == undefined || saveUsers.ForthLanguagePercent == "") {
        ForthLang.style.display = "none";
    }
    else {
        ForthLanguage.textContent = "".concat(saveUsers.ForthLanguage);
        ForthLanguagePercent.style.width = "".concat(saveUsers.ForthLanguagePercent, "%");
    }
    /////////////////////////////////////// hobby data ///////////////////////////////
    if (saveUsers.first_hobby !== undefined || saveUsers.first_hobby !== ""
        && saveUsers.second_hobby !== undefined || saveUsers.second_hobby !== ""
        && saveUsers.third_hobby !== undefined || saveUsers.third_hobby !== ""
        && saveUsers.forth_hobby !== undefined || saveUsers.forth_hobby !== "") {
        interests.style.display = "block";
    }
    else {
        interests.style.display = "none";
    }
    if (saveUsers.first_hobby == undefined || saveUsers.first_hobby == "") {
        first_interest.style.display = "none";
    }
    else {
        first_hobby.textContent = "".concat(saveUsers.first_hobby);
    }
    if (saveUsers.second_hobby == undefined || saveUsers.second_hobby == "") {
        second_interest.style.display = "none";
    }
    else {
        second_hobby.textContent = "".concat(saveUsers.second_hobby);
    }
    if (saveUsers.third_hobby == undefined || saveUsers.third_hobby == "") {
        third_interest.style.display = "none";
    }
    else {
        third_hobby.textContent = "".concat(saveUsers.third_hobby);
    }
    if (saveUsers.forth_hobby == undefined || saveUsers.forth_hobby == "") {
        forth_interest.style.display = "none";
    }
    else {
        forth_hobby.textContent = "".concat(saveUsers.forth_hobby);
    }
    /////////////////////////////////////// certification data ///////////////////////////////
    if (saveUsers.first_certification !== undefined || saveUsers.first_certification !== ""
        && saveUsers.second_certification !== undefined || saveUsers.second_certification !== ""
        && saveUsers.third_certification !== undefined || saveUsers.third_certification !== ""
        && saveUsers.forth_certification !== undefined || saveUsers.forth_certification !== "") {
        certifications.style.display = "block";
    }
    else {
        certifications.style.display = "none";
    }
    if (saveUsers.first_certification == undefined || saveUsers.first_certification == "") {
        first_certify.style.display = "none";
    }
    else {
        first_certification.textContent = "".concat(saveUsers.first_certification);
    }
    if (saveUsers.second_certification == undefined || saveUsers.second_certification == "") {
        second_certify.style.display = "none";
    }
    else {
        second_certification.textContent = "".concat(saveUsers.second_certification);
    }
    if (saveUsers.third_certification == undefined || saveUsers.third_certification == "") {
        third_certify.style.display = "none";
    }
    else {
        third_certification.textContent = "".concat(saveUsers.third_certification);
    }
    if (saveUsers.forth_certification == undefined || saveUsers.forth_certification == "") {
        forth_certify.style.display = "none";
    }
    else {
        forth_certification.textContent = "".concat(saveUsers.forth_certification);
    }
    if (saveUsers.StartYear1 == undefined || saveUsers.StartYear1 == ""
        && saveUsers.StartYear2 == undefined || saveUsers.StartYear2 == ""
        && saveUsers.fisrtCompany == undefined || saveUsers.fisrtCompany == ""
        && saveUsers.jobPost1 == undefined || saveUsers.jobPost1 == ""
        && saveUsers.Description1 == undefined || saveUsers.Description1 == "") {
        first_job.style.display = "none";
    }
    else {
        first_job.style.display = "flex";
    }
    if (saveUsers.StartYear3 == undefined || saveUsers.StartYear3 == ""
        && saveUsers.StartYear3 == undefined || saveUsers.StartYear3 == ""
        && saveUsers.secondCompany == undefined || saveUsers.secondCompany == ""
        && saveUsers.jobPost2 == undefined || saveUsers.jobPost2 == ""
        && saveUsers.Description2 == undefined || saveUsers.Description2 == "") {
        second_job.style.display = "none";
    }
    else {
        second_job.style.display = "flex";
    }
    if (saveUsers.StartYear5 == undefined || saveUsers.StartYear5 == ""
        && saveUsers.StartYear6 == undefined || saveUsers.StartYear6 == ""
        && saveUsers.thirdCompany == undefined || saveUsers.thirdCompany == ""
        && saveUsers.jobPost3 == undefined || saveUsers.jobPost3 == ""
        && saveUsers.Description3 == undefined || saveUsers.Description3 == "") {
        third_job.style.display = "none";
    }
    else {
        third_job.style.display = "flex";
    }
    if (saveUsers.StartYear7 == undefined || saveUsers.StartYear7 == ""
        && saveUsers.StartYear8 == undefined || saveUsers.StartYear8 == ""
        && saveUsers.forthCompany == undefined || saveUsers.forthCompany == ""
        && saveUsers.jobPost4 == undefined || saveUsers.jobPost4 == ""
        && saveUsers.Description4 == undefined || saveUsers.Description4 == "") {
        forth_job.style.display = "none";
    }
    else {
        forth_job.style.display = "flrex";
    }
    if (saveUsers.StartYear9 == undefined || saveUsers.StartYear9 == ""
        && saveUsers.StartYear0 == undefined || saveUsers.StartYear0 == ""
        && saveUsers.fifthCompany == undefined || saveUsers.fifthCompany == ""
        && saveUsers.jobPost5 == undefined || saveUsers.jobPost5 == ""
        && saveUsers.Description5 == undefined || saveUsers.Description5 == "") {
        fifth_job.style.display = "none";
    }
    else {
        fifth_job.style.display = "flex";
    }
    if (saveUsers.fisrtCompany == undefined ||
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
        saveUsers.Description5 == undefined) {
        company1.style.display = "none";
        jobPost1.style.display = "none";
        jobDescription1.style.display = "none";
        company2.style.display = "none";
        jobPost2.style.display = "none";
        jobDescription2.style.display = "none";
        company3.style.display = "none";
        jobPost3.style.display = "none";
        jobDescription3.style.display = "none";
        company4.style.display = "none";
        jobPost4.style.display = "none";
        jobDescription4.style.display = "none";
        company5.style.display = "none";
        jobPost5.style.display = "none";
        jobDescription5.style.display = "none";
    }
    else {
        company1.textContent = "".concat(saveUsers.fisrtCompany);
        jobPost1.textContent = "".concat(saveUsers.jobPost1);
        jobDescription1.textContent = "".concat(saveUsers.Description1);
        company2.textContent = "".concat(saveUsers.secondCompany);
        jobPost2.textContent = "".concat(saveUsers.jobPost2);
        jobDescription2.textContent = "".concat(saveUsers.Description2);
        company3.textContent = "".concat(saveUsers.thirdCompany);
        jobPost3.textContent = "".concat(saveUsers.jobPost3);
        jobDescription3.textContent = "".concat(saveUsers.Description3);
        company4.textContent = "".concat(saveUsers.forthCompany);
        jobPost4.textContent = "".concat(saveUsers.jobPost4);
        jobDescription4.textContent = "".concat(saveUsers.Description4);
        company5.textContent = "".concat(saveUsers.fifthCompany);
        jobPost5.textContent = "".concat(saveUsers.jobPost5);
        jobDescription5.textContent = "".concat(saveUsers.Description5);
    }
    if (saveUsers.StartYear1 == undefined || saveUsers.StartYear1 == "" && saveUsers.StartYear2 == undefined || saveUsers.StartYear2 == "") {
        jobExpDate1.style.display = "none";
    }
    else {
        jobExpDate1.textContent = "".concat(saveUsers.StartYear1, " - ").concat(saveUsers.StartYear2);
    }
    if (saveUsers.StartYear3 == undefined || saveUsers.StartYear3 == "" && saveUsers.StartYear3 == undefined || saveUsers.StartYear3 == "") {
        jobExpDate2.style.display = "none";
    }
    else {
        jobExpDate2.textContent = "".concat(saveUsers.StartYear3, " - ").concat(saveUsers.StartYear3);
    }
    if (saveUsers.StartYear5 == undefined || saveUsers.StartYear5 == "" && saveUsers.StartYear6 == undefined || saveUsers.StartYear6 == "") {
        jobExpDate3.style.display = "none";
    }
    else {
        jobExpDate3.textContent = "".concat(saveUsers.StartYear5, " - ").concat(saveUsers.StartYear6);
    }
    if (saveUsers.StartYear7 == undefined || saveUsers.StartYear7 == "" && saveUsers.StartYear8 == undefined || saveUsers.StartYear8 == "") {
        jobExpDate4.style.display = "none";
    }
    else {
        jobExpDate4.textContent = "".concat(saveUsers.StartYear7, " - ").concat(saveUsers.StartYear8);
    }
    if (saveUsers.StartYear9 == undefined || saveUsers.StartYear9 == "" && saveUsers.StartYear0 == undefined || saveUsers.StartYear0 == "") {
        jobExpDate5.style.display = "none";
    }
    else {
        jobExpDate5.textContent = "".concat(saveUsers.StartYear9, " - ").concat(saveUsers.StartYear0);
    }
    if (saveUsers.FirstSkill == undefined || saveUsers.FirstSkill == ""
        && saveUsers.FirstSkillPercent == undefined || saveUsers.FirstSkillPercent == "") {
        Skill1.style.display = "none";
    }
    else {
        FirstSkill.textContent = "".concat(saveUsers.FirstSkill);
        FirstSkillPercent.style.width = "".concat(saveUsers.FirstSkillPercent, "%");
    }
    if (saveUsers.SecondSkill == undefined || saveUsers.SecondSkill == ""
        && saveUsers.SecondSkillPercent == undefined || saveUsers.SecondSkillPercent == "") {
        Skill2.style.display = "none";
    }
    else {
        SecondSkill.textContent = "".concat(saveUsers.SecondSkill);
        SecondSkillPercent.style.width = "".concat(saveUsers.SecondSkillPercent, "%");
        ;
    }
    if (saveUsers.ThirdSkill == undefined || saveUsers.ThirdSkill == ""
        && saveUsers.ThirdSkillPercent == undefined || saveUsers.ThirdSkillPercent == "") {
        Skill3.style.display = "none";
    }
    else {
        ThirdSkill.textContent = "".concat(saveUsers.ThirdSkill);
        ThirdSkillPercent.style.width = "".concat(saveUsers.ThirdSkillPercent, "%");
    }
    if (saveUsers.ForthSkill == undefined || saveUsers.ForthSkill == ""
        && saveUsers.ForthSkillPercent == undefined || saveUsers.ForthSkillPercent == "") {
        Skill4.style.display = "none";
    }
    else {
        ForthSkill.textContent = "".concat(saveUsers.ForthSkill);
        ForthSkillPercent.style.width = "".concat(saveUsers.ForthSkillPercent, "%");
    }
    if (saveUsers.FifthSkill == undefined || saveUsers.FifthSkill == ""
        && saveUsers.FifthSkillPercent == undefined || saveUsers.FifthSkillPercent == "") {
        Skill5.style.display = "none";
    }
    else {
        FifthSkill.textContent = "".concat(saveUsers.FifthSkill);
        FifthSkillPercent.style.width = "".concat(saveUsers.FifthSkillPercent, "%");
    }
    if (saveUsers.SixthSkill == undefined || saveUsers.SixthSkill == ""
        && saveUsers.SixthSkillPercent == undefined || saveUsers.SixthSkillPercent == "") {
        Skill6.style.display = "none";
    }
    else {
        SixthSkill.textContent = "".concat(saveUsers.SixthSkill);
        SixthSkillPercent.style.width = "".concat(saveUsers.SixthSkillPercent, "%");
    }
    if (saveUsers.SeventhSkill == undefined || saveUsers.SeventhSkill == ""
        && saveUsers.SeventhSkillPercent == undefined || saveUsers.SeventhSkillPercent == "") {
        Skill7.style.display = "none";
    }
    else {
        SeventhSkill.textContent = "".concat(saveUsers.SeventhSkill);
        SeventhSkillPercent.style.width = "".concat(saveUsers.SeventhSkillPercent, "%");
    }
    if (saveUsers.EightSkill == undefined || saveUsers.EightSkill == ""
        && saveUsers.EightSkillPercent == undefined || saveUsers.EightSkillPercent == "") {
        Skill8.style.display = "none";
    }
    else {
        EightSkill.textContent = "".concat(saveUsers.EightSkill);
        EightSkillPercent.style.width = "".concat(saveUsers.EightSkillPercent, "%");
    }
}
getData();
