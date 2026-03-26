import { Component } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
})
export class SearchbarComponent {
  searchValue = '';

  onSearch(): void {
    console.log('Search:', this.searchValue);
  }
}