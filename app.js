const scriptURL = 'https://script.google.com/macros/s/AKfycbx3pEjswXNkjiyqUVwgWTCc1WPuuuYi-IgIguzkb29AxzDT2Dai7c1Jlg97OzZE8n8qBw/exec'

const form = document.forms['form']

const data = jwt_decode(response.credential);
const email = data.email;

form.addEventListener('submit', handleSubmit)

function handleSubmit(e){
    e.preventDefault()

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! Form is submitted" ))
    .then(() => { if (email == "") {
        window.location.reload(); 
    } else{
        window.location.href = "https://solo-leveling-off.netlify.app/registration.html";
    }
})
    .catch(error => console.error('Error!', error.message))
}