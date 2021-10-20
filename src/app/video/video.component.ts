import {Component, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})

export class VideoComponent implements OnInit{
  @ViewChild('video') video;

  constructor() {}

  ngOnInit() {}

  // onStart(isVideo){
  //   navigator.mediaDevices.getUserMedia({video: isVideo})
  //     .then((ms) => {
  //       const play = this.video.nativeElement;
  //       play.srcObject = ms;
  //       play.play();
  //     });
  // }
}
