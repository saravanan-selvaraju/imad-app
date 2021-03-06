var express = require('express');
var morgan = require('morgan');
var path = require('path');
var count=0;
var app = express();
var articles={
    'article-one':{
            title:`Article One | saravanan`,
            heading:'Article One',
            date:'15 feb 2017',
            content:`
            <p>Blah Blah ..... Lorem paragraph example.... dummy paragraph sorry to say now i am in hurry mood....
            stop to watch me... i can code...</p>
             <p>Blah Blah ..... Lorem paragraph example.... dummy paragraph sorry to say now i am in hurry mood....
            stop to watch me... i can code...</p>
             <p>Blah Blah ..... Lorem paragraph example.... dummy paragraph sorry to say now i am in hurry mood....
            stop to watch me... i can code...</p>
            `
        },
    'article-two':{
            title:`Article Two | saravanan`,
            heading:'Article Two',
            date:'17 feb 2017',
            content:`
            <p>Blah Blah ..... Lorem paragraph example.... dummy paragraph sorry to say now i am in hurry mood....
            stop to watch me... i can code...</p>
             <p>Blah Blah ..... Lorem paragraph example.... dummy paragraph sorry to say now i am in hurry mood....
            stop to watch me... i can code...</p>
             <p>Blah Blah ..... Lorem paragraph example.... dummy paragraph sorry to say now i am in hurry mood....
            stop to watch me... i can code...</p>
            `
        },
    'article-three':{
            title:'Article Three | saravanan',
            heading:'Article Three',
            date:'19 feb 2017',
            content:`
            <p>Blah Blah ..... Lorem paragraph example.... dummy paragraph sorry to say now i am in hurry mood....
            stop to watch me... i can code...</p>
             <p>Blah Blah ..... Lorem paragraph example.... dummy paragraph sorry to say now i am in hurry mood....
            stop to watch me... i can code...</p>
             <p>Blah Blah ..... Lorem paragraph example.... dummy paragraph sorry to say now i am in hurry mood....
            stop to watch me... i can code...</p>
            `
        },
};
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var names=[];
app.get('/submit-name',function(req,res){
   var name =req.query.name;
   names.push(name);
   res.send(JSON.stringify(names));
});
app.get('/count',function(req,res){
    count=count+1;
   res.send(count.toString()); 
});
app.get('/:articlename', function (req, res) {
    var article=req.params.articlename;
   res.send(createpost(articles[article]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
function createpost(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    var post=`
                <html>
                        <head>
                            <title>${title}</title>
                            <link href="/ui/style.css" rel="stylesheet" />
                        </head>
                <body>
                    <div class="container">
                    <span class="center"><a href="/">Home</a></span>
                    <hr>
                    <h5>${date}</h5>
                       <h1 class="center">${heading}</h1>
                    ${content}
                    </div>
                </body>
                </html>
    
    `;
    return  post;
}

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
