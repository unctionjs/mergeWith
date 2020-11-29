import reduceWithValueKey from "@unction/reducewithvaluekey";
import get from "@unction/get";
import attach from "@unction/attach";
import {MapperFunctionType} from "./types";

export default function mergeWith<A> (unction: MapperFunctionType<A, MapperFunctionType<A, A>>) {
  return reduceWithValueKey((accumulated: Array<A> | Set<A> | RecordType<unknown, A> | string) => (value: A) => (key: unknown): Array<A> | Set<A> | RecordType<unknown, A> | string => {
    if (get(key)(accumulated)) {
      return attach(key)(unction(get(key)(accumulated))(value))(accumulated);
    }

    return attach(key)(value)(accumulated);
  });
}
