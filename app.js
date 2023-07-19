const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

main().catch(err => console.log(err));

app.set('views', './');
app.set(express.static('scroller-images'));

app.get('/', (req, res) => {
    res.status(200).render('index.html');
});

app.post('/', (req, res) => {
    res.status(200).render('confirm', { 
        fullNameField : req.body.fullName,
        emailField : req.body.email,
        mobileNumberField : req.body.mobileNumber,
        messageField : req.body.message,
        optionChosenField : req.body.optionChosen,
     });
});

// Taking form-input and saving it to database
app.post('/confirm', (req, res) => {
    const { fullName, email, mobileNumber, optionChosen, message } = req.body;
    const newContact = new Contact({
        fullName: fullName,
        email: email,
        mobileNumber: mobileNumber,
        optionChosen: optionChosen,
        message: message,
    });

    newContact.save()
        .then(() => {
            res.status(200).render('succesful');
        })
        .catch(error => {
            console.log(error);
        });
});

app.listen(port, () => {
    console.log(`Website live on port ${port}`);
});