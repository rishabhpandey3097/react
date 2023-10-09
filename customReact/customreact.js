const customRender = (element, container) => {
  /*
  const domElement = document.createElement(element?.type);
  domElement.innerText = element?.children;
  domElement.setAttribute("href", element.props.href);
  domElement.setAttribute("target", element.props.target);

  // Injectig element to container
  container.appendChild(domElement);
  */

  const domElement = document.createElement(element?.type);
  domElement.innerText = element.children;

  for (let [key, value] of Object.entries(element.props)) {
    domElement.setAttribute(key, value);
  }

  container.appendChild(domElement);
};

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Click me to visit google.",
};

const root = document.getElementById("root");

customRender(reactElement, root);
