import { useForm } from "react-hook-form";
import LayoutFour from "../../components/Layout/LayoutOne";
import InstagramTwo from "../../components/Sections/Instagram/InstagramTwo";
import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";
import ContactInfoItem from "../../components/Pages/Contact/ContactInfoItem";
import contactData from "../../data/pages/contact.json";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function () {

  const inqForm = useRef();

  const sendMail = () => {
    emailjs.sendForm("service_cajvj1m", "template_3fylys8", inqForm.current, "Xr116sEP70G2mVG4W")
      .then(
        (result) => {
          console.log('message sent !!', result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(
      name,
      email,
      message
    );
  }

  const { register, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <LayoutFour title="Contact us">
      <Breadcrumb title="Contact us">
        <BreadcrumbItem name="Home" />
        <BreadcrumbItem name="Contact us" current />
      </Breadcrumb>
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h3 className="contact-title">Contact info</h3>
              {contactData &&
                contactData.map((item, index) => (
                  <ContactInfoItem
                    key={index}
                    iconClass={item.iconClass}
                    title={item.title}
                    detail={item.detail}
                  />
                ))}
            </div>
            <div className="col-12 col-md-6">
              <h3 className="contact-title">Get in touch</h3>
              <div className="contact-form">
              <form ref={inqForm} onSubmit={handleSubmit}>
                  <div className="input-validator">
                    <input
                      type="text"
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      placeholder="Name"
                      ref={register({ required: true })}
                    />
                    {errors.name && (
                      <span className="input-error">Please provide a name</span>
                    )}
                  </div>
                  <div className="input-validator">
                    <input
                      type="text"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      placeholder="Email"
                      ref={register({ required: true })}
                    />
                    {errors.email && (
                      <span className="input-error">
                        Please provide an email
                      </span>
                    )}
                  </div>
                  <div className="input-validator">
                    {/* <textarea
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      id="message"
                      cols="30"
                      rows="3"
                      placeholder="Message"
                    /> */}

                   <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    id="message"
                    name="message"
                    cols="30"
                    rows="3"
                    placeholder="Message"
                  />

                  </div>
                  <button style={{
                    color:"white",
                    backgroundColor:"#1a7be9",
                    border:"none",
                    fontWeight:"bold",
                    padding:"12px",
                    borderRadius:"5px"
                  }} type="submit" onClick={sendMail}>SEND MESSAGE</button>
                </form>
              </div>
            </div>
            <div className="col-12">
              <iframe
                className="contact-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26544.761428132653!2d105.83081260286463!3d21.01523825635793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSMOgIE7hu5lpLCBIb8OgbiBLaeG6v20sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1594639675485!5m2!1svi!2s"
                width="100%"
                height="450"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
      {/* <InstagramTwo /> */}
    </LayoutFour>
  );
}
