const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const connectDB = require('./db'); 

const app = express();

connectDB();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));

const contactSchema = new mongoose.Schema({
  name: String,
  description: String,
  contact: String
});
const Contact = mongoose.model('Contact', contactSchema);

app.get('/', (req, res) => {
  res.render("home");
});


app.get('/contact', (req, res) => {
  res.render("contact");
});


app.post('/contactdetails', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.redirect('/contacts');
  } catch (err) {
    console.error('Error saving contact:', err);
    res.status(500).send("Error saving data");
  }
});


app.get('/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.render("contactdetails", { contacts });
  } catch (err) {
    console.error('Error fetching contacts:', err);
    res.status(500).send("Error fetching data");
  }
});


app.get('/edit/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    res.render("edit", { contact });
  } catch (err) {
    console.error('Error fetching contact:', err);
    res.status(500).send("Error fetching data");
  }
});

app.post('/update/:id', async (req, res) => {
  try {
    await Contact.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/contacts');
  } catch (err) {
    console.error('Error updating contact:', err);
    res.status(500).send("Error updating data");
  }
});


app.get('/delete/:id', async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.redirect('/contacts');
  } catch (err) {
    console.error('Error deleting contact:', err);
    res.status(500).send("Error deleting data");
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
