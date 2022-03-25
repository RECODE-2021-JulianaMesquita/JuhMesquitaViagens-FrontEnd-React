import React from 'react';

export const Contact = () => {
  return (
    <div className="container">
      <div className="text-center font-weight-bold">
        <h1>DEIXE NOS UMA MENSAGEM</h1>
      </div>
      <form>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input type="text" name="name" className="form-control" placeholder="Digite seu nome" value="" />
            </div>
            <div className="form-group">
              <input type="text" name="email" className="form-control" placeholder="Digite seu E-mail" value="" />
            </div>
            <div className="form-group">
              <input type="text" name="phone" className="form-control" placeholder="Digite seu número de telefone" value="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <textarea name="message" className="form-control" placeholder="Mensagem" style={{ width: "100%", height: "115px" }}></textarea>
            </div>
          </div>
          <br /><br /><br /><br /><br />
          <div className="col-md-12">
            <div className="form-group">
              <button className="btn btn-primary btn-lg btn-bloc">Enviar</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}