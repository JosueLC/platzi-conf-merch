import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Information.css';

function Information() {
    return (
        <div className="Information">
            <div className="Information-content">
                <div className="Information-head">
                    <h2>Información de contacto:</h2>
                </div>
                <div className="Information-form">
                    <form action="">
                        <input type="text" placeholder="Nombre completo" name="name" />
                        <input type="email" placeholder="Correo electrónico" name="email" />
                        <input type="text" placeholder="Dirección" name="address" />
                        <input type="text" placeholder="Dirección 2" name="address2" />
                        <input type="text" placeholder="Ciudad" name="city" />
                        <input type="text" placeholder="Pais" name="country" />
                        <input type="text" placeholder="Estado/Depto" name="state" />
                        <input type="text" placeholder="Código Postal" name="zip" />
                        <input type="text" placeholder="Teléfono" name="phone" />
                    </form>
                </div>
                <div className="Information-buttons">
                    <Link to="/checkout">
                        <div className="Information-back">Regresar</div>
                    </Link>
                    <Link to="/checkout/payment">
                        <div className="Information-next">Pagar</div>
                    </Link>
                </div>
            </div>
            <div className="Information-sidebar">
                <h3>Pedido:</h3>
                <div className="Information-item">
                    <div className="Information-element">
                        <h4>Item name</h4>
                        <span>$10</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Information;