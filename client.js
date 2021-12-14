console.log('Here are all the available people:', people);

$(document).ready( onReady )

let randomPerson = [];
function onReady (){
   
    render(people);
    $(document).on('click', '.picturesDiv', findMatch)

} // end function onReady


function render(people){
    // append random person to Dom
    $('body').append(`<h2>
    Click on: ${randomPerson}
    </h2>`);
    // Render all profile pictures to DOM with attribute name to link with random person
    for(let staff of people){
        $('body').append(`<div class="picturesDiv" data-name="${staff.name}">
       <img src="https://github.com/${staff.githubUsername}.png?size=250" alt="Profile image of ${staff.name}"></img>
        </div>`)
    };
} // end function render

