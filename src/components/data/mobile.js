export const mobilePhones = [
  {
    id: 1,
    title: 'Samsung Galaxy S21',
    category: 'Smartphones',
    description: 'El Samsung Galaxy S21 es un teléfono inteligente potente y con muchas características. Cuenta con una pantalla impresionante, un procesador de alto rendimiento y un sistema de cámara versátil.',
    stock: 10,
    price: 999,
    img: '/src/assets/samsung-galaxy-s21-fe-5g.jpg'
  },
  {
    id: 2,
    title: 'Apple iPhone 12',
    category: 'Smartphones',
    description: 'El Apple iPhone 12 es un teléfono inteligente premium con un diseño elegante y características de última generación. Ofrece un potente chip A14 Bionic, un avanzado sistema de cámara y conectividad 5G.',
    stock: 5,
    price: 1099,
    img: '/src/assets/apple-iphone-12.jpg'
  },
  {
    id: 3,
    title: 'OnePlus 9 Pro',
    category: 'Smartphones',
    description: 'El OnePlus 9 Pro es un teléfono insignia que ofrece un rendimiento excepcional y una pantalla impresionante. Cuenta con un potente procesador Snapdragon, una pantalla de alta frecuencia de actualización y una configuración de cámara versátil.',
    stock: 7,
    price: 899,
    img: '/src/assets/oneplus-9-pro-.jpg'
  },
  {
    id: 4,
    title: 'Samsung Galaxy Tab S7',
    category: 'Tablets',
    description: 'La Samsung Galaxy Tab S7 es una tablet premium con una gran pantalla y un hardware potente. Ofrece una excelente experiencia multimedia, una batería de larga duración y soporte para el S Pen.',
    stock: 3,
    price: 699,
    img: '/src/assets/samsung-galaxy-tab-s7-1.jpg'
  },
  {
    id: 5,
    title: 'Apple iPad Pro',
    category: 'Tablets',
    description: 'El Apple iPad Pro es una tablet de alto rendimiento que borra la línea entre una tablet y una laptop. Cuenta con una impresionante pantalla Liquid Retina XDR, el potente chip M1 y soporte para el Apple Pencil y el Magic Keyboard.',
    stock: 8,
    price: 899,
    img: '/src/assets/apple-ipad-pro-129-2022.jpg'
  },
  {
    id: 6,
    title: 'Dell XPS 13',
    category: 'Notebooks',
    description: 'La Dell XPS 13 es una notebook ultradelgada y liviana con un rendimiento excepcional. Cuenta con una pantalla InfinityEdge, un potente procesador y una gran duración de la batería.',
    stock: 12,
    price: 1299,
    img: '/src/assets/pc_dell.jpg'
  }
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mobilePhones);
    }, 1000);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mobilePhones.find((prod) => prod.id === parseInt(productId)));
    }, 1000);
  });
};


export const getProductByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mobilePhones.filter((prod) => prod.category === category));
    }, 1000);
  });
};