const fs = require('fs');

var data = JSON.parse(fs.readFileSync('./Data/item.json'));
// var data = [{
//         "id": "1",
//         "product_name": "Iphone X",
//         "description": "128 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera | 7MP Front Camera A12 Bionic Chip Processor",
//         "price": "2000",
//         "image": " "
//     },
//     {
//         "id": "2",
//         "product_name": "Samsung X",
//         "description": "128 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera | 7MP Front Camera A12 Bionic Chip Processor",
//         "price": "4000",
//         "image": " "
//     },
//     {
//         "id": "3",
//         "product_name": "Nokia X",
//         "description": "128 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera | 7MP Front Camera A12 Bionic Chip Processor",
//         "price": "1200",
//         "image": " "
//     },
//     {
//         "id": "4",
//         "product_name": "Bphone X",
//         "description": "128 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera | 7MP Front Camera A12 Bionic Chip Processor",
//         "price": "500",
//         "image": " "
//     },
//     {
//         "id": "4",
//         "product_name": "Iphone XS",
//         "description": "128 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera | 7MP Front Camera A12 Bionic Chip Processor",
//         "price": "2200",
//         "image": " "
//     },
//     {
//         "id": "5",
//         "product_name": "Samsung S20",
//         "description": "128 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera | 7MP Front Camera A12 Bionic Chip Processor",
//         "price": "3000",
//         "image": " "
//     },
//     {
//         "id": "6",
//         "product_name": "Iphone 13 Pro Max",
//         "description": "128 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera | 7MP Front Camera A12 Bionic Chip Processor",
//         "price": "5000",
//         "image": " "
//     }
// ];
exports.data = data;