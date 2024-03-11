const express = require('express')
const server = express()
const ytdl = require('ytdl-core')



server.set("view engine", "ejs")



server.get('/', (req,res)=>{
    return res.render("index")
})

server.get('/download', async (req,res)=>{
    const v_id = req.query.url.split('v=')[1]
    const info = await ytdl.getInfo(req.query.url)
   

    return res.render('download',{
        url:  "https://www.youtube.com/embed/" + v_id,
        info: info.formats.sort((a,b)=>{
            return a.mimeType < b.mimeType  
        })
    })
})



server.listen(8005,()=>{
    console.log('servidor rodando')
})