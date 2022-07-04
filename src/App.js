import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import './App.css';
import { PlayerOne } from './components/Player';
import { Scale } from './components/Scale';

const players = [
  {
    name: 'Алла',
  },
  {
    name: 'Аня',
  },
  {
    name: 'Богдан',
  },
  {
    name: 'Богдана',
  },
  {
    name: 'Вероніка',
  },
  {
    name: 'Віка',
  },
  {
    name: 'Владислав',
  },
  {
    name: 'Всеволод',
  },
  {
    name: 'Даниїл',
  },
  {
    name: "Дар'я",
  },
  {
    name: 'Діана',
  },
  {
    name: 'Дюня',
  },
  {
    name: 'Ілья',
  },
  {
    name: 'Каріна',
  },
  {
    name: 'Ксюша 6 років',
  },
  {
    name: 'Ксюша 14 років',
  },
  {
    name: 'Лена',
  },
  {
    name: 'Максим',
  },
  {
    name: 'Маргарита',
  },
  {
    name: 'Марія',
  },
  {
    name: 'Матвій',
  },
  {
    name: 'Мілана',
  },
  {
    name: 'Надя',
  },
  {
    name: 'Назар',
  },
  {
    name: 'Настя',
  },
  {
    name: 'Поліна',
  },
  {
    name: 'Света',
  },
  {
    name: 'Евеліна',
  },
  {
    name: 'Юля',
  },
  {
    name: 'Яна',
  },
  {
    name: 'Ярослав',
  },
];

function App() {
  return (
    <div className='App'>
     
      <Container>
        <Scale name='' />
        <H1>Гравці</H1>

        {players.map((player) => (
          <PlayerOne key={player.name} name={player.name} />
        ))}
      </Container>
    </div>
  );
}

const Container = styled.div`
  position: relative;
`;

const H1 = styled.h2`
  color: #ffffff;
  font-size: 5rem;
  margin-block: 5rem;
  text-shadow: #fff 0px 0px 5px, #fff 0px 0px 10px, #fff 0px 0px 15px,
    #ff2d95 0px 0px 20px, #ff2d95 0px 0px 30px, #ff2d95 0px 0px 40px,
    #ff2d95 0px 0px 50px, #ff2d95 0px 0px 75px;
`;

export default App;
