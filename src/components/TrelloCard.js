import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import TrelloDeleteButton from './TrelloDeleteButton';

const CardContainer = styled.div`
    margin-bottom: 8px;
`;

const DeleteButtonContainer = styled.div`
    position: absolute;
    right: 0;
    top: 0;
`;
function TrelloCard({ text, id, index, listID, listIndex }) {
    const [isShownDeleteButton, setIsShownDeleteButton] = useState(false);

    const showDeleteButton = () => {
        setIsShownDeleteButton(true);
    };

    const hideDeleteButton = () => {
        setIsShownDeleteButton(false);
    };

    return (
        <Draggable draggableId={String(id)} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <CardContainer
                        onMouseEnter={showDeleteButton}
                        onMouseLeave={hideDeleteButton}
                    >
                        <Card style={{ position: 'relative' }}>
                            <CardContent>
                                <Typography
                                    sx={{ fontSize: 14 }}
                                    color="text.secondary"
                                    gutterBottom
                                >
                                    {text}
                                </Typography>
                            </CardContent>
                            <DeleteButtonContainer>
                                <TrelloDeleteButton
                                    listID={listID}
                                    listIndex={listIndex}
                                    cardIndex={index}
                                    isShownForCard={isShownDeleteButton}
                                />
                            </DeleteButtonContainer>
                        </Card>
                    </CardContainer>

                    {provided.placeholder}
                </div>
            )}
        </Draggable>
    );
}

export default TrelloCard;
