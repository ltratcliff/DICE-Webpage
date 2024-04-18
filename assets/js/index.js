function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

function searchCardTitles() {
  // Search for card titles and create new bootstrap container with search results
  const input = document.getElementById("myInput");
  const filter = input.value.toUpperCase();
  if (filter === "") {
    return;
  }
  const cardItems = document.getElementById("cardItems");
  //js is weird...
  //https://stackoverflow.com/questions/39042435/why-is-my-javascript-for-loop-skipping-elements
  const cards = Array.prototype.slice.call(cardItems.getElementsByClassName("card"));
  const newCardItems = document.createElement("div");
  newCardItems.className = "col-sm-4";
    for (let i = 0; i < cards.length; i++) {
        const title = cards[i].querySelector(".card-body h5.card-title");
        const txtValue = title.textContent || title.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            newCardItems.appendChild(cards[i]);
        }
    }
  cardItems.innerHTML = newCardItems.innerHTML;

  input.value = "";
}

async function fetchHtmlAsText(url) {
    return await (await fetch(url)).text();
}

async function goHome() {
  // document.getElementById("mainbody").innerHTML = '<object type="text/html" data="about.html" ></object>';
  const contentDiv = document.getElementById("mainbody");
  contentDiv.innerHTML = await fetchHtmlAsText("main.html");
  closeNav();
}

async function openAboutContent() {
  // document.getElementById("mainbody").innerHTML = '<object type="text/html" data="about.html" ></object>';
  const contentDiv = document.getElementById("mainbody");
  contentDiv.innerHTML = await fetchHtmlAsText("about.html");
  closeNav();
}

async function openServicesContent() {
  const contentDiv = document.getElementById("mainbody");
  contentDiv.innerHTML = await fetchHtmlAsText("services.html");
  closeNav();
}

async function openClientsContent() {
  const contentDiv = document.getElementById("mainbody");
  contentDiv.innerHTML = await fetchHtmlAsText("clients.html");
  closeNav();
}

async function openContactContent() {
  const contentDiv = document.getElementById("mainbody");
  contentDiv.innerHTML = await fetchHtmlAsText("contact.html");
  closeNav();
}

// Email contact form using mailto
function sendEmail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = "Inquiry from " + name + " regarding EIS SIF Data Team Offerings";
  const message = document.getElementById("message").value;
  const mailtostring = "mailto:larry.t.ratcliff.ctr@socom.mil?subject=" + subject + "&cc=" + email + "&body=" + message;
  //window.open('mailto:larry.t.ratcliff.ctr@socom.mil?subject=' + subject + '&body=' + message);
  window.open(mailtostring);
}

function vpcModal() {
    /// open modal describing VPC
    const modal = document.getElementById("vpcModal");
    modal.style.display = "block";
    setTimeout(function(){ modal.style.opacity = "1"; }, 50);
    
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.opacity = "0";
        setTimeout(function(){ modal.style.display = "none"; }, 500);
    }
}

function vpcCodeModal() {
    /// open modal describing VPC
    const modal = document.getElementById("vpcCodeModal");
    modal.style.display = "block";
    setTimeout(function(){ modal.style.opacity = "1"; }, 50);
    hljs.highlightAll();
    
    var span = document.getElementsByClassName("close")[1];
    span.onclick = function() {
        modal.style.opacity = "0";
        setTimeout(function(){ modal.style.display = "none"; }, 500);
    }
}

function ec2Modal() {
    /// open modal describing EC2
    const modal = document.getElementById("ec2Modal");
    modal.style.display = "block";
    setTimeout(function(){ modal.style.opacity = "1"; }, 50);
    
    var span = document.getElementsByClassName("close")[2];
    span.onclick = function() {
        modal.style.opacity = "0";
        setTimeout(function(){ modal.style.display = "none"; }, 500);
    }
}

window.onload = function() {
  goHome();
}