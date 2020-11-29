# @unction/mergeWith


![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> MapperFunctionType<A, MapperFunctionType<A, A>> => Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string => Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string => Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string

Merges two enumerables and uses a provided function to handle conflicts. The function is given the the left value and the right value.

``` javascript
const left = {
  alpha: "0",
  beta: "1",
  zeta: "3"
}
const right = {
  alpha: "0",
  beta: "2",
  zeta: "3"
}

mergeWith((l) => (r) => l+r)(left)(right)
```

Which returns:

``` javascript
{
  alpha: "0",
  beta: "12",
  zeta: "3"
}
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/mergeWith.svg?maxAge=2592000&style=flat-square

[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/mergeWith.svg?maxAge=2592000&style=flat-square
