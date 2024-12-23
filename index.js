const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

let cors = require('cors');

app.use(cors());

app.use(express.static('static'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

let students= [
  {"fname": "sachin", "lname": "s", "college": "bms"},
  {"fname": "sathi", "lname": "s", "college": "bms"}
]

app.get("/students", (req, res)=>{
  res.json(students);
})

app.get("/products/:id", (req, res)=>{
  let id= req.params.id;
  res.send("Product ID is "+id);
})

app.get("/greet/:name", (req, res)=>{ 
  const name = req.params.name;
  res.send("Hello, "+name+"!");
})

let hotels = [
  {
    id: 1,
    name: "Romantic Getaway",
    category: "Resort",
    rating: 2.2,
    reviews: 4572,
    amenity: "Spa",
    price: 10464,
    country: "South Africa",
  },
  {
    id: 2,
    name: "Wellness Retreat",
    category: "Family",
    rating: 2.8,
    reviews: 2114,
    amenity: "Pool",
    price: 13243,
    country: "Australia",
  },
  {
    id: 3,
    name: "Romantic Getaway",
    category: "Luxury",
    rating: 3.1,
    reviews: 4359,
    amenity: "Restaurant",
    price: 3299,
    country: "Germany",
  },
  {
    id: 4,
    name: "Luxury Suites",
    category: "Family",
    rating: 4.9,
    reviews: 3651,
    amenity: "Bar",
    price: 16359,
    country: "United Kingdom",
  },
  {
    id: 5,
    name: "Luxury Suites",
    category: "Budget",
    rating: 4.6,
    reviews: 688,
    amenity: "Gym",
    price: 15570,
    country: "France",
  },
  {
    id: 6,
    name: "Cultural Heritage Hotel",
    category: "Boutique",
    rating: 2.0,
    reviews: 219,
    amenity: "Pet Friendly",
    price: 2321,
    country: "USA",
  },
  {
    id: 7,
    name: "Business Hotel",
    category: "Mid-Range",
    rating: 3.7,
    reviews: 1040,
    amenity: "Free WiFi",
    price: 4523,
    country: "India",
  },
  {
    id: 8,
    name: "Historic Plaza Hotel",
    category: "Mid-Range",
    rating: 3.5,
    reviews: 300,
    amenity: "Parking",
    price: 8543,
    country: "Australia",
  },
  {
    id: 9,
    name: "Adventure Resort",
    category: "Boutique",
    rating: 4.2,
    reviews: 1222,
    amenity: "Gym",
    price: 11894,
    country: "South Africa",
  },
  {
    id: 10,
    name: "Mountain Retreat",
    category: "Resort",
    rating: 4.8,
    reviews: 4015,
    amenity: "Spa",
    price: 17560,
    country: "India",
  },
  {
    id: 11,
    name: "Eco Friendly Lodge",
    category: "Family",
    rating: 2.4,
    reviews: 528,
    amenity: "Restaurant",
    price: 3124,
    country: "Germany",
  },
  {
    id: 12,
    name: "Urban Boutique Hotel",
    category: "Mid-Range",
    rating: 3.9,
    reviews: 1401,
    amenity: "Free WiFi",
    price: 9245,
    country: "France",
  },
  {
    id: 13,
    name: "Beachfront Hotel",
    category: "Luxury",
    rating: 4.5,
    reviews: 489,
    amenity: "Pool",
    price: 14567,
    country: "USA",
  },
  {
    id: 14,
    name: "Ocean View Resort",
    category: "Budget",
    rating: 3.3,
    reviews: 783,
    amenity: "Spa",
    price: 7432,
    country: "United Kingdom",
  },
  {
    id: 15,
    name: "City Central Hotel",
    category: "Boutique",
    rating: 4.1,
    reviews: 2133,
    amenity: "Bar",
    price: 9823,
    country: "Australia",
  },
  {
    id: 16,
    name: "Casino Resort",
    category: "Luxury",
    rating: 4.9,
    reviews: 5000,
    amenity: "Bar",
    price: 18900,
    country: "South Africa",
  },
  {
    id: 17,
    name: "Golf Resort",
    category: "Mid-Range",
    rating: 4.7,
    reviews: 789,
    amenity: "Gym",
    price: 16340,
    country: "France",
  },
  {
    id: 18,
    name: "Family Fun Hotel",
    category: "Family",
    rating: 3.2,
    reviews: 1322,
    amenity: "Pool",
    price: 7500,
    country: "Germany",
  },
  {
    id: 19,
    name: "Spa and Relaxation Hotel",
    category: "Luxury",
    rating: 4.4,
    reviews: 2314,
    amenity: "Spa",
    price: 14900,
    country: "United Kingdom",
  },
  {
    id: 20,
    name: "Country House Hotel",
    category: "Budget",
    rating: 3.6,
    reviews: 1876,
    amenity: "Parking",
    price: 6234,
    country: "Australia",
  },
];

function pricingSortInAsc(hotelObj1, hotelObj2){
return hotelObj1.price-hotelObj2.price;
}

function pricingSortInDsc(hotelObj1, hotelObj2){
  return hotelObj2.price-hotelObj1.price;
  }

app.get("/hotels/sort/pricing", (req, res)=>{ 
  let pricingSortType = req.query.pricing;
  let hotelCopy = hotels.slice();
  if(pricingSortType==="low-to-high") {
    hotelCopy = hotelCopy.sort(pricingSortInAsc);
  }
  else if(pricingSortType==="high-to-low"){
    hotelCopy = hotelCopy.sort(pricingSortInDsc);
  }
  res.send(hotelCopy);
})

function ratingSortInAsc(hotelObj1, hotelObj2){
  return hotelObj1.rating-hotelObj2.rating;
  }
  
  function ratingSortInDsc(hotelObj1, hotelObj2){
    return hotelObj2.rating-hotelObj1.rating;
    }
  
  app.get("/hotels/sort/rating", (req, res)=>{ 
    let ratingSortType = req.query.rating;
    let hotelCopy = hotels.slice();
    if(ratingSortType==="low-to-high") {
      hotelCopy = hotelCopy.sort(ratingSortInAsc);
    }
    else if(ratingSortType==="high-to-low"){
      hotelCopy = hotelCopy.sort(ratingSortInDsc);
    }
    res.send(hotelCopy);
  })

  function reviewsSortInAsc(hotelObj1, hotelObj2){
    return hotelObj1.reviews-hotelObj2.reviews;
    }
    
    function reviewsSortInDsc(hotelObj1, hotelObj2){
      return hotelObj2.reviews-hotelObj1.reviews;
      }
    
    app.get("/hotels/sort/reviews", (req, res)=>{ 
      let reviewsSortType = req.query.reviews;
      let hotelCopy = hotels.slice();
      if(reviewsSortType==="least-to-most") {
        hotelCopy = hotelCopy.sort(reviewsSortInAsc);
      }
      else if(reviewsSortType==="most-to-least"){
        hotelCopy = hotelCopy.sort(reviewsSortInDsc);
      }
      res.send(hotelCopy);
    })

    function filterByAmenity(hotelObj, amenity){
      return hotelObj.amenity=amenity;
      }
    
    app.get("/hotels/filter/amenity", (req, res)=>{ 
      let amenity = req.query.amenity;
      let result = hotels.filter(hotelObj=>filterByAmenity(hotelObj, amenity));
      res.send(result);
    })

    function filterByCountry(hotelObj, country){
      return hotelObj.country=country;
      }
    
    app.get("/hotels/filter/country", (req, res)=>{ 
      let country = req.query.country;
      let result = hotels.filter(hotelObj=>filterByCountry(hotelObj, country));
      res.send(result);
    })

    function filterByCategory(hotelObj, category){
      return hotelObj.category=category;
      }
    
    app.get("/hotels/filter/category", (req, res)=>{ 
      let category = req.query.category;
      let result = hotels.filter(hotelObj=>filterByCountry(hotelObj, category));
      res.send(result);
    })

    app.get("/hotels", (req, res)=>{ 
      res.send(hotels);
    })