import { Offcanvas } from "react-bootstrap"
import Carrito from "./Carrito"
import { useState } from "react"

const PanelCarrito = (props) => {
  return (
    <Offcanvas show={props.show} onHide={props.handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Carrito...</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Carrito 	
          lista={props.lista} 
          handleAddItemToCart={props.handleAddItemToCart} 
          handleRemoveItemFromCart={props.handleRemoveItemFromCart}
        />
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default PanelCarrito