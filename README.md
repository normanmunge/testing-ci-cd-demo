# Project Details

This is a demo project based on React. The goals of the demo are:

1. Set up a CI/CD Pipeline using Github Actions and <a href="https://heroku.com" target="_blank">Heroku</a> Cloud Platform
2. Set up a unit test using the <a href="https://testing-library.com/docs/react-testing-library/intro/" target="_blank">React Testing Library</a> and <a href="https://jestjs.io/" target="_blank">Jest</a> as the testing tool.


## CI/CD Workflows

This is a demo project highlighting how to setup a Github Action Pipeline for automated continuouse delivery and deployment. The pipeline is set up under the .github.workflows folder and has test, build and deployment workflows. The app is deployed to Heroku as the chose cloud platform. Make sure to set up your heroku key credentials on your Github Repository settings.

The pipeline workflow tests the main branch, with the build jobs run on an Ubuntu machine. The project is based on React and the pipeline runs against Node Version 14 and 12. The pipeline installs the specified node versions and all the project dependecies, connects and deploys the app to Heroku and performs a lighthouse performance test on the specified urls.

Prerequisities:

1. You already have a Heroku account
2. You have set up the Heroku API KEY and APP NAME in your repository settings

## React Testing

Testing will mostly cover unit testing but other tests to consider are integration tests and end to end tests. The repo is meant to help you get started with testing React apps.

Tools used for testing are:

1. Jest - Test runner and assertion library to execute tests and summarize the results in the terminal.
   To install jest:
   npm install --save-dev jest (NPM Pakcage Manager)
   yarn install --save-dev jest (Yarn Package Manager)
2. React Testing Library.
   Since this project was set up using React's creat-react-app. We're all set for writing tests otherwise, you need to install the library:

   npm install --save-dev @testing-library/react

### Resources that might be helpful

1. To test components that are connected to a Redux store, mock the store using <a href="https://github.com/reduxjs/redux-mock-store" target="_blank">Redux Mock Store</a> library
2. To mock an API response, the project uses <a href="https://jsonplaceholder.typicode.com/" target="_blank">JSON Placeholder</a> to mock a free and fake API for testing and prototyping.
3. To simulate user interactions, React Testing Library provides API in a package called <a href="https://github.com/testing-library/user-event#clickelement-eventinit-options" target="_blank">User Event</a>
4. For E2E Testing - Consider <a href="https://pptr.dev/" target="_blank">Puppeteer</a> (headless version of the Google Chrome browser), <a href="https://www.selenium.dev/" target="_blank">Selenium</a> or <a href="https://testcafe.io/" target="_blank">Testcafe</a>

### Notable mentions/resources:

https://academind.com/tutorials/testing-react-apps

# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
