// ? Grab references to the important DOM elements.
const timeDisplayEl = $('#time-display');
const projectDisplayEl = $('#project-display');
const projectFormEl = $('#project-form');
const projectNameInputEl = $('#project-name-input');
const projectTypeInputEl = $('#project-type-input');
const projectDateInputEl = $('#taskDueDate');



function updateTimeDisplay() {
const currentDateTime = dayjs().format('MMM DD, YYYY hh:mm:ss') 
timeDisplayEl.text(currentDateTime)
}

function loadProjectsFromLocalStorage() {
const savedProjects = JSON.parse(localStorage.getItem('projects')) || []
return savedProjects
}

function saveProjectsToLocalStorage(projectsData) {
  localStorage.setItem('projects', JSON.stringify(projectsData))
}


function handleProjectFormSubmit(event) {
event.preventDefault()

const projectName = projectNameInputEl.val()
const projectType = projectTypeInput.val()
const projectDueDate = projectDateInput.val()



//create card
//
//save cards to localstorage
//re-render cards in their respective lists


const savedProjects = loadProjectsFromLocalStorage()

const newProject = {
  name: projectName,
  type: projectType,
  dueDate: projectDueDate
}

console.log(newProject)

projects.push(newProject)

const projects = loadProjectsFromLocalStorage()


projectNameInputEl.val('')
projectTypeInput.val('')
projectDateInput.val('')

}

$(document).ready(function() {
  setInterval(updateTimeDisplay,1000)
  
  updateTimeDisplay()
  
  projectDateInputEl.datepicker()

  projectFormEl.on('submit', handleProjectFormSubmit)
})

