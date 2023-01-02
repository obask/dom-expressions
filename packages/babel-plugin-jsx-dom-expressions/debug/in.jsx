const selected = true;
let id = "my-h1";
let link;
const template = (
  <div id="main" {...results} classList={{ selected: unknown }} style={{ color }}>
    <h1
      class="base"
      id={id}
      {...results()}
      foo
      disabled
      readonly=""
      title={welcoming()}
      style={{ "background-color": color(), "margin-right": "40px" }}
      classList={{ dynamic: dynamic(), selected }}
    >
      <a href={"/"} ref={link} classList={{ "ccc ddd": true }} readonly={value}>
        Welcome
      </a>
    </h1>
  </div>
);
