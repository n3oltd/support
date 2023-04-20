import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = "https://ltd.us7.list-manage.com/subscribe/post?u=a7147256c6d56d59986d58bb6&id=8ca0748349";

const SimpleForm = () => <MailchimpSubscribe url={url}/>

export default function MailchimpSignUp(): JSX.Element {
  return (
    <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <div>
        <SimpleForm onSubmitted={formData => subscribe(formData)} />
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
        {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
      </div>
    )}
  />
  );
}
