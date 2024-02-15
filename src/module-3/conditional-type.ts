type a1  = string
type a2 = number 
type a3 = undefined
type a4 = null

type conditionalType = a1 extends number ? number : string 
type conditionalType2 = a2 extends string ? string : a3 extends string ? number : a4 extends undefined ? undefined : null 