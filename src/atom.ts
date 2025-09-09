import { atom } from "jotai";
import { atomEffect, withAtomEffect } from "jotai-effect";

export const exampleAtom = withAtomEffect(atom(0), () => {
  // nothing here
});

export const exampleEffect = atomEffect(() => {
    // nothing here
})