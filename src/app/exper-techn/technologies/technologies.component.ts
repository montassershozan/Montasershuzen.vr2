import { Component } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TECHNOLOGIESComponent {
  techno: any = [
    { ImG: 'https://cdn.iconscout.com/icon/free/png-512/free-html5-40-1175193.png?f=webp&w=256' },
    { ImG: 'https://cdn.iconscout.com/icon/free/png-512/free-css3-11-1175239.png?f=webp&w=256' },
    { ImG: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/scss-1-236126.png?f=webp&w=256' },
    { ImG: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/bootstrap-9305875-7694074.png?f=webp&w=256' },
    { ImG: 'https://www.svgrepo.com/show/333609/tailwind-css.svg' },
    { ImG: 'https://www.svgrepo.com/show/353925/javascript.svg' },
    { ImG: 'https://www.svgrepo.com/show/353940/jquery.svg' },
    { ImG: 'https://www.svgrepo.com/show/374144/typescript.svg' },
    { ImG: 'https://www.svgrepo.com/show/303230/angular-icon-logo.svg' }
  ];
}
