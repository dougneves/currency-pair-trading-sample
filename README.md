# Currency Pair Trading Sample
A sample page to trade US Dollar to Bitcoin using real time bitfinex price

## Dependecies
To run this project you will need to have installed Node 8+ and npm or yarn.
This project was tested in MacOS High Sierra 10.13.5, with Node v8.11.1 and yarn 1.7.0

## Getting started
After cloning the project, run the follow commands:
```
yarn
yarn start
```
The `yarn` command will install all node modules dependencies, and the `yarn start` command will generate the distribuition bundle and run the `express` server on port 5000.
Then, you can access the project in your browser, on http://localhost:5000

## Features
This project uses [react](https://reactjs.org/) and [react-dom](https://reactjs.org/docs/react-dom.html) as the web frontend engine and [express](http://expressjs.com/) for a minimalist backend. It also uses [axios](https://github.com/axios/axios) for API requests.

### Babel
For babel, it uses the following:
  * presets:
    * [env](https://www.npmjs.com/package/babel-preset-env) - for compiling ES2015+ to ES5
    * [react](https://www.npmjs.com/package/babel-preset-react) - for compiling JSX and other react plugins.
  * plugins:
    * [class-properties](https://www.npmjs.com/package/babel-plugin-transform-class-properties) - allow using es2016 property initializer syntax to make components clear and easer to write
    * [object-rest-spread](https://www.npmjs.com/package/babel-plugin-transform-object-rest-spread) - allow using spread operator (`...` in javascript)

### WebPack
For WebPack, it uses the following:
  * [file-loader](https://www.npmjs.com/package/file-loader) - To copy the HTML file from src to dist.
  * [css-loader](https://www.npmjs.com/package/css-loader), [node-sass](https://www.npmjs.com/package/node-sass), [style-loader](https://www.npmjs.com/package/style-loader) and [sass-loader](https://www.npmjs.com/package/sass-loader) - compile the SCSS files to CSS and add it to the dist bundle.
  
### State Management
This project uses [redux](https://redux.js.org/) and [redux-thunk](https://www.npmjs.com/package/redux-thunk) for managing the global state.

### Test
For React Component tests, this project uses [enzyme](https://github.com/airbnb/enzyme), [mocha](https://mochajs.org/) and [chai](http://www.chaijs.com/)
