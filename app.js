var resume = {
    Name: 'michael-dean',
    Career: 'Dev Student',
    Description: 'I love gaming and beer'
};
console.log('Name: ' + resume.Name.toUpperCase() + "\n" +
    'Carrer: ' + resume.Career + "\n" +
    'Description: ' + resume.Description);
console.log(" ");
console.log("My Interests:");
console.log("* Gaming");
console.log("* Golfing");
console.log("* Skiing");
console.log("* Fishing");
console.log(" ");
console.log("My Previous Experience");
function displayPosition(company, job, description) {
    console.log("".concat(job, " at ").concat(company, " - ").concat(description));
}
var jobs = [{
        companyName: "Sleep Number",
        jobTitle: "Field Tech",
        jobDescription: "Delivered and repaired smart beds"
    },
    {
        companyName: "Somersett",
        jobTitle: "Recreation Manager",
        jobDescription: "Oversaw recreation facility and golf course"
    },
    {
        companyName: "Mt. Rose",
        jobTitle: "Ski Instructor",
        jobDescription: "Taught people how to ski"
    }
];
for (var i = 0; i < jobs.length; i++) {
    displayPosition(jobs[i].companyName, jobs[i].jobTitle, jobs[i].jobDescription);
}
function displaySkill(skill, isCool) {
    if (isCool) {
        console.log("* BAM: " + skill);
    }
    else {
        console.log("* " + skill);
    }
}
console.log("");
console.log("My Skills:");
displaySkill("Guitar Playing", true);
displaySkill("Trivia Guy", false);
displaySkill("Dog Wrestling", true);
displaySkill("Quick Learner", false);
displaySkill("Researching", false);
displaySkill("Anime enthusiast", false);
displaySkill("Dog Petting", true);
displaySkill("PC Building", true);
