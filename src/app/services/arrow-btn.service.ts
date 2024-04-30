import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArrowBtnService {
  constructor() {}
  arroro: any = [];
  arroro1: any = [];
  arroro2: any = [];

  getdata(tit: any) {
    let titlePa: any = `${tit}`;
    let ob: any = [
      {
     titleP : [
          { ImG: 'https://i.ibb.co/BNLTyvr/fokir.png', tit: 'Fokir',des:`Technologies : HTML , CSS / Libraries : Fontawsome` , demo : `https://montassershozan.github.io/FOKIR.VR2`},
          { ImG: 'https://i.ibb.co/1Kw1b23/meal1.png', tit: 'Mealify'  ,des:`Technologies : HTML , CSS / Libraries : Fontawsome` , demo : `https://montassershozan.github.io/mealifymon/` },
          { ImG: 'https://i.ibb.co/hBYhWHm/develifo.png', tit: 'Devilfo', des:`Technologies : HTML , CSS / Libraries : Fontawsome , Bootstrap` , demo : `https://montassershozan.github.io/Develio.vr2`  },
          { ImG: 'https://i.ibb.co/nRpxdt8/dani.png', tit: 'Daniel' , des:`Technologies : HTML , CSS / Libraries : Fontawsome , Bootstrap` , demo : `https://montassershozan.github.io/Daniel.vr2` },
          { ImG: 'https://i.ibb.co/tDc2rs9/cruds.png', tit: 'Cruds' , des:`Technologies : HTML , CSS , java Script / Libraries : Fontawsome , Bootstrap` , demo : `https://montassershozan.github.io/CRUDS.vr2` },
          { ImG: 'https://i.ibb.co/SXZqbBh/bookmark.png', tit: 'Bookmark',des:`Technologies : HTML , CSS , java Script / Libraries : Fontawsome , Bootstrap`, demo : `https://montassershozan.github.io/Bookmark.vr2`  },
          { ImG: 'https://i.ibb.co/8mCW1DP/quote.png', tit: 'Quote' , des:`Technologies : HTML , CSS , java Script / Libraries : Fontawsome , Bootstrap` , demo : `https://montassershozan.github.io/Quote.vr2` },
          { ImG: 'https://i.ibb.co/CVh5YBv/login.png', tit: 'SmartLogin' , des:`Technologies : HTML , CSS , Es6 / Libraries : Fontawsome , Bootstrap` , demo : `https://montassershozan.github.io/Smartlogin.vr2` },
          { ImG: 'https://i.ibb.co/gF5VLPc/weather.png', tit: 'Weather', des:`Technologies : HTML , CSS , Es6 / Libraries : Fontawsome , Bootstrap`, demo : `https://montassershozan.github.io/Weather.vr2` },
          { ImG: 'https://i.ibb.co/g6gnV8t/party.png', tit: 'Party' , des:`Technologies : HTML , CSS , jquery / Libraries : Fontawsome , Bootstrap` , demo : `https://montassershozan.github.io/assgnment-J-Quary-egyptianParty` },
          { ImG: 'https://i.ibb.co/hWtj2Bk/yummy.png', tit: 'FoodsYummy',des:`Technologies : HTML , CSS , Es6 , jquery / Libraries : Fontawsome , Bootstrap` , demo : `https://montassershozan.github.io/YummyExam_montasershozan` },
          {ImG:'https://i.ibb.co/6DnWZqy/cvcv.png' , tit: 'Cv.1.0' , des:`Technologies : HTML , sass , typescript , angular / Libraries : Fontawsome , Bootstrap , ngxowlcursl , ngx animationangular`, demo : `https://montassershozan.github.io/MontaserSHouzenCV` }
        ]
      },
    ];
    this.arroro1 = ob[0].titleP;
    for (let i = 0; i < this.arroro1.length; i++) {
      if (titlePa === this.arroro1[i].tit) {
        return this.arroro1[i];
        ;
      }
    }
  }
}
