import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  jobs: any;
  page: number = 1;
  levels: string = 'all';
  response: any;
  @ViewChild('selectedLevel') selectedLevel!: ElementRef;

  constructor(private dataService: MainService) { }

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs() {

    this.dataService.getJobs(this.levels, this.page).subscribe((data) => {
      this.response = data;
      this.jobs = this.response.results;
    })
  }

  filterSearch() {
    this.page = 1;
    this.levels = this.selectedLevel.nativeElement.value;
    this.getJobs();
  }

  previousPage() {
    this.page--;
    this.getJobs();
  }

  nextPage() {
    this.page++;
    this.getJobs();
  }

}
