import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../sass/contact.scss'

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    communicationMethod: 'Email',
    email: '',
    message: '',
    phone: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Replace these values with your actual EmailJS service details
      const serviceId = 'service_vcja23s';
      const templateId = 'template_qw5lmri';
      const userId = 's5vy3rNMyHauCUjiY';

      const response = await emailjs.send(serviceId, templateId, formData, userId);
      console.log('Email sent:', response);

      // Clear the form data after sending the email
      setFormData({
        from_name: '',
        communicationMethod: 'Email',
        email: '',
        message: '',
        phone: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="contact">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">What name may I use to address you?</label>
          <input
            type="text"
            id="name"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="communicationMethod">Preferred Communication Method</label>
          <select
            id="communicationMethod"
            name="communicationMethod"
            value={formData.communicationMethod}
            onChange={handleChange}
          >
            <option value="Email">Email</option>
            <option value="Text Message">Text Message</option>
            <option value="Phone Call">Phone Call</option>
          </select>
        </div>
        {formData.communicationMethod === 'Email' ? (<div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>): (<div className="form-group">
          <label htmlFor="email">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>)}

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
