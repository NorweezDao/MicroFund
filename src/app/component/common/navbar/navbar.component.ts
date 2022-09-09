import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "../../pages/login/login.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, LoginComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {}

  classApplied = false;
  toggleClass() {
    this.classApplied = !this.classApplied;
  }

}
