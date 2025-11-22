# Digital Business Card

## Overview

This project contains a set of simple React components that together form a personal profile card. The components include `Info`, `About`, `Interests`, and `Footer`. Each section displays a different part of the user’s profile, including personal details, interests, and social links.

## Components

### Info

Displays the main profile header with a profile image, name, role, portfolio link, and quick-access buttons for email and LinkedIn.
Includes:

* Profile photograph
* Name and professional title
* Portfolio link
* Email and LinkedIn icons with functional links

### About

A short description section that highlights background, interests in design, and progress in frontend development.

### Interests

Lists hobbies and personal interests, such as travel, reading, and problem solving.

### Footer

A footer containing icons that represent social platforms. The section is used for quick navigation to Twitter, Instagram, and GitHub pages.

## File Structure

```
src/
  Info.jsx
  About.jsx
  Interests.jsx
  Footer.jsx

public/
  images/
    rachiavi.jpg
    Mail.png
    linkedin.png
    Twitter.png
    Instagram.png
    GitHub.png
```

## Usage

Import each component into your main application file and render them as needed.

Example in `App.jsx`:

```jsx
import Info from "./Info";
import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer";

export default function App() {
  return (
    <div>
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}
```

## Notes

* All image files must be placed inside the `public/images` folder.
* External links such as LinkedIn should include `https://` to ensure proper navigation.
* These components do not accept props and can be edited directly to update content.