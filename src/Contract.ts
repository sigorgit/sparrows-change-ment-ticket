import Klaytn from "./Klaytn";

export default abstract class Contract {

    protected contract: any;

    constructor(public address: string, abi: any) {
        this.contract = Klaytn.createContract(address, abi);
    }
}
