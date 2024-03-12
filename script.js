let product = {
  "name" : "Dart Vader" , 
  "message": "ok",
"result": "match" ,
  "properties": "home",
    "height": "96",
    "mass": "32",
    "hair_color": "n/a",
    "skin_color": "white, blue",
    "eye_color": "red",
    "birth_year": "33BBY",
    "gender": "n/a",
    "created": "2024-03-11T08:38:48.932Z",
    "edited": "2024-03-11T08:38:48.932Z",
    "price" : "200000" , 
    "homeworld": "https://www.swapi.tech/api/planets/8",
    "url": "https://www.swapi.tech/api/people/3" ,
    "description" : " I'm is a main antagonist characters on star wars my weapon is a red lightsaber I always wear a black mask and black suit" 
  }

let app = new Vue ({
  el: "#app" ,
 data : product
})