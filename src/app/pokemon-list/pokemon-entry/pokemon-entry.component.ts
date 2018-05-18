import { Component, OnInit, Input } from '@angular/core';
import {PokemonEntry} from '../../shared/models/pokemon-entry';

@Component({
  selector: 'app-pokemon-entry',
  templateUrl: './pokemon-entry.component.html',
  styleUrls: ['./pokemon-entry.component.css']
})
export class PokemonEntryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() pokemon: PokemonEntry = null;
  @Input() withLink: boolean = true;

}
