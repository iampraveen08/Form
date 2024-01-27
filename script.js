document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // You can perform further actions here, such as sending data to a server or displaying a confirmation message
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
});
