import { Component,
OnInit,
DoCheck,
AfterContentChecked,
AfterContentInit,
AfterViewChecked,
OnDestroy } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent
implements OnInit, DoCheck,
AfterContentChecked,
AfterContentInit,
AfterViewChecked,
OnDestroy {

  constructor(){}
 
  ngAfterViewChecked(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterContentInit(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterContentChecked(): void {
    throw new Error('Method not implemented.');
  }

  ngDoCheck(): void {
      console.log("ngDoCheck")
  }

  ngOnInit(): void {
      console.log("")
  }

  ngOnDestroy(): void {
    console.log("goodbye")
  }

}
