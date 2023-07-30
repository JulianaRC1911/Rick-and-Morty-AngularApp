import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: [
    './locations.component.css',
    '../characters/characters.component.css',
  ],
})
export class LocationsComponent implements OnInit {
  location: any[] | undefined;
  pageIndex: number = 0;
  pageSize: number = 5;
  pagedLocation: any[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.rickAndMortyService.getLocation().subscribe((data) => {
      this.location = data.results;
      console.log(this.location);
      this.updatePagedLocation();
    });
  }

  onPageChange(event: any) {
    this.pageIndex = event.pageIndex;
    this.updatePagedLocation();
  }

  updatePagedLocation() {
    const startIndex = this.pageIndex * this.pageSize;
    this.pagedLocation = this.location!.slice(
      startIndex,
      startIndex + this.pageSize
    );
  }

  mapEpisodeToImageName(episodeName: string): string {
    return episodeName.replace(/\s+/g, '_').toLowerCase() + '.jpg';
  }

  getImageUrl(episodeName: string): string {
    const imageName = this.mapEpisodeToImageName(episodeName);
    return `assets/image/planet.jpg`;
  }
  
}
