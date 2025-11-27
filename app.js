{
  /* <div id="child">
  <h1>H1 tag</h1>
  <h2>H2 tag</h2>
</div>; */
}

const headingtags = [
  React.createElement("h1", { id: "header1" }, "Hello World 1"),
  React.createElement("h2", { id: "header2" }, "Hello World 2"),
];
const root = ReactDOM.createRoot(document.getElementById("child"));
root.render(headingtags);

console.log(heading);
console.log(root);
