import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MagicService} from "../../../services/magic/magic.service";
import { WalletService } from 'src/app/services/wallet/wallet.service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  public CurrentWallet = this.walletService.getWallet();

  constructor(private magic: MagicService, private walletService: WalletService) {
  }

  ngOnInit(): void {

  }

  ngDoCheck() {
    this.CurrentWallet = this.walletService.getWallet();
  }

  async login() {
    let that = this;
    this.magic.login().then(response => {
      that.walletService.setWallet(response[0]);
    })

  }

  async logout(){
    let that = this;
    this.magic.disconnect().then(response => {
      that.walletService.setWallet('');
    })
  }

  async wallet(){
    this.magic.showWallet().then(response => {
      console.log(response);
    })
  }

  formatWallet(value: String){
    return value.slice(0, 3) + '...' + value.slice(-4);
  }

}
