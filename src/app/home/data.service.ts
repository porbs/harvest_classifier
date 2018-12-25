import { Injectable } from '@angular/core';

export enum SeedQuality { Chp, Avg, Exp }
export enum Technology {P, UT, FT }
export enum Fertile { UKR, NF, HOL }
export enum Nature { N, C }
export enum Weather { L, M, H }
export enum Culture { Mel, Cor, Pot }
export enum Rez { A, B, C, D, UNKN}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: any = [
    {
      value: 'Якість насіння',
      options: [
        { label: 'Дешево', value: SeedQuality.Chp },
        { label: 'Середньо', value: SeedQuality.Avg },
        { label: 'Дорого', value: SeedQuality.Exp }
      ]
    },
    {
      value: 'Обладнання',
      options: [
        { label: 'Люди', value: Technology.P },
        { label: 'Вітчизняна техніка', value: Technology.UT },
        { label: 'Закордонна техніка', value: Technology.FT }
      ]
    },
    {
      value: 'Походження добрив',
      options: [
        { label: 'Україна', value: Fertile.UKR },
        { label: 'Немає', value: Fertile.NF },
        { label: 'Голландія', value: Fertile.HOL }
      ]
    },
    {
      value: 'Приодні умови',
      options: [
        { label: 'Стихійне лихо', value: Nature.C},
        { label: 'Нормальні умови', value: Nature.N },
      ]
    },
    {
      value: 'Середньосезонна кількість опадів',
      options: [
        { label: 'Низька', value: Weather.L},
        { label: 'Середня', value: Weather.M },
        { label: 'Висока', value: Weather.H }
      ]
    },
    {
      value: 'Культура',
      options: [
        { label: 'Кавуни', value: Culture.Mel},
        { label: 'Кукурудза', value: Culture.Cor },
        { label: 'Картопля', value: Culture.Pot }
      ]
    }
];

  getData(): any {
    return this.data;
  }

  constructor() { }
}
