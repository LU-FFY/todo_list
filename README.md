# 📝 To-Do List Web App

Welcome to my **To-Do List** project!

This app was originally built using **React** during the **IBM Course: *Developing Front-End Apps with React***. It served as a foundational lab exercise where I learned core concepts of React, such as components, props, and state.

After completing the course lab version, I decided to enhance the app by adding several practical features and improving the UI using modern tools like **Vite**, while maintaining React as the core framework.

👉 **Live Demo:** [https://lu-ffy.github.io/todo_list/](https://lu-ffy.github.io/todo_list/)

---

## 🌱 Project Structure & Branches

- **`main`**  
  The original React-based template provided in the IBM course lab.

- **`feature/completion-toggle`**  
  Introduced a feature to mark individual tasks as completed using a `done` flag.

- **`gh-pages`**  
  Deployment branch for GitHub Pages — powering the live version.

---

## ✨ Features Added (Beyond the Course Lab)

Here’s a breakdown of the enhancements I added:

1. **Task Object Refactor**  
   Each task now includes both `text` and `done` properties for better state management.

2. **Initial State Control**  
   All new tasks are initialized with `done: false`.

3. **Task Completion Feature**  
   Each task now has its own **Complete** button that toggles its completion status.

4. **Dynamic Button Labels**  
   The button text switches between "completed" and "not completed" based on the task's state.

5. **Targeted Strikethrough Styling**  
   Only the task text (`<p>`) is struck through upon completion — keeping surrounding buttons clean.

6. **Improved Layout with Flexbox**  
   `.todo_inside_list` was redesigned using **Flexbox** to ensure clean alignment and responsive behavior.

7. **Text Growth & Wrapping**  
   Task text now wraps and grows gracefully based on content length.

8. **Refined Heading & Button Layout**  
   Section headings and their delete buttons are now aligned and responsive with no overlap.

9. **Responsive Heading Text**  
   Long heading titles now wrap properly without affecting button alignment.

10. **(Optional) Button Styling Based on State**  
    Visual differentiation for completed vs. not-completed task buttons.

---

## 🛠️ Technologies Used

- **React** (Core framework)
- **Vite** (For fast development and builds)
- **JavaScript (ES6+)**
- **HTML5 & CSS3**
- **Git & GitHub** (for version control and collaboration)
- **GitHub Pages** (for deployment)

---

## 🚀 How to Run Locally

```bash
git clone https://github.com/LU-FFY/todo_list.git
cd todo_list
npm install
npm run dev
