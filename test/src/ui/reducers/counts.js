'use strict';

import {expect} from 'chai'
import {INIT_COUNTS} from '../../../../src/ui/constants/InitStates'
import reducer from '../../../../src/ui/reducers/counts'

const counts = {
	"p1": 24,
	"p2": 1
};

describe('(reducer) counts', function() {
	it('should return the initial state', () => {
		expect(
			reducer(undefined, {})
		).to.deep.equal(INIT_COUNTS)
	})

	it('should handle LOAD_COUNTS', () => {
		expect(
			reducer(INIT_COUNTS, {
				type: 'LOAD_COUNTS',
				counts: counts
			})
		).to.deep.equal(counts)
	})

});