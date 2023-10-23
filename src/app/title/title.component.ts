import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges{

  @Input() nome:string = ''

  constructor(){}

  ngOnChanges(): void{
    console.log('OnChange')
  }

  ngOnInit(): void {
      this.nome = `ola, ${this.nome}`
  }
}
