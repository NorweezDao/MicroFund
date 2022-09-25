import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class WalletService {
    public CurrentWallet : string = '';

    constructor() {}
    setWallet(wallet: string){
        this.CurrentWallet = wallet;
    }

    getWallet(){
        return this.CurrentWallet;
    }
}