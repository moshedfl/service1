import { Component, OnInit } from '@angular/core';
import { UsersService} from '../../users.service';

@Component({
  selector: 'c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

  constructor(public svc:UsersService) { }

  ngOnInit() {
  }

}
