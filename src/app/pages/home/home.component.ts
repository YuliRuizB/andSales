import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-home',  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  showRegistrationForm = false;

  formData = {
    nombre: '',
    apellidos: '',
    correo: '',
    telefono: '',
    giro: '',
    mensaje: ''
  };
  constructor(private firestore: AngularFirestore) {}

  toggleRegistration() {
    this.showRegistrationForm = !this.showRegistrationForm;
    if (this.showRegistrationForm) {
      setTimeout(() => {
        const element = document.getElementById('download');
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }

  submitForm() {
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviando los datos a un servicio
    this.firestore.collection('andContacts').add(this.formData)
      .then(() => {
        alert('¡Gracias! Pronto nos comunicaremos contigo.');

        // Limpiar el formulario
        this.formData = {
          nombre: '',
          apellidos: '',
          correo: '',
          telefono: '',
          giro: '',
          mensaje: ''
        };
      })
      .catch((error : any) => {
        console.error('Error al enviar el formulario:', error);
        alert('Ocurrió un error al enviar el formulario. Intenta nuevamente.');
      });
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  scrollToContact(): void {
    const el = document.getElementById('contactUs');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollTyoeOf(): void {
    const el = document.getElementById('typesOf');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

 toggleMenu() {
    const el = document.getElementById('mobileMenu');
    if (el) {
       el.classList.toggle('show'); // Esta línea muestra u oculta el menú
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

}