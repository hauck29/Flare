# FlareBird (Flickr) - Flask React Solo Project - Anthony Hauck

https://flarebird.herokuapp.com/

<!-- ![splash](https://imgur.com/Kkar9b7) -->

This is the README for the final solo project from App Academy.
The project was inspired by Flickr and build using Javascript,
React.js and Redux for the front end and Python with Flask for the backend.

<img src='https://i.imgur.com/krwukQD.png'>

# Project Installation

1. Clone the project repository from https://github.com/hauck29/Flare.git

2. Rename the folder to whatever you want.

3. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

4. Create a **.env** file based on the example with proper settings for your
   development environment
5. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

6. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

7. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory OR `cd` into the `react-app` folder and run `npm install` to install node package manager dependencies.

***
*IMPORTANT!*
   If you add any python dependencies to your pipfiles, you'll need to regenerate your requirements.txt before deployment.
   You can do this by running:

   ```bash
   pipenv lock -r > requirements.txt
   ```

*ALSO IMPORTANT!*
   psycopg2-binary MUST remain a dev dependency because you can't install it on apline-linux.
   There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.
***



# Running Locally
>To start the server, run `flask run` from the root directory, then run `npm start` from the `react-app` directory. This will allow you to make requests to http://localhost:3000 using any client (browser and Postman).
>To stop the server from listening to requests, press CTRL + c for Windows/Linux or CMD + c for MacOS in the terminal that you started the server (wherever you >ran npm start).

# Running Live
>The live link for this project is located here: https://flarebird.herokuapp.com/

# What You Can Do

>You can log in as a demo user with the `Demo Login` button on the login modal.

>You can log in as a user of your choice, using the credentials you selected when creating an account.

<img src='https://i.imgur.com/4KN6ZVx.png'>

>You can add photos with the `Post` button
<img src='https://i.imgur.com/x7sgfHJ.png'>

>You can edit your photos with the `Pencil and Paper` icon and you can delete your photos with the `Recycle` icon.
<img src='https://i.imgur.com/aLEHJ4i.png'>

>You can add comments with the `Add a comment` button.
<img src='https://i.imgur.com/Y2DWVBz.png'>

>You can edit your comments with the `Pencil and Paper` icon.
<img src='https://i.imgur.com/OEJM2Ug.png'>

>You can delete your comments with the `Recycle` icon.
<img src='https://i.imgur.com/YTiBAbc.png'>

>You can see a list of all users with the `Users` button, below the `Welcome` message.
<img src='https://i.imgur.com/nMNMN1l.png'>

# Technical Details
>This project was done during the weeks of December 13th - 30th, 2021.



# Features
>Sign up/Login with credentials

>Read, add, edit and remove posts from the posts feed (full CRUD)

>Read, add, edit and remove comments from the comments feed of a particular post (full CRUD)


# React Components

>auth - Provided with starter

>NavBar - Provided with starter

>User - Provided with starter

>UserList - Provided with starter

# Front End Routes - Logged In
```
<>
      <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/users" exact={true}>
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
    </>
```

# Back End Routes

>-- Posts

>Read One: ```
    posts_router.post('/<int:id>')
    ```

>Read All: ```
    posts_router.post('/')
    ```

>Create: ```
    posts_router.post('/')
    ```

>Update: ```
    posts_router.post('/')
    ```

>Delete: ```
    posts_router.post('/<int:id>')
    ```

# To-Do List
>Love/Unlove posts and comments

>Laugh/Unlaugh posts and comments

>Continously refine css to look modern

>Search feature
