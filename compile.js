const fs = require("fs");
const path = require("path");
const svelte = require("svelte");
const compiler = require("svelte/compiler");

function getSvelteFiles(dir) {
	const files = fs
		.readdirSync(dir)
		.filter((file) => path.extname(file) === ".svelte")
		.map((file) => {
			const filePath = path.join(dir, file);
			return {
				filePath,
				content: fs.readFileSync(filePath, "utf-8"),
			};
		});
	return files;
}

const files = getSvelteFiles("./src");

for (const file of files) {
	const { filePath, content } = file;
	const { js, css } = compiler.compile(content, {
		generate: "ssr",
		format: "cjs",
	});

	fs.writeFileSync(`${filePath}.js`, js.code);
	fs.writeFileSync(`${filePath}.css`, css.code);

	const Component = require(`./${filePath}.js`).default;

	const { html } = Component.render();

	fs.writeFileSync(`${filePath}.html`, html);
}
