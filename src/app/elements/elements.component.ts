import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Element} from './element.model';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.scss']
})
export class ElementsComponent implements OnInit {

  @Output() message: string;
  @Output() clickedId: number;
  @Output() choice: Element;
  random: number = null;
  result: string;
  class: string;

  elements: Element[] = [
    new Element('Rock', 'https://images.thdstatic.com/productImages/6eafa127-90cf-4c12-9fd7-e13edee72902/svn/outdoor-essentials-fake-rocks-204956-64_400.jpg'),
    new Element('Scissors', 'https://images.squarespace-cdn.com/content/v1/58b84e01bebafbdd4142117c/1501522029714-RG2UM6TAK0XQL1SSC8X7/A6128weiss.jpg?format=1000w'),
    new Element('Paper', 'https://cf.ltkcdn.net/origami/images/orig/61394-400x300-Yellow_paper.jpg'),
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  indexOfEl(i){
    this.clickedId = i;
    this.message = '';
    this.random = Math.round(Math.random() * 2);
    this.choice = this.elements[this.random];

    if (i === this.random){
      this.result = 'Draw!';
      this.class = 'blue';
    } else if ((this.random + 1 ) % this.elements.length === this.clickedId){
      this.result = 'Computer is winner :(';
      this.class = 'red';
    } else {
      this.result = 'I\'m winner :)';
      this.class = 'green';
    }

    // if (i === this.random){
    //   this.result = 'Draw!';
    //   this.class = 'blue';
    // } else if ((this.random === 0 && i === 1) || (this.random === 1 && i === 2 ) || (this.random === 2 && i === 0 )){
    //   this.result = 'Computer is winner :(';
    //   this.class = 'red';
    // } else {
    //   this.result = 'I\'m winner :)';
    //   this.class = 'green';
    // }
  }

  checking(){
    setTimeout(() => {
      this.message = this.result;
    }, 2000);
  }
}
