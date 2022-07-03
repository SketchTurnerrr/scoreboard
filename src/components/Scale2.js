import React from 'react';
import styled from 'styled-components';

const score = [
  {
    id: '1',
    name: 'Vary Goodspeed',
    thumb: 'rocket.svg',
  },
  {
    id: '2',
    name: '1',
    thumb: null,
  },
  {
    id: '3',
    name: '2',
    thumb: null,
  },
  {
    id: '4',
    name: '3',
    thumb: null,
  },
  {
    id: '5',
    name: '4',
    thumb: null,
  },
  {
    id: '6',
    name: '4',
    thumb: null,
  },
  {
    id: '7',
    name: '4',
    thumb: null,
  },
  {
    id: '8',
    name: '2',
    thumb: null,
  },
  {
    id: '9',
    name: '3',
    thumb: null,
  },
  {
    id: '10',
    name: '4',
    thumb: null,
  },
  {
    id: '11',
    name: '4',
    thumb: null,
  },
  {
    id: '12',
    name: '4',
    thumb: null,
  },
  {
    id: '13',
    name: '2',
    thumb: null,
  },
  {
    id: '14',
    name: '3',
    thumb: null,
  },
  {
    id: '15',
    name: '4',
    thumb: null,
  },
  {
    id: '16',
    name: '4',
    thumb: null,
  },
  {
    id: '17',
    name: '4',
    thumb: null,
  },
  {
    id: '18',
    name: '4',
    thumb: null,
  },
  {
    id: '19',
    name: '4',
    thumb: null,
  },
  {
    id: '20',
    name: '4',
    thumb: null,
  },
  {
    id: '21',
    name: '4',
    thumb: null,
  },
  {
    id: '22',
    name: '4',
    thumb: null,
  },
  {
    id: '23',
    name: '4',
    thumb: null,
  },
  {
    id: '24',
    name: '2',
    thumb: null,
  },
  {
    id: '25',
    name: '3',
    thumb: null,
  },
  {
    id: '26',
    name: '4',
    thumb: null,
  },
  {
    id: '27',
    name: '4',
    thumb: null,
  },
  {
    id: '28',
    name: '4',
    thumb: null,
  },
  {
    id: '29',
    name: '4',
    thumb: null,
  },
  {
    id: '30',
    name: '4',
    thumb: null,
  },
];

export function Scale() {
  return (
    <Main>
      {score.map((i) => {
        return <Score key={i.id}>{i.id}</Score>;
      })}
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  margin-bottom: 5rem;
  /* background: red; */
`;

const Score = styled.div`
  width: 75.4px;
  height: 75.4px;
  margin-right:5px;
  border: 1px solid aqua;
  background-color: #d1b7b3;

  &:nth-child(5n) {
    &::after {

        content: 'lasdasd';
        border: 10px;
    }
  }
`;
