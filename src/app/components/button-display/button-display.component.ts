import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-display',
  templateUrl: './button-display.component.html',
  styleUrls: ['./button-display.component.css'],
})
export class ButtonDisplayComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  toggleClass1: boolean = false;
  toggleClass2: boolean = false;
  toggleClass3: boolean = false;
  toggleClass4: boolean = false;
  toggleClass5: boolean = false;
  toggleClass6: boolean = false;

  combinationArray: string[] = [];
  resultArray: string[] = [];

  numberValues: any = {
    '234': 0,
    '1': 1,
    '13': 2,
    '12': 3,
    '124': 4,
    '14': 5,
    '123': 6,
    '1234': 7,
    '134': 8,
    '23': 9,
  };
  combinationString = ''

  pushToArray(string: string) {

    this.combinationArray.push(string);
  }

  displayResult() {
    console.log(this.combinationArray);
    this.combinationArray.sort()
    this.combinationString = this.combinationArray.join('')
    console.log(this.combinationString)
    const resultValue = this.numberValues[this.combinationString];
    console.log(resultValue)
    this.resultArray.push(resultValue)
    console.log(this.resultArray)
    this.resetResult();
  }

  resetResult() {
    this.combinationArray = [];
  }
}
