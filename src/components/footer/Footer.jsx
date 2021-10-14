import React from 'react'
import styled from 'styled-components';

const DivFooter = styled.div`
    margin-top: 14%;
    font-size: 15px;
    background-color: #6495ED;
    padding: 10px;
    border-top: none;
    border-right: none;
    max-width: 98.9%;
    position:absolute;
    bottom:0;
    width:98.5%;

   


`

export default function Footer() {

      return (
            <>
                  <DivFooter>
                        <footer>
                              <p>zeniTI@gmail.com</p>
                              <p>(11)9 8765-8956</p>
                              <p class="copyright">ZeniTI Coporation - 2021  - Copyright &copy;</p>

                        </footer>
                  </DivFooter>

            </>
      )
}