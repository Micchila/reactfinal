My Web App

React-ით შექმნილი ვებ-აპლიკაცია

გამოყენებული ტექნოლოგიები

- React 18.2.0
- React Router DOM 6.20.0
- Axios 1.6.2
- Vite 5.0.8

ფუნქციონალი

- 3 გვერდი (მთავარი, ჩვენ შესახებ, პოსტები)
- React Hooks (useState, useEffect)
- React Router ნავიგაციისთვის
- API ინტეგრაცია (JSONPlaceholder)
- LocalStorage (თემა და ენა)
- SessionStorage (თვლა)
- Dark/Light თემა
- ქართული/ინგლისური ენები
- რესპონსივი დიზაინი
- ანიმაციები
- მოდალური ფანჯრები

გაშვება

```bash
npm install
npm run dev
```

გვერდების სქრინშოთები

პროექტი შეიცავს 3 გვერდს:
- მთავარი გვერდი - კონტეინერი SessionStorage-ით
- ჩვენ შესახებ - API-დან მონაცემების წამოღება
- პოსტები - პოსტების გამოჩენა API-დან

სტრუქტურა

```
src/
  componenets/
    Modal.jsx
    Navbar.jsx
  pages/
    About.jsx
    Home.jsx
    Posts.jsx
  App.jsx
  main.jsx
```

