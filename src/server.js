import app from "./app.js"
import SearchChar from "./services/searchChar.js";

app.listen(8080, () => {
    console.log('Server is running on port 8080 ');
});


const response = await SearchChar.searchChar('Dime Vanillia')
console.log(response.data.characters.character.name)

