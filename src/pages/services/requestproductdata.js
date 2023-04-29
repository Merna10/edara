class ProductItemReq {
  constructor(name,id,warehouseId, stock,request, status) {
  
    this.name = name;
    this.id = id;
    this.status = status;
    this.warehouseId = warehouseId;
    this.stock = stock;
    this.request = request;
    
  }
}

// Dummy data (simulating back-end data)
export const data = [
  new ProductItemReq(
    "Iphone 11",
    1,
    
    20255511,
    14,
    17,
    "Declined",
  ),
  new ProductItemReq(
    "Iphone 12",
    2,
    
    20255511,
    19,
    15,
    "Approved",
    ),

];
