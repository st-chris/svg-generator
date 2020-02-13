const form = document.getElementById('form');

const createSVG = event => {
  event.preventDefault();
  let output = document.getElementById('output');
  let outputSvg = document.getElementById('output-svg');
  let outputHtml = document.getElementById('output-html');
  const width = document.getElementById('width').value;
  const height = document.getElementById('height').value;
  const color = document.getElementById('color').value;
  const textInput = document.getElementById('text').value;
  const textColor = document.getElementById('text-color').value;
  outputSvg.innerHTML = '';

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', width);
  svg.setAttribute('height', height);
  outputSvg.appendChild(svg);
  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect.setAttributeNS(null, 'width', width);
  rect.setAttributeNS(null, 'height', height);
  if (color) rect.setAttributeNS(null, 'fill', color);
  svg.appendChild(rect);
  if (textInput) {
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttributeNS(null, 'x', '50%');
    text.setAttributeNS(null, 'y', '50%');
    text.setAttributeNS(null, 'text-anchor', 'middle');
    if (textColor) text.setAttributeNS(null, 'fill', textColor);
    text.innerHTML = textInput;
    svg.appendChild(text);
  }
  console.log(output);
  outputHtml.textContent = outputSvg.innerHTML;
  if (!document.getElementById('copy')) {
    output.innerHTML =
      output.innerHTML +
      '<button id="copy" onclick="copySVG()">Copy text</button>';
  }
};

form.addEventListener('submit', createSVG);

function copySVG() {
  document.getElementById('output-html').select();
  document.getElementById('output-html').setSelectionRange(0, 99999);
  document.execCommand('copy');
}
