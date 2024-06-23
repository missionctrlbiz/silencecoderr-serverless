import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    console.log('Request received:', req.body);

    if (req.method === 'POST') {
        const { fullName, email, phone, subject, message } = req.body;

        console.log('Email details:', {
            fullName,
            email,
            phone,
            subject,
            message
        });

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'missionctrl.biz@gmail.com', // Replace with your actual recipient email
            subject: `Contact Form: ${subject}`,
            text: `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
        };

        try {
            await transporter.sendMail(mailOptions);
            console.log('Email sent successfully');
            res.status(200).json({ message: 'Email sent successfully' });
            console.log('EMAIL_USER:', process.env.EMAIL_USER);
            console.log('EMAIL_PASS:', process.env.EMAIL_PASS);

        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Failed to send email' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
