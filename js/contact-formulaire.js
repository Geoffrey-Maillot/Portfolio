const contactForm = {


  init: () => {
    contactForm.formEl = document.getElementById('contact_form')
    contactForm.formEl.addEventListener('submit', contactForm.handleSendMessage)
  },
  handleSendMessage: async () => {
    event.preventDefault();
    const inputName = document.getElementById('form_name').value
    const inputEmail = document.getElementById('form_email').value
    const inputSubject = document.getElementById('form_subject').value
    const inputMessage = document.getElementById('form_message').value

    try {

      if (!inputName.trim() || !inputEmail.trim() || !inputSubject.trim() || !inputMessage.trim()) {
        return
      } else {
        await emailjs.send("service_hrk7k9m", "template_n87n47f", {
          name: inputName,
          email: inputEmail,
          subject: inputSubject,
          message: inputMessage,
        });

        alert('Votre Message a bien été transmis')
      }


    } catch (error) {
      alert('Une erreur est survenue lors de l\'envoie du message')
      throw new Error(error)
    }



  },
}

document.addEventListener('DOMContentLoaded', contactForm.init())