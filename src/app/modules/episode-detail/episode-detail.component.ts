import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: [
    './episode-detail.component.css',
    '../characters/characters.component.css',
  ],
})
export class EpisodeDetailComponent implements OnInit {
  episode: any | undefined;

  constructor(
    private route: ActivatedRoute,
    private rickAndMortyService: RickAndMortyService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const episodeId = params.get('id');

      if (episodeId !== null) {
        const numericId = +episodeId; 
        if (!isNaN(numericId)) {
          this.rickAndMortyService.getEpisodeById(numericId).subscribe((data) => {
            this.episode = data;
          });
        }
      }
    });
  }

  mapEpisodeToImageName(episodeName: string): string {
    return episodeName.replace(/\s+/g, '_').toLowerCase() + '.jpg';
  }

  getImageUrl(episodeName: string): string {
    const imageName = this.mapEpisodeToImageName(episodeName);
    return `assets/image/randm.jpg`;
  }
}
