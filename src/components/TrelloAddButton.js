import React from 'react';
import { useState } from 'react';
import Icon from '@mui/material/Icon';
import Card from '@mui/material/Card';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import { connect } from 'react-redux';
import { addList, addCard } from '../actions';
import styled from 'styled-components';

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 3px;
    height: 36px;
    min-width: 272px;
    padding-left: 10px;
    opacity: ${(props) => props.buttonTextOpacity};
    color: ${(props) => props.buttonTextColor};
    background: ${(props) => props.buttonTextBackground};
`;

const FormContainer = styled.div`
    margin-top: 8px;
    display: flex;
    align-items: center;
`;

const TrelloAddButton = ({ list, dispatch, listID }) => {
    const [formOpen, setFormOpen] = useState(false);
    const [text, setText] = useState('');

    const openForm = () => {
        setFormOpen(true);
    };

    const closeForm = (e) => {
        if (e.target.value) {
            list
                ? handleAddList(e.target.value)
                : handleAddCard(e.target.value);
        }
        setFormOpen(false);
    };

    const handleInputChange = (e) => {
        setText(e.target.value);
    };

    const handleAddList = () => {
        if (text) {
            setText('');
            dispatch(addList(text));
        }
    };

    const handleAddCard = () => {
        if (text) {
            setText('');
            dispatch(addCard(listID, text));
        }
    };

    const renderAddButton = () => {
        const buttonText = list ? 'Add another list' : 'Add another card';
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? 'white' : 'inherit';
        const buttonTextBackground = list ? 'rgba(0,0,0,.15)' : 'inherit';

        return (
            <ButtonContainer
                buttonTextOpacity={buttonTextOpacity}
                buttonTextColor={buttonTextColor}
                buttonTextBackground={buttonTextBackground}
                onClick={openForm}
            >
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </ButtonContainer>
        );
    };

    const renderForm = () => {
        const placeholder = list
            ? 'Enter list title...'
            : 'Enter a title for this card...';
        const buttonTitle = list ? 'Add list' : 'Add card';

        return (
            <div>
                <Card
                    style={{
                        overflow: 'visible',
                        minHeight: 80,
                        minWidth: 272,
                        padding: '6px 8px 2px',
                    }}
                >
                    <TextareaAutosize
                        placeholder={placeholder}
                        autoFocus
                        onBlur={closeForm}
                        value={text}
                        onChange={handleInputChange}
                        style={{
                            resize: 'none',
                            overflow: 'hidden',
                            width: '100%',
                            outline: 'none',
                            border: 'none',
                        }}
                    />
                </Card>
                <FormContainer>
                    <Button
                        onMouseDown={list ? handleAddList : handleAddCard}
                        variant="contained"
                        style={{ color: 'white', background: '#5aac44' }}
                    >
                        {buttonTitle}
                    </Button>
                    <Icon style={{ marginLeft: 8, cursor: 'pointer' }}>
                        close
                    </Icon>
                </FormContainer>
            </div>
        );
    };

    return formOpen ? renderForm() : renderAddButton();
};

export default connect()(TrelloAddButton);
