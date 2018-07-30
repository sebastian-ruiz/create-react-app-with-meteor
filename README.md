# [Create React App](https://github.com/facebookincubator/create-react-app) with [Meteor](https://github.com/meteor/meteor) 

This is a [create-react-app (Create React App)](https://github.com/facebookincubator/create-react-app) with a meteor server using using [meteor-client-builder](https://github.com/Urigo/meteor-client-bundler).
This is a fork of [ReactNativeMeteorBoilerplate](https://github.com/DAB0mB/ReactNativeMeteorBoilerplate).

### Quick Start

Install all the dependencies:

    $ npm install

Bundle Meteor client:

    $ npm run meteor-bundle-client

Start the Meteor server:

    $ npm run api

Start the create-react-app:

    $ npm start

The meteor server runs on port `3000`, and the create-react-app runs on port `3002`.

### Why use this over using react directly with meteor

We can now build the client and host it anywhere:
    
    $ npm run build