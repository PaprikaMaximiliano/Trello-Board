import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { Draggable } from 'react-beautiful-dnd';
import styled from "styled-components";

const CardContainer = styled.div`
  margin-bottom: 8px;
`
function TrelloCard({ text, id, index }) {
    return (
        <Draggable draggableId={String(id)} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <CardContainer>
                        <Card >
                            <CardContent>
                                <Typography
                                    sx={{ fontSize: 14 }}
                                    color="text.secondary"
                                    gutterBottom
                                >
                                    {text}
                                </Typography>
                            </CardContent>
                        </Card>
                    </CardContainer>

                    {provided.placeholder}
                </div>
            )}
        </Draggable>
    );
}

export default TrelloCard;
