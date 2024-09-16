require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const url = "https://newsapi.org/v2/everything?q=";
const API_KEY = process.env.API_KEY;

app.post('/news', async(req,res) => {
    
    const {topic} = req.body;
    const response = await fetch(`${url}${topic}&apikey=${API_KEY}`)

    const data = await response.json();

    const final = data.articles.filter(article => article.title !== "[Removed]").map(article => ({
        source : article.source.name, 
        title : article.title,
        description : article.description
    }))


    res.json({
        data : final,
    })
})



app.listen(port, () => {
    console.log(`Server is running on ${port}.`)
})

// https://newsapi.org/v2/everything?q=POLITICS&apiKey=565db8a1c1814d738335632cfd618432