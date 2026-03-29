const contactUs = document.querySelector(".email-form");

contactUs.addEventListener("submit" , (event) =>{
    event.preventDefault ();
    let errors =0;


    const name  = document.getElementById("name").value;
    const email  = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const nameRegex =/^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/;
    if(!nameRegex.test(name.trim())) {
        Toastify({
            text:"Please enter a valid name without any symbols or numbers.",
            duration: 5000,
            close:true,
            gravity:"top",
            position:"center",
            backgroundColor:"red",
            stopOnFocus:true,
        }).showToast();
        errors++;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email.trim())) {
        Toastify({
            text:"Please enter a valid email address.",
            duration: 5000,
            close:true,
            gravity:"top",
            position:"center",
            backgroundColor:"red",
            stopOnFocus:true,
        }).showToast();
        errors++;  
    }

    if(subject.trim() === "") {
        Toastify({
            text:"Please enter a subject.",
            duration: 5000,
            close:true,
            gravity:"top",
            position:"center",
            backgroundColor:"red",
            stopOnFocus:true,
        }).showToast();
        errors++;  
    }

    if(errors > 0 ) return;
  

    const contact = {
        name: name ,
        email: email,
        subject: subject,
        message : message,
    };

    localStorage.setItem("contact",JSON.stringify(contact));

      Toastify({
            text:"Thanks for reaching out.We'll reply to your message as soon as possible.",
            duration: 5000,
            close:true,
            gravity:"top",
            position:"center",
            backgroundColor:"red",
            stopOnFocus:true,
        }).showToast();
        
      contactUs.reset();
   
});