import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagicService } from '../../../services/magic/magic.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  public donationAmount = '10';
  public errorMessage = '';
  constructor(private magicService: MagicService) { }

  ngOnInit(): void {
  }

  donate(){
    this.errorMessage = '';
    if(this.donationAmount === ''){
      this.errorMessage = 'Please enter a donation amount';
      return;
    }
    this.magicService.sendDonation(parseInt(this.donationAmount));
  }

}
