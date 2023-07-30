import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css', '../characters/characters.component.css'],
})
export class CharacterDetailComponent implements OnInit {
  character: any;

  constructor(
    private route: ActivatedRoute,
    private rickAndMortyService: RickAndMortyService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const characterId = params.get('id');
      
      if (characterId !== null) { 
        const numericId = +characterId;
        if (!isNaN(numericId)) {
          this.rickAndMortyService.getCharacterById(numericId).subscribe(data => {
            this.character = data;
          });
        }
      }
    });
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Alive':
        return 'status-alive';
      case 'unknown':
        return 'status-unknown';
      case 'Dead':
        return 'status-dead';
      default:
        return '';
    }
  }

  getStatusBorderClass(status: string): string {
    switch (status) {
      case 'Alive':
        return 'border-alive';
      case 'unknown':
        return 'border-unknown';
      case 'Dead':
        return 'border-dead';
      default:
        return '';
    }
  }
}
