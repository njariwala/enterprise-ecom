/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/app-actions.js');
var Cart = require('../components/app-cart.js');
var Catalog = require('../components/app-catalog.js');
var APP =
  React.createClass({
    handleClick:function(){
      AppActions.addItem('this is the item');
    },
    render:function(){
      return <div>
      			<h2>Cart</h2>
      			<Cart/>
      			<h2>Catalog</h2>
      			<Catalog/>
      		</div>
    }
  });
module.exports = APP;