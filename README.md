# Reproducer for `jotai-effect` issue

> https://github.com/jotaijs/jotai-effect/pull/73

Consider the following code:

```ts
export const exampleAtom = withAtomEffect(atom(0), () => {
  // nothing here
});
```

In a project that has the typescript setting `"declaration": true` enabled, this fails with the following error:

```
The inferred type of 'exampleAtom' cannot be named without a reference to '../node_modules/jotai-effect/dist/atomEffect'. This is likely not portable. A type annotation is necessary.ts(2742)

const exampleAtom: PrimitiveAtom<number> & WithInitialValue<number> & {
    effect: Effect;
}
```

This is caused by `Effect` being used by `atomEffect` and `withAtomEffect` but is not exported by jotai-effect.

Solution: Export the type from the library.
