let survey = document.getElementById('survey');

survey.addEventListener("submit", (e) => {
    let email = document.getElementById('email');
    let fullName = document.getElementById('full-name');
    let studentID = document.getElementById('student-id');

    console.log(`Name: ${fullName}\nEmail: ${email}`)
});