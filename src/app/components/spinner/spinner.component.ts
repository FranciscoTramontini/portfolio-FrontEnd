import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})

export class SpinnerComponent implements OnInit {

  public isLoading!: boolean;

  constructor() {
    this.isLoading = false
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = true;
    }, 10000);
  }


}
