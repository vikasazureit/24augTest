const http = require("http");

const server = http.createServer((req, res) => {
    const now = new Date();

    const day = now.toLocaleDateString("en-IN", {
        weekday: "long"
    });

    const date = now.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end(`
        <html>
            <head>
                <title>ADO Demo</title>
            </head>
            <body>
                <h1>Hello from Azure DevOps!</h1>
                <h2>Today is ${day}</h2>
                <h2>Date is ${date}</h2>
            </body>
        </html>
    `);
});

server.listen(3000, () => {
    console.log("Application running on http://localhost:3000");
});
