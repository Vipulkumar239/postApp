import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BaseService } from '../services/base-service.service';
import { Post } from '../model/post';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl('', Validators.required),
    title: new FormControl('', [Validators.required]),
    body: new FormControl('', Validators.required),
  });

  post: Post = new Post();

  constructor(public service: BaseService, private router: Router) {}

  ngOnInit(): void {}

  get f() {
    return this.form.controls;
  }

  submit() {
    this.post.body = this.form.value.body;
    this.post.title = this.form.value.title;
    this.post.id = this.form.value.id;

    this.service.createpost(this.post).subscribe((res) => {
      alert('Post created successfully!');
    });
  }
}
