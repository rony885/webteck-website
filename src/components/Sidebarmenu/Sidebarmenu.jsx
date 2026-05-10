import React from "react";
import { Link } from "react-router-dom";

const Sidebarmenu = () => {
  return (
    <div className="sidemenu-wrapper">
      <div className="sidemenu-content">
        <button className="closeButton sideMenuCls">
          <i className="far fa-times"></i>
        </button>
        <div className="widget woocommerce widget_shopping_cart">
          <h3 className="widget_title">Shopping cart</h3>
          <div className="widget_shopping_cart_content">
            <ul className="woocommerce-mini-cart cart_list product_list_widget">
              <li className="woocommerce-mini-cart-item mini_cart_item">
                <Link to="#" className="remove remove_from_cart_button">
                  <i className="far fa-times"></i>
                </Link>
                <Link to="#">
                  <img
                    src="/assets/img/product/product_thumb_1_1.jpg"
                    alt="Cart Imagee"
                  />
                  Gaming Computer
                </Link>
                <span className="quantity">
                  1 ×
                  <span className="woocommerce-Price-amount amount">
                    <span className="woocommerce-Price-currencySymbol">$</span>
                    940.00
                  </span>
                </span>
              </li>
              <li className="woocommerce-mini-cart-item mini_cart_item">
                <Link to="#" className="remove remove_from_cart_button">
                  <i className="far fa-times"></i>
                </Link>
                <Link to="#">
                  <img
                    src="/assets/img/product/product_thumb_1_2.jpg"
                    alt="Cart Imagee"
                  />
                  Smartphone Vivo V9
                </Link>
                <span className="quantity">
                  1 ×
                  <span className="woocommerce-Price-amount amount">
                    <span className="woocommerce-Price-currencySymbol">$</span>
                    899.00
                  </span>
                </span>
              </li>
              <li className="woocommerce-mini-cart-item mini_cart_item">
                <Link to="#" className="remove remove_from_cart_button">
                  <i className="far fa-times"></i>
                </Link>
                <Link to="#">
                  <img
                    src="assets/img/product/product_thumb_1_3.jpg"
                    alt="Cart Imagee"
                  />
                  SanDisk Flash Drive
                </Link>
                <span className="quantity">
                  1 ×
                  <span className="woocommerce-Price-amount amount">
                    <span className="woocommerce-Price-currencySymbol">$</span>
                    756.00
                  </span>
                </span>
              </li>
              <li className="woocommerce-mini-cart-item mini_cart_item">
                <Link to="#" className="remove remove_from_cart_button">
                  <i className="far fa-times"></i>
                </Link>
                <Link to="#">
                  <img
                    src="assets/img/product/product_thumb_1_4.jpg"
                    alt="Cart Imagee"
                  />
                  Smart Power Bank
                </Link>
                <span className="quantity">
                  1 ×
                  <span className="woocommerce-Price-amount amount">
                    <span className="woocommerce-Price-currencySymbol">$</span>
                    723.00
                  </span>
                </span>
              </li>
              <li className="woocommerce-mini-cart-item mini_cart_item">
                <Link to="#" className="remove remove_from_cart_button">
                  <i className="far fa-times"></i>
                </Link>
                <Link to="#">
                  <img
                    src="assets/img/product/product_thumb_1_5.jpg"
                    alt="Cart Imagee"
                  />
                  Apple Smartwatch
                </Link>
                <span className="quantity">
                  1 ×
                  <span className="woocommerce-Price-amount amount">
                    <span className="woocommerce-Price-currencySymbol">$</span>
                    1080.00
                  </span>
                </span>
              </li>
            </ul>
            <p className="woocommerce-mini-cart__total total">
              <strong>Subtotal:</strong>
              <span className="woocommerce-Price-amount amount">
                <span className="woocommerce-Price-currencySymbol">$</span>
                4398.00
              </span>
            </p>
            <p className="woocommerce-mini-cart__buttons buttons btn-wrap">
              <Link to="/cart" className="th-btn wc-forward">
                View cart
              </Link>
              <Link to="/checkout" className="th-btn checkout wc-forward">
                Checkout
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebarmenu;
