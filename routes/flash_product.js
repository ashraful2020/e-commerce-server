const express = require("express");
const router = express.Router();
const root_route = require("../index"); 

const product= [
    {
      "id": "124e13b9-2d54-4b2f-a74d-a77b362d6ead",
      "category": "Men's Sneaker",
      "name": "ULTRABOOST 22 SHOES",
      "seller": "Addidas",
      "price": 420,
      "stock": 20,
      "ratings": 4,
      "ratingsCount": 3725,
      "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg",
      "shipping": 1,
      "quantity": 0,
      "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias harum accusamus, in laborum aliquid architecto ea provident eaque, recusandae non aperiam, ullam nihil deleniti? Praesentium officiis fugit a ratione possimus cumque, quos soluta! Ullam, voluptates porro. Sunt eum officiis fugiat culpa incidunt quibusdam dolor velit eveniet. Necessitatibus aliquam, placeat quis eaque, minus magni hic voluptate autem fugiat repudiandae quod facilis aut ullam illum tempora veniam deleniti error quos dicta ipsum consectetur, velit in? Aut iste facere quaerat sint maxime. Dolorum fuga ducimus illum natus molestias tempore doloribus aperiam voluptatum totam officia beatae quasi sint quisquam saepe quas, repudiandae nobis quis corporis fugiat sit cumque modi veritatis minus molestiae? Aliquid voluptatibus in magnam nemo quos facilis delectus expedita natus quas possimus eaque non, sed reprehenderit, voluptates impedit cupiditate modi dicta molestias? Voluptates voluptatum, explicabo repellendus pariatur ex expedita quod? Quasi placeat inventore deleniti officia deserunt dolore ipsum excepturi. Provident amet obcaecati voluptates aut dolorum soluta eum nam, dolores vero velit veniam minima, numquam vitae eaque nostrum illum ut repellendus optio.",
      "heading": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias harum accusamus.",
      "detail": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/1105dc0c9232477eb80dac7d000edc0c_9366/Steel_Metal_Bottle_600_ML_White_EX7306_01_standard.jpg",
      "detail2": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/f7fb63986ed34112bc57ac7d002c9f43_9366/Steel_Straw_Metal_Bottle_600_ML_White_EX7316_01_standard.jpg",
      "detail3": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e2d870a680644e4d98e9ac7d0008ecc7_9366/Steel_Metal_Bottle_600_ML_Yellow_EX7307_01_standard.jpg",
      "discount":10
    },
    {
      "id": "13cbc7ed-a61b-4883-9d42-82d7d8642b86",
      "category": "Men's Sneaker",
      "name": "LUNAR NEW YEAR ULTRABOOST DNA SHOES",
      "seller": "Addidas",
      "price": 196,
      "stock": 19,
      "ratings": 5,
      "ratingsCount": 4355,
      "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2cee64414e1f4f31baf1ae270099d950_9366/Lunar_New_Year_Ultraboost_DNA_Shoes_Black_GZ6074_01_standard.jpg",
      "shipping": 14,
      "quantity": 0,
      "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias harum accusamus, in laborum aliquid architecto ea provident eaque, recusandae non aperiam, ullam nihil deleniti? Praesentium officiis fugit a ratione possimus cumque, quos soluta! Ullam, voluptates porro. Sunt eum officiis fugiat culpa incidunt quibusdam dolor velit eveniet. Necessitatibus aliquam, placeat quis eaque, minus magni hic voluptate autem fugiat repudiandae quod facilis aut ullam illum tempora veniam deleniti error quos dicta ipsum consectetur, velit in? Aut iste facere quaerat sint maxime. Dolorum fuga ducimus illum natus molestias tempore doloribus aperiam voluptatum totam officia beatae quasi sint quisquam saepe quas, repudiandae nobis quis corporis fugiat sit cumque modi veritatis minus molestiae? Aliquid voluptatibus in magnam nemo quos facilis delectus expedita natus quas possimus eaque non, sed reprehenderit, voluptates impedit cupiditate modi dicta molestias? Voluptates voluptatum, explicabo repellendus pariatur ex expedita quod? Quasi placeat inventore deleniti officia deserunt dolore ipsum excepturi. Provident amet obcaecati voluptates aut dolorum soluta eum nam, dolores vero velit veniam minima, numquam vitae eaque nostrum illum ut repellendus optio.",
      "heading": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias harum accusamus.",
      "detail": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/1105dc0c9232477eb80dac7d000edc0c_9366/Steel_Metal_Bottle_600_ML_White_EX7306_01_standard.jpg",
      "detail2": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/f7fb63986ed34112bc57ac7d002c9f43_9366/Steel_Straw_Metal_Bottle_600_ML_White_EX7316_01_standard.jpg",
      "detail3": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e2d870a680644e4d98e9ac7d0008ecc7_9366/Steel_Metal_Bottle_600_ML_Yellow_EX7307_01_standard.jpg",
      "discount":10
    },
    {
      "id": "307f166f-1d04-4573-bc37-2f461ea9d4f7",
      "category": "Men's Sneaker",
      "name": "SUPERNOVA SHOES",
      "seller": "Addidas",
      "price": 245,
      "stock": 20,
      "ratings": 4,
      "ratingsCount": 3972,
      "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/69cbc73d0cb846889f89acbb011e68cb_9366/Supernova_Shoes_Black_S42722_01_standard.jpg",
      "shipping": 1,
      "quantity": 0,
      "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias harum accusamus, in laborum aliquid architecto ea provident eaque, recusandae non aperiam, ullam nihil deleniti? Praesentium officiis fugit a ratione possimus cumque, quos soluta! Ullam, voluptates porro. Sunt eum officiis fugiat culpa incidunt quibusdam dolor velit eveniet. Necessitatibus aliquam, placeat quis eaque, minus magni hic voluptate autem fugiat repudiandae quod facilis aut ullam illum tempora veniam deleniti error quos dicta ipsum consectetur, velit in? Aut iste facere quaerat sint maxime. Dolorum fuga ducimus illum natus molestias tempore doloribus aperiam voluptatum totam officia beatae quasi sint quisquam saepe quas, repudiandae nobis quis corporis fugiat sit cumque modi veritatis minus molestiae? Aliquid voluptatibus in magnam nemo quos facilis delectus expedita natus quas possimus eaque non, sed reprehenderit, voluptates impedit cupiditate modi dicta molestias? Voluptates voluptatum, explicabo repellendus pariatur ex expedita quod? Quasi placeat inventore deleniti officia deserunt dolore ipsum excepturi. Provident amet obcaecati voluptates aut dolorum soluta eum nam, dolores vero velit veniam minima, numquam vitae eaque nostrum illum ut repellendus optio.",
      "heading": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias harum accusamus.",
      "detail": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/1105dc0c9232477eb80dac7d000edc0c_9366/Steel_Metal_Bottle_600_ML_White_EX7306_01_standard.jpg",
      "detail2": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/f7fb63986ed34112bc57ac7d002c9f43_9366/Steel_Straw_Metal_Bottle_600_ML_White_EX7316_01_standard.jpg",
      "detail3": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e2d870a680644e4d98e9ac7d0008ecc7_9366/Steel_Metal_Bottle_600_ML_Yellow_EX7307_01_standard.jpg",
      "discount":10
    },
    {
      "id": "4bf9798f-63bc-4a83-b0c6-6a3b816fe922",
      "category": "Men's Sneaker",
      "name": "LITE RACER ADAPT 3.0 SHOES",
      "seller": "Addidas",
      "price": 229,
      "stock": 10,
      "ratings": 5,
      "ratingsCount": 1764,
      "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/96a5f085fedf4e678095abad01056711_9366/Lite_Racer_Adapt_3.0_Shoes_Black_FX8802_01_standard.jpg",
      "shipping": 32,
      "quantity": 0,
      "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias harum accusamus, in laborum aliquid architecto ea provident eaque, recusandae non aperiam, ullam nihil deleniti? Praesentium officiis fugit a ratione possimus cumque, quos soluta! Ullam, voluptates porro. Sunt eum officiis fugiat culpa incidunt quibusdam dolor velit eveniet. Necessitatibus aliquam, placeat quis eaque, minus magni hic voluptate autem fugiat repudiandae quod facilis aut ullam illum tempora veniam deleniti error quos dicta ipsum consectetur, velit in? Aut iste facere quaerat sint maxime. Dolorum fuga ducimus illum natus molestias tempore doloribus aperiam voluptatum totam officia beatae quasi sint quisquam saepe quas, repudiandae nobis quis corporis fugiat sit cumque modi veritatis minus molestiae? Aliquid voluptatibus in magnam nemo quos facilis delectus expedita natus quas possimus eaque non, sed reprehenderit, voluptates impedit cupiditate modi dicta molestias? Voluptates voluptatum, explicabo repellendus pariatur ex expedita quod? Quasi placeat inventore deleniti officia deserunt dolore ipsum excepturi. Provident amet obcaecati voluptates aut dolorum soluta eum nam, dolores vero velit veniam minima, numquam vitae eaque nostrum illum ut repellendus optio.",
      "heading": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias harum accusamus.",
      "detail": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/1105dc0c9232477eb80dac7d000edc0c_9366/Steel_Metal_Bottle_600_ML_White_EX7306_01_standard.jpg",
      "detail2": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/f7fb63986ed34112bc57ac7d002c9f43_9366/Steel_Straw_Metal_Bottle_600_ML_White_EX7316_01_standard.jpg",
      "detail3": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e2d870a680644e4d98e9ac7d0008ecc7_9366/Steel_Metal_Bottle_600_ML_Yellow_EX7307_01_standard.jpg",
      "discount":10
    },
    {
      "id": "9496d72b-04ec-41f8-9bc3-0a7c9697be8e",
      "category": "Men's Sneaker",
      "name": "4DFWD SHOES",
      "seller": "Addidas",
      "price": 287,
      "stock": 11,
      "ratings": 4,
      "ratingsCount": 799,
      "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8c5d1994dfd343e28567ad4400dd351d_9366/4DFWD_Shoes_Black_Q46447_01_standard.jpg",
      "shipping": 49,
      "quantity": 0,
      "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias harum accusamus, in laborum aliquid architecto ea provident eaque, recusandae non aperiam, ullam nihil deleniti? Praesentium officiis fugit a ratione possimus cumque, quos soluta! Ullam, voluptates porro. Sunt eum officiis fugiat culpa incidunt quibusdam dolor velit eveniet. Necessitatibus aliquam, placeat quis eaque, minus magni hic voluptate autem fugiat repudiandae quod facilis aut ullam illum tempora veniam deleniti error quos dicta ipsum consectetur, velit in? Aut iste facere quaerat sint maxime. Dolorum fuga ducimus illum natus molestias tempore doloribus aperiam voluptatum totam officia beatae quasi sint quisquam saepe quas, repudiandae nobis quis corporis fugiat sit cumque modi veritatis minus molestiae? Aliquid voluptatibus in magnam nemo quos facilis delectus expedita natus quas possimus eaque non, sed reprehenderit, voluptates impedit cupiditate modi dicta molestias? Voluptates voluptatum, explicabo repellendus pariatur ex expedita quod? Quasi placeat inventore deleniti officia deserunt dolore ipsum excepturi. Provident amet obcaecati voluptates aut dolorum soluta eum nam, dolores vero velit veniam minima, numquam vitae eaque nostrum illum ut repellendus optio.",
      "heading": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias harum accusamus.",
      "detail": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/1105dc0c9232477eb80dac7d000edc0c_9366/Steel_Metal_Bottle_600_ML_White_EX7306_01_standard.jpg",
      "detail2": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/f7fb63986ed34112bc57ac7d002c9f43_9366/Steel_Straw_Metal_Bottle_600_ML_White_EX7316_01_standard.jpg",
      "detail3": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e2d870a680644e4d98e9ac7d0008ecc7_9366/Steel_Metal_Bottle_600_ML_Yellow_EX7307_01_standard.jpg",
      "discount":10
    }
]
// User router
router.get("/", async (req, res) => {
    // const result = await root_route.client.userCollection.find({}).toArray(); 
    return res.send(product);
});

module.exports = router;