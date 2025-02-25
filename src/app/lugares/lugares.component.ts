import { Component } from '@angular/core';
import { SitiosService } from '../sitios-service/sitio.service';
import { Sitio } from '../sitios-service/sitio.model';
import { SitioCardComponent } from "../components/sitio-card/sitio-card.component";
import { CommonModule } from '@angular/common';
import { catchError, of } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lugares',
  imports: [SitioCardComponent, CommonModule, FormsModule],
  templateUrl: './lugares.component.html',
  styleUrl: './lugares.component.css'
})
export class LugaresComponent {
  sitios: Sitio[] = [];
  sitioAleatorio?: Sitio;
  filtroTipo: string = '';
  filtroIsla: string = '';  // Filtro por isla
  terminoBusqueda: string = '';

  constructor(private sitiosService: SitiosService) {}
  
  ngOnInit() {
    this.sitiosService.getSitios().pipe(
      catchError(error => {
        console.error('Error al obtener sitios:', error);
        return of([]);
      })
    ).subscribe(data => {
      this.sitios = data || [];
    });
  }

  obtenerSitioAleatorio() {
    this.sitiosService.getRandomSitio().pipe(
      catchError(error => {
        console.error('Error al obtener sitio aleatorio:', error);
        return of(null);
      })
    ).subscribe(data => {
      this.sitioAleatorio = data || undefined;
    });
  }

  get sitiosFiltrados(): Sitio[] {
    let sitiosFiltrados = this.sitios;

    // Filtrar por tipo si se ha seleccionado uno
    if (this.filtroTipo) {
      sitiosFiltrados = sitiosFiltrados.filter(s => s.tipo === this.filtroTipo);
    }

    // Filtrar por isla si se ha seleccionado una
    if (this.filtroIsla) {
      sitiosFiltrados = sitiosFiltrados.filter(s => s.isla === this.filtroIsla);
    }

    // Filtrar por término de búsqueda
    if (this.terminoBusqueda) {
      sitiosFiltrados = sitiosFiltrados.filter(s => s.nombre.toLowerCase().includes(this.terminoBusqueda.toLowerCase()));
    }

    return sitiosFiltrados;
  }
}
