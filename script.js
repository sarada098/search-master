const searchBar = document.getElementById('search-bar');
const suggestions = document.getElementById('suggestions');
const results = document.getElementById('results');

searchBar.addEventListener('input', function() {
    const value = this.value;
    suggestions.innerHTML = ''; // Clear previous suggestions

    if (value.length > 0) {
        // Simulate fetching suggestions
        const suggestionList = ['Apple', 'Banana', 'Orange', 'Grape', 'Pineapple'];
        const filteredSuggestions = suggestionList.filter(item => item.toLowerCase().includes(value.toLowerCase()));

        filteredSuggestions.forEach(item => {
            const suggestionItem = document.createElement('div');
            suggestionItem.classList.add('suggestion-item');
            suggestionItem.textContent = item;
            suggestionItem.onclick = () => {
                searchBar.value = item;
                suggestions.innerHTML = '';
                displayResults(item); // Display results for selected suggestion
            };
            suggestions.appendChild(suggestionItem);
        });
        suggestions.style.display = 'block'; // Show suggestions
    } else {
        suggestions.style.display = 'none'; // Hide if input is empty
    }
});

function displayResults(query) {
    results.innerHTML = `<div class="result-item">Results for "${query}"</div>`;
    // Here you can implement further logic to fetch actual results based on the query
}
