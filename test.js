import tokenizer from './tokenizer'
import parser from './parser'
import transformer from './transformer'
import codeGenerator from './codeGenerator'

const tokenizer_res = tokenizer('(add 2 (subtract 4 2))')
const parser_res = parser(tokenizer_res)
const transformer_res = transformer(parser_res)
const codeGenerator_res = codeGenerator(transformer_res)
// console.log(codeGenerator_res)

function formatPrice (price) {
  if (!price) {
    return 0
  }
  if (/,/.test(price)) {
    return price
  }
  price = String(price)
  const intPrice = price.match(/\d+/)[0]
  const HOLDER = 'HOLDER'
  const holder = price.replace(intPrice, HOLDER)
  const intPriceArr = intPrice.split('').reverse()

  let res = ''
  intPriceArr.forEach((item, index) => {
    if (index % 3 === 0 && index) {
      res = item + ',' + res
    } else {
      res = item + res
    }
  })
  return holder.replace(HOLDER, res)
}

// function formatPrice (value) {
//   if (!value) {
//     return 0
//   }
//   if (/,/.test(value)) {
//     return value
//   }
//   value = String(value)
//   const reg = /\d+\.?\d*/
//   const HOLDER = 'HOLDER'
//   const price = value.match(reg)[0]
//   const holder = value.replace(price, HOLDER)
//   value = holder.replace(HOLDER, Number(price).toLocaleString())
//   return value
// }

console.log(formatPrice(2689999))
console.log(formatPrice('2689999'))
console.log(formatPrice('2689999元'))
console.log(formatPrice('裸车价：￥2689999'))
console.log(formatPrice('优惠：2689999元'))
console.log(formatPrice('到手价：2689999.99元'))
console.log(formatPrice('2,689,999'))
console.log(formatPrice(''))
console.log(formatPrice())
