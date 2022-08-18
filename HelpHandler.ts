type Handler = any;
type Topic = number;

const NO_HELP_TOPIC: Topic = -1;

function HelpHandler(): Handler {
  /*
      1. each object on the chain shares a common interface for handling requests and for accessing its 
         successor on the chain
    */

  let _successor: Handler;
  let _topic: Topic;

  this.setHandler = function (HelpHandler: Handler, topic: Topic) {
    _successor = HelpHandler;
    _topic = topic;
  };
  this.hasHelp = function () {
    return _topic != NO_HELP_TOPIC;
  };
  this.handleHelp = function (HelpHandler = 0, topic = NO_HELP_TOPIC) {
    /*
        1. HelpHandler's HandleHelp operation forwards the request to the
        successor by default.
        2. Subclasses can override this operation to provide help under
        the right circumstances; otherwise they can use the default implementation to
        forward the request
       */
    if (_successor) {
      _successor.handleHelp();
    }
  };
}

export default HelpHandler;
