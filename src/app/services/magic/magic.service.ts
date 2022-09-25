import {
  Injectable
} from '@angular/core';
import {
  Magic
} from "magic-sdk";
import {
  ConnectExtension
} from "@magic-ext/connect";
import Web3 from "web3";
import {
  environment
} from "../../../environments/environment";
import {
  WalletService
} from "../wallet/wallet.service";

@Injectable({
  providedIn: 'root'
})
export class MagicService {
  public magic: any;
  public web3: any;

  constructor(private walletService: WalletService) {}

  connect() {
    const customNodeOptions = {
      rpcUrl: 'https://polygon-rpc.com/',
      chainId: 137,
    }

    this.magic = new Magic(environment.magicUrl, {
      network: customNodeOptions,
      locale: "en_US",
      extensions: [new ConnectExtension()]
    });
    this.web3 = new Web3(this.magic.rpcProvider);
  }


  async login() {
    this.connect();
    const accounts = this.web3.eth.getAccounts();
    return accounts;
  }

  async disconnect() {
    this.connect();
    await this.magic.connect.disconnect().catch((e: any) => {
      console.log(e);
      return e
    });
  }

  async sendTransaction() {

  }

  async signMessage() {
    this.connect();

    const publicAddress = (await this.web3.eth.getAccounts())[0];
    const signedMessage = await this.web3.eth.personal
      .sign("My Message", publicAddress, "")
      .catch((e: any) => console.log(e));
    console.log(signedMessage);
  }

  async showWallet() {
    this.connect();
    this.magic.connect.showWallet().catch((e: any) => {
      console.log(e);
    });
  }

  async sendDonation(_amount: number) {
    if (!_amount) return;
    let minABI = [
      {
        "constant": false,
        "inputs": [{
            "name": "_to",
            "type": "address"
          },
          {
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "transfer",
        "outputs": [{
          "name": "",
          "type": "bool"
        }],
        "type": "function"
      }
    ];
    let address = environment.donationAddress;
    let tokenAddress = '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063';
    let contract = new this.web3.eth.Contract(minABI, tokenAddress);
    let decimals = this.web3.utils.toBN(18);
    let amount = this.web3.utils.toBN(_amount)
    let value = amount.mul(this.web3.utils.toBN(10).pow(decimals));
    contract.methods.transfer(address, value).send({
      from: this.walletService.getWallet(),
      gas: 21000,
    }).then((e: any) => { console.log(e) });
  }

}
