
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const favoriteFood = process.env.FAVORITE_FOOD;

async function main() {
  while(true) {
    console.log("Microservices rock!", favoriteFood);
    await sleep(5000);
  }
}

main();
