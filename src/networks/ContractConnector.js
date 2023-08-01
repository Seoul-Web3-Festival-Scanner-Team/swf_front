import ABI from "./abi";
import { ethers } from "ethers";

const contractAddress = "0x256F3B45E810181A2E48772F49e9B04eE741A6F4";
const provider = new ethers.getDefaultProvider("https://evm-dev-t3.cronos.org");
class ContractConnector {
    async getDatas(address, detail) {
        const contract = new ethers.Contract(contractAddress, ABI, provider);

        let result = [];
        let i = 0;
        while (true) {
            try {
                const data = await contract.datas(address, detail, i);
                i++;
                result.push({
                    rentType: ethers.toNumber(data.rentType),
                    rentStart: ethers.toNumber(data.rentStart),
                    rentEnd: ethers.toNumber(data.rentEnd),
                    contractDate: ethers.toNumber(data.contractDate),
            });
            } catch (e) {
                break;
            }
        }

        return result; // {rentType, rentStart, rentEnd, contractDate}
    }

    async addData(address, detail, rentType, rentStart, rentEnd, contractDate) {

    }
}
