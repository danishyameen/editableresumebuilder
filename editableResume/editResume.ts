let form = document.getElementById("multi-step-form")! as HTMLFormElement;
let formContaierBox = document.getElementById("form-contaier-box")! as HTMLDivElement;

let step2 = document.getElementById("step-2")! as HTMLElement;
let step3 = document.getElementById("step-3")! as HTMLElement;
let step4 = document.getElementById("step-4")! as HTMLElement;

let stepGroup1 = document.getElementById("step-group-1")! as HTMLDivElement;
let stepGroup2 = document.getElementById("step-group-2")! as HTMLDivElement;
let stepGroup3 = document.getElementById("step-group-3")! as HTMLDivElement;
let stepGroup4 = document.getElementById("step-group-4")! as HTMLDivElement;

let nextStep1 = document.getElementById("next-step-1")! as HTMLButtonElement;
let nextStep2 = document.getElementById("next-step-2")! as HTMLButtonElement;;
let nextStep3 = document.getElementById("next-step-3")! as HTMLButtonElement;;
let nextStep4 = document.getElementById("next-step-4")! as HTMLButtonElement;; // update

let prevStep1 = document.getElementById("next-prev-1")! as HTMLButtonElement;
let prevStep2 = document.getElementById("next-prev-2")! as HTMLButtonElement;
let prevStep3 = document.getElementById("next-prev-3")! as HTMLButtonElement;

let successBox = document.getElementById("success_box")! as HTMLDivElement;
let preview = document.getElementById("preview")! as HTMLButtonElement;


let firstName = document.getElementById("firstName")! as HTMLInputElement;
let lastName = document.getElementById("lastName")! as HTMLInputElement;
let email = document.getElementById("email")! as HTMLInputElement;
let post = document.getElementById("post")! as HTMLInputElement;
let phone = document.getElementById("phone")! as HTMLInputElement;
let profileImage = document.getElementById("profileImage")! as HTMLInputElement;
let profileUrl = document.getElementById("profileUrl")! as HTMLInputElement;
let linkedinUrl = document.getElementById("linkedinUrl")! as HTMLInputElement;
let address = document.getElementById("address")! as HTMLInputElement;
let objectives = document.getElementById("objectives")! as HTMLInputElement;

let firstYearStart = document.getElementById("firstYearStart")! as HTMLInputElement;
let firstYearEnd = document.getElementById("firstYearEnd")! as HTMLInputElement;
let UniversityName = document.getElementById("UniversityName")! as HTMLInputElement;
let bechlorDegree = document.getElementById("bechlorDegree")! as HTMLInputElement;

let secondYearStart = document.getElementById("secondYearStart")! as HTMLInputElement;
let secondYearEnd = document.getElementById("secondYearEnd")! as HTMLInputElement;
let collegeName = document.getElementById("collegeName")! as HTMLInputElement;
let InterDegree = document.getElementById("InterDegree")! as HTMLInputElement;

let thirdYearStart = document.getElementById("thirdYearStart")! as HTMLInputElement;
let thirdYearEnd = document.getElementById("thirdYearEnd")! as HTMLInputElement;
let schoolName = document.getElementById("schoolName")! as HTMLInputElement;
let MatricDegree = document.getElementById("MatricDegree")! as HTMLInputElement;

let StartYear1 = document.getElementById("StartYear1")! as HTMLInputElement;
let StartYear2 = document.getElementById("StartYear2")! as HTMLInputElement;
let jobPost1 = document.getElementById("jobPost1")! as HTMLInputElement;
let fisrtCompany = document.getElementById("fisrtCompany")! as HTMLInputElement;
let Description1 = document.getElementById("Description1")! as HTMLInputElement;

let StartYear3 = document.getElementById("StartYear3")! as HTMLInputElement;
let StartYear4 = document.getElementById("StartYear4")! as HTMLInputElement;
let jobPost2 = document.getElementById("jobPost2")! as HTMLInputElement;
let secondCompany = document.getElementById("secondCompany")! as HTMLInputElement;
let Description2 = document.getElementById("Description2")! as HTMLInputElement;

let StartYear5 = document.getElementById("StartYear5")! as HTMLInputElement;
let StartYear6 = document.getElementById("StartYear6")! as HTMLInputElement;
let jobPost3 = document.getElementById("jobPost3")! as HTMLInputElement;
let thirdCompany = document.getElementById("thirdCompany")! as HTMLInputElement;
let Description3 = document.getElementById("Description3")! as HTMLInputElement;

let StartYear7 = document.getElementById("StartYear7")! as HTMLInputElement;
let StartYear8 = document.getElementById("StartYear8")! as HTMLInputElement;
let jobPost4 = document.getElementById("jobPost4")! as HTMLInputElement;
let forthCompany = document.getElementById("forthCompany")! as HTMLInputElement;
let Description4 = document.getElementById("Description4")! as HTMLInputElement;

let StartYear9 = document.getElementById("StartYear9")! as HTMLInputElement;
let StartYear0 = document.getElementById("StartYear0")! as HTMLInputElement;
let jobPost5 = document.getElementById("jobPost5")! as HTMLInputElement;
let fifthCompany = document.getElementById("fifthCompany")! as HTMLInputElement;
let Description5 = document.getElementById("Description5")! as HTMLInputElement;

let FirstLanguage = document.getElementById("FirstLanguage")! as HTMLInputElement;
let FirstLanguagePercent = document.getElementById("FirstLanguagePercent")! as HTMLInputElement;

let SecondLanguage = document.getElementById("SecondLanguage")! as HTMLInputElement;
let SecondLanguagePercent = document.getElementById("SecondLanguagePercent")! as HTMLInputElement;

let ThirdLanguage = document.getElementById("ThirdLanguage")! as HTMLInputElement;
let ThirdLanguagePercent = document.getElementById("ThirdLanguagePercent")! as HTMLInputElement;

let ForthLanguage = document.getElementById("ForthLanguage")! as HTMLInputElement;
let ForthLanguagePercent = document.getElementById("ForthLanguagePercent")! as HTMLInputElement;

let FirstSkill = document.getElementById("FirstSkill")! as HTMLInputElement;
let FirstSkillPercent = document.getElementById("FirstSkillPercent")! as HTMLInputElement;

let SecondSkill = document.getElementById("SecondSkill")! as HTMLInputElement;
let SecondSkillPercent = document.getElementById("SecondSkillPercent")! as HTMLInputElement;

let ThirdSkill = document.getElementById("ThirdSkill")! as HTMLInputElement;
let ThirdSkillPercent = document.getElementById("ThirdSkillPercent")! as HTMLInputElement;

let ForthSkill = document.getElementById("ForthSkill")! as HTMLInputElement;
let ForthSkillPercent = document.getElementById("ForthSkillPercent")! as HTMLInputElement;

let FifthSkill = document.getElementById("FifthSkill")! as HTMLInputElement;
let FifthSkillPercent = document.getElementById("FifthSkillPercent")! as HTMLInputElement;

let SixthSkill = document.getElementById("SixthSkill")! as HTMLInputElement;
let SixthSkillPercent = document.getElementById("SixthSkillPercent")! as HTMLInputElement;

let SeventhSkill = document.getElementById("SeventhSkill")! as HTMLInputElement;
let SeventhSkillPercent = document.getElementById("SeventhSkillPercent")! as HTMLInputElement;

let EightSkill = document.getElementById("EightSkill")! as HTMLInputElement;
let EightSkillPercent = document.getElementById("EightSkillPercent")! as HTMLInputElement;

let first_hobby = document.getElementById("first_hobby")! as HTMLInputElement;
let second_hobby = document.getElementById("second_hobby")! as HTMLInputElement;
let third_hobby = document.getElementById("third_hobby")! as HTMLInputElement;
let forth_hobby = document.getElementById("forth_hobby")! as HTMLInputElement;

let first_certification = document.getElementById("first_certification")! as HTMLInputElement;
let second_certification = document.getElementById("second_certification")! as HTMLInputElement;
let third_certification = document.getElementById("third_certification")! as HTMLInputElement;
let forth_certification = document.getElementById("forth_certification")! as HTMLInputElement;


let upload_image:any = " ";

if (profileImage) {
    profileImage.addEventListener("change", function (event) {
        let reader = new FileReader();

        reader.addEventListener("load", () => {
            upload_image = reader.result;
            console.log(reader.result);
        });

        if (this.files && this.files[0]) {
            reader.readAsDataURL(this.files[0]);
        } else {
            console.error("No file selected.");
            upload_image = "";
        }
    });
} else {
    console.error("Element with ID 'profileImage' not found.");
}


interface SaveUsers {
    firstName: string,
    lastName: string,
    profileImage: string,
    email: string,
    post: string,
    phone: number,
    address: string,
    profileUrl: string,
    linkedinUrl: string,
    objectives: string,
    firstYearStart: string,
    firstYearEnd: string,
    UniversityName: string,
    bechlorDegree: string,
    secondYearStart: string,
    secondYearEnd: string,
    collegeName: string,
    InterDegree: string,
    thirdYearStart: string,
    thirdYearEnd: string,
    schoolName: string,
    MatricDegree: string,
    StartYear1: string,
    StartYear2: string,
    jobPost1: string,
    fisrtCompany: string,
    Description1: string,
    StartYear3: string,
    StartYear4: string,
    jobPost2: string,
    secondCompany: string,
    Description2: string,
    StartYear5: string,
    StartYear6: string,
    jobPost3: string,
    thirdCompany: string,
    Description3: string,
    StartYear7: string,
    StartYear8: string,
    jobPost4: string,
    forthCompany: string,
    Description4: string,
    StartYear9: string,
    StartYear0: string,
    jobPost5: string,
    fifthCompany: string,
    Description5: string,
    FirstLanguage: string,
    FirstLanguagePercent: string,
    SecondLanguage: string,
    SecondLanguagePercent: string,
    ThirdLanguage: string,
    ThirdLanguagePercent: string,
    ForthLanguage: string,
    ForthLanguagePercent: string,
    FirstSkill: string,
    FirstSkillPercent: string,
    SecondSkill: string,
    SecondSkillPercent: string,
    ThirdSkill: string,
    ThirdSkillPercent: string,
    ForthSkill: string,
    ForthSkillPercent: string,
    FifthSkill: string,
    FifthSkillPercent: string,
    SixthSkill: string,
    SixthSkillPercent: string,
    SeventhSkill: string,
    SeventhSkillPercent: string,
    EightSkill: string,
    EightSkillPercent: string,
    first_hobby: string,
    second_hobby: string,
    third_hobby: string,
    forth_hobby: string,
    first_certification: string,
    second_certification: string,
    third_certification: string,
    forth_certification: string,


}

function getData() {
    let saveUsers: SaveUsers = {
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

    let users:any = localStorage.getItem("users");

    if (users) {
        users = JSON.parse(users)
    }
    else {
        users = []
    }

    for (let i = 0; i < users.length; i++) {
        saveUsers = users[i]
    }

    console.log(saveUsers);

        firstName.value = saveUsers.firstName
        lastName.value = saveUsers.lastName
        profileImage.src = saveUsers.profileImage
        email.value = saveUsers.email
        post.value = saveUsers.post
        phone.value = String(saveUsers.phone)
        address.value = saveUsers.address
        profileUrl.value = saveUsers.profileUrl
        linkedinUrl.value = saveUsers.linkedinUrl
        objectives.value = saveUsers.objectives

        firstYearStart.value = saveUsers.firstYearStart
        firstYearEnd.value = saveUsers.firstYearEnd
        UniversityName.value = saveUsers.UniversityName
        bechlorDegree.value = saveUsers.UniversityName

        secondYearStart.value = saveUsers.secondYearStart
        secondYearEnd.value = saveUsers.secondYearEnd
        collegeName.value = saveUsers.collegeName
        InterDegree.value = saveUsers.InterDegree

        thirdYearStart.value = saveUsers.thirdYearStart
        thirdYearEnd.value = saveUsers.thirdYearEnd
        schoolName.value = saveUsers.schoolName
        MatricDegree.value = saveUsers.MatricDegree

        StartYear1.value = saveUsers.StartYear1
        StartYear2.value = saveUsers.StartYear2
        jobPost1.value = saveUsers.jobPost1
        fisrtCompany.value = saveUsers.fisrtCompany
        Description1.value = saveUsers.Description1

        StartYear3.value = saveUsers.StartYear3
        StartYear4.value = saveUsers.StartYear4
        jobPost2.value = saveUsers.jobPost2
        secondCompany.value = saveUsers.secondCompany
        Description2.value = saveUsers.Description2

        StartYear5.value = saveUsers.StartYear5
        StartYear6.value = saveUsers.StartYear6
        jobPost3.value = saveUsers.jobPost3
        thirdCompany.value = saveUsers.thirdCompany
        Description3.value = saveUsers.Description3

        StartYear7.value = saveUsers.StartYear7
        StartYear8.value = saveUsers.StartYear8
        jobPost4.value = saveUsers.jobPost4
        forthCompany.value = saveUsers.forthCompany
        Description4.value = saveUsers.Description4

        StartYear9.value = saveUsers.StartYear9
        StartYear0.value = saveUsers.StartYear0
        jobPost5.value = saveUsers.jobPost5
        fifthCompany.value = saveUsers.fifthCompany
        Description5.value = saveUsers.Description5

        FirstLanguage.value = saveUsers.FirstLanguage
        FirstLanguagePercent.value = saveUsers.FirstLanguagePercent

        SecondLanguage.value = saveUsers.SecondLanguage
        SecondLanguagePercent.value = saveUsers.SecondLanguagePercent

        ThirdLanguage.value = saveUsers.ThirdLanguage
        ThirdLanguagePercent.value = saveUsers.ThirdLanguagePercent

        ForthLanguage.value = saveUsers.ForthLanguage
        ForthLanguagePercent.value = saveUsers.ForthLanguagePercent

        FirstSkill.value = saveUsers.FirstSkill
        FirstSkillPercent.value = saveUsers.FirstSkillPercent

        SecondSkill.value = saveUsers.SecondSkill
        SecondSkillPercent.value = saveUsers.SecondSkillPercent

        ThirdSkill.value = saveUsers.ThirdSkill
        ThirdSkillPercent.value = saveUsers.ThirdSkillPercent

        ForthSkill.value = saveUsers.ForthSkill
        ForthSkillPercent.value = saveUsers.ForthSkillPercent

        FifthSkill.value = saveUsers.FifthSkill
        FifthSkillPercent.value = saveUsers.FifthSkillPercent

        SixthSkill.value = saveUsers.SixthSkill
        SixthSkillPercent.value = saveUsers.SixthSkillPercent

        SeventhSkill.value = saveUsers.SeventhSkill
        SeventhSkillPercent.value = saveUsers.SeventhSkillPercent

        EightSkill.value = saveUsers.EightSkill
        EightSkillPercent.value = saveUsers.EightSkillPercent

        first_hobby.value = saveUsers.first_hobby
        second_hobby.value = saveUsers.second_hobby
        third_hobby.value = saveUsers.third_hobby
        forth_hobby.value = saveUsers.forth_hobby

        first_certification.value = saveUsers.first_certification
        second_certification.value = saveUsers.second_certification
        third_certification.value = saveUsers.third_certification
        forth_certification.value = saveUsers.forth_certification
    
}


getData()





form.addEventListener("submit", (e) => {
    e.preventDefault();
})

nextStep1.addEventListener("click", () => {
    if (firstName.value == "") {
        alert("Enter First Name...")
        firstName.style.border = "1px solid red"
    }
    else if (lastName.value == "") {
        lastName.style.border = "1px solid red"
        alert("Enter Last Name...")
    }
    else if (upload_image == " ") {
        alert("Select Your Image ...")
        profileImage.style.border = "1px solid red"
    }
    else if (email.value == "") {
        alert("Enter Your Email ...")
        email.style.border = "1px solid red"
    }
    else if (phone.value == "") {
        alert("Select Your Phone Number ...")
        phone.style.border = "1px solid red"
    }
    else if (address.value == "") {
        alert("Enter Your Address ...")
        address.style.border = "1px solid red"
    }
    else if (objectives.value == "") {
        alert("Shortly Details About Your Self ...")
        objectives.style.border = "1px solid red"
    }
    else {
        stepGroup1.style.display = "none";
        stepGroup2.style.display = "block";
        step2.classList.add("active")
        firstName.style.border = "1px solid #fff"
        lastName.style.border = "1px solid #fff"
        email.style.border = "1px solid #fff"
        phone.style.border = "1px solid #fff"
        address.style.border = "1px solid #fff"
        objectives.style.border = "1px solid #fff"
    }

})

nextStep2.addEventListener("click", () => {
    if (thirdYearStart.value == "") {
        alert("Enter Start Year of Matric Education ...")
        thirdYearStart.style.border = "1px solid red"
    } else if (thirdYearEnd.value == "") {
        alert("Enter End Year of Matric Education ...")
        thirdYearEnd.style.border = "1px solid red"
    }
    else if (schoolName.value == "") {
        alert("Enter Boaed OR Institute Name...")
        schoolName.style.border = "1px solid red"
    }
    else if (MatricDegree.value == "") {
        alert("Enter Matric Degree Name...")
        MatricDegree.style.border = "1px solid red"
    }
    else {
        stepGroup2.style.display = "none";
        stepGroup3.style.display = "block";
        step3.classList.add("active");
        thirdYearStart.style.border = "1px solid #fff"
        thirdYearEnd.style.border = "1px solid #fff"
        schoolName.style.border = "1px solid #fff"
        MatricDegree.style.border = "1px solid #fff"

    }
})

nextStep3.addEventListener("click", () => {
    if (StartYear1.value == "") {
        alert("Enter Start Year of Work...")
        StartYear1.style.border = "1px solid red"

    }
    else if (StartYear2.value == "") {
        alert("Enter End Year of Work ...")
        StartYear2.style.border = "1px solid red"
    }
    else if (jobPost1.value == "") {
        alert("Enter End Year of Work ...")
        jobPost1.style.border = "1px solid red"
    }
    else if (fisrtCompany.value == "") {
        alert("Enter Company / Orgaization Name Where You Work ...")
        fisrtCompany.style.border = "1px solid red"
    }
    else if (Description1.value == "") {
        alert("Shortly Details About Your Work ...")
        Description1.style.border = "1px solid red"
    }
    else {
        stepGroup3.style.display = "none";
        stepGroup4.style.display = "block";
        step4.classList.add("active");
        StartYear1.style.border = "1px solid #fff"
        StartYear2.style.border = "1px solid #fff"
        jobPost1.style.border = "1px solid #fff"
        fisrtCompany.style.border = "1px solid #fff"
        Description1.style.border = "1px solid #fff"
    }

})



prevStep1.addEventListener("click", () => {
    stepGroup2.style.display = "none";
    stepGroup1.style.display = "block";
    step2.classList.remove("active");
})

prevStep2.addEventListener("click", () => {
    stepGroup3.style.display = "none";
    stepGroup2.style.display = "block";
    step3.classList.remove("active");
})

prevStep3.addEventListener("click", () => {
    stepGroup4.style.display = "none";
    stepGroup3.style.display = "block";
    step4.classList.remove("active");
})

nextStep4.addEventListener("click", () => {
    if (FirstLanguage.value == "") {
        alert("Enter Your Language Name ...")
        FirstLanguage.style.border = "1px solid red"
    }
    else if (FirstLanguagePercent.value == "") {
        alert("Enter Your Language Percentage Into 2 or 3 digit number ...")
        FirstLanguage.style.border = "1px solid red"
    }
    else if (FirstSkill.value == "") {
        alert("Enter Your Skill Name ...")
        FirstSkill.style.border = "1px solid red"
    }
    else if (FirstSkillPercent.value == "") {
        alert("Enter Your Language Percentage Into 2 or 3 digit number ...")
        FirstSkillPercent.style.border = "1px solid red"
    }
    else if (SecondSkill.value == "") {
        alert("Enter Your Skill Name ...")
        SecondSkill.style.border = "1px solid red"
    }
    else if (SecondSkillPercent.value == "") {
        alert("Enter Your Language Percentage Into 2 or 3 digit number ...")
        SecondSkillPercent.style.border = "1px solid red"
    }
    else {

        FirstLanguage.style.border = "1px solid #fff"
        FirstSkill.style.border = "1px solid #fff"
        SecondSkill.style.border = "1px solid #fff"
        FirstSkillPercent.style.border = "1px solid #fff"
        SecondSkillPercent.style.border = "1px solid #fff"


        let users:any = localStorage.getItem("users");

        if (users) {
            users = JSON.parse(users)
        } else {
            users = [];
        }


        let user = {

            firstName: firstName.value,
            lastName: lastName.value,
            profileImage: upload_image,
            email: email.value,
            post: post.value,
            phone: +phone.value,
            address: address.value,
            profileUrl: profileUrl.value,
            linkedinUrl: linkedinUrl.value,
            objectives: objectives.value,

            firstYearStart: firstYearStart.value,
            firstYearEnd: firstYearEnd.value,
            UniversityName: UniversityName.value,
            bechlorDegree: bechlorDegree.value,

            secondYearStart: secondYearStart.value,
            secondYearEnd: secondYearEnd.value,
            collegeName: collegeName.value,
            InterDegree: InterDegree.value,

            thirdYearStart: thirdYearStart.value,
            thirdYearEnd: thirdYearEnd.value,
            schoolName: schoolName.value,
            MatricDegree: MatricDegree.value,

            StartYear1: StartYear1.value,
            StartYear2: StartYear2.value,
            jobPost1: jobPost1.value,
            fisrtCompany: fisrtCompany.value,
            Description1: Description1.value,

            StartYear3: StartYear3.value,
            StartYear4: StartYear4.value,
            jobPost2: jobPost2.value,
            secondCompany: secondCompany.value,
            Description2: Description2.value,

            StartYear5: StartYear5.value,
            StartYear6: StartYear6.value,
            jobPost3: jobPost3.value,
            thirdCompany: thirdCompany.value,
            Description3: Description3.value,

            StartYear7: StartYear7.value,
            StartYear8: StartYear8.value,
            jobPost4: jobPost4.value,
            forthCompany: forthCompany.value,
            Description4: Description4.value,

            StartYear9: StartYear9.value,
            StartYear0: StartYear0.value,
            jobPost5: jobPost5.value,
            fifthCompany: fifthCompany.value,
            Description5: Description5.value,

            FirstLanguage: FirstLanguage.value,
            FirstLanguagePercent: FirstLanguagePercent.value,

            SecondLanguage: SecondLanguage.value,
            SecondLanguagePercent: SecondLanguagePercent.value,

            ThirdLanguage: ThirdLanguage.value,
            ThirdLanguagePercent: ThirdLanguagePercent.value,

            ForthLanguage: ForthLanguage.value,
            ForthLanguagePercent: ForthLanguagePercent.value,

            FirstSkill: FirstSkill.value,
            FirstSkillPercent: FirstSkillPercent.value,

            SecondSkill: SecondSkill.value,
            SecondSkillPercent: SecondSkillPercent.value,

            ThirdSkill: ThirdSkill.value,
            ThirdSkillPercent: ThirdSkillPercent.value,

            ForthSkill: ForthSkill.value,
            ForthSkillPercent: ForthSkillPercent.value,

            FifthSkill: FifthSkill.value,
            FifthSkillPercent: FifthSkillPercent.value,

            SixthSkill: SixthSkill.value,
            SixthSkillPercent: SixthSkillPercent.value,

            SeventhSkill: SeventhSkill.value,
            SeventhSkillPercent: SeventhSkillPercent.value,

            EightSkill: EightSkill.value,
            EightSkillPercent: EightSkillPercent.value,

            first_hobby: first_hobby.value,
            second_hobby: second_hobby.value,
            third_hobby: third_hobby.value,
            forth_hobby: forth_hobby.value,

            first_certification: first_certification.value,
            second_certification: second_certification.value,
            third_certification: third_certification.value,
            forth_certification: forth_certification.value,

        }

        users = [user]

        localStorage.setItem("users", JSON.stringify(users))

        firstName.value = "";
        lastName.value = "";
        profileImage.src = " ";
        email.value = "";
        post.value = "";
        phone.value = "";
        address.value = "";
        profileUrl.value = "";
        linkedinUrl.value = "";
        objectives.value = "";

        firstYearStart.value = "";
        firstYearEnd.value = "";
        UniversityName.value = "";
        bechlorDegree.value = "";

        secondYearStart.value = "";
        secondYearEnd.value = "";
        collegeName.value = "";
        InterDegree.value = "";

        thirdYearStart.value = "";
        thirdYearEnd.value = "";
        schoolName.value = "";
        MatricDegree.value = "";

        StartYear1.value = "";
        StartYear2.value = "";
        jobPost1.value = "";
        fisrtCompany.value = "";
        Description1.value = "";

        StartYear3.value = "";
        StartYear4.value = "";
        jobPost2.value = "";
        secondCompany.value = "";
        Description2.value = "";

        StartYear5.value
        StartYear6.value = "";
        jobPost3.value = "";
        thirdCompany.value = "";
        Description3.value = "";

        StartYear7.value = "";
        StartYear8.value = "";
        jobPost4.value = "";
        forthCompany.value = "";
        Description4.value = "";

        StartYear9.value = "";
        StartYear0.value = "";
        jobPost5.value = "";
        fifthCompany.value = "";
        Description5.value = "";

        FirstLanguage.value = "";
        FirstLanguagePercent.value = "";

        SecondLanguage.value = "";
        SecondLanguagePercent.value = "";

        ThirdLanguage.value = "";
        ThirdLanguagePercent.value = "";

        ForthLanguage.value = "";
        ForthLanguagePercent.value = "";

        FirstSkill.value = "";
        FirstSkillPercent.value = "";

        SecondSkill.value = "";
        SecondSkillPercent.value = "";

        ThirdSkill.value = "";
        ThirdSkillPercent.value = "";

        ForthSkill.value = "";
        ForthSkillPercent.value,

            FifthSkill.value = "";
        FifthSkillPercent.value = "";

        SixthSkill.value = "";
        SixthSkillPercent.value = "";

        SeventhSkill.value = "";
        SeventhSkillPercent.value = "";

        EightSkill.value = "";
        EightSkillPercent.value = "";

        first_hobby.value = "";
        second_hobby.value = "";
        third_hobby.value = "";
        forth_hobby.value = "";

        first_certification.value = "";
        second_certification.value = "";
        third_certification.value = "";
        forth_certification.value = "";

        formContaierBox.style.display = "none"
        successBox.style.display = "flex";
    }



})

preview.addEventListener("click", () => {

    setTimeout(() => {
        if (true) {

            window.location.href = "../resume/resume.html"
        }
    }, 500);
})




