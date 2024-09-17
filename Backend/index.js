require('dotenv').config();
const express = require("express");
const cors = require("cors")
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

const url = "https://newsapi.org/v2/everything?q=";
const API_KEY = process.env.API_KEY;

app.post('/news', async(req,res) => {
    
    const {topic} = req.body;
    const response = await fetch(`${url}${topic}&apikey=${API_KEY}`)

    const data = await response.json();

    const final = data.articles.filter(article => article.title !== "[Removed]").map(article => ({
        source : article.source.name, 
        title : article.title,
        description : article.description,
        image : article.urlToImage
    }))


    res.json({
        data : final,
    })
})



app.listen(port, () => {
    console.log(`Server is running on ${port}.`)
})
