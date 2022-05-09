import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  isLoading: boolean;

  constructor() {
    this.isLoading = false;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = true;
    }, 2000);
  }
}
