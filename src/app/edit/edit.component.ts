import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BaseService } from '../services/base-service.service';
import { Post } from '../model/post';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  form: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    body: new FormControl('', Validators.required),
  });

  userId: any;
  id: any;

  post: Post = new Post();

  constructor(public service: BaseService, private router: Router) {}

  ngOnInit(): void {
    this.userId = window.sessionStorage.getItem('userId');
    this.id = window.sessionStorage.getItem('id');
  }

  get f() {
    return this.form.controls;
  }

  submit() {

    this.post.userId = this.userId;
    this.post.id = this.id;
    this.post.title = this.form.value.title;
    this.post.body = this.form.value.body;
    this.service.updatepost(this.id, this.post).subscribe((res) => {
      alert('Post Updated successfully!');
    });
  }
}
