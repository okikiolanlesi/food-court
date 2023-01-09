# Instructions on how to run code

* Download repo to your local machine
* Create a .env file and fill in the appropriate values using the .env.example file
* run 'npm i' in your terminal
* Before you do anything else run 'node setup/setup' in your terminal to seed your database with some dummy data
* You can now run 'npm run start:dev' in your terminal to startup your server 


You can test the endpoints using the postman documentation [here](https://documenter.getpostman.com/view/22751768/2s8Z76uU8e)

The live api link which was hosted on render can be found [here](https://food-court-eswk.onrender.com),
While testing the live link you can use the below details to login as an admin
`{
    "email": "admin@gmail.com",
    "password": "password"
}`

You can as well login as a regular user(to test access restriction) with the the details below 
`{
     "email": "user@gmail.com",
    "password": "password"   
}` 

#### Please I would like to kindly inform you that my app was built using express js and mongodb. Reason being i received the email late and I'm not familiar with the nestjs framework, kindly bare with me.