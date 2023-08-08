import { Component } from '@angular/core';
import { MaskitoElementPredicateAsync, MaskitoOptions } from '@maskito/core';
import maskitoOptions from './mask';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  readonly options = maskitoOptions;

  readonly digitsOnlyMask: MaskitoOptions = {
    mask: /^\d+$/,
  };

  readonly timeMask: MaskitoOptions = {
    mask: [/\d/, /\d/, ':', /\d/, /\d/]
  };

  readonly predicate: MaskitoElementPredicateAsync = async (el) =>
    (el as HTMLIonInputElement).getInputElement();

  readonly phoneMask: MaskitoOptions = {
    mask: ['+', '1', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  };

  readonly cardMask: MaskitoOptions = {
    mask: [
      ...Array(4).fill(/\d/),
      ' ',
      ...Array(4).fill(/\d/),
      ' ',
      ...Array(4).fill(/\d/),
      ' ',
      ...Array(4).fill(/\d/),
      ' ',
      ...Array(3).fill(/\d/),
    ],
  };

  readonly uppercaseMask: MaskitoOptions = {
    mask: /^[a-zA-Z\s]+$/,
    postprocessors: [
      ({ value, selection }) => ({ value: value.toUpperCase(), selection }),
    ],
  };


}
