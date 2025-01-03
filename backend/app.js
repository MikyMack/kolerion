const express = require('express');
const path = require('path');
// const session = require('express-session');

const app = express();

app.use(express.static(path.join(__dirname, '../assets')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));



app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' });
});

app.get('/blogs', (req, res) => {
    res.render('blogs', { title: 'blogs' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Us' });
});
app.get('/services', (req, res) => {
    res.render('services', { title: 'Services' });
});
app.get('/recruiting', (req, res) => {
    res.render('recruiting', { title: 'recruiting' });
});
app.get('/visa-support', (req, res) => {
    res.render('visa-support', { title: 'visa support' });
});
app.get('/technical-support', (req, res) => {
    res.render('technical-support', { title: 'technical support' });
});
app.get('/legal-accounting', (req, res) => {
    res.render('legal-accounting', { title: 'legal accounting' });
});
app.get('/study-abroad', (req, res) => {
    res.render('study-abroad', { title: 'study abroad' });
});
app.get('/accommodation', (req, res) => {
    res.render('accommodation', { title: 'accommodation' });
});
app.get('/tours-travels', (req, res) => {
    res.render('tours-travels', { title: 'tours and travels' });
});
app.get('/privacy-policy', (req, res) => {
    res.render('privacy-policy', { title: 'privacy policy' });
});
app.get('/gdpr-policy', (req, res) => {
    res.render('gdpr-policy', { title: 'GDPR policy' });
});
app.get('/terms-and-conditions', (req, res) => {
    res.render('terms-and-conditions', { title: 'terms and conditions' });
});

module.exports = app;