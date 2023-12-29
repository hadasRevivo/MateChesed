import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  numbersArray: number[] | undefined;
  numbersArrayToInBrick: number[] | undefined;
  sumAllT: number = 0;
  sumAllE: number = 0;
  isOpenPupAp: boolean | undefined;
  color: boolean = true;
  sumN:number=15000000;

  //   firstName: string = ''; // משתנה לשם הפרטי
  // donationAmount: number = 0;
  // // color2:boolean=true
  firstName: string = ''; // משתנה לשם הפרטי 
  donationAmount: number = 0; // משתנה לסכום התרומה
  wholeT: number = 0;
  halfT: number = 0;
  //index: number = 0;//מופיע המיקום הבא במערך לאחר כל התרומות
  wholeE: number = 0;
  halfE: number = 0;
  half1: boolean = false;
  indexAll: number = 0;
  // indexE:number=0;
  flagE: number = 0;
  flagT: number = 0;
  // @Output() 
  // ifOpenPopUpEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  ngOnInit(): void {
    //for clear the localstorage
    //localStorage.clear();

   // קרא את הערך של sumAllT מ־localStorage
    const storedSumAllT = localStorage.getItem('sumAllT');
    // אם קיים ערך ב־localStorage, הקפוץ לתוך התנאי
    if (storedSumAllT&& typeof storedSumAllT === 'string') {
      this.sumAllT = JSON.parse(storedSumAllT);
    }
    this.sumN=this.sumN-this.sumAllE
    // קרא את הערך של sumAllT מ־localStorage
    const storedSumAllE = localStorage.getItem('sumAllE');
    // אם קיים ערך ב־localStorage, הקפוץ לתוך התנאי
    if (storedSumAllE&& typeof storedSumAllE === 'string') {
      this.sumAllE = JSON.parse(storedSumAllE);
    }
    
this.indexAll=Math.floor(this.sumAllE/ 10000);
    this.numbersArrayToInBrick = Array.from({ length: 10 }, (_, index) => index + 1);
    this.numbersArray = Array.from({ length: 1530 }, (_, index) => index + 1);
    this.color = true;
    this.timer();
    this.ColorBrickT();
    this.ColorBrickE();
    //alert(this.halfE)
    


  }


  // half7():boolean {
  //   if (this.half1 ==true){
  //     //alert("הגעתי")
  //     this.half1=false
  //     //alert(this.half1)
  //   }
  //   return this.half1;

  // }
  ColorBrickT() {
    this.wholeT = Math.floor(this.sumAllT / 10000);
    this.indexAll = this.wholeT + this.indexAll;
    this.halfT = Math.floor((this.sumAllT % 10000) / 1000);
    if (this.halfT > 0) {
      this.indexAll = this.indexAll + 1;
      this.flagT = 1;
      //alert(this.indexAll + "this.indexAll")
    }
    //alert(this.indexAll+"  indexAll")

    // alert(this.indexAll+"1")
    // alert(this.wholeT+"wholeT")
    //alert(this.halfT+"halfT")

    // console.log("halfT", this.halfT)
    // console.log(this.wholeT, this.halfT, this.sumAllT, "T")
  }
  ColorBrickE() {

    this.wholeE = Math.floor(this.sumAllE / 10000) - this.wholeT;
    this.indexAll = this.wholeE + this.wholeT;
    // alert(this.indexAll+"  2   "+this.sumAllE+ "  sumAllE" )
    // this.wholeE += this.index;
    this.halfE = Math.floor(((this.sumAllE % 10000)) / 1000);
    this.halfE = this.halfE - this.halfT
    // alert(this.halfE + " this.halfE")
    //this. sumAllE=this.wholeE
    if (this.halfE > 0) {
      //this. sumAllE= this.wholeE + 1;
      this.indexAll = this.indexAll + 1;
      this.half1 = true;
      this.flagE = 1;
      //alert(this.half1+ "  half1")
    }
    //alert(this.wholeE+"wholeE")
    //alert(this.halfE+"halfE")
    // console.log(" הגעתי עם סך התחייבות+תרומות", this.wholeE)
    // console.log("halfE", this.halfE)
    // console.log(this.wholeE, "wholeE")
    // console.log(this.wholeE, this.halfE, this.sumAllE, "E")
  }

  submitForm() {
    // כאן תוכל לבצע פעולות נוספות כמו שליחת הנתונים לשרת או עיבוד נוסף
    // console.log('שם פרטי:', this.firstName);
    // console.log('סכום לתרומה:', this.donationAmount);
  }
  submitFormE() {
    // כאן תוכל לבצע פעולות נוספות כמו שליחת הנתונים לשרת או עיבוד נוסף
    // console.log('שם פרטי:', this.firstName);
    // console.log('סכום לתרומה:', this.donationAmount);
  }
  timer() {
    setInterval(() => {
      this.color = !this.color;
    },
      1000);
  }
  addBrick() {

  }



  updateSum1() {
    if (this.isOpenPupAp) {
      this.sumAllT = this.donationAmount + this.sumAllT;
      this.sumE(this.donationAmount);
    } else {
      this.sumE(this.donationAmount);
    }

    // שמור את הערך של sumAllT ב־localStorage
    localStorage.setItem('sumAllT', JSON.stringify(this.sumAllT));
    localStorage.setItem('sumAllE', JSON.stringify(this.sumAllE));
    // ייצא את הערך של sumAllT לקונסול (ניתן להוריד את השורה הזו בהמשך)
    // רענן את הדף
    this.ngOnInit();
  }



  // updateSum() {
  //   // console.log(donation, "donation")
  //   if (this.isOpenPupAp == true) {
  //     this.sumAllT = this.donationAmount + this.sumAllT;
  //     // alert(this.donationAmount+"  donationAmountTTTT) ")
  //     // alert( this.sumAllE+"sumAllE")


  //     // console.log(this.sumAllT);
  //     this.sumE(this.donationAmount);
  //   }
  //   if (this.isOpenPupAp == false) {
  //     //alert(this.donationAmount+"  donationAmountEEEE) ")
  //     // alert( this.sumAllE+"sumAllE")

  //     this.sumE(this.donationAmount);
  //   }
  //   this.ngOnInit()
  // }
  sumE(donation: number) {
    // console.log(donation, "donation")
    // console.log(this.isOpenPupAp, "isOpenPupAp")

    // this.index = this.wholeT;
    // if (this.halfT > 0) {
    // }
    this.sumAllE = this.sumAllE + donation;
    // alert( this.sumAllE+"sumAllE")

    console.log(this.sumAllE + "כל ההתחיבות");
    // console.log(this.index, "index")
  }
  // colorBrick(){
  //   this.sumAllT/10000

  // }
}




