import React from 'react'
import styled from 'styled-components';

const DivFooter = styled.div`
    margin-top: 14%;
    font-size: 15px;
    background-color: #b0c9f8;
    padding: 10px;
    border-top: none;
    border-right: none;
    max-width: 98.9%;
    position: fixed;
    bottom:0;
    left:0;
    width:98.5%;
    color: #011329;
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