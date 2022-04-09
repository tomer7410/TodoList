"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisClient = void 0;
const redis = require('redis');
exports.redisClient = redis.createClient({
    url: "redis://127.0.0.1:6379"
});
exports.redisClient.connect().catch(console.error);
console.log("after con");
exports.redisClient.on('error', (err) => {
    console.log('Error ' + err);
});
exports.redisClient.on("connect", function () {
    console.log("redis connected");
    console.log(`connected ${exports.redisClient.connected}`);
});
//# sourceMappingURL=redis.js.map