const PI = 3.1415;
const area = PI * 5 * 5; 
const plantSpace = 0.8;

let numPlants = 20;
let plantArea = numPlants * plantSpace;





// if (plantArea > 0.8*area){
//     console.log("Need to Prune");
// }else if (0.5*area<= plantArea <= 0.8*area){
//     console.log("Need to be monitored")
// }else{
//     console.log("Room for more. Plant.")
// }


numPlants = numPlants * 2; // after 1 week
plantArea = numPlants * plantSpace;


if (plantArea > 0.8*area){
    console.log("Need to Prune");
}else if (0.5*area<= plantArea <= 0.8*area){
    console.log("Need to be monitored")
}else{
    console.log("Room for more. Plant.")
}

numPlants = numPlants *2; //after 2 weeks
plantArea = numPlants * plantSpace;

if (plantArea > 0.8*area){
    console.log("Need to Prune");
}else if (0.5*area<= plantArea <= 0.8*area){
    console.log("Need to be monitored");
}else{
    console.log("Room for more. Plant.");
} 

numPlants = numPlants * 2;
plantArea = numPlants * plantSpace;

if (plantArea > 0.8*area){
    console.log("Need to Prune");
}else if (0.5*area<= plantArea <= 0.8*area){
    console.log("Need to be monitored");
}else{
    console.log("Room for more. Plant.");
} 
