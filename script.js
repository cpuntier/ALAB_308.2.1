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

numPlants = numPlants * 2; // after 3 weeks
plantArea = numPlants * plantSpace;

if (plantArea > 0.8*area){
    console.log("Need to Prune");
}else if (0.5*area<= plantArea <= 0.8*area){
    console.log("Need to be monitored");
}else{
    console.log("Room for more. Plant.");
} 

//plants need to be pruned after the 2nd and 3rd weeks

//Part 2 Thinking bigger

numPlants = 100;
numPlants = numPlants * 2;//1 week
numPlants = numPlants * 2;
numPlants = numPlants * 2;
numPlants = numPlants * 2;
numPlants = numPlants * 2;
numPlants = numPlants * 2;
numPlants = numPlants * 2;
numPlants = numPlants * 2;
numPlants = numPlants * 2;
numPlants = numPlants * 2;//10 weeks

plantArea = numPlants * plantSpace;
console.log(numPlants , plantArea);

const maxRadius = Math.sqrt(plantArea/(PI));
console.log(maxRadius)

//the radius of the new garden assuming they start with 100 plants and no pruning for 10 weeks is 161.5 meters

