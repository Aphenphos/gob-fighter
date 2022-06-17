import state, {
    initialize,
    

} from '../state.js';




QUnit.module('state', { beforeEach: initialize });

const test = QUnit.test;

test('the first state test...', (expect) => {
    const state = 3;
    const expected = 3;
    expect.deepEqual(state, expected);
});

