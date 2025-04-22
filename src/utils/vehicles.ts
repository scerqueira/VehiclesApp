import { Vehicle } from '../types/vehicles';

export const getVehiclePhotoUrl = (make: Vehicle['make']): string | null => {
  if (!make) {
    return 'null';
  }

  switch (make) {
    case 'Audi':
      return 'https://banner2.cleanpng.com/lnd/20241123/p/f52bf22588b4d8d25e0269286c7dd7.webp';
    case 'BMW':
      return 'https://banner2.cleanpng.com/20180406/zqe/avghehgyy.webp';
    case 'Honda':
      return 'https://banner2.cleanpng.com/lnd/20241121/jl/70e7693a1fffa89f38dd8c07d771db.webp';
    case 'Mercedes-Benz':
      return 'https://banner2.cleanpng.com/lnd/20241214/hk/ae2bae286f36d991b74497741b38d1.webp';
    case 'Toyota':
      return 'https://banner2.cleanpng.com/20180715/jso/aavgkn5f5.webp';
    case 'Volvo':
      return 'https://banner2.cleanpng.com/20180908/kfk/kisspng-ab-volvo-car-truck-mercedes-benz-group-1-automotiv-autoneum-mastering-sound-and-heat-5b93a86a841823.1821299715364035625411.jpg';
    case 'Ford':
      return 'https://banner2.cleanpng.com/20180815/zs/205987ca10343f864fd82fab19e4a5e3.webp';
    default:
      return null;
  }
};
