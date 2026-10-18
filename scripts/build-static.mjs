import { cp, mkdir, rm } from 'node:fs/promises';
import { resolve, sep } from 'node:path';

const projectRoot = resolve(import.meta.dirname, '..');
const output = resolve(projectRoot, 'dist');

if (!output.startsWith(`${projectRoot}${sep}`) || output !== resolve(projectRoot, 'dist')) {
  throw new Error('Refusing to build outside the project dist directory.');
}

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const file of ['index.html', 'app.js', 'styles.css']) {
  await cp(resolve(projectRoot, file), resolve(output, file));
}

await cp(resolve(projectRoot, 'assets'), resolve(output, 'assets'), { recursive: true });

console.log(`Static site built at ${output}`);
