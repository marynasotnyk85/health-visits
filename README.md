HealthVisits — Accessibility-First Angular Application

HealthVisits is a modern Angular application built as a reference project for accessibility-first frontend development in the healthcare domain.

The goal of this project is not to demonstrate business complexity, but to show how to design and implement inclusive, secure, and high-quality user interfaces from the very beginning, using Angular, Angular Material, and the Angular CDK.

This repository is intended as a learning resource and best-practice example for Frontend Developers who want to move from mid-level to senior-level engineering, with a strong focus on accessibility (a11y) and UI robustness.

🎯 Project purpose

Healthcare applications require:

clarity

predictability

keyboard support

screen-reader compatibility

safe handling of user input

HealthVisits demonstrates how to meet these requirements by design, not as an afterthought.

The project shows how accessibility, UX, and security work together, rather than competing with each other.

✨ Key features

Medical visits list with reactive search and live result announcements

A11y-first visit creation form with:

proper labels and hints

accessible validation messages

automatic focus on the first invalid field

Keyboard-only navigation across the entire application

Skip-to-content support and semantic page landmarks

Accessible dialogs with correct focus trapping and restoration

Screen-reader announcements using Angular CDK LiveAnnouncer

Plain-text notes handling to prevent XSS vulnerabilities

Clean, reactive state handling using RxJS

♿ Accessibility by design

Accessibility is treated as a core architectural concern, not a checklist.

The application follows WCAG (POUR) principles:

Perceivable – clear structure, readable content, visible focus

Operable – full keyboard support, no mouse-only interactions

Understandable – predictable navigation and validation feedback

Robust – compatible with assistive technologies

Accessibility techniques demonstrated include:

semantic HTML and landmarks

aria-labelledby and aria-describedby where appropriate

focus management for routes, dialogs, and forms

screen-reader announcements for dynamic UI changes

🔐 Security considerations

HealthVisits applies secure frontend patterns by default:

No rendering of untrusted HTML

No use of innerHTML or bypassSecurityTrustHtml

User input stored and rendered as plain text (Angular-escaped)

Clear separation between data and presentation

Accessibility and security are treated as complementary disciplines.

🛠 Tech stack

Angular 18 (standalone architecture)

Angular Material

Angular CDK (A11y, FocusTrap, LiveAnnouncer)

RxJS

TypeScript

SCSS

🧠 Who this project is for

Frontend Developers learning accessibility-first UI

Angular developers transitioning from mid to senior level

Engineers interested in a11y, UX, and frontend security

Teams looking for a clean Angular reference architecture

🚀 Development server

Run the application locally:

ng serve


Navigate to:

http://localhost:4200/


The app reloads automatically on file changes.

If port 4200 is busy:

🏗 Build
ng build



📌 Philosophy

Accessibility is not a limitation of design.
It is a signal of engineering maturity and respect for users.

HealthVisits demonstrates that accessible applications can be elegant, modern, and enjoyable to use — when accessibility is part of the design process from day one.