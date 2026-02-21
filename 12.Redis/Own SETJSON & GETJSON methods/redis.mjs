import {SETJSON, GETJSON} from './parse-stringfy.mjs'


SETJSON('doctor', {
    "qualification": "MBBS",
    "experience": 10,
    "fee": 20
})


console.log(await GETJSON('doctor'))


