import { Injectable } from '@angular/core';
import {Fertile, Nature, Rez, SeedQuality, Technology} from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  evaluate(data: any) {

    switch (data['attribute3']) {
      case Fertile.UKR:
        switch (data['attribute1']) {
          case SeedQuality.Chp:
            switch (data['attribute2']) {
              case Technology.P:
                return Rez.B;
              case Technology.UT:
                return Rez.C;
              default:
                return Rez.UNKN;
            }
          case SeedQuality.Avg:
            return Rez.C;
          case SeedQuality.Exp:
            return Rez.D;
          default:
            return Rez.UNKN;
        }
      case Fertile.HOL:
        return Rez.A;
      case Fertile.NF:
        switch (data['attribute4']) {
          case Nature.C:
            return Rez.D;
          case Nature.N:
            switch (data['attribute1']) {
              case SeedQuality.Avg:
                return Rez.C;
              case SeedQuality.Exp:
                return Rez.B;
              default:
                return Rez.UNKN;
            }
          default:
            return Rez.UNKN;
        }
      default:
        return Rez.UNKN;
    }
  }
}
