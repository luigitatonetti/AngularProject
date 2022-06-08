import { Component, OnInit } from '@angular/core';
import { JobServiceService } from 'src/app/services/job-service.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {

  job: any;

  constructor(private service: JobServiceService) { }

  ngOnInit(): void {
    this.service.currentData.subscribe((e) => (this.job = e));
  }

}
