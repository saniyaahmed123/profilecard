var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var cnic = document.getElementById('cnic');
var card = document.getElementById('card');

function createProfile() {
    if (
        fname.value === "" ||
        lname.value === "" ||
        email.value === "" ||
        cnic.value === "" ||
        phone.value === ""
    ) {
        Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "fill all required fields",
        });

        return;
    }

    var fullname = fname.value + " " + lname.value;

    card.innerHTML = `
    <img src="user (2).png">
        <h4 class= "name">  ${fullname}</h4>
        <hr>
        <div class='info'>
        <h4>✉️ :  ${email.value}</h4>
        <h4>📞 : ${phone.value}</h4>
        <h4># CNIC: ${cnic.value}</h4>
        </div>
    `;
    card.style.display = "block"
}
function submitForm() {
    if (
        fname.value === "" ||
        lname.value === "" ||
        email.value === "" ||
        cnic.value === "" ||
        phone.value === ""
    ) {
        Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "fill all required fields",
        });

        return;
    }

    Swal.fire({
        title: "success",
        text: "your form had been submitted",
        icon: "success"
    });
}
