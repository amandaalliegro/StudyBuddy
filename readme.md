
# StudyBuddy
A React application that allows users to find people depends on their study interests and make a study group 
Study Buddy's a community that bridges the gap between online learning and the power of actual study groups. 

## Setup

Install dependencies with `npm install` in the client folder.

## Running Webpack Development Server

```sh
npm start dev
```

## Screen Shots

Home page
!["Home page"](https://github.com/amandaalliegro/StudyBuddy/blob/production/docs/home_top.png?raw=true)
!["Home page"](https://github.com/amandaalliegro/StudyBuddy/blob/production/docs/home_2nd.png?raw=true)
!["Home page"](https://github.com/amandaalliegro/StudyBuddy/blob/production/docs/home_3rd.png?raw=true)

!["Home page"](https://github.com/amandaalliegro/StudyBuddy/blob/production/docs/home_4th.png?raw=true)

!["Home page"](https://github.com/amandaalliegro/StudyBuddy/blob/production/docs/home_5th.png?raw=true)

!["Home page"](https://github.com/amandaalliegro/StudyBuddy/blob/production/docs/home_6th.png?raw=true)

!["Home page"](https://github.com/amandaalliegro/StudyBuddy/blob/production/docs/home_7th.png?raw=true)

Register page

!["register page"](https://github.com/amandaalliegro/StudyBuddy/blob/production/docs/register.png?raw=true)

Edit profile
!["edit page"](https://github.com/amandaalliegro/StudyBuddy/blob/production/docs/edit_profile.png?raw=true)

Profile view
!["profile page"](https://github.com/amandaalliegro/StudyBuddy/blob/production/docs/profile_2.png?raw=true)

Search Page
!["search page"](https://github.com/amandaalliegro/StudyBuddy/blob/production/docs/search.png?raw=true)

Buddy profile
!["buddy page"](https://github.com/amandaalliegro/StudyBuddy/blob/production/docs/profile_search.png?raw=true)

Message page
!["message page"](https://github.com/amandaalliegro/StudyBuddy/blob/production/docs/message.png?raw=true)



# Study Buddy API

## Setup

Install dependencies with `npm install` from the backend folder.

## Creating The DB

Use the `psql -U development` command to login to the PostgreSQL server with the username `labber` and the password `labber`. This command **MUST** be run in a vagrant terminal, we are using the PostgreSQL installation provided in the vagrant environment.

Create a database with the command `CREATE DATABASE final_project;`.

Our `.env` file contains the necessary PostgreSQL configuration. The `node-postgres` library uses these environment variables by default.

```
DB_HOST = localhost
DB_USER = labber
DB_PASS = labber
DB_NAME = final_project
DB_PORT = 5432
```

## Seeding

Run a the development server with `npm run dev ` in the Host environment. 

Both of these achieve the same result.

- Make a `GET` request to `/api/debug/reset` with `curl http://localhost:3005/api/debug/reset`.
- Use the browser to navigate to `http://localhost:3005/api/debug/reset`.


## Run The Server

Running the server normally
```sh
npm run dev
```

## Api

### Users

`GET /api/users`

Response

```json
[
{
"id": 1,
"full_name": "Joe Levesque",
"password": "$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.",
"student": true,
"mentor": false,
"location": "edmonton",
"language": "english",
"gender": "male",
"email": "socialconsequences@gmail.com",
"silent_buddy": true,
"description": "i love to study webDevelpment",
"subject": "web Development",
"img": "https://avatars2.githubusercontent.com/u/68923553?s=460&u=3c5c9c947f2962f7ad13a6f22ad5c63461b93318&v=4"
},
{
"id": 3,
"full_name": "Amanda Arnaut",
"password": "$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.",
"student": true,
"mentor": true,
"location": "Toronto",
"language": "english",
"gender": "female",
"email": "amanda.m.arnaut@gmail.com",
"silent_buddy": false,
"description": "looking for people to study with me 3 hours a week",
"subject": "science",
"img": "https://avatars2.githubusercontent.com/u/68923553?s=460&u=3c5c9c947f2962f7ad13a6f22ad5c63461b93318&v=4"
},
{
"id": 2,
"full_name": "Leen Soufan",
"password": "$2b$10$.wfhdW8IUQ12YMleSkiebu8sY0daxC6I4GDrEWzGIWP4JBDiySMYO",
"student": false,
"mentor": true,
"location": "Dubai",
"language": "Arabic",
"gender": "female",
"email": "affaf-rai@hotmail.com",
"silent_buddy": false,
"description": "i can teach anyone how to code",
"subject": "coding",
"img": "https://avatars2.githubusercontent.com/u/68923553?s=460&u=3c5c9c947f2962f7ad13a6f22ad5c63461b93318&v=4"
}
]
```
`GET /api/users/id`

Response

```json

{
"user": {
"id": 1,
"full_name": "Joe Levesque",
"password": "$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.",
"student": true,
"mentor": false,
"location": "edmonton",
"language": "english",
"gender": "male",
"email": "socialconsequences@gmail.com",
"silent_buddy": true,
"description": "i love to study webDevelpment",
"subject": "web Development",
"img": "https://avatars2.githubusercontent.com/u/68923553?s=460&u=3c5c9c947f2962f7ad13a6f22ad5c63461b93318&v=4"
}
}


