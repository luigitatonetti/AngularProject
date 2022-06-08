import { Component, OnInit } from '@angular/core';
import { JobServiceService } from 'src/app/services/job-service.service';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {

  job: any;
  companyId!: string;
  company: any;

  constructor( private service: JobServiceService, public fetchService: MainService) { }

  ngOnInit(): void {
    this.service.currentData.subscribe((e) => {
      this.job = e;
      this.companyId = this.job.company.id
    })

    this.fetchService.getCompany(this.companyId).subscribe((res:any) => {
      this.company = res;
    })
  }


}
