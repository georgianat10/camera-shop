# Camera-Shop

### E-Commerce Platform that aims to design an online camera gear store. 

## Available Scripts
### Run in the root directory:
```
npm run backend
```
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

## Prerequisites
If you want to test this project you have to create your MongoDB database. The simplest way is through Mongo Atlas.

Step 1: Go to MongoDB website, create an account or try it for free and after you logged in create a cluster.

Step 2: add your laptop IP (in the left side of the screen you have network access) and an admin account (in the left side of the screen you have database access).

Step 3: root_directory_project -> config there create a file named dev.js

Step 4: In this file add:
```
module.exports = {
    mongoURI: 'cluster_ulr'
}
```

``` cluster_ulr ``` can be obtained by going to your cluster -> connet -> connect your application 

Replace <password> and <username> with the data from the account you created in the step 2, and ensure all special characters are URL encoded.

## Initial commands
When you first open the project you need to tap ``` npm install ``` in the root directory of the project, server directory and client directory.


