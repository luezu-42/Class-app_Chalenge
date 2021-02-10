const fs = require("fs");
const csv = require("csv-parser");

if (fs.existsSync("./input.csv")) {
    let teste = [];
    fs.createReadStream("./input.csv")
      .pipe(csv())
      .on("data", (row) => {
          
        teste.push(row)
        console.log(teste)
        fs.writeFileSync("./output.json", JSON.stringify(teste), function(erro) {

            if(erro) {
                throw erro;
            }
        
            console.log("Arquivo salvo");
        }); 
      })
      .on("end", () => {
        console.log("CSV file successfully processed");
      });
 
      
} else {
  console.log("Não foi encontrado o arquivo input.csv");
}
