import reduceWithValueKey from "@unction/reducewithvaluekey";
import get from "@unction/get";
import attach from "@unction/attach";
export default function mergeWith (unction) {
  return reduceWithValueKey((accumulated) => (value) => (key) => {
    if (get(key)(accumulated)) {
      return attach(key)(unction(get(key)(accumulated))(value))(accumulated);
    }

    return attach(key)(value)(accumulated);
  });
}
