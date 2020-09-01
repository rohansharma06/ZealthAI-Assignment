# Zealth-AI Assignment

> A login page for doctor created using React and Material.
> To watch UI (API will not work on https): [click here...](https://rohansharma06.github.io/ZealthAI-Assignment/)

## Functionality

- On every login request [API](http://zjrrl.mocklab.io/login) is use which send json data to validate user.
- User can log using specific email and password (email: admin@admin.com, password: admin).
- For other request it will give error.
- Handle invalid input error.
- On successful login user will redirect to [google](https://google.com).

## Preview

![home][/src/assets/image/login.jpg]

## Folder Structure

.

    ├── public
        ├── index.html
        ├── images
    ├── src
        ├── Action
            ├── (contains all actions type and action creators)
        ├── Assets
            ├── (contains images and js file)
        ├── Component
            ├── (contains all react component used in website)
        ├── Helpers
            ├── (contains different URLs for API call and other userfull data)
        ├── Reducer
            ├── (contains all reducers)
        ├── Store
            ├── (config react store to keep data)
        ├── index.css
        ├── index.js
    ├── index.js
    ├── package.json
    ├── package-lock.json
    ├── .gitignore

.

## Getting Started

1. Clone the project : [clone](https://github.com/rohansharma06/ZealthAI-Assignment.git).
2. Go to folder.
3. Run following command `npm install`.
4. Run command: `npm start`
5. Go to https://localhost/3000 to view it in the browser.
6. Happy Learning ❤️
