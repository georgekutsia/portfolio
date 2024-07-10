import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import { GlobalContext } from '../../../App';

function LenguageButton() {
  const { spa, eng, ger, setLanguage } = useContext(GlobalContext);

  const handleChangeLang = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <Form.Select data-aos="zoom-in" data-aos-delay="150" size="sm" onChange={handleChangeLang}>
      <option value={spa}>Español</option>
      <option value={eng}>Inglés</option>
      <option value={ger}>Alemán</option>
    </Form.Select>
  );
}

export default LenguageButton;
