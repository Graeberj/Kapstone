import React from 'react';
import PropTypes from 'prop-types';

import { Favoriteheader } from './Favoriteheader';
import './Favoritepage.css';

export const Favoritepage = () => (
	<div className="container">
		<div className="row align-items-start">
			<div className="col">
				<div className="display-1 text-primary">Movies 🎞️</div>
				<table className="table text-primary">
					<thead>
						<tr>
							<th scope="col">Movie title</th>
							<th scope="col">Thumbs down</th>
							<th scope="col">Thumbs up</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">movie title</th>
							<td>thumbs</td>
							<td>thumbs</td>
						</tr>
						<tr>
							<th scope="row">movie title</th>
							<td>thumbs</td>
							<td>thumbs</td>
						</tr>
						<tr>
							<th scope="row">movie title</th>
							<td>thumbs</td>
              <td>thumbs</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="col">
				<div className="display-1 text-primary">TV 📺</div>
				<table className="table text-primary">
					<thead>
						<tr>
            <th scope="col text-primary">TV title</th>
							<th scope="col">Thumbs down</th>
							<th scope="col">Thumbs up</th>
						</tr>
					</thead>
					<tbody>
						<tr>
              <th scope="row">TV title</th>
							<td>thumbs</td>
							<td>thumbs</td>
						</tr>
						<tr>
              <th scope="row">TV title</th>
							<td>thumbs</td>
							<td>thumbs</td>
						</tr>
						<tr>
              <th scope="row">TV title</th>
							<td>thumbs</td>
              <td>thumbs</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
);
