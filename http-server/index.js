const http=require("http");
const fs =require("fs");
let HomeContent ="";
let ProjectContent="";
let RegistrationContent="";
const args=require("minimist")(process.argv);
const port=args.port
fs.readFile("home.html",(err,home)=> {
    if (err) {
        throw err;
    }
    HomeContent=home;
});
fs.readFile("project.html",(err,project)=> {
    if (err) {
        throw err;
    }
    ProjectContent=project;
});
fs.readFile("registration.html",(err,registration)=> {
    if (err) {
        throw err;
    }
    RegistrationContent=registration;
});
http
.createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
        case "/project":
            response.write(ProjectContent);
            response.end();
            break;
        case "/registration":
            response.write(RegistrationContent);
            response.end();
            break;
        default:
            response.write(HomeContent);
            response.end();
            break;
    }
})
.listen(port);
