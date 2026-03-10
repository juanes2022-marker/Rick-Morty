import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { Characterservices } from '../../../core/service/characterservices';
import { Characters } from '../../../core/models/characters';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './character-list.html',
  styleUrl: './character-list.css',
})
export class CharacterList implements OnInit {

  pagenumber: number = 1;
  isloading: boolean = true;
  characters: Characters | undefined;

  name: string = '';
  status: string = '';

  constructor(private characterService: Characterservices) { }
  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() : void {
    this.characterService
    .getCharacters(this.pagenumber).pipe(
      finalize(() => this.isloading = false)
    )
    .subscribe(
      (response) => {
        this.characters = response;
      this.pagenumber++;
      },
      (error) => {
        console.error('Error en la petición:', error);
      }
    )
  }

}
