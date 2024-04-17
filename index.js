// alert('Hello');

// 1st step - Movement animation to happen
const card = $('.card')[0];
const container = $('.container'); 

// 2nd step - Moving animation event
container.on('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20; //rotating the element into x axis
    let yAxis = (window.innerWidth / 2 - e.pageY) / 20; //rotating the element into y axis
    card.style.transform  = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// 3rd step - Removing animation in
container.on('mouseleave', e => {
    card.style.transform = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

// 4th step - Adding animation in
container.on('mouseenter', e => {
    card.style.transform = 'none';
    // Popout animation for all items
    photo.style.transform = 'translateZ(50px)';
    title.style.transform = 'translateZ(50px)';
    social.style.transform = 'translateZ(50px)';
    info.style.transform = 'translateZ(50px)';
    profile.style.transform = 'translateZ(50px)';
});

// 5th step - all items
const photo = $('.photo img');
const title = $('.title');
const social= $('.social');
const info= $('.info h4');
const profile= $('.profile');


/*Explanation step by step

STEP1
SELECTING ELEMENTS

The variables card and container are set to 
represent jQuery selections targeting
elements with the classes card/container respectively.

STEP 2
MOVING ANIMATION EVENT

When the mousemove event occurs within the container 
it activates a function that adjusts the card/container 
rotation according to the mouse position.

STEP3
REMOVING ANIMATION IN

When the mouse cursor leaves the card/container, 
the card will turn back to its original position.

STEP4
ADDING ANIMATION IN

When you move the mouse cursor to the container
the contaier will transform and translateZ to 50px.

STEP5
SELECTING ALL ITEMS

Variables are created as an jQuery for each elements in the container,
so, /i can use them to transform those item. 

*/