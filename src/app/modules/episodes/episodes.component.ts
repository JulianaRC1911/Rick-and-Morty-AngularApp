import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: [
    './episodes.component.css',
    '../characters/characters.component.css',
  ],
})
export class EpisodesComponent implements OnInit {
  episodes: any[] | undefined;
  pageIndex: number = 0;
  pageSize: number = 5;
  pagedEpisodes: any[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.rickAndMortyService.getEpisodes().subscribe((data) => {
      this.episodes = data.results;
      console.log(this.episodes);
      this.updatePagedEpisodes();
    });
  }

  onPageChange(event: any) {
    this.pageIndex = event.pageIndex;
    this.updatePagedEpisodes();
  }

  updatePagedEpisodes() {
    const startIndex = this.pageIndex * this.pageSize;
    this.pagedEpisodes = this.episodes!.slice(
      startIndex,
      startIndex + this.pageSize
    );
  }

  mapEpisodeToImageName(episodeName: string): string {
    return episodeName.replace(/\s+/g, '_').toLowerCase() + '.jpg';
  }

  getImageUrl(episodeName: string): string {
    const imageName = this.mapEpisodeToImageName(episodeName);
    return `assets/image/randm.jpg`;
  }
  
}
