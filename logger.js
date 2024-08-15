/* --- Middleware examples --- */

// Custom logger
function currentTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
}

function logger(req, res, next) {
  console.log(`Time: ${currentTime()}`);
  console.log(`method: ${req.method}`);
  console.log(`path: ${req.originalUrl}`);
  next();
}

module.exports = logger;
