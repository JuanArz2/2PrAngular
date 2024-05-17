import { Routes } from '@angular/router';
import { ContactoComponent } from "./components/contacto/contacto.component";
import { IniciarSesionComponent } from "./components/iniciar.sesion/iniciar.sesion.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { NosotrosComponent } from "./components/nosotros/nosotros.component";
import { PrivadoComponent } from "./components/privado/privado.component";
import { ProductosComponent } from "./components/productos/productos.component";
import { RegistrarseComponent } from "./components/registrarse/registrarse.component";
import { ServiciosComponent } from "./components/servicios/servicios.component";
import { PageErrorComponent } from "./components/page.error/page.error.component";

export const routes: Routes = [
    {path : 'contacto', component: ContactoComponent, title: "Contactanos"},
    {path : 'iniciar.sesion', component: IniciarSesionComponent, title: "Login"},
    {path : 'inicio', component: InicioComponent, title: "Inicio"},
    {path : 'nosotros', component: NosotrosComponent, title: "Sobre Nosotros"},
    {path : 'privado', component: PrivadoComponent, title: "Acceso Restringido"},
    {path : 'productos', component: ProductosComponent, title: "Productos"},
    {path : 'registrarse', component: RegistrarseComponent, title: "Registro"},
    {path : 'servicios', component: ServiciosComponent, title: "Servicios"},
    {path: "", redirectTo: "inicio", pathMatch: "full"},
    {path : '**', component: PageErrorComponent, title: "Error 404"},
];
