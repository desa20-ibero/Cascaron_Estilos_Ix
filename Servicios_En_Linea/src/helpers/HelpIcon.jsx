import React from 'react'
import { Button, Image, OverlayTrigger, Popover } from 'react-bootstrap'
import question from "../img/question.png"

export const HelpIcon = ({ info, clase }) => {
    const tooltip = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Información</Popover.Header>
            <Popover.Body>
            {info}
            </Popover.Body>
        </Popover>
      );

  return (
    <OverlayTrigger placement="right" overlay={tooltip}>            
              <Image
              className={`question cursor ${clase} `}                
                roundedCircle
                src={question}
                />            
    </OverlayTrigger>
  )
}
