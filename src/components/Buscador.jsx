import { Form } from "react-bootstrap"

const Buscador = (props) => {
  return (
    <Form>
      <Form.Control 
        type="text" 
        placeholder={props.placeholder}
        onChange={e => props.onChange(e.target.value)} 
      />
    </Form>
  )
}

export default Buscador