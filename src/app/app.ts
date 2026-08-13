import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Home } from './home/home';
import { About } from './about/about';
import { Education } from './education/education';
import { Research } from './research/research';
import { Publications } from './publications/publications';
import { Books } from './books/books';
import { Patents } from './patents/patents';
import { Achievements } from './achievements/achievements';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Home,
    About,
    Education,
    Research,
    Publications,
    Books,
    Patents,
    Achievements,
    Contact
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'indira-portfolio';
}