const queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search";
const apiKey = 'LHDOxmdikCJmpifs3tmWEVAppRlalmMMgwBzokkN_juEjrWSoOkK6R5EKtX26tLx8eV2IL4EZlKwCxL9zQ0kr8dub3tnp0o6bV3tcZrQN41DGBy-0daSGxpw8gwxZnYx';

$.ajax({
    url: queryURL,
    method: "GET",
    headers: {
        "accept": "application/json",
        "x-requested-with": "xmlhttprequest",
        "Authorization": `Bearer ${apiKey}`
    },
    data: {
        term: 'Brewery',
        location: 'Villanova, PA' // Updated location to Villanova, PA
    }
}).then(function (res) {
    let results = res.businesses;
    console.log(results);
});
