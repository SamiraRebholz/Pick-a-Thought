document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('.userInput input');
    const button = document.getElementById('submitIdea');
    const list = document.getElementById('ideaList');
    let ideas = [];

    button.addEventListener('click', function() {
        const value = input.value.trim();
        if (value && ideas.length < 5) {
            ideas.push(value);
            renderList();
            input.value = '';
        } else if (ideas.length >= 5) {
            alert('You can only submit up to 5 ideas.');
        }
    });

    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            button.click();
        }
    });

    function renderList() {
        list.innerHTML = '';
        ideas.forEach((idea, idx) => {
            const li = document.createElement('li');
            li.textContent = idea;
            list.appendChild(li);
        });
    }
});