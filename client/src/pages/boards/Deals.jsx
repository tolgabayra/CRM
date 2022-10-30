import { Card, Col, Divider, message, notification, Row, Steps } from 'antd'
import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from 'uuid';
import { SmileOutlined } from '@ant-design/icons';

const itemsFromBackend = [
  { _id: uuidv4(), content: "First task" },
  { _id: uuidv4(), content: "Second task" },
  { _id: uuidv4(), content: "Third task" },
  { _id: uuidv4(), content: "Fourth task" },
  { _id: uuidv4(), content: "Fifth task" }
];

const columnsFromBackend = {
  [uuidv4()]: {
    name: "Requested",
    items: itemsFromBackend
  },
  [uuidv4()]: {
    name: "To do",
    items: []
  },
  [uuidv4()]: {
    name: "In Progress",
    items: []
  },
  [uuidv4()]: {
    name: "Done",
    items: []
  }
};




const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);

    console.log(sourceColumn);
    console.log(destColumn.name);



    if (destColumn.name === "Done") {
      notification.open({
        message: 'Harika !',
        description:
          'Waoww Tebrikler, Bu Görevi Başarıyla Tamamladınız...',
        icon: (
          <SmileOutlined
            style={{
              color: '#108ee9',
            }}
          />
        ),
      });
    
    }else if(destColumn.name === "In Progress"){
      message.info("Son Düzlüğe Gelsin, Şimdi Başarma zamanı :)")

    }
    else{
      message.success("Başarılı", 1.5)

    }
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
};




export default function Deals() {
  const [columns, setColumns] = useState(columnsFromBackend);

  return (
    <div>
      <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
        <div className="mr-6 mb-1">
          <h1 className="text-4xl font-semibold mb-2">Hedeflerim</h1>
        </div>
        <div className="flex flex-wrap items-start justify-end mb-3">
          <button className="inline-flex px-5 py-2 text-green-600 hover:text-green-700 focus:text-green-700 hover:bg-green-100 focus:bg-green-100 border border-green-600 rounded-md mb-3">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            Hedeflerimi Yönet
          </button>
          <button onClick={() => showEditModal()} className="inline-flex px-5 py-2 text-white bg-green-600 hover:bg-green-700 focus:bg-green-700 rounded-md ml-6 mb-3">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Yeni Hedef Ekle
          </button>
        </div>
      </div>
      <Divider orientation="left"></Divider>

      <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
        <DragDropContext
          onDragEnd={result => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
                key={columnId}
              >
                <h2>{column.name}</h2>
                <div style={{ margin: 8 }}>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: snapshot.isDraggingOver
                              ? "lightblue"
                              : "lightgrey",
                            padding: 4,
                            width: 250,
                            minHeight: 500
                          }}
                        >
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                key={item._id}
                                draggableId={item._id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        userSelect: "none",
                                        padding: 16,
                                        margin: "0 0 8px 0",
                                        minHeight: "50px",
                                        backgroundColor: snapshot.isDragging
                                          ? "#263B4A"
                                          : "#456C86",
                                        color: "white",
                                        ...provided.draggableProps.style
                                      }}
                                    >
                                      {item.content}
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          })}
        </DragDropContext>
      </div>



    </div>
  )
}
