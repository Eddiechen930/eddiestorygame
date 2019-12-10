// DOM MANIPULATION Visual Novel Game
// Create a new event
// Select the button you want to edit
// Run a function when it is clicked
var name = prompt('Type your name and become a character throughout the story');
document.querySelector(".button1").addEventListener("click", function() {
    // 1. Scene 1
    document.querySelector(".story-window").innerHTML = 
    '<p> The first day of the school,' + name + ' slowly walked in the classroom. All of a suddon ' + name + ' saw this beatiful girl walks in. Then the teacher introduced her, she is a new student.' + name + ' said to himself/herself "She seems to be lonely" <br> What will you like ' + name +' to do';
    // 2. Erase old button     add dot                     no dot
    document.querySelector(".button1").classList.add("invisible");
    // 3. Show next button
    document.querySelector(".choice1-btn").classList.remove("invisible");
    document.querySelector(".choice2-btn").classList.remove("invisible");
} )    
    //  Scene 2 choice 1
    document.querySelector(".choice1-btn").addEventListener("click", function() {
        document.querySelector(".story-window").innerHTML = 
        name +' walks closer to her and realized something weried about her. She sits in a weried position, but he not dare to ask. She smiles wierdly at' + name + '. <br>"Hey, what is your name" She asked.<br> "My name is' + name + '" He replied <br>' + name + ' then noticed that she has no legs. <br>"What are you looking at?" She said with a smile on her face. <br>What do you want' + name + 'to do? ';
    document.querySelector(".choice1-btn").classList.add("invisible");
    document.querySelector(".choice2-btn").classList.add("invisible");
    // Show scene 3 button
    document.querySelector(".choice3").classList.remove("invisible");
    document.querySelector(".choice4").classList.remove("invisible");
    })
    // Scene 2 choice 2
    document.querySelector(".choice2-btn").addEventListener("click", function() {
        document.querySelector(".story-window").innerHTML = 
        name + 's class goes on, all of a suddon the lights turned off. Bang Bang Bang, his eyes closed as he sees a girl standing infront of him with a gun.<br> You failed to keep ' + name + ' alive';
    document.querySelector(".choice1-btn").classList.add("invisible");
    document.querySelector(".choice2-btn").classList.add("invisible");
    })
    // Scene 3 choice 3
    document.querySelector(".choice3").addEventListener("click", function() {
        document.querySelector(".story-window").innerHTML = 
        '<p> As he turn back, he felt something weried on the back of his head. Then everything turned black. The girtl had shot him in the back.<br>  YOU LOST';
    document.querySelector(".choice3").classList.add("invisible");
    document.querySelector(".choice4").classList.add("invisible");
    })
    // Scene 3 choice 4
    document.querySelector(".choice4").addEventListener("click", function() {
        document.querySelector(".story-window").innerHTML = 
        '<p> "I lost my leg during a fight." She replied <br> "Oh, im sorry"' + name + 'said<br> " Any way what is your name"' + name + 'asked<br> "How about I dont have a name" She replied <br> You heard the police coming. Then you saw the girl running away. <br> What will you do?';
    document.querySelector(".choice3").classList.add("invisible");
    document.querySelector(".choice4").classList.add("invisible");
    // Show scene 3 button
    document.querySelector(".choice5").classList.remove("invisible");
    document.querySelector(".choice6").classList.remove("invisible");
    }) 
    // Scene 4 choice 5
    document.querySelector(".choice5").addEventListener("click", function() {
        document.querySelector(".story-window").innerHTML = 
        '<p> "Why didnt you chace her?" A policmen asked <br> "She is a serial killer and now she has escaped." Policmen shouted <br> You had just failed to catch a serial killer. <br> You Lost';
        document.querySelector(".choice5").classList.add("invisible");
        document.querySelector(".choice6").classList.add("invisible");
    })
    // Scene 4 Choice 6
    document.querySelector(".choice6").addEventListener("click", function() {
        document.querySelector(".story-window").innerHTML = 
        name+ '<p> chased her down the stair and eventually ' + name + ' caught her. ' + name + ' turned her to the police, and found out that she is a serial killer. The police rewarded ' + name + 'with a 100,000 check .<br> You Wom the game';
        document.querySelector(".choice5").classList.add("invisible");
        document.querySelector(".choice6").classList.add("invisible");
    })
