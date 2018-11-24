import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  posts: Post[];
  isEdit: boolean = false;

  constructor(private dataService: DataService) {
    console.log('constructor ran...');
   }

  ngOnInit() {
    console.log('ngOnInit ran...');
    this.name = 'Charity';
    this.age = 30;
    this.email = 'chung2014@gmail.com'
    this.address = {
      street: '50 Hinessy Street',
      city: 'Hong Kong Island',
      state: 'Hong Kong'
    }
    this.hobbies = ['write code', 'watch movies', 'listen to music'];

    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  onClick() {
    this.name = 'Cheung';
    this.hobbies.push('new hobby')
  }

  addHobby(text) {
    console.log(text);
    this.hobbies.unshift(text);
    return false;
  }

  deleteHobby(text) {
    this.hobbies = this.hobbies.filter(hobby => hobby !== text);
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }
}

interface Address {
  street: string,
  city: string,
  state: string
}

interface Post {
  id: number,
  title: string,
  body: string,
  userId: number
}