import React from 'react';
// import PropTypes from 'prop-types';

//import { Button } from './Button';
import './BreadcrumbsHeader.css';

export const BreadcrumbsHeader = () => (
	<div className="sb-show-main sb-main-padded">
		<div className="container">
			<nav aria-label="breadcrumb">
				<ol class="breadcrumb">
					<li class="breadcrumb-item">
						<a href="#">Home</a>
					</li>
					<li class="breadcrumb-item active" aria-current="page">
						Library
					</li>
				</ol>
			</nav>
			<div className="input-group input-group-sm mb-3">
				<input
					type="text"
					class="form-control"
					aria-label="Sizing example input"
					aria-describedby="inputGroup-sizing-sm"
				/>
				<span className="input-group-text  text-primary" id="inputGroup-sizing-sm">
					Search Movies or TV
				</span>
			</div>
		</div>
	</div>
);