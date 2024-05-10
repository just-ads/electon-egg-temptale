const { Controller } = require('ee-core');
const Log = require('ee-core/log');

class HelloController extends Controller {
    constructor(ctx) {
        super(ctx);
    }

    test(param, event) {
        return `hello ${param.name}`
    }

}

HelloController.toString = () => '[class ExampleController]';
module.exports = HelloController;
