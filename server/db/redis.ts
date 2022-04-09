const { createClient } = require("redis")
export const redisClient = createClient({ legacyMode: true})

redisClient.on('error', (err:any)=> {
   console.log('Error ' + err);
});
redisClient.on("connect", function () {
   console.log("redis connected");

});