document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const questionText = document.querySelector('.container h1');
    const container = document.querySelector('.container');
    const characterImg = document.querySelector('.character-img'); 

    // Array of messages to display when "No" is clicked (but it won't be easily!)
    const noMessages = [
        "Are you really, really sure?",
        "Think again!",
        "Come on, you know the answer!",
        "Don't break my heart!",
        "Is that truly your final answer?",
        "You can't escape this!",
        "I know you love me!",
        "Just say yes already!",
        "My feelings are too strong for a 'no'!",
        "Let's try that again. 😉"
    ];

    // Array of messages when "No" is hovered (as it moves)
    const hoverMessages = [
        "Haha, almost got me!",
        "Nope!",
        "Not so fast!",
        "Try harder! 😉",
        "Can't touch this!",
        "Too quick!",
        "You almost caught me!",
        "Missed me!",
        "Keep trying, but 'no' won't work!",
        "Is that the best you can do?"
    ];

    let messageIndex = 0;
    let hoverIndex = 0;

    noBtn.addEventListener('mouseover', () => {
        const containerRect = container.getBoundingClientRect();
        const buttonRect = noBtn.getBoundingClientRect();

        const newX = Math.random() * (containerRect.width - buttonRect.width);
        const newY = Math.random() * (containerRect.height - buttonRect.height);

        noBtn.style.position = 'absolute';
        noBtn.style.left = `${newX}px`;
        noBtn.style.top = `${newY}px`;

        questionText.textContent = hoverMessages[hoverIndex % hoverMessages.length];
        hoverIndex++;
    });

    noBtn.addEventListener('click', () => {
        questionText.textContent = noMessages[messageIndex % noMessages.length];
        messageIndex++;

        const containerRect = container.getBoundingClientRect();
        const buttonRect = noBtn.getBoundingClientRect();
        const newX = Math.random() * (containerRect.width - buttonRect.width);
        const newY = Math.random() * (containerRect.height - buttonRect.height);
        noBtn.style.left = `${newX}px`;
        noBtn.style.top = `${newY}px`;
    });

    yesBtn.addEventListener('click', () => {
        container.innerHTML = `
            <img src="https://media1.giphy.com/media/xT0GqFhyNd0Wmfo6sM/giphy.gif" alt="Happy dance" class="character-img">
            <h1>I knew it! You're truly the best! ❤️</h1>
            <p>I value you very much!</p>
        `;
        // Comments like these should be outside the backticks if you want them in the JavaScript file.
    });
});