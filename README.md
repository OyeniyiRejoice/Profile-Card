# Profile Card — Frontend Wizards Stage 1

This is my submission for the **Frontend Wizards Stage 1 Task**, continuing from Stage 0.  
It includes a **semantic, accessible, and responsive multi-page web app** built with **HTML, CSS, and vanilla JavaScript**.

---

##  Features

###  General
- Semantic HTML5 elements (`main`, `article`, `figure`, `section`, `nav`)
- Fully responsive layout using Flexbox and media queries
- Accessible structure with labels, `aria` attributes, and focus styles
- Consistent design system and clean CSS
- Hosted on **GitHub Pages**

---

###  Home Page (Profile Card)
- Personal profile with image, bio, hobbies, and dislikes  
- Auto-updating time using JavaScript  
- Social links (Twitter, LinkedIn, GitHub) with focus states  
- Profile image styled with circular border and shadow

---

###  About Me Page
- Reflective sections with proper data-testids:
  - Bio — `test-about-bio`
  - Goals — `test-about-goals`
  - Confidence areas — `test-about-confidence`
  - Note to future self — `test-about-future-note`
  - Extra thoughts — `test-about-extra`
- Semantic structure with `<main>` and `<section>` elements

---

###  Contact Us Page
- Contact form with the following inputs:
  - Full Name — `test-contact-name`
  - Email — `test-contact-email`
  - Subject — `test-contact-subject`
  - Message — `test-contact-message`
- Client-side form validation:
  - All fields required
  - Valid email format
  - Message minimum 10 characters
- Error and success messages handled dynamically  
- Accessible via keyboard (labels, `aria-describedby`, focus states)

---

##  Folder Structure

Profile-Card/
│
├── img/
│ └── IMG-20250127-WA0003.jpg
│
├── about.html
├── contact.html
├── contact.js
├── index.html
├── script.js
├── style.css
└── README.md


---

## How to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/OyeniyiRejoice/Profile-Card.git

2. Navigate into the project
   cd Profile-Card


3. Open in your editor
   code .

4.  Run in your browser

Open index.html manually, or

Use Live Server in VS Code.

Live Demo

🔗 GitHub Pages: https://oyeniyirejoice.github.io/Profile-Card/

💻 Repository: https://github.com/OyeniyiRejoice/Profile-Card


Author

Oyeniyi Adenike Rejoice
 oyeniyi229@gmail.com

 LinkedIn[https://www.linkedin.com/in/oyeniyi-adenike-9bb403276/]

 Submission Info

Built as part of Frontend Wizards — Stage 1 Task
 Deadline: 22 October 2025 | 11:59 pm WAT