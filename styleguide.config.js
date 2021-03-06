const path = require("path");

module.exports = {
  getComponentPathLine: componentPath => {
    const componentName = path.basename(componentPath, ".js");
    const importName =
      componentName === "Context" ? componentName : `{ ${componentName} }`;
    return `import ${importName} from "react-connect-context";`;
  },
  getExampleFilename: componentPath => {
    const componentName = path.basename(componentPath, ".js");
    return path.join(__dirname, "docs", `${componentName}.md`);
  },
  sections: [
    {
      name: "Introduction",
      sections: [
        {
          name: "TL;DR",
          content: "docs/tldr.md"
        },
        {
          name: "Get started",
          content: "docs/get-started.md"
        }
      ]
    },
    {
      name: "Components",
      components: "src/Context.js"
    },
    {
      name: "Decorators",
      sections: [
        {
          name: "@connect",
          content: "docs/connect.md"
        }
      ]
    }
  ],
  require: [path.resolve(__dirname, "docs/setup.js")],
  showCode: true,
  title: "react-connect-context Documentation"
};
