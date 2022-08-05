const axios = require(`axios`);
const poemUrl = "https://www.poemist.com/api/v1/randompoems";

const getData = async () => {
    try {
        const poems = await axios.get(poemUrl);
        const poem = await axios.get(poems.data[0].url);
        const row = poem.data.split("\n");
        let totalRead = [];
        row.forEach((item) =>{
            if(item.includes("Total read")){
                totalRead.push(item);
            };
        });
        console.log(totalRead);
        }catch(err){
            console.log(err);
        }
}
getData();