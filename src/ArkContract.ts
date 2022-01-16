import { BigNumber, BigNumberish } from "ethers";
import Contract from "./Contract";

class ArkContract extends Contract {

    constructor() {
        super("0xb532a6A7a5Fbf64DA0FDc1333FBB0EfA83D913D1", require("./ArkContractABI.json"));
    }

    public async users(index: BigNumberish): Promise<string> {
        return await this.contract.methods.users(index).call();
    }

    public async usersCount(): Promise<BigNumber> {
        return BigNumber.from(await this.contract.methods.usersCount().call());
    }
}

export default new ArkContract();
