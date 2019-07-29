import { Component, OnInit } from '@angular/core';
import { UsersService} from '../../users.service';

@Component({
  selector: 'c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component implements OnInit {

  constructor(public svc:UsersService) { }

  ngOnInit() {
  }

}
