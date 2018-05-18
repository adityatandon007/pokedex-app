import { Component, OnInit, Input } from '@angular/core';
import {PokemonStats} from '../../shared/models/pokemon-stats';

@Component({
  selector: 'app-pokemon-stats',
  templateUrl: './pokemon-stats.component.html',
  styleUrls: ['./pokemon-stats.component.css']
})
export class PokemonStatsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() stats: PokemonStats;

  getStatPercent(value: number): string {
    return value / 255 * 100 + '%';
  }

}
