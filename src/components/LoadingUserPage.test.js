import React from 'react';
import ReactDOM from 'react-dom';
import LoadingUserPage from './LoadingUserPage'

describe("LoadingUserPage tests", () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<LoadingUserPage />, div);
      });

    
})