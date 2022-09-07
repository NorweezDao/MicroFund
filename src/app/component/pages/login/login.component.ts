import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MagicService} from "../../../services/magic/magic.service";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {


  constructor(private magic: MagicService) {
  }

  ngOnInit(): void {

  }

  async login() {
    this.magic.login().then(response => {
      console.log(response);
    })

  }

async logout(){
  this.magic.disconnect().then(response => {
    console.log(response);
  })
}

  async wallet(){
    this.magic.showWallet().then(response => {
      console.log(response);
    })
  }


}
