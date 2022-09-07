import { Injectable } from '@angular/core';
import { Magic } from "magic-sdk";
import { ConnectExtension } from "@magic-ext/connect";
import Web3 from "web3";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MagicService {
  public magic: any;
  public web3: any;

  constructor() { }

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

  async disconnect(){
    this.connect();
    await this.magic.connect.disconnect().catch((e: any) => {
      console.log(e);
      return e
    });
  }

  async sendTransaction(){

  }

  async signMessage(){
    this.connect();

    const publicAddress = (await this.web3.eth.getAccounts())[0];
    const signedMessage = await this.web3.eth.personal
      .sign("My Message", publicAddress, "")
      .catch((e: any) => console.log(e));
    console.log(signedMessage);
  }

  async showWallet(){
    this.connect();

    this.magic.connect.showWallet().catch((e: any) => {
      console.log(e);
    });
  }



}
