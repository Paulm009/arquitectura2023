import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../common/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userRole: string = '';

  constructor(private authService: AuthService) {
    const roles = this.authService.getRoles();
    this.userRole = roles.length > 0 ? roles[0] : '';
  }

  ngOnInit(): void {
  }

}
