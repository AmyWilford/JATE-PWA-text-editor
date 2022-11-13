# JATE-PWA-text-editor

## Table of Contents:

- [Description](#description)
- [Technologies-Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [License](#license)
- [Credits](#credits)

## Description:

This is not just another text editor. J.A.T.E is a progressive web application (PWA), and as such is fast, flexible, and can be used both online and offline. It can easily be installed to a user device, which means it can perform like a native application. 

This project makes use of IndexedDB do create a local database on a user device, and makes use of webpack to bundle distributed client files and register a service worker to manage use. 

## Technologies Used:

- HTML
- CSS
- Node.js
- Express.js
- Webpack (to bundle files)
- Webpack PWA Manifest (to create manifest.json)
- Workbox-webpack (to create and register service worker)
- NPM Concurrently (run )
- NPM IDB (wrapper for indexedDB)
- Babel (transpiler)
- CSS Loader (load CSS styles within bundle)

## Installation:

This application be used directly from the deployed site linked below. To install the application on your device - click the install button on the top left corner of the page. You will see a pop up appear to confirm your installation.

If you are want to run this code on your device - after you have cloned the files to a local repository, run the following in your terminal in the root folder of the project. Check to make sure node_modules and package.lock.json file have been added to the root, server, and client folders of the project.

```
npm install
```
Once all package dependencies have been downloaded, in your terminal, run:
```
npm run build
```
This will create the webpackage bundle - and will create a dist folder in your project. 

```
npm start
```
Will launch the application server. Once live, navigate to index.html (within the newly built dist folder) and open the file with a live server. 

You will now see the application running and can start playing with your new editor.

## Usage:

This application be used directly from the deployed site (via Heroku) linked below. 

Once opened, you have the option to install the application on your device so it can be accessed without a broswer. 

From J.A.T.E's browser, or from the installed application window, you can enter any text you like within the editor. Don't worry if you have to exit the browser or about losing your internet connection since anything you add will be saved for future reference. To remove anything from your text editr, simply delete it.  

If you are interested in seeing how the site works - open the application in your broswer and navigate to Chrome DevTools. In the top header, select Application. From here - you will be able to see:
- The Manifest.json file 
- A registered service work
- Storage > IndexedDB to see store information on the indexedDB (added using npm idb)

## Deployment:

[View the deployed site on Heroku](https://cryptic-dawn-25124.herokuapp.com/)

## License:

N/A

## Credits:

Starter code provided by bootcamp course provider

