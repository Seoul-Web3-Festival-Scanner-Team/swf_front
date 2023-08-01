import axios from "axios";
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
                // console.log(e);
                break;
            }
        }

        return result; // {detail, rentType, rentStart, rentEnd, contractDate}
    }

    async addData({
        address,
        detail,
        rentType,
        rentStart,
        rentEnd,
        contractDate,
    }) {
        try {
            console.log("START");
            console.log(address);
            console.log(detail);
            console.log(rentType);
            console.log(rentStart);
            console.log(rentEnd);
            console.log(contractDate);
            console.log(process.env.REACT_APP_BACK_URL);
            const api = axios.create({
                baseURL: `${process.env.REACT_APP_BACK_URL}`,
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const response = await api.post(
                "",
                {
                    key: address,
                    detail: detail,
                    rentType: rentType,
                    rentStart: rentStart,
                    rentEnd: rentEnd,
                    contractDate: contractDate,
                }
            );

            console.log(response);
        } catch (e) {
            console.error(e);
        }
    }
}

export default ContractConnector;
