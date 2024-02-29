const options = ['😈', '😮', '😁', '🥺', '🤪', '💅'];
const voteCount = Array(options.length).fill(0);

function renderVoting() {
    const votingContainer = document.getElementById('voting-container');
    votingContainer.innerHTML = '';

    options.forEach((option, index) => {
        const smileyContainer = document.createElement('div');
        smileyContainer.className = 'smiley-container';

        const smileyDiv = document.createElement('div');
        smileyDiv.className = 'smiley';
        smileyDiv.textContent = option;
        smileyDiv.addEventListener('click', () => {
            voteCount[index]++;
            renderVoting();
        });

        const voteCountDiv = document.createElement('div');
        voteCountDiv.className = 'vote-count';
        voteCountDiv.textContent = voteCount[index];

        smileyContainer.appendChild(smileyDiv);
        smileyContainer.appendChild(voteCountDiv);

        votingContainer.appendChild(smileyContainer);
    });
}

renderVoting();
