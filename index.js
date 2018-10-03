$(document).ready(function (){
});

var searchRepositories = () => {
  const searchTerms = $('#searchTerms').val()
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data => {
    $('#results').html(renderSearchResults(data))
  }).fail(error =>{
    displayError()
  })
}

var renderSearchResults = (data) => data.items.map(result => renderSearchResult(result))
