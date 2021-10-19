const contactForm = {


  init: () => {
    contactForm.formEl = document.getElementById('contact_form')
    contactForm.formEl.addEventListener('submit', contactForm.handleSendMessage)
  },
  handleSendMessage: async (event) => {
    event.preventDefault();
    const inputName = document.getElementById('form_name')
    const inputEmail = document.getElementById('form_email')
    const inputSubject = document.getElementById('form_subject')
    const inputMessage = document.getElementById('form_message')

    try {

      if (!inputName.value.trim() || !inputEmail.value.trim() || !inputSubject.value.trim() || !inputMessage.value.trim()) {
        return
      } else {
        await emailjs.send("service_hrk7k9m", "template_n87n47f", {
          name: inputName.value,
          email: inputEmail.value,
          subject: inputSubject.value,
          message: inputMessage.value,
        });

        alert('Votre Message a bien été transmis')
        inputName.value = '';
        inputEmail.value = '';
        inputSubject.value = '';
        inputMessage.value = '';

      }


    } catch (error) {
      alert('Une erreur est survenue lors de l\'envoie du message')
      throw new Error(error)
    }



  },
}

document.addEventListener('DOMContentLoaded', contactForm.init())