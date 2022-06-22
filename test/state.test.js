import state, {
    addCombatEvent,
    addGob,
    initialize,
    updateGobs,
    

} from '../state.js';




QUnit.module('state', { beforeEach: initialize });

const test = QUnit.test;

test('add gob', (expect) => {
    addGob({ name: 'gobman', hp: 3, });

    expect.deepEqual(state.gobs,
        [
            { name: 'gobo', hp: 5, },
            { name: 'gobman', hp: 3, },
        ]
    );

});

test('update gobs', (expect) => {
    updateGobs({ name: 'gobo', hp: 5, });

    expect.deepEqual(state.gobs,
        [
            { name: 'gobo', hp: 5, },
        ]
    );
});

test('add combat event', (expect) => {
    addCombatEvent('you did 3 damage');

    expect.deepEqual(state.combatLog,
        [
            'you did 3 damage'
        ]
    );

});
