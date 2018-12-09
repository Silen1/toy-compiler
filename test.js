import tokenizer from './tokenizer'
import parser from './parser'
import transformer from './transformer'
import codeGenerator from './codeGenerator'

const tokenizer_res = tokenizer('(add 2 (subtract 4 2) 3)')
const parser_res = parser(tokenizer_res)
const transformer_res = transformer(parser_res)
console.log('transformer_res', JSON.stringify(transformer_res, null, 2))
const codeGenerator_res = codeGenerator(transformer_res)
console.log('codeGenerator_res', codeGenerator_res)