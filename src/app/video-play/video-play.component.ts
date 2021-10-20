import {Component, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-video-play',
  templateUrl: './video-play.component.html',
  styleUrls: ['./video-play.component.scss']
})
export class VideoPlayComponent implements OnInit {
  @ViewChild('video') video;

  constructor() {}

  ngOnInit(): void {
  }

  startVideo(isStart){
    console.log(this.video);
    navigator.mediaDevices.getUserMedia({video: isStart})
      .then(videoStream => {
        const play = this.video.nativeElement;
        play.srcObject = videoStream;
        play.play();
      });
  }
}
