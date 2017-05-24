# property-listings-api
RESTful API with Node and express for managing rental listings

# Build the app in a docker container

`$ npm run build`

The app is now running on http://localhost:8080
Print the output of your app:

Print app output

`$ docker logs <container id>`

If you need to go inside the container you can use the exec command:

`$ docker exec -it <container id> /bin/bash`

# Test
To test your app, get the port of your app that Docker mapped:

`$ docker ps`

Example

    `ID            IMAGE                                COMMAND    ...   PORTS`
    `ecce33b30ebf  <your username>/node-web-app:latest  npm start  ...   8080->3000`
In the example above, Docker mapped the 3000 port inside of the container to the port 8080 on your machine.

Now you can call your app using curl (install if needed via: sudo apt-get install curl):

`$ curl -i localhost:8080`
