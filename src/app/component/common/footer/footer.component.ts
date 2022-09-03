import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxScrollTopModule } from 'ngx-scrolltop';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, NgxScrollTopModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
