import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import '../App.css';



export function PlayerOne({name}) {

const finalSpaceCharacters = [
  {
    id: '1',
    name,
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

  const [characters, updateCharacters] = useState(finalSpaceCharacters);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId='characters' direction='horizontal'>
        {(provided) => (
          <ul
            className='characters'
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {characters.map(({ id, name, thumb }, index) => {
              return (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {thumb ? (
                        <div className='characters-thumb'>
                          <img src={thumb} alt={`${name} Thumb`} />
                        </div>
                      ) : (
                        <Empty></Empty>
                      )}

                      {id === '1' && <p>{name}</p>}
                    </li>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}

const Empty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
`;
