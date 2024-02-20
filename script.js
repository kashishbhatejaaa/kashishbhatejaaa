document.addEventListener('DOMContentLoaded', function() {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');
    const button4 = document.getElementById('button4');
    const button5 = document.getElementById('button5');
    const viewStoryButton = document.getElementById('view-story');
    const storyContainer = document.getElementById('story-container');

    var story = [];
    const animal = ['cat', 'dog', 'rabbit', 'bird'];
    const location = ['forest', 'beach', 'city', 'mountains'];
    const theme = ['happy', 'sad', 'loved', 'fear'];
    const action = ['jumped', 'slept', 'ran', 'laughed'];
    const ending = ['happily ever after', 'suspense', 'and declared dead']


;   
    function getRandomItem(arr) {
        var output=arr[Math.floor(Math.random() * arr.length)];
        return output;
    }

    function displayStory() {
        storyContainer.innerHTML = 'Once upon a time, a '+ story[0] +'  ventured to the '+ story[1] +'. Despite feeling '+ story[2] +', the '+ story[0] +' '+ story[3] +'. The story ended '+ story[4] +'.';
    }  

    button1.addEventListener('click', function() {
        story[0] = getRandomItem(animal);
       
    });

    button2.addEventListener('click', function() {
        story[1] = getRandomItem(location);
       
    });

    button3.addEventListener('click', function() {
        story[2] = getRandomItem(theme);
        
    });

    button4.addEventListener('click', function() {
        story[3] = getRandomItem(action);
        
    });

    button5.addEventListener('click', function() {
        story[4] = getRandomItem(ending);

    });

    viewStoryButton.addEventListener('click', function() {
        const nonEmptyCount = story.filter(item => item !== undefined && item !== null && item !== '').length;
        if (nonEmptyCount === 5) {
            displayStory();
        } else {
            alert('Please select all parts of the story.');
        }
    });
});
