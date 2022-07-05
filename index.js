const http = require('http')
const fs = require('fs')

const errorPage = fs.readFileSync("assets/error.html")

function sendPage(path, response) {
    fs.readFile(path, (err, data) => {
        if (err) {
            response.end(errorPage)
            return
        }
        response.end(data.toString())
    })


}

const server = http.createServer((request, response) => {
    console.log("new request", request.method, request.url);
    if (request.url === "/") {
        sendPage("assets/home.html", response)
    } else {
        sendPage("assets" + request.url, response)
    }

})

const PORT = 9090
server.listen(PORT, () => console.log("Server is listening on Port: ", PORT))
