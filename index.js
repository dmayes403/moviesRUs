const express = require('express');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = 4444;

let app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'))

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})

app.get('https://api.themoviedb.org/3/list/10?api_key=e5c0958c4c41698898b558533ead79c3&language=en-US')
