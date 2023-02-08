import { Component, OnInit, Input } from '@angular/core';
declare var jwplayer: any;
@Component({
  selector: 'app-jwplayer',
  templateUrl: './jwplayer.component.html',
  styleUrls: ['./jwplayer.component.scss'],
})
export class JwplayerComponent implements OnInit {
  // @Input() videoLink:string;
  constructor() {}

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

    const playerJw = jwplayer('player').setup({
      playlist: [
        {
          file: 'assets/Khatal.mp4',
        },
      ],
      autostart: true,
    });

    // jwplayer('player').setup({
    //   file: 'assets/Khatal.mp4',
    //   image: '/uploads/example.jpg',
    // });
  }
}
