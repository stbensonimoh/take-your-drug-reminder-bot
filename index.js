'use strict'
require('dotenv').config()
const fetch = require('node-fetch')

const nodemailer = require('nodemailer')

const name = 'Bee'
const phone = '+2348054610438, +2348146189986, +2349082859600, +2349022631479'
const smsMessage = `Hi ${name}! It's time to take your medication. Don't forget that health is wealth.
    xoxo Drug Bot`

const emailMessageText = `Dear ${name},
It's time to take your medication. I understand that you're busy. But don't forget that health is wealth!
 - xoxo Drug Bot`

const emailMessageHTML = `
 <table
  style='background-color: #d5d5d5;'
  border='0'
  width='100%'
  cellspacing='0'
>
  <tbody>
    <tr>
      <td>
        <table
          style='font-family: Helvetica,Arial,sans-serif; background-color: #fff; margin-top: 40px; margin-bottom: 40px;'
          border='0'
          width='600'
          cellspacing='0'
          cellpadding='0'
          align='center'
        >
          <tbody>
            <tr>
              <td
                style='padding-top: 40px; padding-right: 40px; padding-bottom: 15px;'
                colspan='2'
              >
                <p style='text-align: right;'>
                  <a href='https://stbensonimoh.com'>
                    <img
                      src='https://stbensonimoh.com/email/logox300.png'
                      alt='Benson Imoh, ST'
                      width='20%'
                      border='0'
                    />
                  </a>
                </p>
              </td>
            </tr>
            <tr>
              <td style='padding-right: 40px; text-align: right;' colspan='2'>
                <span style='font-size: 12pt;'>11th&nbsp;February 2020</span>
              </td>
            </tr>
            <tr>
              <td
                style='color: #000; font-size: 12pt; font-weight: normal; line-height: 15pt; padding: 40px 40px 80px 40px;'
                colspan='2'
                valign='top'
              >
                <p>Dear ${name},</p>
                <p>It's time to take your meds. I thought to remind you.</p>
                <p>I understand that you are busy. But don't forget that health is wealth!</p>
                <p><strong>xoxo</strong></p>
                <p>
                  Drug Bot
                </p>
              </td>
            </tr>
            <tr>
              <td
                style='border-top: 5px solid #000000; height: 10px; font-size: 7pt;'
                colspan='2'
                valign='top'
              >
                <span>&nbsp;</span>
              </td>
            </tr>
            <tr style='text-align: center;'>
              <td id='s1' style='padding-left: 20px;' valign='top'>
                <span style='text-align: center; color: #333; font-size: 12pt;'>
                  <strong>
                    Benson Imoh,
                    <span style='font-variant: small-caps;'>st</span>
                  </strong>
                </span>
                <span style='color: #cccccc; font-size: x-large;'>
                  &nbsp;|&nbsp;
                </span>
                <span style='text-align: left; color: #333; font-size: 11pt; font-weight: normal;'>
                  Experience Designer
                </span>
              </td>
            </tr>
            <tr style='text-align: center; padding-left: 20px; padding-right: 20px; padding-bottom: 0;'>
              <td colspan='2' valign='top'>
                <span style='color: #333; font-size: 8pt; font-weight: normal; line-height: 17pt;'>
                  <span style='font-size: 12pt;'>www.stbensonimoh.com</span>
                  <br />
                  6, Alhaji Bankole Crescent, Ikeja, Lagos - Nigeria
                  <br />
                  tel: +2348087719510 &nbsp;|&nbsp; mobile: +2348054610438
                  <br />
                  <strong>email:&nbsp;</strong>benson@stbensonimoh.com
                  &nbsp;|&nbsp; <strong>www.stbensonimoh.com</strong>
                </span>
                <p>
                  <a href='https://twitter.com/stbensonimoh'>
                    <img
                      src='https://s3.amazonaws.com/rkjha/signature-maker/icons/twitter_circle_color-20.png'
                      alt='Twitter logo'
                      width='20px'
                      height='20px'
                    />
                  </a>
                  <a href='https://facebook.com/stbensonimoh'>
                    <img
                      src='https://s3.amazonaws.com/rkjha/signature-maker/icons/facebook_circle_color-20.png'
                      alt='Facebook logo'
                      width='20px'
                      height='20px'
                    />
                  </a>
                  <a href='https://linkedin.com/in/stbensonimoh'>
                    <img
                      src='https://s3.amazonaws.com/rkjha/signature-maker/icons/linkedin_circle_color-20.png'
                      alt='LinkedIn logo'
                      width='20px'
                      height='20px'
                    />
                  </a>
                  <a href='https://instagram.com/stbensonimoh'>
                    <img
                      src='https://s3.amazonaws.com/rkjha/signature-maker/icons/instagram_circle_color-20.png'
                      alt='Instagram logo'
                      width='20px'
                      height='20px'
                    />
                  </a>
                  <a href='http://www.youtube.com/c/Stbensonimoh'>
                    <img
                      src='https://s3.amazonaws.com/rkjha/signature-maker/icons/youtube_circle_color-20.png'
                      alt='Youtube logo'
                      width='20px'
                      height='20px'
                    />
                  </a>
                </p>
              </td>
            </tr>
            <tr>
              <td
                id='s3'
                style='padding-left: 20px; padding-right: 20px;'
                colspan='2'
                valign='bottom'
              >
                <p style='font-family: Helvetica, sans-serif; text-align: center; font-size: 12px; line-height: 21px; color: #333;'>
                  <span style='margin-left: 4px;'>
                    <span style='opacity: 0.4; color: #333; font-size: 9px;'>
                      Disclaimer: This message and any files transmitted with it
                      are confidential and privileged. If you have received it
                      in error, please notify the sender by return e-mail and
                      delete this message from your system. If you are not the
                      intended recipient you are hereby notified that any
                      dissemination, copy or disclosure of this e-mail is
                      strictly prohibited.&nbsp;This email is for negotiation
                      purposes only and does not create a binding contract.
                    </span>
                  </span>
                </p>
              </td>
            </tr>
            <tr>
              <td
                style='border-bottom: 5px solid #FF2A7F; height: 5px; font-size: 7pt;'
                colspan='2'
                valign='top'
              >
                &nbsp;
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
 `

const sendEmail = async () => {
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD // generated ethereal password
    }
  })

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Drug Bot" <benson@stbensonimoh.com>', // sender address
    to:
      'june.bankie@gmail.com, johnkellylive@gmail.com, bensonanyanime@gmail.com', // list of receivers
    subject: `Hey ${name}! Oya time to take ya melecine`, // Subject line
    text: emailMessageText, // plain text body
    html: emailMessageHTML, // html body
    dsn: {
      id: 'some random message specific id',
      return: 'headers',
      notify: 'success',
      recipient: 'benxenon@gmail.com'
    }
  })

  console.log('Message sent: %s', info.messageId)
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}

const SMSFrom = 'Drug Bot'

const sendSMS = () => {
  fetch(
    `https://www.bulksmsnigeria.com/api/v1/sms/create?api_token=${process.env.API}&from=${SMSFrom}&to=${phone}&body=${smsMessage}&dnd=2`
  )
    .then(res => res.json())
    .then(body => console.log(body))
    .catch(err => console.log(err))
}

// sendEmail().catch(console.error)
sendSMS()
