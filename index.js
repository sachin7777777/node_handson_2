const express=require('express')
const app=express();
app.get('/',function(req,res){res.send("hello i am home page")})
app.get('/api/main/html',function(req,res){
    res.send("<h1>  Express js</h1>")
    res.send("Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.")

})
app.get('/api/main/json',function(req,res){
    res.json({name:"sachin"})
})
app.get('/api/main/normal',function(req,res){
    res.send("Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.")

})
app.listen(8000);