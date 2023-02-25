import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { Draggable } from 'react-beautiful-dnd';

function TrelloCard({ text, id, index }) {
    return (
        <Draggable draggableId={String(id)} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <Card style={styles.cardContainer} sx={{ minWidth: 275 }}>
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
                    {provided.placeholder}
                </div>
            )}
        </Draggable>
    );
}

const styles = {
    cardContainer: {
        marginBottom: 8,
    },
};

export default TrelloCard;
