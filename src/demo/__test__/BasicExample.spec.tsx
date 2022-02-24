import React from 'react';
import { mount } from '@cypress/react';
import { requestDuration } from 'fakeApi';
import BasicExample from 'components/BasicExample';

const waitMS = requestDuration + 50;

describe('test with only with required props', () => {
  beforeEach(() => {
    mount(<BasicExample />);
  });

  it('scroll to bottom should append 10 items', () => {
    cy.get('li:nth-child(10)').scrollIntoView();
    cy.wait(waitMS);
    cy.get('li').its('length').should('eq', 20);
  });

  it('do not append more items when there are 30 items', () => {
    cy.get('li:last-child').scrollIntoView().wait(waitMS);
    cy.get('li:last-child').scrollIntoView().wait(waitMS);
    cy.get('li').its('length').should('eq', 30);
    cy.get('li:last-child').scrollIntoView().wait(waitMS);
    cy.get('li').its('length').should('eq', 30);
  });
});
