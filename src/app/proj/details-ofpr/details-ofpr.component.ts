import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ArrowBtnService } from 'src/app/services/arrow-btn.service';

@Component({
  selector: 'app-details-ofpr',
  templateUrl: './details-ofpr.component.html',
  styleUrls: ['./details-ofpr.component.scss'],
})
export class DetailsOfprComponent implements OnInit {
  arroro: any = [];
  Noureen: any = [];
  Nour: any = [];
  Nour1: any = [];
  Nour2: any = [];

  constructor(
    private _ArrowBtnService: ArrowBtnService,
    private _ActivatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    let tit = this._ActivatedRoute.snapshot.params['title'];
    this.arroro = this._ArrowBtnService.getdata(tit);
    let nourmap = new Map(Object.entries(this.arroro));
   this.Noureen = nourmap.get('tit');
   this.Nour = nourmap.get('ImG')
   this.Nour1 = nourmap.get('des');
   this.Nour2 = nourmap.get('demo');

    console.log(this.Nour);
    console.log(this.Noureen);
    console.log(this.Nour1);
    console.log(this.Nour2);

    
  }
}
