import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Navigation } from "./navigation/navigation";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule, ReactiveFormsModule, Navigation],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('it-services');
}
