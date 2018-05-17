import { Directive, ElementRef } from '@angular/core';
import { Key } from 'protractor';

@Directive({
  selector: '[Numberinput]',
  host: {
    '(focus)': '_onFocus()',
    '(blur)': '_onBlur()',
    '(keydown)': '_onKeypress($event)'
  }
})
export class NumberinputDirective {

  inputElement: ElementRef;

      constructor(el: ElementRef) {
        this.inputElement = el;
      }

      _onBlur() {
         this.inputElement.nativeElement.value = this.inputElement.nativeElement.value.length > 0 ? parseInt(this.inputElement.nativeElement.value).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") : '';
      }

      _onKeypress(event: KeyboardEvent) {

    //     if (event.key >= Key.A && event.key <= Key.Z)
    // {
    // }
    // else
    // {
    //   event.Handled = true;
    // }
      //  event.Handled = !(char.IsLetter(e.KeyChar) || e.KeyChar == (char)Keys.Back);
      
//var charCode = (event.which) ? event.which : event.keyCode;
// if (charCode > 31 && (charCode < 48 || charCode > 57)) {
//   event.preventDefault();
// }else{
//   return event;
// }
//var key = event.charCode || event.keyCode || 0;

    // allow backspace, tab, delete, arrows, numbers and keypad numbers ONLY
    // if (
    //     key == 8 || 
    //     key == 9 ||
    //     key == 46 ||
    //     (key >= 37 && key <= 40) ||
    //     (key >= 48 && key <= 57) ||
    //     (key >= 96 && key <= 105)){

    //     }else{
    //          event.preventDefault();

    //         }
      //     if((event.which>= 58 && event.which<=126) || (event.keyCode >= 33  && event.which<= 47)){
      //       event.preventDefault();
      //  }
        
      }

}
