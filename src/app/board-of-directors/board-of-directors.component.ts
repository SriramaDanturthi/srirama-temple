import { Component, OnInit } from '@angular/core';


interface Person {
  name: string;
  role: string;
}
const BoardOfDirectors: Person[] = [
  {
    name: 'Sri. Archakam Padmanabhacharya',
    role: 'Chairmen'
  },
  {
    name: 'Sri. Krishnamohan',
    role: 'Secretary'
  },
  {
    name: 'Smt. Minal Patel',
    role: 'Treasurer'
  },
  {
    name: 'Sri. Mahesh Sachdeva',
    role: 'Director'
  }
];


@Component({
  selector: 'app-board-of-directors',
  templateUrl: './board-of-directors.component.html',
  styleUrls: ['./board-of-directors.component.scss']
}) export class BoardOfDirectorsComponent implements OnInit {

  constructor() { }
  boardOfDirectors = BoardOfDirectors;

  ngOnInit() {
  }
}
