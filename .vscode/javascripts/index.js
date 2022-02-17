/**  Global Varible **/
const baseUrl = 'http://localhost:3000'
let workouts = [];

/** Node Getter **/
const mainDiv = () => document.getElementById("main");
// we make it an arrrow function so we grabs it when we want to access it

const homePageLink1 = () => document.getElementById('home-page-link1')

const  homePageLink = () => document.getElementById('home-page-link')

const workoutListLink = () => document.getElementById('workout-list-link')

/***** Events ******/

// const loadWorkouts = async () => {
//     const resp = await fetch(baseUrl + '/workoutsplit')
//     const data = await resp.json()
//     meals = data
//async and await is going to get a response in order beacuse the code is ran asynchronous, so fetch will return a promise, the whole piece is asynchronous but the two awaits return a promise
//fetch is async


const loadWorkouts = () => {
    fetch(baseUrl + '/workouts')
        .then(resp => resp.json())
        .then(data => workouts = data)

}



const homePageLinkEvent = () => {
    homePageLink().addEventListener('click', () => {
          renderHomePage()
    })
}

const workoutListLinkEvent = () => {
    workoutListLink().addEventListener('click', () =>{
        loadWorkouts()
        renderWorkoutPage()
    })
}



/** Templates **/

// const homePageLink1 = () => {
//     return `
//     <h1 class="center-align">The best place to keep track of your daily workouts and all the workouts you have completed before. I will also be showig you my personal week split and all the multiple workouts I complete. Here is the best way to be kept on schedule</h1>
//     `
// }

const homePageTemplate = () => {
    return `
         <h1 class="center-align"> Welcome to my workout split</h1>
         <p class="center-align">The best place to keep track of your daily workouts and all the workouts you have completed before. I will also be showig you my personal week split and all the multiple workouts I complete. Here is the best way to be kept on schedule</p>
    `
}

const WorkoutPageTemplate = () => {
    return `
    <h1>Workout List</h1>
    <table class="highlight">
        <thead>
          <tr>
              <th>Day</th>
              <th>Workout</th>
              <th>Completed</th>
          </tr>
        </thead>

        <tbody>
            <tr>
                <td>Sunday</td>
                <td>Active Rest Day</td>
              </tr>
          <tr>
            <td>Monday</td>
            <td>Legs(quads)</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>Chest/Bicepts</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>Active Rest Day</td>
          </tr> 
          <tr>
            <td>Thursday</td>
            <td>Back/Bicept</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>Leg Day(hammies)</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>Chest/Shoulders/Triceps</td>
          </tr>
        </tbody>
        <tbody> 
            ${renderworkouts()}
        </tbody>
      </table>
    `
}


const workoutTemplate = (workout) => {
    return `
    <tr>
        <th>${ workout.day}</th>
        <th>${ workout.workout}</th>
        <th>${ workout.completed}</th>
    </tr>
    `
}

//each function has an idea, 2 max and will return a string
/** Renderers **/

const renderHomePage = () => {
    mainDiv().innerHTML = homePageTemplate();
}

const renderWorkoutPage = () => {
    mainDiv().innerHTML = WorkoutPageTemplate()
}

const renderworkouts = () => {
    return workouts.map(workout => workoutTemplate(workout))
}
//In this arrow function we are getting an array of all the workout templates, so an array of all trs

// the idea of this is to render the home page to the div



/** WHEN THE DOM LOADS **/
document.addEventListener('DOMContentLoaded', () => {
    renderHomePage();
    // renderWorkoutPage()
    homePageLinkEvent();
    workoutListLinkEvent()

})
