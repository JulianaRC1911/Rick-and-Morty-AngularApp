import { Component, OnInit, ViewChild } from '@angular/core';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css', '../../../app/app.component.css'],
})
export class CharactersComponent implements OnInit {
  characters: any[] | undefined;
  pageIndex: number = 0;
  pageSize: number = 5;
  pagedCharacters: any[] = [];
  filteredCharacters: any[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.rickAndMortyService.getCharacters().subscribe((data) => {
      this.characters = data.results;
      console.log(this.characters)
      this.updatePagedCharacters();
    });
  }

  onPageChange(event: any) {
    this.pageIndex = event.pageIndex;
    this.updatePagedCharacters();
  }

  updatePagedCharacters() {
    const startIndex = this.pageIndex * this.pageSize;
    this.pagedCharacters = this.characters!.slice(
      startIndex,
      startIndex + this.pageSize
    );
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

  applyFilter(searchValue: string) {
    const filter = searchValue.trim().toLowerCase();
    this.filteredCharacters = this.characters!.filter((character) =>
      character.name.toLowerCase().includes(filter)
    );
    this.pageIndex = 0;
    this.updatePagedCharacters();
  }
}
