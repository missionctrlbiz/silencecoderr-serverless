import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import axios from 'axios';

function Contact() {
    const themeMode = useSelector((state) => state.image.themeMode);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setFormErrors({
            ...formErrors,
            [name]: ''
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validateForm();
        console.log('Form data being sent:', formData);

        if (Object.keys(errors).length === 0) {
            try {
                const response = await axios.post('/api/send-email', formData);
                console.log('API Response:', response);

                Swal.fire({
                    title: 'Thanks for contacting SilenceCodder!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });

                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                });
            } catch (error) {
                console.error('Error sending email:', error);

                Swal.fire({
                    title: 'Error',
                    text: 'Failed to send the message. Please try again later.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        } else {
            setFormErrors(errors);
        }
    }

    const validateForm = () => {
        let errors = {};
        if (!formData.fullName.trim()) {
            errors.fullName = 'Full Name is required';
        }
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!isValidEmail(formData.email)) {
            errors.email = 'Invalid email address';
        }
        if (!formData.phone.trim()) {
            errors.phone = 'Phone is required';
        } else if (!isValidPhone(formData.phone)) {
            errors.phone = 'Invalid phone number';
        }
        return errors;
    }

    const isValidPhone = (phone) => {
        const phonePattern = /^[0-9]{10}$/;
        return phonePattern.test(phone);
    }

    const isValidEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    return (
        <div>
            <section id="contact" className="bx-contact-section bx-section padding-b-80 body-bg" style={{paddingTop: '40px'}}>
                <div className="container">
                    <Fade triggerOnce duration={2000} direction='up' delay={300} className="title" >
                        <p className="light-txt">form</p>
                        <h2>Get In<span className="primary-clr" style={{ textTransform: 'unset' }}> Touch</span></h2>
                    </Fade>
                    <form className={` ${themeMode === "light" ? "form-light" : ""}`} onSubmit={handleSubmit}>
                        <div className="row">
                            <Fade triggerOnce duration={2000} direction='up' delay={300} className="col-md-6">
                                <div className="border-box">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="fullName" autoComplete='off' value={formData.fullName} onChange={handleChange} placeholder="Full Name" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" name="email" autoComplete='off' value={formData.email} onChange={handleChange} placeholder="Email" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="phone" autoComplete='off' value={formData.phone} onChange={handleChange} placeholder="Phone" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control border-none" autoComplete='off' name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required />
                                    </div>
                                </div>
                            </Fade>
                            <Fade triggerOnce duration={2000} direction='up' delay={300} className="col-md-6">
                                <div className="form-group">
                                    <textarea className="form-control" name="message" value={formData.message} onChange={handleChange} rows="7" placeholder="Message" required></textarea>
                                    <button type="submit" className="custom-btn bx-btn-1">Submit</button>
                                </div>
                            </Fade>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contact;