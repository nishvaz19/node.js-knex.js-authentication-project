# node.js knex.js authentication project
Simple backend api authentication project using NodeJs and knexJs

#create free postgres or mysql account on web https://dash.filess.io

#ensure knexfile.js has the correct connection settings
npx knex migrate:latest
npx knex seed:run

#run the application

node index.js
#...listening at port 6000

#create user with pas$ through application so that bcrypt passw are saved in DB
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"username":"xyz","password":"xyz_password"}' \
  http://localhost:6000/users

#authenticate user with pas$
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"username":"xyz","password":"xyz_password"}' \
  http://localhost:6000/login

#use jwt token to call someRoute
token=`curl --header "Content-Type: application/json"   --request POST   --data '{"username":"xyz","password":"xyz_password"}'   http://localhost:6000/login | grep token | cut -d, -f1 | cut -d \" -f4`

echo $token

curl -H "Accept: application/json" --header "Content-Type: application/json"    -H "Authorization: Bearer $token" --request GET http://localhost:6000/someRoute
