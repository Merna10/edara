class ProductItem {
  constructor(id, name, descr, stock,warehouseId, image) {
    this.image = image;
    this.name = name;
    this.id = id;
    this.descr = descr;
    this.warehouseId = warehouseId;
    this.stock = stock;
    
  }
}

// Dummy data (simulating back-end data)
export const data = [
  new ProductItem(
    
    1,
    "Iphone 11",
    "IPhone 11 is a smartphone designed, developed, and marketed by Apple Inc. It is the thirteenth generation of iPhone, succeeding the iPhone XR, and was unveiled on September 10, 2019, alongside the higher-end iPhone 11 Pro at the Steve Jobs Theater in Apple Park, Cupertino, by Apple CEO Tim Cook.",
    15,
    20255511,
    "https://images.priceoye.pk/apple-iphone-xi-pakistan-priceoye-2kaqt.jpg"
  ),
  new ProductItem(
    
    2,
    "Iphone 12",
    "Apple iPhone 12 is the bigger version of the regular iPhone 12 mini. The handset's hardware include a 6.1-inch OLED display, 5nm Apple A14 Bionic processor, and a dual-camera setup with a large sensor. 5G and Face ID are on board, too. The Apple iPhone 12 starting price is $829.",
    10,
    20255511,
    "https://cdn.shopify.com/s/files/1/2192/4669/products/12problue_5af96677-1a0d-4d1b-be87-b0c0d4ecd4eb_1024x1024@2x.jpg?v=1614601477"
  ),

];
