// i use local reviews data
const reviews = [
  {
    id: 1,
    customer: "Ayleen Z.",
    service: "Clothes Smell So Good!",
    img:
      "assets/images/detergent-icon.png",
    review:
      "Ayesha takes care of our baby's clothes as well as ours with much care. Our clothes always comes back super clean and smelling good. Also, her folding is immaculate. Communication is always great and she is flexible if need be. Ayesha definitely makes our lives easier by taking the load of our backs. Literally!",
  },
   {
    id: 2,
    customer: "Devyn W.",
    service: "Spotless & Tidy Folding",
    img:
      "assets/images/folded-clothes.png",
    review:
      "My husband and I have been using Ayesha’s services for about a year now since we moved to Harlem and we couldn’t be happier! She is so easy to work with and very communicative. Our clothes always come back spotless and carefully folded. She’s a staple in our household now and I couldn’t be more grateful for her hard work. If you’re on the fence, this is your sign to hire Ayesha! You won’t regret it!!",
  },
  {
    id: 3,
    customer: "Louise C.",
    service: "Above & Beyond",
    img:
      "assets/images/pickupdelivery.png",
    review:
      "Ayesha kept me informed every step of the process (from pick up to drop-off coordination). The laundry was returned in the time-window promised. My clothes were clean, smelled amazing and were professionally folded. The evening of the pick-up it was raining and she went above and beyond taking the time to protect my laundry bags from the rain by covering them in plastic bags. She is very personable and a pleasure to work with!",
  },
  {
    id: 4,
    customer: "Jose A.",
    service: "Helps my Busy Life!",
    img:
      "assets/images/clock.png",
    review:
      "You don’t understand how much your service helps me between work and my DJ career. THANK YOU SO MUCH, Military Mama!",
  },
];

// here we'll select items
const img = document.getElementById('person-img');
const customer = document.getElementById('customer');
const service = document.getElementById('service');
const review = document.getElementById('review');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// now we set the starting item and load initial item
let currentItem = 0;

window.addEventListener('DOMContentLoaded', function() {
showPerson(currentItem);
});

// i wrote a function witch shows the current person, 

function showPerson(person){
  const item = reviews[person];
  img.src = item.img;
  customer.textContent = item.customer;
  service.textContent = item.service;
  review.textContent = item.review;
}

//show next person
nextBtn.addEventListener('click', function() {
 currentItem++;
 if(currentItem>reviews.length-1){
   currentItem = 0;
 }
 showPerson(currentItem);
});

//show previous person
prevBtn.addEventListener('click', function() {
 currentItem--;
 if(currentItem<0){
   currentItem = reviews.length -1;
 }
 showPerson(currentItem);
});

// auto-rotate reviews every 5 seconds
setInterval(() => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
}, 5000);

//show random person

