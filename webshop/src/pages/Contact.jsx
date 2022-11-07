import { useState, useRef } from 'react';
import Map from '../components/Map';
import emailjs from '@emailjs/browser';

function Contact() {
  const [coordinaates, setCoordinates] = useState({lngLat: [59.4378, 24.7574], zoom: 12});
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const sendEmail = () => {
    const templateParams = {
      "to_name": "Drutoopia",
      "from_name": nameRef.current.value + ", tema email:" + emailRef.current.value,
      "message": messageRef.current.value
    }
    emailjs.send('service_dr9jjph', 'template_wgzzdkz', templateParams, 'ebf38QkJB6KBicLrP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (<div>
    <button onClick={() => setCoordinates({lngLat: [59.4378, 24.7574], zoom: 12})}>Kõik poed</button>
    <button onClick={() => setCoordinates({lngLat: [59.4231, 24.7991], zoom: 13})}>Ülemiste Keskus</button>
    <button onClick={() => setCoordinates({lngLat: [59.4277, 24.7193], zoom: 13})}>Kristiine Keskus</button>
    <button onClick={() => setCoordinates({lngLat: [59.4416, 24.7354], zoom: 13})}>Balti Jaama Turg</button>
    <Map mapCoordinaates={coordinaates}  />

<div>Anna meile tagasisidet</div>
    <label>Nimi</label> <br />
    <input ref={nameRef} type='text' placeholder="Sinu nimi" /> <br />
    <label>E-mail</label> <br />
    <input ref={emailRef} type='text' placeholder="Sinu e-mail"/> <br />
    <label>Tagasiside</label> <br />
    <input ref={messageRef} type='text' placeholder="Sinu tagasiside"/> <br />
    <button onClick={sendEmail}>Saada</button>

  </div>)
}

export default Contact;