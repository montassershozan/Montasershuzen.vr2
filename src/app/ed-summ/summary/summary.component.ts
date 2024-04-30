import { Component } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent {
  specialist: any = [
    { ImG: 'https://www.svgrepo.com/show/353925/javascript.svg' },
    { ImG: 'https://www.svgrepo.com/show/353940/jquery.svg' },
    { ImG: 'https://www.svgrepo.com/show/374144/typescript.svg' },
    { ImG: 'https://www.svgrepo.com/show/303230/angular-icon-logo.svg' },
  ];
}
