// const getInfo = {
//   name: "Lithium",
//   week: "W3D5",
//   topic: "Todays Node js Topic -- How to create Module and Export it.",
// };

// function getBatchInfo() {
//   console.log(
//     `Batch name ${getInfo.name} , Current Day ${getInfo.week} , ${getInfo.topic} `
//   );
//   const today = new Date();
//   const day = today.getDate();
//   const month = today.getMonth();
//   const year = today.getFullYear();

//   console.log(day);
//   console.log(month);
//   console.log(year);
// }

// module.exports.getBatchInfo = getBatchInfo;
const getInfo = {
  name:"Lithuim",
  week:"3",
  topic:" export and import in nodejs"
}
function getBatchInfo(){
  console.log(`BATCH NAME ${getInfo.name}, CURRENT WEEK ${getInfo.week},TOPIC ${getInfo.topic} `);
  const today =new Date();
  const day= today.getDate();
  const month=today.getMonth();
  const year= today.getFullYear();
  console.log(day);
  console.log(month);
  console.log(year);
}
module.exports.getBatchInfo=getBatchInfo;