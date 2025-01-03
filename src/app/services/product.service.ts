import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Air Jordan 9 Retro OG White & Black', price: 390, description: 'Jumpman', imageUrl: 'https://static.nike.com/a/images/w_1280,q_auto,f_auto/nfo8pqgxlpmpeftollgc/air-jordan-9-retro-og-white-black-2016-release-date.jpg' },
    { id: 2, name: 'Air Jordan 1 High Travis Scott', price: 380, description: 'Stylish', imageUrl: 'https://static.nike.com/a/images/w_1280,q_auto,f_auto/qhkqa20avfhumxwky4rq/air-jordan-1-high-travis-scott-release-date.jpg' },
    { id: 3, name: 'Air Jordan 11 Retro Black & Concord-White', price: 360, description: 'Fly High', imageUrl: 'https://static.nike.com/a/images/w_1280,q_auto,f_auto/syvt6ias1y16kyrwbalh/air-jordan-11-retro-black-concord-white-release-date.jpg' },
    { id: 4, name: 'Air Jordan 4 White Thunder', price: 370, description: 'Drip Too Hard', imageUrl: 'https://static.nike.com/a/images/w_1280,q_auto,f_auto/c143f111-dfbd-455b-984b-493f27ec2be0/air-jordan-4-white-thunder-fq8138-001-release-date.jpg' },
    { id: 5, name: 'Adidas Campus 00s Shoes Turquoise', price: 180, description: 'Underground', imageUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6cdd33c339154a90b10983ec0c9fc918_9366/Campus_00s_Shoes_Turquoise_ID1437_01_standard.jpg' },
    { id: 6, name: 'Adidas Samba ADV Shoes Blue', price: 160, description: 'Stockholm Style', imageUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5588f39b546a493b8433ae7750cb92e5_9366/Samba_ADV_Shoes_Blue_JP5719_01_standard.jpg' },
    { id: 7, name: 'Adidas Gazelle Indoor Shoes Burgundy', price: 190, description: 'Motion', imageUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e5db3307cf524ed29c4bd298b2ed499e_9366/Gazelle_Indoor_Shoes_Burgundy_JI0324_01_standard.jpg' },
    { id: 8, name: 'Adidas Handball Spezial Shoes Black ', price: 170, description: 'Casual', imageUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/00f2e89fe4104bcbb27377ec8d8cd7f0_9366/Handball_Spezial_Shoes_Black_IE5897_01_standard.jpg' },
    { id: 9, name: 'SB Dunk Low Supreme', price: 280, description: 'Flex', imageUrl: 'https://static.nike.com/a/images/w_1280,q_auto,f_auto/hrlnklb0xyqvff8qu2tf/sb-dunk-low-supreme-release-date.jpg' },
    { id: 10, name: 'Nike Dunk Low Red Panda Velvet Brown Sanddrift Rugged Orange', price: 290, description: 'Dirty', imageUrl: 'https://static.ftshp.digital/img/p/1/0/4/0/1/9/4/1040194-full_product.jpg' },
    { id: 11, name: 'Nike Air Dunk Low Jumbo', price: 270, description: 'Comfort', imageUrl: 'https://media.jdsports.com/i/jdsports/DV0821_103_P1?$default$&w=671&&h=671&bg=rgb(237,237,237)' },
    { id: 12, name: 'Nike Dunk Low Panda Retro', price: 260, description: 'Blend in', imageUrl: 'https://static.nike.com/a/images/t_default/0f76f73e-2578-4d62-abab-c5563ea4f78c/NIKE+DUNK+LOW+RETRO.png' },
  ];
  

  private cart: Product[] = [];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  addToCart(product: Product): void {
    this.cart.push(product);
  }

  getCart(): Product[] {
    return this.cart;
  }
}
