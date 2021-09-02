import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  articulos:any = null
  arrayArticulos:Array<any> = new Array();
  arrayPersonajes:Array<any> = new Array();

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    this.http.get("https://rickandmortyapi.com/api/character")
      .subscribe(
        result => {
          this.articulos = result
          this.arrayArticulos = Object.keys(this.articulos).map(key => ({type: key, value: this.articulos[key]}));
          this.arrayPersonajes = this.arrayArticulos[1].value;

        },
        error =>{
          console.log('problemas')
        }
      )
  }

}
