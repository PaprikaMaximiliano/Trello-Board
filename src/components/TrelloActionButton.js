import React, { Component } from 'react';
import Icon from '@mui/material/Icon';
import Card from '@mui/material/Card';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
// import TextareaAutosize from 'react-textarea-autosize';
class TrelloActionButton extends Component {
    state = {
        formOpen: false,
        text: '',
    };

    openForm = () => {
        this.setState({
            formOpen: true,
        });
    };

    closeForm = () => {
        this.setState({
            formOpen: false,
        });
    };

    handleInputChange = (e) => {
        this.setState({
            text: e.target.value,
        });
    };

    renderAddButton = () => {
        const { list } = this.props;

        const buttonText = list ? 'Add another list' : 'Add another card';
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? 'white' : 'inherit';
        const buttonTextBackground = list ? 'rgba(0,0,0,.15)' : 'inherit';
        return (
            <div
                onClick={this.openForm}
                style={{
                    ...styles.openForButtonGroup,
                    opacity: buttonTextOpacity,
                    color: buttonTextColor,
                    background: buttonTextBackground,
                }}
            >
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        );
    };

    renderForm = () => {
        const {list} = this.props;
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
                        onBlur={this.closeForm}
                        value={this.state.text}
                        onChange={this.handleInputChange}
                        style={{
                            resize: 'none',
                            overflow: 'hidden',
                            width: '100%',
                            outline: 'none',
                            border: 'none',
                        }}
                    />
                </Card>
                <div style={styles.formButtonGroup}>
                    <Button
                        variant="contained"
                        style={{ color: 'white', background: '#5aac44' }}
                    >
                        {buttonTitle}
                    </Button>
                    <Icon style={{ marginLeft: 8, cursor: 'pointer' }}>close</Icon>
                </div>
            </div>
        );
    };
    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    }
}

const styles = {
    openForButtonGroup: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        borderRadius: 3,
        height: 36,
        width: 272,
        paddingLeft: 10,
    },
    formButtonGroup:{
        marginTop: 8,
        display: 'flex',
        alignItems: 'center'
    }
};

export default TrelloActionButton;
