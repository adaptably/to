export default (target, { from }) => {
  return new URL(target, from).pathname
}
