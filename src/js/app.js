export default function orderByProps(obj, order) {
  const orderedProps = [];
  const unorderedProps = [];

  for (const key in obj) {
    if (order.includes(key)) {
      orderedProps.push({ key, value: obj[key] });
    } else {
      unorderedProps.push({ key, value: obj[key] });
    }
  }
  orderedProps.sort((a, b) => order.indexOf(a.key) - order.indexOf(b.key));
  unorderedProps.sort((a, b) => a.key.localeCompare(b.key));
  return orderedProps.concat(unorderedProps);
}
