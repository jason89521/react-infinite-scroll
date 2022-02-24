import React from 'react';
import { mount } from '@cypress/react';
import { requestDuration } from 'fakeApi';
import ThresholdExample from 'components/ThresholdExample';

const waitMS = requestDuration + 50;

describe('test with threshold', () => {
  it('load next data only if the last item fully displayed when threshold is 1', () => {
    mount(<ThresholdExample threshold={1} />);
    cy.get('ul').scrollTo(0, 550);
    cy.wait(waitMS);
    cy.get('li').its('length').should('eq', 10);

    cy.get('ul').scrollTo(0, 600);
    cy.wait(waitMS);
    cy.get('li').its('length').should('eq', 20);
  });

  it('load next data only if the last item half displayed when threshold is 0.5', () => {
    mount(<ThresholdExample threshold={0.5} />);
    cy.get('ul').scrollTo(0, 500);
    cy.wait(waitMS);
    cy.get('li').its('length').should('eq', 10);

    cy.get('ul').scrollTo(0, 550);
    cy.wait(waitMS);
    cy.get('li').its('length').should('eq', 20);
  });
});
