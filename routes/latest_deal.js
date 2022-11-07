const express = require("express"); const { ObjectId } = require("mongodb");
;
const router = express.Router();
const root_route = require("../index");



router.get("/", async (req, res) => {
    const cursor = await root_route.client.productCollection.find({ isLatest: 'success' }).toArray();
     // isLatest: success
    // latestAt: 1667039328971
    // latestEnd: 1677039328971
    return res.send(cursor);
});

router.get('/:id', async (req, res) => {
    const id = req?.params?.id;
    const cursor = await root_route?.client?.latestDealCollection?.findOne({ _id: ObjectId(id) });
    console.log("🚀 ~ file: latest_deal.js ~ line 16 ~ router.get ~ cursor", cursor)
    return res.json(cursor)
});

module.exports = router;


/**
 * 
 * {"_id":{"$oid":"632056db75cb9a5e1ada15e8"},"id":"30698483-f7aa-49ba-9de9-9070f64dc263","category":"Bottle","name":"Steel Bottle 600 ML","seller":"Addidas","price":{"$numberInt":"23"},"stock":{"$numberInt":"11"},"ratings":{"$numberInt":"5"},"ratingsCount":{"$numberInt":"35"},"img":"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/48057b65216644f683a9aa1c0172ae6e_9366/Steel_Bottle_600_ML_Black_CL6093_01_standard.jpg","shipping":{"$numberInt":"5"},"quantity":{"$numberInt":"0"},"description":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias harum accusamus, in laborum aliquid architecto ea provident eaque, recusandae non aperiam, ullam nihil deleniti? Praesentium officiis fugit a ratione possimus cumque, quos soluta! Ullam, voluptates porro. Sunt eum officiis fugiat culpa incidunt quibusdam dolor velit eveniet. Necessitatibus aliquam, placeat quis eaque, minus magni hic voluptate autem fugiat repudiandae quod facilis aut ullam illum tempora veniam deleniti error quos dicta ipsum consectetur, velit in? Aut iste facere quaerat sint maxime. Dolorum fuga ducimus illum natus molestias tempore doloribus aperiam voluptatum totam officia beatae quasi sint quisquam saepe quas, repudiandae nobis quis corporis fugiat sit cumque modi veritatis minus molestiae? Aliquid voluptatibus in magnam nemo quos facilis delectus expedita natus quas possimus eaque non, sed reprehenderit, voluptates impedit cupiditate modi dicta molestias? Voluptates voluptatum, explicabo repellendus pariatur ex expedita quod? Quasi placeat inventore deleniti officia deserunt dolore ipsum excepturi. Provident amet obcaecati voluptates aut dolorum soluta eum nam, dolores vero velit veniam minima, numquam vitae eaque nostrum illum ut repellendus optio.","heading":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias harum accusamus.","detail":"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/1105dc0c9232477eb80dac7d000edc0c_9366/Steel_Metal_Bottle_600_ML_White_EX7306_01_standard.jpg","detail2":"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/f7fb63986ed34112bc57ac7d002c9f43_9366/Steel_Straw_Metal_Bottle_600_ML_White_EX7316_01_standard.jpg","detail3":"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e2d870a680644e4d98e9ac7d0008ecc7_9366/Steel_Metal_Bottle_600_ML_Yellow_EX7307_01_standard.jpg"}
 * 
 * 
 * 
 * 
 * 
 * 




{"_id":{"$oid":"632056db75cb9a5e1ada15da"},"id":"be7a4d0a-c681-416c-ab8d-f9be28223f4e","category":"Earphones","name":"adidas Z.N.E. 01 True Wireless Earbuds","seller":"Addidas","price":{"$numberInt":"142"},"stock":{"$numberInt":"11"},"ratings":{"$numberInt":"5"},"ratingsCount":{"$numberInt":"22"},"img":"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/00276c6c380b41bcb29fadcc00f98312_9366/adidas_Z.N.E._01_True_Wireless_Earbuds_Grey_EY5116_42_detail.jpg","shipping":{"$numberInt":"23"},"quantity":{"$numberInt":"0"},"description":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias harum accusamus, in laborum aliquid architecto ea provident eaque, recusandae non aperiam, ullam nihil deleniti? Praesentium officiis fugit a ratione possimus cumque, quos soluta! Ullam, voluptates porro. Sunt eum officiis fugiat culpa incidunt quibusdam dolor velit eveniet. Necessitatibus aliquam, placeat quis eaque, minus magni hic voluptate autem fugiat repudiandae quod facilis aut ullam illum tempora veniam deleniti error quos dicta ipsum consectetur, velit in? Aut iste facere quaerat sint maxime. Dolorum fuga ducimus illum natus molestias tempore doloribus aperiam voluptatum totam officia beatae quasi sint quisquam saepe quas, repudiandae nobis quis corporis fugiat sit cumque modi veritatis minus molestiae? Aliquid voluptatibus in magnam nemo quos facilis delectus expedita natus quas possimus eaque non, sed reprehenderit, voluptates impedit cupiditate modi dicta molestias? Voluptates voluptatum, explicabo repellendus pariatur ex expedita quod? Quasi placeat inventore deleniti officia deserunt dolore ipsum excepturi. Provident amet obcaecati voluptates aut dolorum soluta eum nam, dolores vero velit veniam minima, numquam vitae eaque nostrum illum ut repellendus optio.","heading":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias harum accusamus.","detail":"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/1105dc0c9232477eb80dac7d000edc0c_9366/Steel_Metal_Bottle_600_ML_White_EX7306_01_standard.jpg","detail2":"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/f7fb63986ed34112bc57ac7d002c9f43_9366/Steel_Straw_Metal_Bottle_600_ML_White_EX7316_01_standard.jpg","detail3":"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e2d870a680644e4d98e9ac7d0008ecc7_9366/Steel_Metal_Bottle_600_ML_Yellow_EX7307_01_standard.jpg"}


 */