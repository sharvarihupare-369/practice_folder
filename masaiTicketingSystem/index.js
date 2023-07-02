const express = require('express');
const app = express();
const fs = require('fs');
const os = require('os');
const dns= require('dns');
app.use(express.json());

function logOperation(operation) {
    const logText = `${operation} at ${new Date().toString()}\n`;
    fs.appendFileSync('./logs.txt', logText);
}

app.get('/', (req, res) => {
    res.setHeader('content-type', 'text/html');
    logOperation('The home route visited');
    res.send("<h1>Welcome to the Home Page</h1>")
})

app.post('/add/student', (req, res) => {
    const data = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));
    const {age, location, tickets} = req.body;

    const newObj = {
        id : os.userInfo().uid,
        name : os.userInfo().username,
        age : age,
        location : location,
        tickets : tickets
    }

    data.students.push(newObj);
    logOperation('New student has been added to the database');
    fs.writeFileSync('./db.json', JSON.stringify(data));
    res.send(data.students);
})

app.post('/add/instructor', (req, res) => {
    const data = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));
    const {age, location, sub, exp} = req.body;

    const newObj = {
        id : os.userInfo().uid,
        name : os.userInfo().username,
        age : age,
        location : location,
        sub : sub,
        exp : exp
    }

    data.instructors.push(newObj);
    logOperation('New instructor has been added to the database');
    fs.writeFileSync('./db.json', JSON.stringify(data));
    res.send(data.instructors);
})

app.get('/students', (req, res) => {
    fs.readFile('./db.json', (err, data) => {
        if(err){
            res.send(err)
        }
        else{
            logOperation('All the students data provided');
            const parsed_data = JSON.parse(data);
            res.send(parsed_data.students);
        }
    })
})

app.get('/instructors', (req, res) => {
    fs.readFile('./db.json', (err, data) => {
        if(err){
            res.send(err)
        }
        else{
            logOperation('All the instructors data provided');
            const parsed_data = JSON.parse(data);
            res.send(parsed_data.instructors);
        }
    })
})

app.get('/tickets', (req, res) => {
    fs.readFile('./db.json', (err, data) => {
        if(err){
            res.send(err);
        }
        else{
            const parsedData = JSON.parse(data);
            let totalTickets = 0;
            parsedData.students.forEach(el => {
                totalTickets += el.tickets.length;
            })
            // console.log(totalTickets);
            logOperation(`Total number of tickets in the system are ${totalTickets}`)
            res.send(`Total number of tickets in the system are ${totalTickets}`);
        }
    });
})

app.get('/address', (req, res) => {
    const domain = 'masaischool.com';
    dns.lookup(domain, (err, address, family) => {
        if(err){
            res.status(500).send({error : err.message})
        }
        else{
            logOperation(`URL: ${domain} IP Address: ${address} Family: ${family === 4 ? 'IPv4' : 'IPv6'}`)
            res.send(`URL: ${domain} IP Address: ${address} Family: ${family === 4 ? 'IPv4' : 'IPv6'}`)
        }
    })
})



app.listen(8080, () => {
    console.log('Server is running at port 8080');
})

// export server
module.exports = app
