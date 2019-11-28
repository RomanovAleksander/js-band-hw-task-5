## Homework task 5
* In this homework I improved my [Delivery App](https://github.com/RomanovAleksander/js-band-hw-task-1) using:
    * Travis CI
    * Jest tests
## Using
 ```bash
# Install dependencies
$ npm install

# Run the app in the development mode and open page
$ npm run start

# Build the app for production
$ npm run build

# Run linter
$ npm run eslint

# Create commit
$ npm run commit

# Run tests
$ npm test

# Deploy the project on gh-pages
$ npm run deploy
 ```
## Structure
```
├── dist
│   ├── app.css
│   ├── app.js
│   └── index.html
├── src                    
│   ├── /scripts
│   ├── /styles
│   └── index.js
├── .babelrc
├── .eslintrc
├── .gitignore 
├── index.html
├── jest.config.json
├── package.json
├── package-lock.json
├── README.md
├── webpack.common.js
├── webpack.dev.js
├── webpack.prod.js

dist/
This folder used for deployment

src/
Codebase of the application

.babelrc, .eslintrc, jest.config.json
Configurations and rules

.package.json
Project settings
```  

[App on GitHub Pages](https://romanovaleksander.github.io/js-band-hw-task-5)
