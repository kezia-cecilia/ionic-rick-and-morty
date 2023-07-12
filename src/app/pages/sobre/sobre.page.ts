import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
})
export class SobrePage implements OnInit {

  public characters: any[] = []
  public selectedCharacter: any = null;
  public searchTerm: string = '';

  constructor(
    private httpService: HttpService,
  ) { }

  getCharacters() {
    this.httpService.getCharacters().subscribe((data: any) => this.characters = data.results)
  }

  ngOnInit() {
    this.getCharacters();
  }

  showDetails(character: any) {
    this.selectedCharacter = character;
  }

  searchCharacters() {
    if (this.searchTerm.trim() !== '') {
      this.characters = this.characters.filter(character =>
        character.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.getCharacters();
    }
  }
}