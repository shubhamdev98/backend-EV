
const gateway = require('fast-gateway')

const port = 4000

const server = gateway({
    routes: [
        {
            prefix: '/api/v1/company',
            target: 'http://localhost:3005/',
            hooks: {
                onRequest (req, res) {
                    console.log(`Request received: ${req.method} ${req.url}`);
                } 
            },
        },
        {
            prefix: '/api/v1/auth',
            target: 'http://localhost:3004/',
            hooks: {
                onRequest (req, res) {
                    console.log(`Request received: ${req.method} ${req.url}`);
                }
            },
        },
    ],
});

server.get('/gateway',(req,res)=>{
        res.send("gateway is running")
})

server.start(port).then(server=>{
    console.log(`api-gateway server is running on ${port} number`)
}) 