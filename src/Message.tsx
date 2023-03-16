function Message() {
  const name = "Dev";
  if (name) return <h1>Hi {name}</h1>;
  return <h1>Hi Max</h1>;
}
export default Message;
