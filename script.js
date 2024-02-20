document.addEventListener('DOMContentLoaded', function() {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');
    const button4 = document.getElementById('button4');
    const button5 = document.getElementById('button5');
    const viewStoryButton = document.getElementById('view-story');
    const storyContainer = document.getElementById('story-container');

    const animal = ['cat', 'dog', 'rabbit', 'bird'];
    const location = ['forest', 'beach', 'city', 'mountains'];
    const theme = ['happy', 'sad', 'love', 'fear'];
    const action = ['jumped', 'slept', 'ran', 'laughed'];
    const ending = ['happily ever after', 'suspense', 'and declared dead']

    let currentstory = [];
;   
    function getRandomItem(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function displayStory() {
        storyContainer.innerHTML = story.join(' ') + '.';
    }

    button1.addEventListener('click', function() {
        story[0] = getRandomItem(characters);
        displayStory();
    });

    button2.addEventListener('click', function() {
        story[1] = getRandomItem(settings);
        displayStory();
    });

    button3.addEventListener('click', function() {
        story[2] = getRandomItem(objects);
        displayStory();
    });

    button4.addEventListener('click', function() {
        story[3] = getRandomItem(actions);
        displayStory();
    });

    button5.addEventListener('click', function() {
        story[4] = getRandomItem(endings);
        displayStory();
    });

    viewStoryButton.addEventListener('click', function() {
        if (story.length === 5) {
            displayStory();
        } else {
            alert('Please select all parts of the story.');
        }
    });
});
