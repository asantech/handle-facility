import HelpHandler from './HelpHandler';

type Widget = any;
type Topic = number;

function Widget(parentWidget: Widget, topic: Topic = -1): Widget {
  let _parent = parentWidget;
}

Widget.prototype = HelpHandler.prototype;
/* 
    Widget is a subclass of HelpHandler, since all user interface elements can have help associated with
    them. (We could have used a mixin-based implementation just as well.)
*/

export default Widget;
