import React from 'react'
import styled from 'styled-components/native'

export default styled.TouchableHighlight`
    width:${props => props.width || 'auto'};
    background-color: ${props => props.bgColor || '#EEE'};
    padding: 8px 16px;
    border-radius:100px;
    align-items:center;
    justify-content:center;
    margin-bottom: ${props => props.marginBottom || 'auto'};
`