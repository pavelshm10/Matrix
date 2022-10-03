const express= require('express')
const routes = require('./api/routes');
const app = express()
const cors = require('cors');
const PORT = 3000
app.use("/",routes)
app.use(cors({
  origin: ['http://localhost:3001','*'],
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})