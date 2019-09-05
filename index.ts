import reduceWithValueKey from "@unction/reducewithvaluekey";
import get from "@unction/get";
import attach from "@unction/attach";
import {MapperFunctionType} from "./types";
import {EnumerableType} from "./types";

export default function mergeWith<A> (unction: MapperFunctionType<A, MapperFunctionType<A, A>>) {
  return reduceWithValueKey((accumulated: EnumerableType<A>) => (value: A) => (key: unknown): EnumerableType<A> => {
    if (get(key)(accumulated)) {
      return attach(key)(unction(get(key)(accumulated))(value))(accumulated);
    }

    return attach(key)(value)(accumulated);
  });
}
