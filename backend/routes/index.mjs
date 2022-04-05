import solidity_testing from "./test.solidity.routes.mjs";
import authentication from "./authentication.routes.mjs";
import RegisterRouter from "./user.register.routes.mjs";
import eth_manufacturer from "./manufacturer.routes.mjs";
import eth_retailer from "./retailer.routes.mjs";
import eth_distributor from "./distributor.routes.mjs"

export {
    authentication,
    RegisterRouter,
    solidity_testing,
    eth_manufacturer,
    eth_retailer,
    eth_distributor
};