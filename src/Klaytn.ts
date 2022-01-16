import Caver from "caver-js";

class Klaytn {

    public caver = new Caver("http://klaytn-node.klu.bs:9092");

    public createContract(address: string, abi: any) {
        return this.caver.contract.create(abi, address);
    }
}

export default new Klaytn();
