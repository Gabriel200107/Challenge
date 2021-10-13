import React from 'react'
import styled from 'styled-components';

const DivFooter = styled.div`
    margin-top: 14%;
    font-size: 15px;
    background-color: #6495ED;
    padding: 10px;
    border-top: none;
    border-right: none;
    max-width: 100%;
   


`

export default function Footer() {

      return (
            <>
                  <DivFooter>
                        <footer>
                              <p>zeniTI@gmail.com</p>
                              <p>(XX) XXXXX - XXXX</p>
                              <p class="copyright">ZeniTI Coporation - 2021  - Copyright &copy;</p>

                        </footer>
                  </DivFooter>

            </>
      )
}