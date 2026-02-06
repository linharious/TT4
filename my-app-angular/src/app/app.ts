import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  public title = 'my-app-angular';
  public name = 'linharious';
  public imgUrl = 'https://www.istockphoto.com/photos/red-button';
}
