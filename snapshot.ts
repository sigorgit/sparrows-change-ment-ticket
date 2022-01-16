import fs from "fs";
import ArkContract from "./src/ArkContract";

(async () => {
    const results: number[] = [];
    const userCount = (await ArkContract.usersCount()).toNumber();
    for (let id = 0; id < userCount; id += 1) {
        results.push(0);
    }
    fs.writeFileSync("./ids.json", JSON.stringify(results));
})();