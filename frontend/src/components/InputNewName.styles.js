import styled from 'styled-components';

export const InputContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    input {
        margin-bottom: 10px;
        padding: 5px;
        border-radius: 5px;
        border: 1px solid #ccc;
    }
    input {
        margin-bottom: 30px;
        padding: 5px;
        border-radius: 5px;
        border: 2px solid #ccc;
        transition: all 0.3s;
        color: #8B4513;
        font-style: italic;
        text-align: center;

        &:focus {
            border-color: #CD853F; 
            outline: none;
        }
      }
    button {
        padding: 5px;
        border-radius: 5px;
        border: 2px solid #CD853F;
        background-color: #f0f0f0;
        color: #CD853F;
        cursor: pointer;
        transition: all 0.3s;
        font-weight: bold;

        &:hover {
            background-color: #CD853F;
            color: white;
        }
    }
    }
`;