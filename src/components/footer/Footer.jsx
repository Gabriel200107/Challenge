import React from 'react'
import styled from 'styled-components';

const DivFooter = styled.div`
    margin-top: 14%;
    font-size: 15px;
    background-color: white;
    padding: 10px;
    border-top: none;
    border-right: none;
    max-width: 100%;
    position: fixed;
    bottom:0;
    left:0;
    width: 100%;
    color: #011329;
    font-weight: bold;

p{
     text-align: center;
     
}
`

export default function Footer() {

      return (
            <>
                  <DivFooter>
                        <footer>
                              <p class="copyright">ZeniTI Coporation - 2021  - Copyright &copy;</p>

                        </footer>
                  </DivFooter>

            </>
      )
}