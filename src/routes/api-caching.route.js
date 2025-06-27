const Router = require("express");
const apiCahningRouter = Router();
const { allUsers, allCachedUsers, deleteCachedUsers } = require("../controllers/api-caching.controller");

apiCahningRouter.get("/", allUsers)
apiCahningRouter.get("/cached-users", allCachedUsers)
apiCahningRouter.delete("/delete-cached-users", deleteCachedUsers)


module.exports = apiCahningRouter