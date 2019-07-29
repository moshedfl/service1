import { Component, OnInit } from '@angular/core';
import { UsersService} from '../../users.service';

@Component({
  selector: 'c4',
  templateUrl: './c4.component.html',
  styleUrls: ['./c4.component.css']
})
export class C4Component implements OnInit {

  constructor(public svc:UsersService) { }

  ngOnInit() {
  }

}
