// //Using SetTimeout
const trafficLight = () => {
  setTimeout(() => {
    console.log("🔴 RED - Stop");
    setTimeout(() => {
      console.log("🟡 YELLOW - Get ready");
      setTimeout(() => {
        console.log("🟢 GREEN - Go");
      }, 2000);
    }, 2000);
  }, 0);
};

trafficLight();

//Using Promises
const wait = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
};

console.log("🔴 RED - Stop");

wait(2000)
  .then(() => {
    console.log("🟡 YELLOW - Get ready");
    return wait(2000);
  })
  .then(() => {
    console.log("🟢 GREEN - Go");
  });

//Using Promises with catch (Error Handling)
const wait2 = (ms2, lightWorking) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (lightWorking)
        reject("Traffic light is not Working. We are fixing it!");
      else resolve();
    }, ms2);
  });
};

console.log("🔴 RED - Stop");

wait2(2000, false)
  .then(() => {
    console.log("🟡 YELLOW - Get ready");
    return wait2(2000, true);
  })
  .then(() => {
    console.log("🟢 GREEN - Go");
  })
  .catch((error) => {
    console.log("Sorry for inconvenience caused : " + error);
  });

//Promise.all combinator method.
const wait3 = (ms, isWorking) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isWorking) reject("File Downloading is not working.");
      else resolve();
    }, ms);
  });
};

console.log("Starting...");
Promise.all([wait3(1000, false), wait3(2000, false), wait3(3000, false)])
  .then(() => {
    console.log("All Files are downloaded!");
  })
  .catch((error) => {
    console.log(`Server Issue: ${error}`);
  });
