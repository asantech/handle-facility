type ConcreteHandler = any;

function okBtn(context: any): ConcreteHandler {
  const printReq = function () {
    console.log('print req: from ' + context + ' context');
  };
}

export default okBtn;
