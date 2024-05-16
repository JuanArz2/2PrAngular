import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ContactoComponent } from './components/contacto/contacto.component';
import { IniciarSesionComponent } from './components/iniciar.sesion/iniciar.sesion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { PrivadoComponent } from './components/privado/privado.component';
import { ProductosComponent } from './components/productos/productos.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    ContactoComponent, IniciarSesionComponent, InicioComponent, NosotrosComponent, PrivadoComponent, ProductosComponent, RegistrarseComponent, ServiciosComponent, HeaderComponent, NavComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
