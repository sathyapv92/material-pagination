import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private http:HttpClient) {   http.get('http://jsonplaceholder.typicode.com/posts')
.subscribe(response =>{
console.log(response);
}); }

  ngOnInit() {
  }

}
