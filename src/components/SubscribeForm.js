import React from 'react';

export default class SubscribeForm extends React.Component {
    render() {
        return (
            <form name="subscribeForm" method="POST" netlify-honeypot="bot-field" data-netlify="true" id="subscribe-form"
              class="subscribe-form">
              <div class="screen-reader-text">
                <label>Don't fill this out if you're human: <input name="bot-field" /></label>
              </div>
              <div class="form-row">
                <label>
                  <span class="screen-reader-text">Email address</span>
                  <input class="subscribe-email" type="email" name="email" placeholder="Enter Email Address..."/>
                </label>
              </div>
              <input type="hidden" name="form-name" value="subscribeForm" />
              <button class="button" type="submit">Subscribe</button>
            </form>
        );
    }
}
