import Widget from '../Widget';

function Btn() {
  this.handleHelp = function () {};
}

Btn.prototype = Widget.prototype;

export default Btn;
