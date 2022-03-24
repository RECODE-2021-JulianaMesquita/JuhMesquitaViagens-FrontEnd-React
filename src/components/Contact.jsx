import { Button } from 'bootstrap';
import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form>
              <p className="h5 text-center mb-4">Entre em contato</p>
              <div className="grey-text">
                <input
                  label="Nome"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <input
                  label="E-mail"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <input
                  label="Assunto"
                  icon="tag"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <input
                  type="textarea"
                  rows="2"
                  label="Mensagem"
                  icon="pencil-alt"
                />
              </div>
              <div className="text-center">
                <Button outline color="secondary">
                  Enviar
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;