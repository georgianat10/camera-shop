# Camera-Shop

### E-Commerce Platform that aims to design an online camera gear store. 

This is a updated version of the previous camera-shop, that I'm currently working on it.

Right now I'm rebuilding the back and one of my intentions is to make different versions of this website based on he type of user.

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
When you first open the project you need to tap ``` npm install ``` in the root directory of the project.

## Available Scripts
### Run in the root directory:
```
npm run backend
```
At this stage the project can be tested through POSTMAN or any other API.


Buna seara. Imi cer scuze pentru intarziere, insa am avut niste predari de proiecte si testari zilele aste. Acum a citit articolul trimis de dumneavoastra. Imi place zona asta, mi-a placut in mod special partea de hidden voice commands (dolphin attach si cocaine noodles).
