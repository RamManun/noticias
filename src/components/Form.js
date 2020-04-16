import React, { Component } from 'react';

class Form extends Component {

    categoriaRef = React.createRef();

    handleSubmit = (e) => {
        e.preventDefault();

        // enviar por props
        this.props.consultarNoticias(this.categoriaRef.current.value);
    }

    render() { 
        return ( 
            <div className="buscador row">
                <div className="col s12 m8 offset-m2">
                    <form onSubmit={this.handleSubmit}>
                        <h2>Noticias por categoria</h2>
                        <div className="input-fiel col s12 m4">
                            <select ref={this.categoriaRef}>
                                <option value="general" defaultValue>General</option>
                                <option value="business">Negocios</option>
                                <option value="entertainment">Entretenimiento</option>
                                <option value="health">Salud</option>
                                <option value="science">Ciencia</option>
                                <option value="sports">Deportes</option>
                                <option value="technology">Tecnologia</option>
                            </select>
                        </div>
                        <div className="input-field col s12 m4 enviar">
                            <input type="submit" className="btn amber darken-2" value="Buscar" />
                        </div>
                    </form>
                </div>
            </div>
         );
    }
}
 
export default Form;