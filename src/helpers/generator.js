const generate = {};

generate.getKeyCode = () => {
  let keyCode = [];
  for (let i = 0; i < 4; i++) {
    let r = Math.round(Math.random() * 10);
    if (r < 10) {
      keyCode.push(r);
    } else {
      keyCode.push(r - 1);
    }
  }

  return `${keyCode[0]} ${keyCode[1]} ${keyCode[2]} ${keyCode[3]}`;
};

module.exports = generate;
