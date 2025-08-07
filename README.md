# Frontend Mentor - Interactive Card Details Form

A responsive card form interface challenge from Frontend Mentor. Users can input credit card details and see the changes reflected live on a virtual card. This project emphasizes form validation, responsive design, and  updates via JavaScript.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)

---

## Overview

### The Challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when any input field is empty
- The card number, expiry date, or CVC fields are in the wrong format
- View a responsive layout for mobile and desktop devices
- See hover, active, and focus states for all interactive elements

### Screenshot

![Screenshot of Project](./![alt text](image.png))
![Screenshot of project](![alt text](image-1.png))


### Links

- 🔗 **Solution**: [View on Frontend Mentor]()
- 🌐 **Live Site**: [View Live]()

---

## My Process

### Built With

- HTML5
- CSS (Custom Properties, Flexbox)
- JavaScript (Vanilla)
- Mobile-first workflow
- Responsive layout for mobile & desktop

### What I Learned

While working on this project, I learned:

- How to dynamically update content in real-time using JavaScript
- Proper input validation for credit card forms
- Improved understanding of responsive layout techniques using Flexbox and media queries
- Better organization and readability in styling

- ### Continued Development
In future projects, i want to

- Improve form accessibility (ARIA, screen reader support)
- Explore real-time formatting for input fields (e.g., auto-spacing card numbers)
- Add localStorage support for saved card data

### Useful Resources 
-Frontend Mentor Challenge Page

### Author
- Name Zainab Oyindamola AbdulAkeem
- Frontend Mentor @Xeinny07
- Twitter @Xeinny_07

```js
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (isFormValid()) {
    showThankYouMessage();
  } else {
    showErrors();
  }
});
