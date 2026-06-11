# User Dashboard

A single-page React application for creating and managing a user profile. Built with React, React Router, Formik, and Yup. Deployed on Netlify.

## What it does

- **Create profile** — First-time visitors fill in their name, email, and an optional profile picture.
- **Persist session** — Profile data is stored in `localStorage`. Returning visitors land directly on their profile page without seeing the create form again.
- **View profile** — Clean dashboard card showing avatar, name, and email.
- **Edit profile** — Update any field; changes are saved back to `localStorage` immediately.

## Routes

| Path | Description |
|------|-------------|
| `/` | Create profile (redirects to `/display` if profile already exists) |
| `/display` | View profile |
| `/update` | Edit profile |

## Running locally

```bash
cd dashboard
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

## Building for production

```bash
npm run build
```

Output goes to `dist/`. The `public/_redirects` file and `netlify.toml` ensure Netlify serves `index.html` for all routes so client-side routing works on hard refresh and direct URL access.

## Tech stack

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [React Router v6](https://reactrouter.com/) — client-side routing
- [Formik](https://formik.org/) + [Yup](https://github.com/jquense/yup) — form state and validation
- [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) — profile persistence

## Project structure

```
dashboard/
├── public/
│   └── _redirects          # Netlify SPA fallback
├── netlify.toml            # Netlify redirect config (belt-and-suspenders)
└── src/
    ├── components/
    │   ├── Banner.jsx
    │   ├── Profile.jsx       # Profile display
    │   ├── ProfileForm.jsx   # Shared create/edit form
    │   └── UpdateForm.jsx
    ├── context/
    │   └── user-context.js
    ├── pages/
    │   ├── CreateAccount.jsx
    │   ├── DisplayAccount.jsx
    │   └── UpdateAccount.jsx
    ├── schemas/
    │   └── profile-schema.js  # Yup validation
    ├── constants.js
    └── App.jsx               # Router + localStorage bootstrap
```
