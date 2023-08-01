import ABI from "./abi";
import { ethers } from "ethers";

const contractAddress = "0x40c445218419e176e8c974e1bB3a1983625A37Cc";
const provider = new ethers.getDefaultProvider("https://evm-dev-t3.cronos.org");
class ContractConnector {
    async getDatas(address) {
        const contract = new ethers.Contract(contractAddress, ABI, provider);

        let result = [];
        let i = 0;
        while (true) {
            try {
                const data = await contract.datas(address, i);
                i++;
                result.push({
                    detail: data.detail,
                    rentType: ethers.toNumber(data.rentType),
                    rentStart: ethers.toNumber(data.rentStart),
                    rentEnd: ethers.toNumber(data.rentEnd),
                    contractDate: ethers.toNumber(data.contractDate),
                });
            } catch (e) {
                break;
            }
        }

        return result; // {detail, rentType, rentStart, rentEnd, contractDate}
    }

    async addData(address, rentType, rentStart, rentEnd, contractDate) {}
}
