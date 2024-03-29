// ? Grab references to the important DOM elements.
const timeDisplayEl = $('#time-display');
const projectDisplayEl = $('#project-display');
const projectFormEl = $('#project-form');
const projectNameInputEl = $('#project-name-input');
const projectTypeInputEl = $('#project-type-input');
const projectDateInputEl = $('#taskDueDate');
const todoListEl = $('#todo-cards')
const inProgressEl = $('#in-progress-cards')
const doneListEl = $('#done-cards')



function updateTimeDisplay() {
const currentDateTime = dayjs().format('MMM DD, YYYY hh:mm:ss') 
timeDisplayEl.text(currentDateTime)
}

function loadProjectsFromLocalStorage() {
const savedProjects = JSON.parse(localStorage.getItem('projects')) || []
return savedProjects
}


  function createCardEl(projectData) {
    const card = $(`
      <div class="card" data-id="${projectData.id}" data-status="${projectData.status}">
        <div class="card-body">
          <h5 class="card-title">${projectData.name}</h5>
          <p class="card-text">${projectData.type}</p>
          <p class="card-text">${projectData.dueDate}</p>
          <button class="btn btn-danger">Delete</button>
        </div>
      </div>
    `)
    return card
  }


  function renderCardsToLists() {
    const savedProjects = loadProjectsFromLocalStorage()
    todoListEl.empty()
    inProgressListEl.empty()
    doneListEl.empty()
    for (const projectData of savedProjects) {
      const cardEl = createCardEl(projectData)

      if (projectData.status === 'todo') {
        todoListEl.append(cardEl)
      } else if (projectData.status === 'in-progress') {
        inProgressListEl.append(cardEl)
      } else {
        doneListEl.append(cardEl)
      }

    }
  }



function saveProjectsToLocalStorage(projectsData) {
  localStorage.setItem('projects', JSON.stringify(projectsData))
}


function handleProjectFormSubmit(event) {
event.preventDefault()

const projectName = projectNameInputEl.val()
const projectType = projectTypeInputEl.val()
const projectDueDate = projectDateInput.val()



//create card
//
//save cards to localstorage
//re-render cards in their respective lists


const savedProjects = loadProjectsFromLocalStorage()

const newProject = {
  id: Math.random(),
  name: projectName,
  type: projectType,
  dueDate: projectDueDate,
  status: 'todo'
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

  renderCardsToLists()
})

