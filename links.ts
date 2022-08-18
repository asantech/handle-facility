import PrintBtn from './concreteHandlers/PrintBtn';
import OkBtn from './concreteHandlers/OkBtn';

import PrintDialog from './concreteHandlers/PrintDialog';
import SaveDialog from './concreteHandlers/SaveDialog';

/* 
1. an object in the chain doesn't have to know about the chain's structure
2. Chain of Responsibility gives you added flexibility in distributing responsibilities among objects
   You can add or change responsibilities for handling a request by adding
   to or otherwise changing the chain at run-time. You can combine this with
   subclassing to specialize handlers statically
*/

/*successor chain */
const links = {
  body: {
    PrintBtn,
    PrintDialog,
    SaveDialog,
  },
  navbar: {
    PrintBtn,
  },
  main: {
    article: {
      PrintBtn,
      OkBtn,
    },
  },
};
/* 
  1. the set of objects that can handle a request should be specified dynamically.
  2. Instead of objects maintaining references to all candidate receivers, they
     keep a single reference to their successor
*/

export default links;
