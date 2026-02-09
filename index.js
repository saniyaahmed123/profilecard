var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var cnic = document.getElementById('cnic');
var card = document.getElementById('card');

function createProfile() {
    if(fname==="" && lname === ""&& email=== ""&&cnic===""&&phone===""){
        alert('please fill all fields')
    }
    var fullname = fname.value + " " + lname.value;

    card.innerHTML = `
        <h1>fullname: ${fullname}</h1>
        <h4>email: ${email.value}</h4>
        <h4>phone: ${phone.value}</h4>
        <h4>cnic: ${cnic.value}</h4>
    `;
}
