const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// // Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let headerOne = document.querySelector("section div h1");
headerOne.textContent = siteContent["cta"]["h1"]

let ctaBtn = document.querySelector("button");
ctaBtn.textContent = siteContent["cta"]["button"]

let topImg = document.getElementById("cta-img");
topImg.setAttribute('src', siteContent["cta"]["img-src"])




const nav = document.querySelectorAll("nav a")

for (let i = 0; i < nav.length; i++) {
  nav[i].textContent = siteContent.nav[`nav-item-${i + 1}`]
}




let feat = document.querySelectorAll(".top-content h4");
console.log(feat)
feat[0].textContent = siteContent["main-content"]["features-h4"];

feat[1].textContent = siteContent["main-content"]["about-h4"]



let featP = document.querySelectorAll(".top-content p");
console.log(featP)

featP[0].textContent = siteContent["main-content"]["features-content"]
featP[1].textContent = siteContent["main-content"]["about-content"]


let middleImg = document.getElementById("middle-img");
console.log(middleImg);
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])



let bottomContent = document.querySelectorAll(".bottom-content h4");
console.log(feat)
bottomContent[0].textContent = siteContent["main-content"]["services-h4"];
bottomContent[1].textContent = siteContent["main-content"]["product-h4"]
bottomContent[2].textContent = siteContent["main-content"]["vision-h4"]

let bottomContentP = document.querySelectorAll(".bottom-content p")
bottomContentP[0].textContent = siteContent["main-content"]["services-content"]
bottomContentP[1].textContent = siteContent["main-content"]["product-content"]
bottomContentP[2].textContent = siteContent["main-content"]["vision-content"]

let contactH4 = document.querySelector(".contact h4")
contactH4.textContent = siteContent["contact"]["contact-h4"]

let contactP = document.querySelectorAll(".contact p")
contactP[0].textContent = siteContent["contact"]["address"]
contactP[1].textContent = siteContent["contact"]["phone"]
contactP[2].textContent = siteContent["contact"]["email"]


let footer = document.querySelector("footer")
footer.textContent = siteContent["footer"]["copyright"]







// let allHeadFour = document.querySelectorAll("h4");

// for (let i = 0; i < allHeaderFour.length; i ++) {
//   allHeadFour[i].textContent = siteContent(["main-content"][`${i}-h4`])
// }
// allHeadFour.textContent = siteContent["main-content"]




//Task 1: Create selectors to point your data into elements

// const body = document.getElementByTagName("body");
// // body.style.height = '100%';
// // body.style.fontFamily = 'Titillium Web';



// const newHeader = document.querySelector('a');
// newHeader.textContent = 'Services'
// newHeader.textContent = 'Product', 'Vision', 'Features', 'About', 'Contact');


// const header = document.getElementByTagName("header");
// header.style.width = '100%';
// header.style.display = 'flex';

// const headerna = document.getElementByTagName("header nav a");
// headerna.style.color = '#b0b0b0';
