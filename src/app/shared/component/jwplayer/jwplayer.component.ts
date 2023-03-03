import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../../service/common.service';
declare var jwplayer: any;
@Component({
  selector: 'app-jwplayer',
  templateUrl: './jwplayer.component.html',
  styleUrls: ['./jwplayer.component.scss'],
})
export class JwplayerComponent implements OnInit {
  // @Input() videoLink:string;
  constructor(private _commonService: CommonService) {}

  ngOnInit() {
    // const playerJw = jwplayer('player').setup({
    //   title: 'Player Test',
    //   playlist: 'assets/Khatal.mp4',
    //   width: 640,
    //   height: 360,
    //   aspectratio: '16:9',
    //   mute: false,
    //   autostart: true,
    //   primary: 'html5',
    // });

    this._commonService.playedVideo$.subscribe((video: string) => {
      const playerJw = jwplayer('player').setup({
        playlist: [
          {
            file: video,
          },
        ],
        autostart: 'true',
      });
    });

    // jwplayer('player').setup({
    //   file: 'assets/Khatal.mp4',
    //   image: '/uploads/example.jpg',
    // });
  }
}
