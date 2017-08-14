import reduceWithValueKey from "@unction/reducewithvaluekey"
import fetchKey from "@unction/key"
import attach from "@unction/attach"

export default function mergeWith (unction: ValueType => ValueType => ValueType): Function {
  return reduceWithValueKey((accumulated: IterableType): Function => (value: ValueType): Function => (key: KeyType): IterableType => {
    if (fetchKey(key)(accumulated)) {
      return attach(key)(unction(fetchKey(key)(accumulated))(value))(accumulated)
    }

    return attach(key)(value)(accumulated)
  })
}
