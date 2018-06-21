import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends Component {
  render() {
    return (
      <header class="sticky-banner">
      <div class="header-top">
			<div class="container">
				<div class="row">
					<div class="col-md-12 col-sm-12 text-right fh5co-social">
						<a href="#" class="grow"><i class="icon-facebook2"></i></a>
						<a href="#" class="grow"><i class="icon-twitter2"></i></a>
						<a href="#" class="grow"><i class="icon-instagram2"></i></a>
						<a href="#" class="text-right"><strong>Brand Name |</strong></a>
						<a href="#" class="text-right">Log Out</a>
					</div>
				</div>
			</div>
		</div>
		<div class="container">
				<div class="nav-header">
					<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle dark"><i></i></a>
					<h1 id="fh5co-logo"><a href="#">LOGO</a></h1>
								<button type="button" class="btn btn-edit btn-primary pull-right"><span class="glyphicon glyphicon-edit"></span> Edit campaign</button>
				</div>
			</div>
      </header>
    )
  }
}
export default NavBar;