import $ from 'jquery';
import { add, subtract } from './modules/math';

const item1Price = 6700;
const item2Price = 5600;
const coupon = 400;
const totalPrice = add(item1Price, item2Price);
const finalPrice = subtract(totalPrice, coupon);

$('body').text(finalPrice);