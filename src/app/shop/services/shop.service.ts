import { Injectable } from '@angular/core';
import type { Shop } from '../models/shop.interface';

const SHOPS: Shop[] = [
  {
    id: 1,
    name: 'Kiosco Argentino',
    description: 'Kiosco Argentino, un lugar de confianza a su servicio.',
    category: 'Kiosco',
    active: true,
    email: 'kiosco.argentino@email.com',
    whatsapp: '123456789',
    image:
      'https://www.voicesconsultancy.com/var/voicesconsultancy_com/storage/images/informes/el-kiosco-argentino/949-3-esl-AR/El-kiosco-argentino_full.jpg',
  },
  {
    id: 2,
    name: 'Almacén Norte',
    description: 'Todo lo que necesitás en un solo lugar.',
    category: 'Almacén',
    active: true,
    email: 'almacennorte@email.com',
    whatsapp: '123456789',
    image:
      'https://finde.latercera.com/wp-content/uploads/2019/10/Steven-Market-OK.jpg',
  },
  {
    id: 3,
    name: 'Ferretería La Nueva',
    description: 'Todos los insumos para su hogar, al mejor precio.',
    category: 'Ferretería',
    active: true,
    email: 'ferreterialanueva@email.com',
    whatsapp: '123456789',
    image:
      'https://tytenlinea.com/wp-content/uploads/2021/06/Screen-Shot-2021-06-15-at-2.46.57-PM-800x445.png',
  },
  {
    id: 4,
    name: 'Supermercado Día',
    description:
      'Los mejores productos, siempre al mejor precio. Contamos con delivery Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam corrupti assumenda dolorem culpa illo non modi ad earum voluptate necessitatibus, dolore perferendis aut rem nequecumque possimus eius. Laborum, saepe!',
    category: 'Supermercado',
    active: true,
    email: 'supermercado@email.com',
    whatsapp: '123456789',
    image: 'https://www.cronista.com/files/image/290/290021/5ffe009e76b06.jpg',
  },
  {
    id: 5,
    name: "Weiss's Burger",
    description:
      'Ven a disfrutar en familia o solicita la mejor hamburguesa y te la enviamos a tu domicilio.',
    category: 'Fast food',
    active: true,
    email: 'weissburger@email.com',
    image:
      'https://www.sillasmesas.es/blog/wp-content/webp-express/webp-images/uploads/2019/10/Claves-para-montar-una-hamburgueseria.jpg.webp',
  },
  {
    id: 6,
    name: 'Corralón Centro',
    description: 'Todos los materiales para la construcción de tu casa.',
    category: 'Construcción',
    active: true,
    email: 'corralon@email.com',
    whatsapp: '123456789',
    image:
      'https://www.corraloncentro.com/uploads/8/7/3/6/8736780/2628470_orig.png',
  },
];

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  getAll(): Shop[] {
    return SHOPS;
  }

  getById(id: number) {
    return SHOPS.find((shop) => shop.id === +id);
  }
}
