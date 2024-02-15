let resume: { Name: string; Career: String; Description: String } = {
  Name: 'michael-dean',
  Career: 'Dev Student',
  Description: 'I love gaming and beer'
}

console.log(
  'Name: ' + resume.Name.toUpperCase() + "\n" +
  'Carrer: ' + resume.Career + "\n" +
  'Description: ' + resume.Description
)

console.log(" ")
console.log("My Interests:")
console.log("* Gaming")
console.log("* Golfing")
console.log("* Skiing")
console.log("* Fishing")
console.log(" ")
console.log("My Previous Experience")


function displayPosition(company:string, job:string, description:string) {
  console.log(`${job} at ${company} - ${description}`);
}

interface JobStuff {
  companyName:string;
  jobTitle:string;
  jobDescription:string;
}

let jobs:JobStuff[] = [{
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
]


for (let i:number = 0; i < jobs.length; i++) {
  displayPosition(jobs[i].companyName, jobs[i].jobTitle, jobs[i].jobDescription);
}

function displaySkill(skill:string, isCool:boolean) {
  if (isCool) {
    console.log("* BAM: " + skill);
  } else {
    console.log("* " + skill);
  }
}

console.log("")
console.log("My Skills:")

displaySkill("Guitar Playing", true);
displaySkill("Trivia Guy", false);
displaySkill("Dog Wrestling", true);
displaySkill("Quick Learner", false);
displaySkill("Researching", false);
displaySkill("Anime enthusiast", false);
displaySkill("Dog Petting", true);
displaySkill("PC Building", true);


