var express = require('express');
var router = express.Router();

let listings = [
   {
      id: 1,
      type: "apartment",
      address: {
         street: "12345 123st W",
         city: "City",
         state: "WA",
         zip_code: 98007
      },
      bedrooms: [
         {
            type: "masters",
            square_footage: 700
         },
         {
            type: "",
            square_footage: 500
         },
         {
            type: "",
            square_footage: 500
         }
      ],
      square_footage: 1234,
      coordinates:{
         latitude: "",
         longitude: "",
      }
   },
];

/* GET all properties. */
router.get('/', function(req, res, next) {
   res.json({listings: listings});
});

module.exports = router;
