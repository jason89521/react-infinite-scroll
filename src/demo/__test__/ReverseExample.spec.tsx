import React from 'react';
import { mount } from '@cypress/react';
import { requestDuration } from 'fakeApi';
import ReverseExample from 'components/ReverseExample';

const waitMS = requestDuration + 50;

describe('Test reverse mode', () => {
  it('load data when scrolling to top', () => {
    mount(<ReverseExample />);
    cy.wait(waitMS);
    cy.get('li').its('length').should('eq', 20);
  });
});
