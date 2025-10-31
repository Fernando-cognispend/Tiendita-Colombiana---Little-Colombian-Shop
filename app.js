const { createApp } = Vue;

createApp({
  data() {
    return {
      filtro: 'todos',
      cantidades: Array(35).fill(1),
      carrito: [],
      mostrarCarrito: false,
      productos: [
        // 1. ARTESANÍAS
        { nombre: "Mochila Wayuu", precio: 180000, descripcion: "Tejida a mano por artesanas de La Guajira", categoria: "artesanias", imagen: "https://images.unsplash.com/photo-1585487000166-6eb5c7e7f775?w=400" },
        { nombre: "Sombrero Vueltiao", precio: 120000, descripcion: "Caña flecha, Sucre y Córdoba", categoria: "artesanias", imagen: "https://images.unsplash.com/photo-1622446273792-1e4e2b0a4e91?w=400" },
        { nombre: "Cerámica de Ráquira", precio: 45000, descripcion: "Figuras decorativas", categoria: "artesanias", imagen: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400" },
        { nombre: "Manillas de chaquiras", precio: 25000, descripcion: "Comunidad Embera", categoria: "artesanias", imagen: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400" },
        { nombre: "Hamaca de San Jacinto", precio: 220000, descripcion: "Algodón natural", categoria: "artesanias", imagen: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400" },

        // 2. COMIDA
        { nombre: "Café del Huila 500g", precio: 35000, descripcion: "Premium orgánico", categoria: "comida", imagen: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400" },
        { nombre: "Bocadillo veleño", precio: 18000, descripcion: "Dulce de guayaba", categoria: "comida", imagen: "https://images.unsplash.com/photo-1625772299846-2c2a6d1d3e8e?w=400" },
        { nombre: "Arequipe de Cajicá", precio: 22000, descripcion: "Frasco 300g", categoria: "comida", imagen: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400" },
        { nombre: "Cocadas de Cartagena", precio: 15000, descripcion: "Paquete x6", categoria: "comida", imagen: "https://images.unsplash.com/photo-1625772299846-2c2a6d1d3e8e?w=400" },
        { nombre: "Chocolate de mesa", precio: 28000, descripcion: "Con panela", categoria: "comida", imagen: "https://images.unsplash.com/photo-1548907042-7349f3a5d5d7?w=400" },

        // 3. MODA
        { nombre: "Camiseta Hecho en Colombia", precio: 45000, descripcion: "Algodón premium", categoria: "moda", imagen: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400" },
        { nombre: "Ruana de Nobsa", precio: 180000, descripcion: "Lana pura", categoria: "moda", imagen: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400" },
        { nombre: "Bolso de fique", precio: 85000, descripcion: "Artesanal", categoria: "moda", imagen: "https://images.unsplash.com/photo-1585487000166-6eb5c7e7f775?w=400" },
        { nombre: "Sombrero aguadeño", precio: 95000, descripcion: "Eje Cafetero", categoria: "moda", imagen: "https://images.unsplash.com/photo-1622446273792-1e4e2b0a4e91?w=400" },
        { nombre: "Collar de tagua", precio: 35000, descripcion: "Ecológico", categoria: "moda", imagen: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400" },

        // 4. HOGAR
        { nombre: "Cuadro Paisajes Colombianos", precio: 65000, descripcion: "Impresión artística", categoria: "hogar", imagen: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400" },
        { nombre: "Vajilla Carmen de Viboral", precio: 120000, descripcion: "Set x4", categoria: "hogar", imagen: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400" },
        { nombre: "Cojín Guacamaya", precio: 38000, descripcion: "Diseño fauna", categoria: "hogar", imagen: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400" },
        { nombre: "Vela aroma café", precio: 25000, descripcion: "Artesanal", categoria: "hogar", imagen: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400" },
        { nombre: "Manta tejida", precio: 95000, descripcion: "Lana natural", categoria: "hogar", imagen: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400" },

        // 5. CULTURA
        { nombre: "Guacharaca artesanal", precio: 45000, descripcion: "Instrumento típico", categoria: "cultura", imagen: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400" },
        { nombre: "Vinilo Cumbia Clásica", precio: 85000, descripcion: "Edición limitada", categoria: "cultura", imagen: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400" },
        { nombre: "Libro Sabores de Colombia", precio: 65000, descripcion: "Recetas regionales", categoria: "cultura", imagen: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400" },
        { nombre: "Juego Conoce Colombia", precio: 75000, descripcion: "Educativo", categoria: "cultura", imagen: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400" },
        { nombre: "Mini gaita decorativa", precio: 35000, descripcion: "Souvenir", categoria: "cultura", imagen: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400" },

        // 6. BELLEZA
        { nombre: "Jabón de café", precio: 18000, descripcion: "Exfoliante natural", categoria: "belleza", imagen: "https://images.unsplash.com/photo-149 Arbor5474472287-4d71bcdd2085?w=400" },
        { nombre: "Aceite de coco", precio: 32000, descripcion: "Prensado en frío", categoria: "belleza", imagen: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400" },
        { nombre: "Crema de aguacate", precio: 45000, descripcion: "Hidratante", categoria: "belleza", imagen: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400" },
        { nombre: "Bálsamo maracuyá", precio: 22000, descripcion: "Labial natural", categoria: "belleza", imagen: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400" },
        { nombre: "Sales de baño amazónicas", precio: 38000, descripcion: "Relajantes", categoria: "belleza", imagen: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400" },

        // 7. SOUVENIRS
        { nombre: "Taza Mapa Colombia", precio: 25000, descripcion: "Cerámica", categoria: "souvenirs", imagen: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400" },
        { nombre: "Llavero Vueltiao", precio: 12000, descripcion: "Miniatura", categoria: "souvenirs", imagen: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400" },
        { nombre: "Imán Paisaje", precio: 8000, descripcion: "Nevera", categoria: "souvenirs", imagen: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400" },
        { nombre: "Mini chiva", precio: 28000, descripcion: "Bus colorido", categoria: "souvenirs", imagen: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400" },
        { nombre: "Paquete Colombia Mini", precio: 95000, descripcion: "5 souvenirs", categoria: "souvenirs", imagen: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400" }
      ]
    };
  },
  computed: {
    productosFiltrados() {
      return this.filtro === 'todos' ? this.productos : this.productos.filter(p => p.categoria === this.filtro);
    },
    total() {
      return this.carrito.reduce((t, i) => t + i.precio * i.cantidad, 0);
    }
  },
  methods: {
    aumentar(i) { this.cantidades[i]++; },
    disminuir(i) { if (this.cantidades[i] > 1) this.cantidades[i]--; },
    agregar(p, i) {
      const cant = this.cantidades[i];
      const existe = this.carrito.find(x => x.nombre === p.nombre);
      if (existe) existe.cantidad += cant;
      else this.carrito.push({ ...p, cantidad: cant });
      this.cantidades[i] = 1;
      this.mostrarCarrito = true;
    },
    aumentarEnCarrito(i) { this.carrito[i].cantidad++; },
    disminuirEnCarrito(i) { if (this.carrito[i].cantidad > 1) this.carrito[i].cantidad--; },
    quitar(i) { this.carrito.splice(i, 1); },
    vaciarCarrito() { this.carrito = []; },
    mensajeWhatsApp() {
      let txt = "¡Hola! Quiero comprar:\n\n";
      this.carrito.forEach(i => txt += `• ${i.nombre} × ${i.cantidad} = $${(i.precio*i.cantidad).toLocaleString()}\n`);
      txt += `\n*Total: $${this.total.toLocaleString()}*`;
      return encodeURIComponent(txt);
    }
  }
}).mount('#app');