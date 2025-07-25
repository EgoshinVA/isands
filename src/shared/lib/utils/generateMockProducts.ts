import type { ProductList } from '../../../features/product-comparison/types/product.ts';

import iphone12 from './../../assets/images/products/ip12.svg';
import mi11Lite from './../../assets/images/products/Mi11.svg';
import galaxyA72 from './../../assets/images/products/A72.svg';
import galaxyS21 from './../../assets/images/products/S21.svg';
import iphoneXr from './../../assets/images/products/Xr.svg';
import realme8Pro from './../../assets/images/products/8Pro.svg';

export const generateMockProducts = (): ProductList => {
  const mockSpecs = [
    {
      Производитель: 'Apple',
      'год релиза': '2020',
      'Диагональ экрана (дюйм)': '6,1',
      'Страна-производитель': 'Китай',
      'Объем памяти': '128 Гб',
      'Частота обновления экрана': '60 Гц',
      NFC: false,
      'Поддержка eSIM': true,
      'Поддержка беспроводной зарядки': true,
      Стоимость: '81 990 ₽',
    },
    {
      Производитель: 'Xiaomi',
      'год релиза': '2021',
      'Диагональ экрана (дюйм)': '6,55',
      'Страна-производитель': 'Китай',
      'Объем памяти': '128 Гб',
      'Частота обновления экрана': '90 Гц',
      NFC: true,
      'Поддержка eSIM': true,
      'Поддержка беспроводной зарядки': false,
      Стоимость: '27 490 ₽',
    },
    {
      Производитель: 'Samsung',
      'год релиза': '2021',
      'Диагональ экрана (дюйм)': '6,7',
      'Страна-производитель': 'Вьетнам',
      'Объем памяти': '128 Гб',
      'Частота обновления экрана': '90 Гц',
      NFC: true,
      'Поддержка eSIM': false,
      'Поддержка беспроводной зарядки': true,
      Стоимость: '32 890 ₽',
    },
    {
      Производитель: 'Samsung',
      'год релиза': '2021',
      'Диагональ экрана (дюйм)': '6,5',
      'Страна-производитель': 'Вьетнам',
      'Объем памяти': '128 Гб',
      'Частота обновления экрана': '90 Гц',
      NFC: true,
      'Поддержка eSIM': false,
      'Поддержка беспроводной зарядки': true,
      Стоимость: '27 500 ₽',
    },
    {
      Производитель: 'Apple',
      'год релиза': '2020',
      'Диагональ экрана (дюйм)': '6,5',
      'Страна-производитель': 'Китай',
      'Объем памяти': '128 Гб',
      'Частота обновления экрана': '60 Гц',
      NFC: false,
      'Поддержка eSIM': false,
      'Поддержка беспроводной зарядки': true,
      Стоимость: '61 340 ₽',
    },
    {
      Производитель: 'Realme',
      'год релиза': '2021',
      'Диагональ экрана (дюйм)': '6,1',
      'Страна-производитель': 'Китай',
      'Объем памяти': '128 Гб',
      'Частота обновления экрана': '90 Гц',
      NFC: true,
      'Поддержка eSIM': true,
      'Поддержка беспроводной зарядки': true,
      Стоимость: '21 450 ₽',
    },
  ];

  const productImages = [iphone12, mi11Lite, galaxyA72, galaxyS21, iphoneXr, realme8Pro];

  const productNames = [
    'Apple iPhone 12',
    'Xiaomi Mi 11 Lite',
    'Samsung Galaxy A72',
    'Samsung Galaxy S21',
    'Apple iPhone Xr',
    'Realme 8 Pro',
  ];

  return mockSpecs.map((specs, index) => ({
    id: `prod-${index + 1}`,
    name: productNames[index],
    image: productImages[index],
    specs,
  }));
};
