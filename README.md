# postman-api
git clone https://github.com/rohan-git-repo/postman-api.git

cd postman-api

npm i express mongoose cors

node server

**API Endpoints**

1.Create item
POST localhost:3600/food
Request Body:
json
**{
  	"name":"Burger",
    "catagory":"Fast Food",
    "nutrition":"Proteins, Carbohydrates",
    "ingrediants":"Bread, Pork",
    "manufacturer":"Mc.Donalds"
}

2.Show items
GET localhost:3600/getdata

3.Update item
PUT localhost:3600/update
json
**{
    "ingrediants":"Bread, Cheese"
}


