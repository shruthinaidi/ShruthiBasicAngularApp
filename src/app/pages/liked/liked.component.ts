import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UtillsService } from 'src/app/services/utills.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.component.html',
  styleUrls: ['./liked.component.scss']
})
export class LikedComponent implements OnInit {
  userObs$!: Observable<any>;
  testObs$: Observable<any> = from([10, 30, 60]);
  searchValue: string = "";
  constructor(private utillService: UtillsService, private http: HttpClient, private aRoute: ActivatedRoute) {
    console.log("isUserLoggedIn---", this.utillService.isUserLoggedIn);
    this.aRoute.data.subscribe((res: any) => {
      console.log("data coming from resolver");
      console.log(res.listOfUser);
    })
  }

  ngOnInit(): void {
    this.userObs$ = this.http.get(`${environment.apiBaseUrl}users`);
  }
  getInputValue(value: string) {
    console.log(value);
  }
  getSearchVal() {
    console.log(this.searchValue)
  }

}
