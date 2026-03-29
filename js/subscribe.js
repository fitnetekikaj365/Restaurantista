function subscribeUser (event) {
    event.preventDefault();

    const email = document.getElementById("subscribeEmail").value;
    const isSubscribed = document.getElementById("checkbox").checked;


    if (!email || !email.includes("@")) {
        Toastify({
            text: "Please enter a valid email address.",
            duration: 3000,
            gravity:"top",
            position: "center",
            backgroundColor: "red",
        }).showToast();
        return;
    }
   
    const subscribeUser = {
        email : email ,
        subscribed : isSubscribed,
    };

    localStorage.setItem("subscriber",JSON.stringify(subscribeUser));

    Toastify ({
        text:"Subscription successful! You are now subscribed.",
        duration:3000,
        gravity:"top",
        position:"center",
        backgroundColor:"#28a745",
     }).showToast();
}

function checkSubscriptionStatus() {
    const subscriber = JSON.parse(localStorage.getItem("subscriber"));
    if (subscriber && subscriber.subscribed){
        document.getElementById("subscribeEmail").value = subscribe.email;

       Toastify ({
        text: "Welcome back " + subscribe.email,
        duration: 3000,
        gravity:"top",
        position:"center",
        backgroundColor:"#13a2b8",
     }).showToast();
    }
}

document
.getElementById("subscribeForm")
.addEventListener("submit",subscribeUser);


document.addEventListener("DOMContentLoaded",checkSubscriptionStatus);