import app from "./app.js"
import SearchChar from "./services/searchChar.js";

app.listen(8080, () => {
    console.log('Server is running on port 8080 ');
});


const data = await SearchChar.searchChar('Aberoon Grooup')
console.log(data)

