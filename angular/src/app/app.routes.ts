import { Routes } from '@angular/router';
import { ContactoComponent } from "./components/contacto/contacto.component";
import { IniciarSesionComponent } from "./components/iniciar.sesion/iniciar.sesion.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { NosotrosComponent } from "./components/nosotros/nosotros.component";
import { PrivadoComponent } from "./components/privado/privado.component";
import { ProductosComponent } from "./components/productos/productos.component";
import { RegistrarseComponent } from "./components/registrarse/registrarse.component";
import { ServiciosComponent } from "./components/servicios/servicios.component";

export const routes: Routes = [
    {path : 'contacto', component: ContactoComponent},
    {path : 'iniciar.sesion', component: IniciarSesionComponent},
    {path : 'inicio', component: InicioComponent},
    {path : 'nosotros', component: NosotrosComponent},
    {path : 'privado', component: PrivadoComponent},
    {path : 'productos', component: ProductosComponent},
    {path : 'registrarse', component: RegistrarseComponent},
    {path : 'servicios', component: ServiciosComponent}
];
