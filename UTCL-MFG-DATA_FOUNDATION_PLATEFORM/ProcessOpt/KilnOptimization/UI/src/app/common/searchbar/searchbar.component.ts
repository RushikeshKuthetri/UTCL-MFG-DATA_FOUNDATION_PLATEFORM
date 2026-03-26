import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html'
})
export class SearchbarComponent {

  searchValue: string = '';

  @Output() searchChange = new EventEmitter<string>();

  onSearch() {
    this.searchChange.emit(this.searchValue);
  }

}