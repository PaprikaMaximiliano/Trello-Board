import React from 'react';
import { connect } from 'react-redux';
import Icon from '@mui/material/Icon';
import { deleteCard, deleteList } from '../actions';
import styled from 'styled-components';

const Container = styled.div`
    opacity: ${(props) => props.isVisible};
    transition: 0.4s;
`;
const TrelloDeleteButton = ({
    dispatch,
    listID,
    listIndex,
    cardIndex,
    isShownForCard,
    isShownForList,
    list,
}) => {
    const onDeleteCard = () => {
        dispatch(deleteCard(listID, listIndex, cardIndex));
    };

    const onDeleteList = () => {
        dispatch(deleteList( listIndex));
    };

    const isVisibleForList = isShownForList ? 1 : 0;
    const isVisibleForCard = isShownForCard ? 1 : 0;
    const isActive = list ? isVisibleForList : isVisibleForCard;
    const onClick = list ? onDeleteList : onDeleteCard;
    const display = isActive?'block':'none';
    return (
        <Container isVisible={isActive} >
            <Icon style={{ cursor: 'pointer', display: display }} onClick={onClick} >
                delete
            </Icon>
        </Container>
    );
};

export default connect()(TrelloDeleteButton);
