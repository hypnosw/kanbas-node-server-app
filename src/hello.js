const Hello = (app)=>{
    console.log("Hello World!!!!");
    app.get('/hello', (req, res) => {res.send('Hello World!')})
    app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
};

export default Hello;