import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css', '../characters/characters.component.css']
})
export class LocationDetailComponent implements OnInit {
  location: any | undefined;

  constructor(
    private route: ActivatedRoute,
    private rickAndMortyService: RickAndMortyService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const locationId = params.get('id');

      if (locationId !== null) {
        const numericId = +locationId; 
        if (!isNaN(numericId)) {
          this.rickAndMortyService.getLocationById(numericId).subscribe((data) => {
            this.location = data;
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
