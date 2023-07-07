const express = require("express");
const app = express();
require("./db/conn");
const path = require("path");
const port = process.env.PORT || 3000;
const EmployeeDetails = require('./models/employee');

const template_path = path.join(__dirname, '../template/views');

app.set("view engine", "hbs");
app.set("views", template_path);
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Express app running on port ${port}`);
});

app.post('/emdata', async (req, res) => {
  try {
    const employeeDetails = new EmployeeDetails(req.body);
    await employeeDetails.save();
    res.status(201).json({ message: 'Employee details saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error saving employee details' });
  }
});
