require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// OLD: 
app.use(cors()); 

// NEW: 
app.use(cors({
  origin: '*', // OK for portfolio
  methods: ['GET', 'POST'],
}));


app.use(express.json());

app.get('/', async (req, res) => { // 
 	res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello from Node.js Portfolio API!\n');
});

app.get('/api/projects', (req, res) => {
  res.json([
    { name: 'Portfolio Website', tech: 'Angular, Node.js', year: 2025 },
    { name: 'REST API', tech: 'Express, SQL Server', year: 2024 }
  ]);
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(name, email, message);
  res.status(200).json({ success: true });
});


app.get('/api/sales', (req, res) => {
  res.json([
 { userid: 1002893, username: "DOUGLAS BROOKS",  country: "US",  countrydesc: "DURHAM",  hired: "2011-12-01",  sales: 1003},  
 { userid: 1043542, username: "SØREN KIIL",  country: "DK",  countrydesc: "HOLTE",  hired: "2011-07-15",  sales: 1058},  
 { userid: 1144246, username: "SUI YI KWOK",  country: "CN",  countrydesc: "ABERDEEN",  hired: "2011-03-21",  sales: 1350},  
 { userid: 1276569, username: "DAVID P. MAHER",  country: "US",  countrydesc: "LIVERMORE",  hired: "2011-11-21",  sales: 1003},  
 { userid: 130380, username: "JIANLAN SONG",  country: "CN",  countrydesc: "CERRITOS",  hired: "2010-01-27",  sales: 1350},  
 { userid: 130381, username: "JEAN-MICHEL VERNIER",  country: "FR",  countrydesc: "LAGUNA NIGUEL",  hired: "2009-02-20",  sales: 1150},  
 { userid: 1304482, username: "O`BRIEN PATRICK MICHAEL",  country: "US",  countrydesc: "STOCKBRIDGE",  hired: "2010-10-14",  sales: 1003},  
 { userid: 1467744, username: "HAL N. SIEGEL",  country: "US",  countrydesc: "PARADISE VALLEY",  hired: "2008-09-08",  sales: 1003},  
 { userid: 1489214, username: "JOHN WOODCRAFT",  country: "GB",  countrydesc: "BUCKINGHAMSHIRE",  hired: "2012-03-02",  sales: 1001},  
 { userid: 1501884, username: "JARI MUTIKAINEN",  country: "FI",  countrydesc: "LEPSÄMÄ",  hired: "2007-11-27",  sales: 1150},  
 { userid: 1535135, username: "WEI ZENG",  country: "CA",  countrydesc: "INDIANAPOLIS",  hired: "2011-04-08",  sales: 1350} 




  ]);
});






const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));

//  http://localhost:5000
//  http://localhost:5000/api/projects
//  http://localhost:5000/api/sales


//  http://localhost:5000/api/contact

// app.listen(PORT, () => {
//   console.log(`Node.js API listening at http://localhost:${port}`);
// });
